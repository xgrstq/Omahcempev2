import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  XCircle,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Star,
  Quote,
  Home,
  Leaf,
  Briefcase
} 

from "lucide-react";
import "tailwindcss";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeModal, setActiveModal] = useState(null);

  const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};


  useEffect(() => {
  const handleScroll = () => {
    const sections = [
      { id: "services", key: "services" },
      { id: "investment", key: "investment" },
      { id: "reviews", key: "reviews" },
    ];

    const scrollPos = window.scrollY + window.innerHeight / 2;
    let current = "home";

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      if (
        scrollPos >= el.offsetTop &&
        scrollPos < el.offsetTop + el.offsetHeight
      ) {
        current = section.key;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // --- DATA TESTIMONI (DUMMY CHAT) ---
  const testimonials = [
    {
      name: "Pak Haji Imron",
      role: "Pelanggan Aqiqah",
      text: "Alhamdulillah mas, sate sama gule-nya enak. Dagingnya empuk, nggak prengus sama sekali. Tamu-tamu pada nanya pesen dimana. Terimakasih Omah Cempe.",
      rating: 5
    },
    {
      name: "Mas Dimas",
      role: "Mitra Ternak",
      text: "Awalnya ragu mau invest ternak karena nggak bisa ngurus sendiri. Gabung mitra Omah Cempe ternyata transparan banget laporannya. Kemarin pas panen Idul Adha profit lumayan.",
      rating: 5
    },
    {
      name: "Bu Sri Wahyuni",
      role: "Pembeli Qurban",
      text: "Kambingnya sehat-sehat, gemuk. Diantar tepat waktu pas hari H. Mas-mas pengirimnya juga ramah dan amanah. Tahun depan InsyaAllah pesan sini lagi.",
      rating: 4
    }
  ];

  // --- DATA LAYANAN ---
  const services = [
    { 
      id: "aqiqah",
      title: "Kambing Aqiqah", 
      desc: "Layanan aqiqah praktis. Gratis biaya potong & antar area Kediri.",
      priceStart: "Mulai Rp 1.8jt",
      img: "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?q=80&w=800",
      details: [
        { type: "Paket Hemat (Betina)", price: "Rp 1.800.000", menu: "50 Tusuk Sate + 20 Porsi Gule" },
        { type: "Paket A (Jantan)", price: "Rp 2.500.000", menu: "200 Tusuk Sate + 60 Porsi Gule" },
        { type: "Paket B (Jantan)", price: "Rp 3.000.000", menu: "250 Tusuk Sate + 80 Porsi Gule" },
        { type: "Paket C (Jantan)", price: "Rp 3.500.000", menu: "350 Tusuk Sate + 100 Porsi Gule" },
      ]
    },
    { 
      id: "qurban",
      title: "Hewan Qurban", 
      desc: "Sedia Kambing & Domba jantan poel, sehat, dan cukup umur.", 
      priceStart: "Mulai Rp 2.5jt",
      img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=800",
      details: [
        { type: "Tipe Ekonomi", price: "Rp 2.500.000", menu: "Bobot ± 25-28 kg" },
        { type: "Tipe Standar", price: "Rp 3.200.000", menu: "Bobot ± 29-34 kg" },
        { type: "Tipe Premium", price: "Rp 4.000.000", menu: "Bobot ± 35-40 kg" },
      ]
    },
    { 
      id: "bibit",
      title: "Bibit Breeding", 
      desc: "Cempe lepas sapih genetik unggul (PE, Jawa Randu, Boer).", 
      priceStart: "Mulai Rp 850rb",
      img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800",
      details: [
        { type: "Cempe Jantan", price: "Rp 1.200.000", menu: "Usia 3-4 Bulan" },
        { type: "Cempe Betina", price: "Rp 850.000", menu: "Usia 3-4 Bulan" },
        { type: "Dara Siap Kawin", price: "Rp 1.500.000", menu: "Usia 8 Bulan Up" },
      ]
    },
    { 
      id: "ternak",
      title: "Manajemen Kandang", 
      desc: "Konsultasi pembuatan kandang modern & pakan fermentasi.", 
      priceStart: "Konsultasi Gratis",
      img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800",
      details: [
        { type: "Desain Kandang", price: "Call", menu: "Gambar teknik & RAB Kandang" },
        { type: "Pelatihan Pakan", price: "Gratis", menu: "Khusus Mitra Ternak" },
      ]
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#f8f9fa] overflow-x-hidden antialiased pb-24 md:pb-0">

      {/* --- MOBILE STATIC BRAND --- */}
<div className="md:hidden absolute top-4 left-4 z-50">
  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm text-lg font-extrabold text-[#1a2e1a]">
    Omah Cempe
  </div>
</div>  

      
     {/* --- NAVBAR DESKTOP --- */}
<nav
  className="hidden md:block fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[99%] max-w-6xl bg-white/95 shadow-md py-4 rounded-[1rem]">

  <div className="container mx-auto px-6 flex justify-between items-center max-w-6xl">
    <div className="text-2xl font-extrabold text-[#1a2e1a] tracking-tight">
      Omah Cempe
    </div>

    <div className="flex gap-8 items-center font-semibold text-sm text-gray-600">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-[#102a10] transition"
      >
        Home
      </button>

      <button onClick={() => scrollTo("services")} className="hover:text-[#102a10] transition">
        Layanan
      </button>

      <button onClick={() => scrollTo("investment")} className="hover:text-[#102a10] transition">
        Investasi
      </button>

      <button onClick={() => scrollTo("reviews")} className="hover:text-[#102a10] transition">
        Kata Mereka
      </button>

      <button
        onClick={() => window.open("https://wa.me/6282245226901", "_blank")}
        className="bg-[#1a2e1a] text-white px-6 py-2.5 rounded-full hover:bg-[#2f4f2f] transition flex items-center gap-2 shadow-lg"
      >
        <Phone size={16} /> Konsultasi
      </button>
    </div>
  </div>
</nav>


{/* --- MOBILE BOTTOM NAVBAR --- */}
<div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
  <div className="bg-white/95 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={activeSection === "home" ? "text-[#1a2e1a]" : "text-gray-400"}
    >
      <Home size={24} />
    </button>

    <button
      onClick={() => scrollTo("services")}
      className={activeSection === "services" ? "text-[#1a2e1a]" : "text-gray-400"}
    >
      <Leaf size={24} />
    </button>

    <button
      onClick={() => scrollTo("investment")}
      className={activeSection === "investment" ? "text-[#1a2e1a]" : "text-gray-400"}
    >
      <Briefcase size={24} />
    </button>

    <button
      onClick={() => scrollTo("reviews")}
      className={activeSection === "reviews" ? "text-[#1a2e1a]" : "text-gray-400"}
    >
      <Star size={24} />
    </button>

    <button
      onClick={() =>
        window.open("https://wa.me/6282245226901", "_blank")
      }
      className="bg-[#1a2e1a] text-white p-3 rounded-full"
    >
      <Phone size={22} />
    </button>
  </div>
</div>


      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          
          <div className="animate-fade-in-up z-10 order-2 md:order-1 text-center md:text-left">
            <span className="bg-[#1a2e1a]/10 text-[#1a2e1a] px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px] mb-6 inline-block">
              Est. 2021 • Kediri, Indonesia
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-[#1a2e1a] tracking-tight">
              Solusi Ternak & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a2e1a] to-[#4a8a4a]">Aqiqah Syari.</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              Menyediakan kambing berkualitas untuk Aqiqah, Qurban, dan Bibit Ternak. Perawatan profesional, harga transparan, dan amanah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => scrollTo('services')} className="bg-[#1a2e1a] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2">
                Lihat Pricelist <ArrowRight size={18}/>
              </button>
              <button onClick={() => scrollTo('investment')} className="bg-white border border-gray-200 text-[#1a2e1a] px-8 py-4 rounded-full font-bold hover:border-[#1a2e1a] transition flex items-center justify-center">
                Peluang Investasi
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap justify-center md:justify-start gap-6 text-sm font-semibold text-gray-500">
                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#d4a373]"/> Amanah</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#d4a373]"/> Sehat</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#d4a373]"/> Gratis Ongkir</div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-green-200 rounded-full blur-[100px] -z-10 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1000&auto=format&fit=crop" 
              alt="Kambing Omah Cempe" 
              className="rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition duration-700 object-cover h-[350px] md:h-[500px] w-full"
            />
          </div>
        </div>
      </header>

      {/* --- SERVICES & PRICELIST --- */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-[#d4a373] font-bold uppercase tracking-widest text-xs">Layanan Kami</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-[#1a2e1a]">Pilih Paket Sesuai Kebutuhan</h2>
                <p className="text-gray-500 mt-4 font-medium">Klik tombol detail untuk melihat rincian harga dan spesifikasi.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((item) => (
                    <div key={item.id} className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            {/* BADGE HARGA (Solusi No. 2) */}
                            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-[#1a2e1a] shadow-sm">
                              {item.priceStart}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-[#1a2e1a] mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">{item.desc}</p>
                            <button 
                              onClick={() => setActiveModal(item)}
                              className="w-full mt-auto bg-gray-50 text-[#1a2e1a] hover:bg-[#1a2e1a] hover:text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                            >
                                Detail Harga <ChevronRight size={16}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- INVESTMENT SECTION --- */}
      <section id="investment" className="py-24 px-6 bg-[#1a2e1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
               <span className="text-[#d4a373] font-bold uppercase tracking-widest text-xs mb-2 block">Peluang Kerjasama</span>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Investasi Ternak <br/> <span className="text-[#d4a373]">Sistem Bagi Hasil.</span></h2>
               <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium">
                 Punya modal tapi tidak punya lahan atau waktu untuk merawat? 
                 Bergabunglah menjadi <strong>Mitra Ternak Omah Cempe</strong>. 
               </p>
               
               <div className="grid gap-6">
                 {[
                   {icon: <DollarSign/>, title: "Sistem Transparan", desc: "Laporan berkala via WhatsApp & Video."},
                   {icon: <TrendingUp/>, title: "Profit Menjanjikan", desc: "Potensi profit tinggi saat musim Qurban."},
                   {icon: <ShieldCheck/>, title: "Garansi Kematian", desc: "Keamanan modal mitra adalah prioritas."}
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="bg-white/10 p-3 rounded-xl h-fit text-[#d4a373]">{item.icon}</div>
                     <div>
                       <h4 className="font-bold text-lg">{item.title}</h4>
                       <p className="text-sm text-gray-400">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>

               <button 
                  onClick={() => window.open('https://wa.me/6282245226901?text=Halo%20Omah%20Cempe,%20saya%20tertarik%20info%20kemitraan%20ternak.', '_blank')}
                  className="mt-10 bg-[#d4a373] text-black font-bold px-8 py-4 rounded-full hover:bg-white transition flex items-center gap-2"
                >
                 Pelajari Proposal Mitra <ArrowRight size={18}/>
               </button>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative backdrop-blur-sm">
                <div className="absolute -top-6 -right-6 bg-[#d4a373] text-black font-bold px-6 py-4 rounded-2xl shadow-xl">
                  Slot Terbatas!
                </div>
                <h3 className="text-xl font-bold mb-6 text-center">Simulasi Kemitraan</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Paket Investasi (5 Ekor)</span>
                    <span className="font-bold">Rp 7.500.000</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Biaya Pakan (6 Bln)</span>
                    <span className="font-bold">Rp 3.000.000</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Estimasi Jual (Idul Adha)</span>
                    <span className="font-bold text-[#d4a373]">Rp 15.000.000</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center mt-6 border border-white/5">
                    <span className="block text-gray-400 text-xs mb-1">Estimasi Bagi Hasil Mitra (50%)</span>
                    <span className="text-2xl font-bold text-[#d4a373]">Rp 2.250.000*</span>
                  </div>
                  <p className="text-center text-[10px] text-gray-500 mt-2">*Hanya ilustrasi. Hasil aktual bergantung pada pasar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (Social Proof / Solusi No. 1) --- */}
      <section id="reviews" className="py-24 px-6 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#d4a373] font-bold uppercase tracking-widest text-xs">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-[#1a2e1a]">Kata Mereka</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
                <Quote className="text-[#d4a373]/20 absolute top-6 right-6" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFC107" className="text-[#FFC107]"/>)}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-[#1a2e1a]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2e1a] text-sm">{t.name}</h4>
                    <span className="text-xs text-[#d4a373] font-bold uppercase">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCATION MAP (Solusi No. 5) --- */}
      <section className="py-10 px-6 bg-white">
        <div className="container mx-auto max-w-6xl bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-3">
             <div className="p-8 md:p-12 flex flex-col justify-center bg-[#1a2e1a] text-white">
                <h3 className="text-2xl font-bold mb-4">Lokasi Kandang</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Silakan berkunjung untuk melihat langsung kondisi hewan ternak dan kebersihan kandang kami.
                </p>
                <div className="flex items-start gap-3 mb-8">
                  <MapPin className="text-[#d4a373] mt-1 shrink-0" />
                  <div>
                    <span className="block font-bold">Dusun Cendonosari, Desa Cendono</span>
                    <span className="text-sm text-gray-400">Kec. Kandat, Kab. Kediri, Jawa Timur</span>
                  </div>
                </div>
                <button 
                  onClick={() => window.open('https://www.google.com/maps/place/Omah+cempe', '_blank')}
                  className="bg-[#d4a373] text-black font-bold py-3 rounded-xl hover:bg-white transition text-center"
                >
                  Buka Google Maps
                </button>
             </div>
             <div className="md:col-span-2 h-[300px] md:h-auto bg-gray-200 relative">
               {/* Embed Map Iframe */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023665.813131137!2d109.98950404400865!3d-7.845536192783511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78f9000c69f163%3A0x729e73d68c8cc646!2sOmah%20cempe!5e0!3m2!1sen!2sid!4v1768587063660!5m2!1sen!2sid" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 grayscale hover:grayscale-0 transition duration-500"
               ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#152415] text-white pt-20 pb-10 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2">Omah Cempe</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Menyediakan hewan ternak berkualitas dengan perawatan terbaik. Amanah, syari, dan profesional.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4a373] transition"><Instagram size={18}/></a>
                        <a href="https://youtube.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d4a373] transition"><Youtube size={18}/></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Navigasi</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><button onClick={() => scrollTo('services')} className="hover:text-[#d4a373] transition">Layanan & Harga</button></li>
                        <li><button onClick={() => scrollTo('investment')} className="hover:text-[#d4a373] transition">Investasi</button></li>
                        <li><button onClick={() => scrollTo('reviews')} className="hover:text-[#d4a373] transition">Testimoni</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Kontak</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-[#d4a373] shrink-0"/>
                            <span>+62 822-4522-6901</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-[#d4a373] font-bold">Jam Buka:</span>
                            <span>07.00 - 20.00 WIB</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="font-bold text-lg mb-2">Butuh Respon Cepat?</h4>
                    <p className="text-gray-400 text-xs mb-4">Admin kami siap membantu 24/7 untuk konsultasi.</p>
                    <button onClick={() => window.open('https://wa.me/6282245226901', '_blank')} className="w-full bg-[#d4a373] text-black font-bold py-3 rounded-xl hover:bg-white transition">
                        Chat WhatsApp
                    </button>
                </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
                <p>&copy; 2026 Omah Cempe Official. All rights reserved.</p>
            </div>
        </div>
      </footer>

      {/* --- MODAL POPUP --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48">
              <img src={activeModal.img} alt={activeModal.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                    <span className="text-[#d4a373] font-bold text-xs uppercase tracking-widest">Detail Paket</span>
                    <h3 className="text-2xl font-bold text-white">{activeModal.title}</h3>
                </div>
              </div>
              <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 bg-black/30 backdrop-blur text-white p-2 rounded-full hover:bg-red-500 transition">
                <X size={20}/>
              </button>
            </div>
            
            <div className="p-6 max-h-[50vh] overflow-y-auto">
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{activeModal.desc}</p>
              <div className="space-y-3">
                {activeModal.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition cursor-default">
                    <div>
                      <div className="font-bold text-[#1a2e1a]">{detail.type}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{detail.menu}</div>
                    </div>
                    <div className="text-[#d4a373] font-bold text-sm bg-[#d4a373]/10 px-3 py-1 rounded-full">{detail.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
              {/* LINK WA DINAMIS (Solusi No. 3) */}
              <button 
                onClick={() => window.open(`https://wa.me/6282245226901?text=Halo%20admin%20Omah%20Cempe,%20saya%20tertarik%20tanya%20paket%20${activeModal.title}`, '_blank')}
                className="w-full bg-[#1a2e1a] text-white font-bold py-3.5 rounded-xl hover:bg-[#2f4f2f] transition flex justify-center items-center gap-2 shadow-lg shadow-[#1a2e1a]/20"
              >
                <Phone size={18}/> Pesan Sekarang via WA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
