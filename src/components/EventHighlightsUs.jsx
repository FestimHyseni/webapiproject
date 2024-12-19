import React from "react";
import { Link } from "react-router-dom";

const EventHighlightsUS = () => {
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
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Highlights e Eventeve Kryesore
        </h1>
        <p className="text-lg text-center mb-10">
          Njihuni me momentet më të rëndësishme nga eventet tona, të cilat kanë shënuar sukses të jashtëzakonshëm në fushat përkatëse.
        </p>

        {/* Highlight Section */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_7.jpg"
                alt="Highlight 1"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Përurimi i Konferencës</h2>
              <p className="text-gray-700">
                Përurimi i eventit me një ceremoni madhështore, ku morën pjesë personalitete të rëndësishme nga fusha të ndryshme.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_8.jpg"
                alt="Highlight 2"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Prezantimi i Teknologjisë së Re</h2>
              <p className="text-gray-700">
                Zbulimi i teknologjive më të fundit që ndihmojnë në zgjidhjen e problemeve komplekse globale.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="gallery/photo_9.jpg"
                alt="Highlight 3"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Diskutimet Panel</h2>
              <p className="text-gray-700">
                Ekspertët ndanë njohuritë e tyre mbi tema aktuale, duke inkurajuar një debat të hapur dhe frymëzues.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-gray-200 py-10 px-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Kalendari i Eventeve</h2>
          <ul className="space-y-6">
            <li className="bg-white p-6 rounded shadow-md flex items-start">
              <img
                src="gallery/photo_16.jpg"
                alt="Mars 2025"
                className="w-24 h-24 object-cover rounded mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Mars 2025</h3>
                <p className="text-gray-700">
                  Konferenca e parë mbi Inteligjencën Artificiale dhe Etikën. Një event që bashkon ekspertë globalë për të diskutuar etikën e teknologjisë.
                </p>
              </div>
            </li>
            <li className="bg-white p-6 rounded shadow-md flex items-start">
              <img
                src="gallery/photo_14.jpg"
                alt="Prill 2025"
                className="w-24 h-24 object-cover rounded mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Prill 2025</h3>
                <p className="text-gray-700">
                  Punëtoria ndërkombëtare mbi Ndërtimin e Ekipeve Globale. Pjesëmarrësit ndajnë eksperienca dhe ndërtojnë aftësi bashkëpunimi.
                </p>
              </div>
            </li>
            <li className="bg-white p-6 rounded shadow-md flex items-start">
              <img
                src="gallery/photo_15.jpg"
                alt="Maj 2025"
                className="w-24 h-24 object-cover rounded mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Maj 2025</h3>
                <p className="text-gray-700">
                  Takimi vjetor i rrjeteve profesionale. Një mundësi për të zgjeruar rrjetin dhe për të mësuar nga liderët e industrisë.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Multimedia Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Galeria Multimediale</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <img src="gallery/photo_10.jpg" alt="Gallery 1" className="rounded shadow-md" />
            <img src="gallery/photo_11.jpg" alt="Gallery 2" className="rounded shadow-md" />
            <img src="gallery/photo_12.jpg" alt="Gallery 3" className="rounded shadow-md" />
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

export default EventHighlightsUS;