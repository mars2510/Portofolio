// Translations module: exports `translations` and `applyTranslations`.
// Keep this file pure (no DOM side-effects); the caller should initialize.
const translations = {
  id: {
    'nav.home': 'Home',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.experience': 'Pengalaman',
    'nav.contact': 'Hubungi',
    'hero.title': 'Teddy Sunanto',
    'hero.subtitle': 'Spesialis Konten Multimedia & Calon Developer',
    'hero.tagline': '9+ tahun pengalaman di e-commerce visual content & editing.\nSaat ini mahasiswa Teknik Informatika semester 6, fokus pada web/mobile development & automation tools.',
    'cta.view': 'Lihat Karya Saya',
    'cta.contact': 'Hubungi Saya',
    'about.title': 'Tentang Saya',
    'about.p1': 'Saya adalah profesional kreatif dan detail-oriented dengan pengalaman lebih dari 9 tahun di industri e-commerce. Portofolio ini mencakup hasil kerja di pengeditan visual, penulisan konten rich, editing video, serta proyek coding (extension, app Android, website).',
    'about.p2': 'Saya suka menggabungkan estetika visual dengan solusi teknis untuk menciptakan pengalaman pengguna yang optimal. Terbuka untuk kolaborasi di bidang content creation atau pengembangan web/mobile.',
    'skills.title': 'Keahlian Utama',
    'projects.title': 'Projects & Showcase',
    'experience.title': 'Pengalaman Kerja',
    'contact.title': 'Hubungi Saya',
    'contact.info': 'Email: teddy.sunanto@gmail.com | LinkedIn: linkedin.com/in/teddy-sunanto | GitHub: github.com/mars2510',
    'collab.title': 'Kolaborasi',
    'collab.p': 'Beberapa mitra & klien yang pernah bekerja bersama saya',
    'nav.collab': 'Kolaborasi',
    'nav.back': 'Kembali',
    'label.tools': 'Tools:',
    'workflow.title': 'Alur Kerja',
    'case.results': 'Hasil & Impact',
    'footer.home': 'Kembali ke Home',
    'showcase.title': 'Showcase & Other Projects',
    'showcase.subtitle': 'Koleksi konten sosial media, reels, dan thumbnail produk yang saya buat untuk mendukung brand dan e-commerce.',
    'editor.title': 'Image Editor Portfolio',
    'editor.subtitle': 'Ribuan gambar produk e-commerce yang saya edit: background removal, retouching, dan optimasi visual.',
    'rich.title': 'Rich Content Showcase',
    'rich.subtitle': 'Koleksi deskripsi produk & artikel e-commerce — lengkap dengan tujuan, tantangan, dan hasil.',
    'proyek.title': 'Proyek Pengembangan',
    'proyek.subtitle': 'Koleksi proyek web, mobile, dan tools automation yang saya bangun.',

    /* Showcase page blocks */
    'showcase.item1': `
      <h2>Feed Sosial Media FAS Fulfillment</h2>
      <p class="category">Instagram Feed</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop</p>
      <p><strong>Sekilas Tentang FAS Fulfillment</strong><br>FAS Fulfillment merupakan perusahaan penyedia layanan operasional untuk membantu bisnis dalam meningkatkan efisiensi dan efektivitasnya. Mereka menawarkan pemeriksaan, penyimpanan, pengemasan, dan pengiriman.</p>
      <p><strong>Penjelasan Karya</strong><br>Konten feed Instagram yang informatif dan visual menarik untuk menarik perhatian klien potensial.</p>
      <div class="case-study"><h4>Tujuan Feed</h4><p>Memberikan informasi solusi kepada klien agar tidak perlu bingung mencari penyedia jasa logistik dan mengajak mereka bergabung.</p></div>
    `,
    'showcase.item2': `
      <h2>Reels Instagram Pensil Biru Studio</h2>
      <p class="category">Instagram Reels</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop, CapCut Pro</p>
      <p><strong>Sekilas Tentang Pensil Biru Studio</strong><br>Pensil Biru Studio adalah production house yang membuat video promosi dan konten multimedia berkualitas.</p>
      <p><strong>Penjelasan Karya</strong><br>Reels pendek yang menampilkan hasil produksi untuk branding dan promosi studio.</p>
      <div class="case-study"><h4>Tujuan Reels</h4><p>Meningkatkan awareness dan potensi kolaborasi melalui konten video singkat dan engaging.</p></div>
    `,
    'showcase.item3': `
      <h2>Video Thumbnail Produk di Blibli.com - NIVEA Body Serum</h2>
      <p class="category">Thumbnail Image & Video Produk</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop, CapCut Pro</p>
      <p><strong>Penjelasan Karya</strong><br>Thumbnail eye-catching untuk video produk yang menonjolkan keunggulan serum tubuh agar meningkatkan klik dan konversi.</p>
      <div class="case-study"><h4>Tujuan</h4><p>Mengomunikasikan manfaat produk dan meningkatkan click-through.</p></div>
    `,
    'showcase.item4': `
      <h2>Video Thumbnail Produk di Blibli.com - Hydro Flask</h2>
      <p class="category">Thumbnail Image & Video Produk</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop, CapCut Pro</p>
      <p><strong>Penjelasan Karya</strong><br>Thumbnail yang menampilkan varian ukuran, warna, dan fitur utama Hydro Flask untuk menarik perhatian pembeli.</p>
      <div class="case-study"><h4>Tujuan</h4><p>Mengomunikasikan fitur produk secara cepat dan meningkatkan klik pada listing.</p></div>
    `,

    /* Editor page blocks */
    'editor.item1': `
      <h2>Sepatu Sneakers</h2>
      <p class="category">Produk Fashion</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop, Freepik</p>
      <p>Hapus background menjadi putih bersih, retouch detail, penyesuaian shadow, dan peningkatan ketajaman untuk tampilan premium.</p>
      <div class="case-study"><h4>Hasil & Impact</h4><p>Clean white bg, warna vivid, shadow realistis — meningkatkan tampilan profesional dan daya tarik pembeli.</p></div>
    `,
    'editor.item2': `
      <h2>Tas Wanita</h2>
      <p class="category">Produk Fashion & Aksesoris</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop</p>
      <p>Color correction, penambahan shadow natural, dan optimasi brightness/contrast untuk tampilan premium.</p>
      <div class="case-study"><h4>Hasil & Impact</h4><p>Warna lebih hidup dan shadow realistis — meningkatkan perceived value produk.</p></div>
    `,
    'editor.item3': `
      <h2>Jam Tangan</h2>
      <p class="category">Produk Aksesoris</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop, Freepik</p>
      <p>Compositing beberapa angle, penyesuaian lighting agar dial terlihat jelas, dan background removal.</p>
      <div class="case-study"><h4>Hasil & Impact</h4><p>Fokus pada detail jam dan komposisi yang menarik — meningkatkan click-through rate.</p></div>
    `,
    'editor.item4': `
      <h2>Earphone Wireless</h2>
      <p class="category">Produk Elektronik</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop</p>
      <p>Hapus background, multiple angle dalam satu frame, penyesuaian ketajaman kabel & casing.</p>
      <div class="case-study"><h4>Hasil & Impact</h4><p>Tampilan 360° feel dan clean white bg — membantu pembeli melihat detail produk.</p></div>
    `,
    'editor.item5': `
      <h2>Botol Minum Stainless</h2>
      <p class="category">Produk Lifestyle</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop</p>
      <p>Remove reflection, peningkatan sharpness, dan penyesuaian warna untuk tampilan premium.</p>
      <div class="case-study"><h4>Hasil & Impact</h4><p>Permukaan bersih dan warna metalik menarik — terlihat high-end.</p></div>
    `,
    'editor.item6': `
      <h2>Kemeja Pria (Ghost Mannequin)</h2>
      <p class="category">Produk Fashion</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop</p>
      <p>Teknik ghost mannequin: hapus manekin, hilangkan lipatan, dan sesuaikan bentuk agar rapi.</p>
      <div class="case-study"><h4>Hasil & Impact</h4><p>Tampilan rapi dan profesional yang meningkatkan presentasi produk fashion.</p></div>
    `,

    /* Rich page blocks */
    'rich.item1': `
      <h2>Deskripsi Produk ASUS E210KA</h2>
      <p class="category">Deskripsi Produk (Sales Copy)</p>
      <p class="tools"><strong>Tools:</strong> Microsoft Word, Adobe Photoshop, Freepik</p>
      <p>Deskripsi ringkas dan persuasif yang menonjolkan portabilitas, performa harian, dan harga terjangkau.</p>
      <div class="case-study"><h4>Alur Kerja</h4><ol><li>Riset spesifikasi resmi & kompetitor.</li><li>Struktur: opening → fitur → manfaat → CTA.</li></ol></div>
    `,
    'rich.item2': `
      <h2>Deskripsi Produk Dilan Crunchy Choco Caramel</h2>
      <p class="category">Deskripsi Produk (Sales Copy)</p>
      <p class="tools"><strong>Tools:</strong> Microsoft Word, Adobe Photoshop, Freepik</p>
      <p>Konten camilan dengan bahasa sensorik menggugah selera: crunchy, choco leleh, caramel manis.</p>
      <div class="case-study"><h4>Alur Kerja</h4><ol><li>Riset rasa & target.</li><li>Tulis sensory words + emoji.</li></ol></div>
    `,
    'rich.item3': `
      <h2>Artikel “Review Produk Baby Safe”</h2>
      <p class="category">Artikel / Blog Post (Panjang)</p>
      <p class="tools"><strong>Tools:</strong> Microsoft Word, Adobe Photoshop, Freepik</p>
      <p>Review mendalam: unboxing, test penggunaan, pro & cons, rekomendasi untuk orang tua.</p>
      <div class="case-study"><h4>Alur Kerja</h4><ol><li>Riset produk & testimoni pengguna.</li><li>Struktur: intro → unboxing → penggunaan → kesimpulan.</li></ol></div>
    `,
    'rich.item4': `
      <h2>Artikel “Mengenal Lebih Dekat Brand Ecovacs”</h2>
      <p class="category">Artikel / Blog Post (Panjang)</p>
      <p class="tools"><strong>Tools:</strong> Microsoft Word, Adobe Photoshop, Freepik</p>
      <p>Brand awareness: sejarah, inovasi robot vacuum, dan rekomendasi produk flagship.</p>
      <div class="case-study"><h4>Alur Kerja</h4><ol><li>Riset sejarah & teknologi.</li><li>Struktur: pengenalan → milestone → fitur unik.</li></ol></div>
    `,

    /* Proyek page blocks */
    'proyek.item1': `
      <h2>Extension Buka Banyak Tab</h2>
      <p class="category">Automation Tool (Batch & Excel Integration)</p>
      <p class="tools"><strong>Tools:</strong> Notepad (Batch scripting), Microsoft Excel, VSCode</p>
      <p>File batch (.bat) yang membuka banyak URL/folder sekaligus. Dapat diintegrasikan dengan Excel untuk daftar link.</p>
      <div class="case-study"><h4>Alur Kerja</h4><ol><li>Identifikasi masalah.</li><li>Buat script .bat dengan perintah start.</li></ol></div>
    `,
    'proyek.item2': `
      <h2>Extension Auto Click</h2>
      <p class="category">Browser / VSCode Automation Tool</p>
      <p class="tools"><strong>Tools:</strong> JavaScript, VSCode, Browser Extension (Manifest V3)</p>
      <p>Extension yang otomatis mengklik elemen tertentu untuk tugas repetitif di dashboard.</p>
      <div class="case-study"><h4>Alur Kerja</h4><ol><li>Detect elemen target via content script.</li><li>Tambahkan trigger untuk aktifkan auto-click.</li></ol></div>
    `,
    'proyek.item3': `
      <h2>Website ElektroArt</h2>
      <p class="category">Website Portal Teknologi (Tugas Kampus)</p>
      <p class="tools"><strong>Tools:</strong> Visual Studio Code, HTML5, CSS3, JavaScript</p>
      <p>Portal teknologi berisi informasi produk elektronik, tutorial, dan berita. Desain responsif dan informatif.</p>
      <div class="case-study"><h4>Alur Kerja</h4><ol><li>Riset konten.</li><li>Desain struktur & layout.</li></ol></div>
    `,
    'proyek.item4': `
      <h2>Aplikasi Barcode Scanner Parking</h2>
      <p class="category">Mobile App (Tugas Kampus)</p>
      <p class="tools"><strong>Tools:</strong> Android Studio, Kotlin + Jetpack Compose, Google Sheets API</p>
      <p>Sistem informasi manajemen parkir berbasis Android yang menggunakan pemindaian barcode untuk kontrol akses.</p>
      <div class="case-study"><h4>Alur Kerja Sistem</h4><ol><li>Registrasi & verifikasi.</li><li>Scan barcode untuk log masuk/keluar.</li></ol></div>
    `,
    'proyek.item5': `
      <h2>Sistem Manajemen Visitor (Flutter + PHP)</h2>
      <p class="category">Hybrid Web & Mobile App (Tugas Kampus)</p>
      <p class="tools"><strong>Tools:</strong> VSCode, Flutter, PHP + MySQL, XAMPP</p>
      <p>Aplikasi manajemen visitor dengan registrasi mandiri, validasi QR, dan monitoring real-time.</p>
      <div class="case-study"><h4>Alur Kerja Sistem</h4><ol><li>Registrasi web.</li><li>Admin verifikasi & generate QR.</li></ol></div>
    `
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.title': 'Teddy Sunanto',
    'hero.subtitle': 'Multimedia Content Specialist & Aspiring Developer',
    'hero.tagline': '9+ years experience in e-commerce visual content & editing.\nCurrently a 6th-semester Informatics student focusing on web/mobile development & automation tools.',
    'cta.view': 'View My Work',
    'cta.contact': 'Contact Me',
    'about.title': 'About Me',
    'about.p1': 'I am a creative, detail-oriented professional with over 9 years of experience in the e-commerce industry. This portfolio includes visual editing work, rich content writing, video edits, and development projects (extensions, Android apps, websites).',
    'about.p2': 'I enjoy combining visual aesthetics with technical solutions to create optimal user experiences. Open to collaboration in content creation or web/mobile development.',
    'skills.title': 'Key Skills',
    'projects.title': 'Projects & Showcase',
    'experience.title': 'Work Experience',
    'contact.title': 'Contact Me',
    'contact.info': 'Email: teddy.sunanto@gmail.com | LinkedIn: linkedin.com/in/teddy-sunanto | GitHub: github.com/mars2510',
    'collab.title': 'Collaborations',
    'collab.p': 'Some partners & clients I have worked with',
    'nav.collab': 'Collaborations',
    'nav.back': 'Back',
    'label.tools': 'Tools:',
    'workflow.title': 'Workflow',
    'case.results': 'Results & Impact',
    'footer.home': 'Back to Home',
    'showcase.title': 'Showcase & Other Projects',
    'showcase.subtitle': 'A collection of social media content, reels, and product thumbnails I created to support brands and e-commerce.',
    'editor.title': 'Image Editor Portfolio',
    'editor.subtitle': 'Thousands of e-commerce product images I edited: background removal, retouching, and visual optimization.',
    'rich.title': 'Rich Content Showcase',
    'rich.subtitle': 'A collection of product descriptions & e-commerce articles — including goals, challenges, and outcomes.',
    'proyek.title': 'Development Projects',
    'proyek.subtitle': 'A collection of web, mobile, and automation tools I have built.',
    /* Showcase blocks (EN) */
    'showcase.item1': `
      <h2>FAS Fulfillment - Instagram Feed</h2>
      <p class="category">Instagram Feed</p>
      <p class="tools"><strong>Tools:</strong> Adobe Photoshop</p>
      <p><strong>About FAS Fulfillment</strong><br>FAS Fulfillment provides operational services to help businesses improve efficiency: inspection, storage, packing, and shipping.</p>
      <p><strong>Project Overview</strong><br>Informative, visually-engaging Instagram feed content designed to attract potential clients.</p>
      <div class="case-study"><h4>Objective</h4><p>Showcase solutions so clients can easily find logistics services and encourage partnership.</p></div>
    `
    /* Note: remaining EN blocks intentionally kept concise here */
  }
};

// add project menu translation keys safely after object creation
translations.id = translations.id || {};
translations.en = translations.en || {};
translations.id['projects.menu.rich'] = 'Rich Content';
translations.id['projects.menu.editor'] = 'Image Editor';
translations.id['projects.menu.showcase'] = 'Showcase';
translations.id['projects.menu.proyek'] = 'Proyek Pengembangan';
translations.en['projects.menu.rich'] = 'Rich Content';
translations.en['projects.menu.editor'] = 'Image Editor';
translations.en['projects.menu.showcase'] = 'Showcase';
translations.en['projects.menu.proyek'] = 'Development Projects';

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = translations[lang] && translations[lang][key];
    if (!txt) return;
    if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
      el.placeholder = txt;
    } else {
      // Safety: avoid overwriting elements that already contain child elements
      // unless the element explicitly opts into HTML replacement via
      // `data-i18n-allow-html="true"`.
      if (el.children.length === 0 || el.getAttribute('data-i18n-allow-html') === 'true') {
        el.innerHTML = txt.replace(/\n/g, '<br>');
      }
    }
  });
}

/**
 * Apply a full HTML translation blob into a specific selector.
 * Use this when you deliberately want to replace a block-level container.
 */
function applyBlockTranslation(key, selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const savedLang = localStorage.getItem('siteLang') || 'id';
  const txt = translations[savedLang] && translations[savedLang][key];
  if (!txt) return;
  el.innerHTML = txt.replace(/\n/g, '<br>');
}

export { translations, applyTranslations, applyBlockTranslation };
