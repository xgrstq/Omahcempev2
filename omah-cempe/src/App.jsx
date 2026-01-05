function App() {
  return (
    <>
      <header className="topbar">
        <h1>Omah Cempe 🐐</h1>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <span className="hero-tag">Halo 👋</span>
            <h2>Peternakan Kambing</h2>
            <p>
              Usaha peternakan yang fokus pada perawatan,
              kesehatan, dan dokumentasi ternak secara transparan.
            </p>

            <div className="hero-actions">
              <button>Lihat Dokumentasi</button>
              <button className="outline">Hubungi Kami</button>
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

      </main>

      <footer>
        <p>© Omah Cempe</p>
      </footer>
    </>
  )
}

export default App
