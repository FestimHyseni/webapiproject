import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

const Menu = ({ itemId }) => {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const [numClients, setNumClients] = useState(0);

  const [sponsors, setSponsors] = useState([]); // For sponsors
  const [posts, setPosts] = useState([]); // For posts
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [message, setMessage] = useState({}); // Ruaj mesazhet për secilin artikull
  const [numriPjesmarresve, setNumriPjesmarresve] = useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');



  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user', { withCredentials: true });
        setRole(response.data.user.role)
        if (response.status === 200 ) {
            setIsLoggedIn(true);
        }else {throw Error}
      } catch (error) {
        setIsLoggedIn(false); 
        navigate('/login'); 
      }
    };

    checkLoginStatus();
  }, [navigate]);


  useEffect(() => {
    const fetchItemsWithParticipants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/with-participants'); 
        setItems(response.data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchItemsWithParticipants(); 
  }, []); 




  const addItem = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/items',
        { name: newName, description: newDescription },
        { withCredentials: true }
      );

      setItems((prevItems) => [...prevItems, response.data]); // Shto itemin në listë
      setNewName(''); // Pastro inputet
      setNewDescription('');
      setShowAddForm(false); // Mbyll formën
    } catch (error) {
      console.error('Error adding item:', error.response || error.message);
    }
  };




  const handleAddParticipant = async (itemId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/add-participant/${itemId}`,
        {},
        { withCredentials: true }
      );
  
      if (response.status === 200) {
        setMessage(prevMessage => ({ ...prevMessage, [itemId]: 'Je shtuar me sukses si pjesëmarrës!' }));
        window.location.reload();
      }
    } catch (error) {
      // Handle errors
      if (error.response && error.response.status === 404) {
        setMessage(prevMessage => ({ ...prevMessage, [itemId]: 'Konferenca nuk u gjet.' }));
      } else {
        setMessage(prevMessage => ({ ...prevMessage, [itemId]: 'Duhet të kyçeni në llogari për t\'u shtuar si pjesëmarrës.' }));
      }
    }
  };



  const startEditing = (id, name, description) => {
    setEditingId(id);
    setEditName(name);
    setEditDescription(description);
  };


  const stopEditing = async () => {
    try {
      if (editingId !== null) {
        await axios.put(`http://localhost:5000/items/${editingId}`, {
          name: editName,
          description: editDescription,
        }, { withCredentials: true });

        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === editingId ? { ...item, name: editName, description: editDescription } : item
          )
        );
      }
    } catch (error) {
      console.error('Error updating item:', error.response || error.message);
    } finally {
      setEditingId(null);
      setEditName('');
      setEditDescription('');
    }
  };


  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`, { withCredentials: true });
  
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error.response?.data?.error || error.message);
      alert(`Gabim: ${error.response?.data?.error || error.message}`);
    }
  };

  

  
  const updateItem = async (id) => {
    try {
      await axios.put(`http://localhost:5000/items/${id}`, { name, description }, { withCredentials: true });
      // navigate('/items');
    } catch (error) {
      console.error('Error updating item:', error.response || error.message);
    }
  };

  return (

    
    <nav className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <ul className="flex flex-col space-y-6"> {/* Flex column for vertical stack */}



        
        {/* Main "Konferencat" link */}
        <li className="flex items-center justify-between px-6 py-3">
  {/* Konferencat */}
  <div className="text-lg font-semibold hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition duration-300">
    Konferencat
  </div>

  {/* Shto Konferencen */}

  {role === 'admin' && (

  <button
          onClick={() => setShowAddForm(!showAddForm)} // Toggle për shfaqjen e formës
          className="text-lg font-semibold text-blue-500 hover:text-blue-700 cursor-pointer"
        >
          Shto Konferencen
        </button>
  )}
</li>

{showAddForm && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
          <input
            type="text"
            placeholder="Emri i Konferencës"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="block mb-2 w-full p-2 text-black rounded-lg border border-gray-300"
          />
          <textarea
            placeholder="Përshkrimi i Konferencës"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="block mb-2 w-full p-2 text-black rounded-lg border border-gray-300"
          ></textarea>
          <button
            onClick={addItem}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Shto
          </button>
        </div>
      )}


{/* Dynamically display the added items with name and description */}
{items.map((item) => (
        <li
          key={item.id}
          className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          {editingId === item.id ? (
            <div>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="block mb-2 p-2 text-black rounded-lg border border-gray-300"
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="block mb-2 p-2 text-black rounded-lg border border-gray-300"
              ></textarea>
              <button
                onClick={stopEditing}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Ruaj
              </button>
            </div>
          ) : (
            <div>
             <Link
                to={`/items/${item.id}`}
                className="block mb-4 hover:bg-blue-500 hover:text-black px-6 py-3 rounded-lg transition duration-300 text-xl font-semibold"
              >
                <span className="block">{item.name}</span>
              </Link>
              <p className="text-sm text-gray-400">{item.description}</p>

              <p>Numri i Pjesmarresve: {item.participantsCount}</p>
              </div>
          )}

          <div className="flex justify-end mt-4 space-x-2">

          <button
                onClick={() => handleAddParticipant(item.id)} // Pass the item.id to the handler
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
>
  Shtohu si pjesëmarrës
</button>
{message[item.id] && (
      <p className="mt-4 text-lg font-semibold text-blue-500">{message[item.id]}</p>
    )}
   {role === 'admin' && (

            <button
              onClick={() => startEditing(item.id, item.name, item.description)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Përditëso
            </button>
             )}
                {role === 'admin' && (

            <button
              onClick={() => deleteItem(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Fshi
            </button>
                )}
          </div>
        </li>
      ))}



      </ul>
    </nav>
  );
};

export default Menu;
