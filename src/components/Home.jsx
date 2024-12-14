import React from "react";

const MenaxhimiKonferencave = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 shadow-md">
        <nav className="flex justify-between items-center px-8 py-6 text-white">
          <div className="text-3xl font-extrabold">Menaxhimi i Konferencave</div>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="#" className="hover:text-teal-300 transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="about-us" className="hover:text-teal-300 transition duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="workshops-us" className="hover:text-teal-300 transition duration-200">
                Workshops
              </a>
            </li>
            <li>
              <a href="event-highlights-us" className="hover:text-teal-300 transition duration-200">
                Event Highlights
              </a>
            </li>
            <li>
              <a href="contact-us" className="hover:text-teal-300 transition duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-center text-white py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Mirësevini në Menaxhimin e Konferencave
          </h1>
          <p className="text-xl mb-8">
            Platforma jonë është dizajnuar për të përmbushur nevojat e çdo organizatori të eventeve.
          </p>
          <a
            href="/menu"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Fillo Tani
          </a>
        </div>
      </section>

           {/* Features Section */}
           <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Veçoritë</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="gallery/photo_9.jpg"
                alt="Planifikimi i Konferencave"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Konferenca e Ambasadorve
              </h3>
              <p className="text-gray-600">
              Konferenca e Ambasadorëve është një ngjarje prestigjioze që mbledh diplomatë dhe liderë ndërkombëtarë për të diskutuar çështje kyçe të politikës globale, marrëdhënieve ndërkombëtare dhe sigurisë globale. Pjesëmarrësit do të kenë mundësinë të diskutojnë mbi zhvillimet aktuale, të ndajnë ide dhe të krijojnë mundësi bashkëpunimi për zgjidhje të përbashkëta.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="gallery/photo_2.jpg"
                alt="Pjesëmarrësit"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Konferenca ne Berlin
              </h3>
              <p className="text-gray-600">
              Konferenca Ndërkombëtare e Inovacionit në Berlin bashkon liderë të industrisë, studiues dhe profesionistë për të diskutuar zhvillimet më të fundit në fushën e teknologjisë dhe biznesit. Ky event ofron mundësi për shkëmbim idesh dhe krijimin e partneriteteve ndërkombëtare, duke përfshirë prezantime të njohura, punëtori dhe diskutime interaktive.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="gallery/photo_3.jpg"
                alt="Përditësime në Kohë Reale"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Konferenca ne Londer
              </h3>
              <p className="text-gray-600">
              Konferenca Ndërkombëtare e Teknologjisë në Londër mbledh ekspertë, profesionistë dhe udhëheqës të industrisë nga e gjithë bota për të diskutuar tendencat më të fundit dhe inovacionet në fushën e teknologjisë. Ky event ofron mundësi për ndërlidhje, bashkëpunim dhe zhvillimin e ideve të reja, duke përfshirë sesione interaktive, punëtori dhe prezantime të teknologjive më të avancuara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section with More Images and Descriptions */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Më Shumë Foto dhe Sqarime</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="gallery/photo_4.jpg"
                alt="Moment 1"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Momenti i Përsosur</h3>
              <p className="text-gray-600">
                Shikoni momentet më të bukura të konferencave që kanë ndodhur deri tani, duke theksuar interaktivitetin dhe angazhimin e pjesëmarrësve.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="gallery/photo_5.jpg"
                alt="Moment 2"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pjesëmarrës Aktiv</h3>
              <p className="text-gray-600">
                Pjesëmarrësit që kontribuojnë dhe angazhohen me aktivitete gjatë konferencave janë shpesh heronjtë e ngjarjeve, duke sjellë ide të reja dhe diskutime.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <img
                src="gallery/photo_5.jpg"
                alt="Moment 2"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pjesëmarrës Aktiv</h3>
              <p className="text-gray-600">
                Pjesëmarrësit që kontribuojnë dhe angazhohen me aktivitete gjatë konferencave janë shpesh heronjtë e ngjarjeve, duke sjellë ide të reja dhe diskutime.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="gallery/photo_6.jpg"
                alt="Moment 3"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Konferenca në Veprim</h3>
              <p className="text-gray-600">
                Momente të kapura gjatë ngjarjes që tregojnë atmosferën dhe energjinë e konferencës. Shikoni si njerëzit bashkohen për të ndarë njohuri dhe eksperienca.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="gallery/photo_7.jpg"
                alt="Moment 4"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Qëndrim në Grup</h3>
              <p className="text-gray-600">
                Momente ku grupe të ndryshme diskutojnë dhe planifikojnë veprime të ardhshme. Këto ndërveprime janë thelbësore për suksesin e eventeve.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <img
                src="gallery/photo_8.jpg"
                alt="Moment 5"
                className="rounded-xl mb-6 transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Kohë Pushimi dhe Rrjetëzim</h3>
              <p className="text-gray-600">
                Pjesëmarrësit mund të shijojnë pushime të shkurtra për të ndërlidhur dhe shkëmbyer ide me kolegët, duke përmirësuar mundësitë e rrjetëzimit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with More Photos */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Momentet e Konferencave
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Shikoni disa nga momentet më të mira të kapura nga konferencat.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          <img
            src="gallery/photo_4.jpg"
            alt="Moment 1"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_1.jpg"
            alt="Moment 2"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_6.jpg"
            alt="Moment 3"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_4.jpg"
            alt="Moment 4"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_8.jpg"
            alt="Moment 5"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_5.jpg"
            alt="Moment 6"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_10.jpg"
            alt="Moment 7"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_9.jpg"
            alt="Moment 8"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_11.jpg"
            alt="Moment 9"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_12.jpg"
            alt="Moment 10"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_13.jpg"
            alt="Moment 11"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_14.jpg"
            alt="Moment 12"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_15.jpg"
            alt="Moment 13"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_16.jpg"
            alt="Moment 14"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_17.jpg"
            alt="Moment 15"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="gallery/photo_18.jpg"
            alt="Moment 16"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        &copy; 2024 Menaxhimi i Konferencave. Të gjitha të drejtat të rezervuara.
      </footer>
    </div>
  );
};

export default MenaxhimiKonferencave;