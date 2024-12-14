import React from "react";
import { Link } from "react-router-dom"; // Use Link for routing

const WorkshopsUS = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 shadow-md">
        <nav className="flex justify-between items-center px-8 py-6 text-white">
          <div className="text-3xl font-extrabold">Menaxhimi i Konferencave</div>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-teal-300 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-teal-300 transition duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/workshops-us" className="hover:text-teal-300 transition duration-200">
                Workshops
              </Link>
            </li>
            <li>
              <Link to="/event-highlights-us" className="hover:text-teal-300 transition duration-200">
                Event Highlights
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-teal-300 transition duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center text-white py-32 bg-cover bg-center" style={{ backgroundImage: "url('workshop-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Bëhuni Pjesë e Workshopeve tona
          </h1>
          <p className="text-xl mb-8">
            Eksploroni mundësitë për të mësuar dhe zhvilluar aftësitë tuaja përmes workshopeve tona interaktive.
          </p>
          <Link
            to="#"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Shiko Workshope
          </Link>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Workshope të Ardhshme</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="workshop1.jpg"
                alt="Workshop 1"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Workshop 1</h3>
              <p className="text-gray-600">
                Ky workshop do të fokusohet në zhvillimin e aftësive të komunikimit dhe lidershipit.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="workshop2.jpg"
                alt="Workshop 2"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Workshop 2</h3>
              <p className="text-gray-600">
                Workshop për teknikat më të reja të menaxhimit të kohës dhe produktivitetit.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="workshop3.jpg"
                alt="Workshop 3"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Workshop 3</h3>
              <p className="text-gray-600">
                Mësoni si të krijoni prezantime të fuqishme dhe ndikim të drejtpërdrejtë.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        &copy; 2024 Menaxhimi i Konferencave. Të gjitha të drejtat të rezervuara.
      </footer>
    </div>
  );
};

export default WorkshopsUS;
