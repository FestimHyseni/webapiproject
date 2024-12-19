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

        {/* Main Content */}
        <main className="py-10 px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Punëtoritë & Mundësitë e Mësimit
        </h1>
        <p className="text-lg text-center mb-10">
          Zbuloni një gamë të larmishme të punëtorive tona që janë krijuar për të zgjeruar aftësitë tuaja dhe për të nxitur bashkëpunimin.
        </p>

        {/* Workshop Sections */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_1.jpg"
                alt="Workshop 1"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Bazat e Mendimit Kreativ</h2>
              <p className="text-gray-700 mb-4">
                Njihuni me konceptet bazë të mendimit kreativ në këtë sesion ndërveprues. Ky është një hap i parë i rëndësishëm për të eksploruar metoda inovative.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_2.jpg"
                alt="Workshop 2"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Kodimi i Avancuar</h2>
              <p className="text-gray-700 mb-4">
                Zbuloni teknikat e avancuara të kodimit me ushtrime praktike dhe shembuj të jetës reale. Perfeksiononi aftësitë tuaja me ekspertë të industrisë.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_13.jpg"
                alt="Workshop 3"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Të Folurit në Publik</h2>
              <p className="text-gray-700 mb-4">
                Përmirësoni aftësitë tuaja të prezantimit dhe të folurit në publik me udhëzime profesionale dhe praktika të personalizuara.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_3.jpg"
                alt="Workshop 4"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Menaxhimi i Projekteve</h2>
              <p className="text-gray-700 mb-4">
                Mësoni teknikat më të mira për planifikimin, organizimin dhe ekzekutimin e projekteve komplekse me burime të kufizuara.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_4.jpg"
                alt="Workshop 5"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Shkathtësitë e Ekipit</h2>
              <p className="text-gray-700 mb-4">
                Zhvilloni strategji për të ndërtuar dhe drejtuar ekipe të suksesshme duke përdorur teknika moderne të motivimit dhe komunikimit.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_5.jpg"
                alt="Workshop 6"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Analiza e Të Dhënave</h2>
              <p className="text-gray-700 mb-4">
                Mësoni se si të analizoni dhe interpretoni të dhënat për të marrë vendime strategjike duke përdorur mjete dhe teknika moderne.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-200 py-10 px-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Çfarë Thonë Pjesëmarrësit</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "Një përvojë fantastike! Ekipi ishte shumë profesional dhe përmbajtja shumë e dobishme."
              </p>
              <div className="text-right text-blue-600 font-semibold">- Anisa H.</div>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "Punëtoritë më ndihmuan të zhvilloj aftësitë e mia në mënyrë praktike dhe efektive."
              </p>
              <div className="text-right text-blue-600 font-semibold">- Blerim K.</div>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700 italic mb-4">
                "Një mundësi e shkëlqyer për rrjetëzim dhe zhvillim profesional."
              </p>
              <div className="text-right text-blue-600 font-semibold">- Dorina S.</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="text-center">&copy; 2025 Menaxhimi i Konferencave. Të gjitha të drejtat janë të rezervuara.</div>
      </footer>
    </div>
  );
};

export default WorkshopsUS;
