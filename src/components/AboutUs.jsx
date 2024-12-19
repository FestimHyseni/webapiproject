import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
     {/* Header */}
    
              
     <header className="bg-blue-600 shadow-md">
  <nav className="flex justify-between items-center px-8 py-6 text-white">
    <div className="text-3xl font-extrabold">Menaxhimi i Konferencave</div>
    <ul className="flex space-x-6 text-lg">
       <Link to="/" id = "home" className="hover:text-teal-300 transition duration-200">
           Home
        </Link>
      <nav> 
        <Link to="/about-us" id="about-us" className="hover:text-teal-300 transition duration-200">
          About Us
        </Link>
      </nav>
      <li>
        <a href="workshops-us" className="hover:text-teal-300 transition duration-200">Workshops</a>
      </li>
      <li>
        <a href="event-highlights-us" className="hover:text-teal-300 transition duration-200">Event Highlights</a>
      </li>
      <nav id="contact-us">
        <Link to="/contact-us" className="hover:text-teal-300 transition duration-200">
          Contact Us
        </Link>
      </nav>
    </ul>
  </nav>
</header>


      {/* Misioni Ynë */}
      <section className="py-16 px-8">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Misioni Ynë</h2>
            <p className="text-lg leading-relaxed">
              Në <span className="font-bold">Menaxhimi i Konferencave</span>, misioni ynë është të fuqizojmë organizatorët e eventeve duke ofruar një platformë të thjeshtë, intuitive dhe efikase për menaxhimin e konferencave.
              Synojmë të përmirësojmë bashkëpunimin, të sigurojmë përvoja të qeta për pjesëmarrësit dhe të kursejmë kohë të vlefshme për organizatorët dhe pjesëmarrësit.
            </p>
          </div>
          <img
            src="gallery/photo_12.jpg"
            alt="Misioni"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Vlerat Tona */}
      <section className="bg-gray-200 py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Vlerat Tona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Inovacioni</h3>
              <p className="text-gray-700">
                Përdorim teknologjinë më të fundit për të ofruar mjetet më të mira për menaxhimin e eventeve.
              </p>
              <img
                src="gallery/photo_13.jpg"
                alt="Innovation"
                className="mt-4 mx-auto rounded-full shadow-lg"
              />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Bashkëpunimi</h3>
              <p className="text-gray-700">
                Mbështesim punën në ekip dhe partneritetet për të krijuar përvoja kuptimplota.
              </p>
              <img
                src="gallery/photo_14.jpg"
                alt="Collaboration"
                className="mt-4 mx-auto rounded-full shadow-lg"
              />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Ekselenca</h3>
              <p className="text-gray-700">
                Përkushtimi ynë ndaj cilësisë siguron që çdo event të jetë një sukses.
              </p>
              <img
                src="gallery/photo_15.jpg"
                alt="Excellence"
                className="mt-4 mx-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historia Jonë */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Historia Jonë</h2>
          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Rruga jonë filloi në vitin 2020 si një projekt i vogël për të ndihmuar organizatorët me menaxhimin e seminareve lokale. Me kalimin e viteve, jemi rritur për të qenë një platformë kryesore e përdorur nga qindra organizata për të menaxhuar konferenca ndërkombëtare, punëtori dhe evente korporative.
          </p>
          <img
            src="gallery/photo_16.jpg"
            alt="History"
            className="w-full rounded-lg shadow-lg mt-8"
          />
        </div>
      </section>

      {/* Ekipa */}
      <section className="bg-gray-200 py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Ekipi Ynë</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="gallery/photo_17.jpg"
                alt="Anëtar i Ekipit"
                className="mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-600">CEO & Themelues</p>
            </div>
            <div className="text-center">
              <img
                src="gallery/photo_20.jpg"
                alt="Anëtar i Ekipit"
                className="mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-gray-600">Udhëheqëse e Zhvillimit</p>
            </div>
            <div className="text-center">
              <img
                src="gallery/photo_19.jpg"
                alt="Anëtar i Ekipit"
                className="mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Sarah Johnson</h3>
              <p className="text-gray-600">Specialiste Eventesh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;