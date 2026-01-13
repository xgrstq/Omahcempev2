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
          <div className="container">
            <div className="hero-text">
              <span className="hero-tag">Hola 👋</span>
              <h2>Peternakan Kambing</h2>
              <p className="text-highlight">
                Usaha peternakan yang fokus pada perawatan dan kesehatan ternak.
              </p>

              <div className="hero-actions">
                <button
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      .scrollIntoView({ behavior: "smooth" })
                  }
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
              <div className="image-placeholder" />
              <img src="/images/" alt="" />
            </div>
          </div>
        </section>

        {/* TENTANG OMAH CEMPE */}
        <section className="about-us">
          <div className="container">
            <h2>Tentang Omah Cempe</h2>
            <p className="text-highlight">
              Omah Cempe adalah usaha peternakan kambing yang dikelola langsung
              oleh keluarga kami. Kami percaya bahwa ternak yang sehat berasal
              dari perawatan yang konsisten dan lingkungan yang terjaga dengan baik.
            </p>

            <p className="text-highlight">
              Kebersihan kandang menjadi rutinitas utama karena lingkungan yang bersih
              sangat berpengaruh pada kenyamanan dan kesehatan kambing.
              Pemberian pakan dilakukan secara teratur dengan nutrisi yang cukup.
            </p>

            <p className="text-highlight">
              Baik kambing yang siap disembelih maupun bibit cempe calon induk
              dan pejantan, semuanya dirawat dengan standar yang sama dan penuh perhatian.
            </p>
          </div>
        </section>

        {/* LAYANAN */}
        <section className="services">
          <div className="container">
            <h2>Layanan</h2>

            <div className="service-grid">
              <div className="service-card">Kambing Aqiqah</div>
              <div className="service-card">Kambing Kurban</div>
              <div className="service-card">Bibit Cempe</div>
              <div className="service-card">Pejantan</div>
              <div className="service-card">Indukan</div>
            </div>
          </div>
        </section>

        {/* DOKUMENTASI */}
        <section id="gallery" className="gallery">
          <div className="container">
            <h2>Dokumentasi</h2>

            <div className="doc-card">
              <h3>Dokumentasi Omah Cempe</h3>

              <p className="text-highlight">
                Dokumentasi kegiatan, perawatan, dan aktivitas peternakan
                Omah Cempe dapat dilihat melalui media sosial kami.
              </p>

              <div className="doc-links">
                <a
                  href="https://instagram.com/omahcempe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <a
                  href="https://youtube.com/@OmahCempene_Galia"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TEMUKAN KAMI */}
        <section className="location">
          <div className="container">
            <h2>Temukan Kami</h2>
            <p className="text-highlight">
              Kunjungi langsung peternakan Omah Cempe dan lihat proses perawatan
              ternak secara langsung.
            </p>

            <div className="location-card">
              <h3>Omah Cempe</h3>
              <p>Klik tombol di bawah ini</p>

              <a
                href="https://maps.app.goo.gl/RfEF1R2QDxif55MA6"
                target="_blank"
                rel="noreferrer"
                className="location-link"
              >
                Lihat di Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© Omah Cempe Berdiri sejak tidak kebagian kursi</p>
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
