require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const sequelize = require('./db');
const Item = require('./models/item');
const User = require('./models/user');
const Post = require('./models/post');
const postRoutes = require('./routes/postRoutes');
const { createItem, getItems, updateItem, deleteItem, getItemsWithParticipantsCount} = require('./controller/itemController');
const { createSponsor, getSponsors, updateSponsor, deleteSponsor, getPjes } = require('./controller/sponsorController');
const { createPost, getPosts , updatePost, deletePost } = require('./controller/postController');
const { sendContactEmail } = require('./controller/nodeKontaktForm')

const app = express()
const db = require('./db');



const Pjesmarresi = require('./models/Pjesmarresi');


// Configure session middleware with secure settings
app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecret', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Configure Helmet  extra security headers
app.use(helmet());

// Configure rate limiting for DDoS protection
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per windowMs
// });
// app.use(limiter);

// Configure body parser and CORS
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  credentials: true // Allow credentials (cookies) to be sent
}));
app.use(bodyParser.json());

// Logging middleware to debug session and user
app.use((req, res, next) => {
  // console.log('Session:', req.session);
  // console.log('User:', req.user);
  next();
});

// Configure passport for local authentication
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return done(null, false, { message: 'Përdoruesi nuk u gjet.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Fjalëkalimi është i gabuar.' });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Middleware to ensure the user is authenticated
const isAuthenticated = (req, res, next) => {
  const token = req.cookies['ubtsecured'];
  if (!token) {

    return res.status(401).json({ error: 'Kërkohet autentifikimi.' });
  }
  jwt.verify(token, process.env.JWT_SECRET || 'supersecret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token i pavlefshëm.' });
    }
    req.user = user;
    next();
  });
};

// Auth route for login
app.post('/login', (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Login i dështuar. Provoni përsëri.' });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET || 'supersecret', {
        expiresIn: '24h'
      });
      res.cookie('ubtsecured', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'strict'
      });
      res.status(200).json({ message: 'Login i suksesshëm', user });
    });
  })(req, res, next);
});

app.post('/add-participant/:itemId', isAuthenticated, async (req, res) => {
  const { itemId } = req.params;
  const userId = req.user.id; // Get the logged-in user ID from the session

  try {
    // Check if the conference exists
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Konferenca nuk u gjet.' });
    }

    // Add participant
    const newParticipant = await Pjesmarresi.create({
      Pjesmarresi: req.user.username,  // Store the username or any other info of the participant
      itemId: itemId,
    });

    res.status(200).json({ message: 'Pjesëmarrësi është shtuar me sukses.', participant: newParticipant });
  } catch (error) {
    console.error('Error adding participant:', error);
    res.status(500).json({ message: 'Ka ndodhur një gabim gjatë shtimit të pjesëmarrësit.' });
  }
});



// Route to get the logged-in user's information
app.get('/user', isAuthenticated, (req, res) => {
  res.json({ user: req.user });
});

app.get('/', (req, res) => {
  res.json('user');
});

// Registration route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  console.log(req.body)
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ username, password: hash, role: 'user' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// app.get('/getUsers', (req, res) => {
//   console.log('Request received for /getUsers');
//   console.log(req.body);

//   const sql = "SELECT COUNT(*) AS count FROM pjesmarresis";

//   sequelize.query(sql, (err, data) => {
//     if (err) {
//       console.error('Database error:', err);
//       return res.status(500).json("Error").end();
//     }
//     if (data.length > 0) {
//       console.log('Data received:', data);
//       return res.status(200).json(data[0]).end();
//     } else {
//       return res.status(204).json("fail").end();
//     }
//   });
// });
// Logout route
app.post('/logout', (req, res) => {
  res.clearCookie('ubtsecured', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'U çkyçët me sukses.' });
  });
});

// app.get('/items-with-participants', async (req, res) => {
//   try {
//     const items = await db.query(`
//       SELECT items.id, items.name, items.description, COUNT(participants.id) AS numClients
//       FROM items
//       LEFT JOIN participants ON items.id = participants.item_id
//       GROUP BY items.id
//     `);
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching data' });
//   }
// });
app.get('/with-participants', getItemsWithParticipantsCount);
app.post('/contact', sendContactEmail);


// CRUD routes for items
app.post('/items', isAuthenticated, createItem);
app.get('/items', isAuthenticated, getItems);
app.put('/items/:id', isAuthenticated, updateItem);
app.delete('/items/:id', isAuthenticated, deleteItem);

// CRUD për sponsorët
app.post('/sponsors', isAuthenticated, createSponsor);
app.get('/sponsors', isAuthenticated, getSponsors);
app.put('/sponsors/:id', isAuthenticated, updateSponsor);
app.delete('/sponsors/:id', isAuthenticated, deleteSponsor);
// app.get('/items-with-participants', getPjes);


app.use('/posts', postRoutes); 

// Initialize server and ensure database and table creation
const initializeDatabase = async () => {
  try {
    await sequelize.sync();
    app.listen(process.env.PORT, () => {
      console.log(`Serveri po punon neë portin ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Gabim gjatë inicializimit të databazës:', error);
  }
};

initializeDatabase();