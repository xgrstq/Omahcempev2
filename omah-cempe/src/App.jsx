import { useState } from "react";

function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <header className="topbar">
        <h1>Omah Cempe</h1>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <span className="hero-tag">Hola 👋</span>
            <h2>Peternakan Kambing</h2>
            <p>
              Usaha peternakan yang fokus pada perawatan,
              kesehatan.
            </p>

            <div className="hero-actions">
              <button
                onClick={() => {
                  document
                    .getElementById("gallery")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Lihat Dokumentasi
              </button>

              <button
                className="outline"
                onClick={() => setOpenContact(true)}
              >
                Hubungi Kami
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              Foto Kambing
            </div>
          </div>
        </section>

        {/* LAYANAN */}
        <section className="services">
          <h2>Layanan</h2>

          <div className="service-grid">
            <div className="service-card">Kambing Aqiqah</div>
            <div className="service-card">Kambing Kurban</div>
            <div className="service-card">Bibit Cempe</div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="gallery">
          <h2>Dokumentasi</h2>

          <div className="gallery-dashboard">
            <div className="gallery-card">Kandang</div>
            <div className="gallery-card">Perawatan</div>
            <div className="gallery-card">Aqiqah</div>
          </div>
        </section>
      </main>

      <footer>
        <p>© Omah Cempe</p>
      </footer>

      {/* CONTACT POPUP */}
      {openContact && (
        <div
          className="contact-overlay"
          onClick={() => setOpenContact(false)}
        >
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="https://wa.me/6282245226901"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/galihadigrh_"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
