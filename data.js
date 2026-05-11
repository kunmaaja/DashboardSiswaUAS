const USER = JSON.parse(localStorage.getItem('hs_user') || '{"name":"Siswa","absen":"—"}');

const MATERI = {
  "sim-dasar": {
    code: "SIM 101", title: "Konsep Dasar SIM",
    slides: [
      { type:"title", tag:"PPT 1", main:["Konsep Dasar","Sistem Informasi","Manajemen (SIM)"], accentWord:"Sistem Informasi", sub:"Pemahaman dasar tentang SIM dalam organisasi dan perusahaan." },
      { type:"list", h2:"Pengertian SIM", items:["Sistem yang digunakan untuk mengolah data menjadi informasi.","Informasi tersebut digunakan untuk membantu manajemen dalam pengambilan keputusan.","SIM mendukung kegiatan operasional organisasi atau perusahaan."] },
      { type:"list", h2:"Tujuan SIM", items:["Mempermudah pengelolaan data.","Membantu pengambilan keputusan.","Meningkatkan efektivitas kerja.","Mendukung kegiatan administrasi kantor.","Mempercepat penyampaian informasi."] },
      { type:"list", h2:"Komponen SIM", items:["Hardware (perangkat keras)","Software (perangkat lunak)","Database","Prosedur kerja","Brainware / pengguna"] },
      { type:"list", h2:"Fungsi SIM", items:["Mengolah data menjadi informasi.","Menyediakan informasi yang akurat.","Membantu pengawasan kerja.","Mendukung kegiatan operasional.","Mempermudah koordinasi antarbagian."] },
      { type:"list", h2:"Manfaat SIM", items:["Menghemat waktu dan biaya.","Mempermudah pekerjaan kantor.","Mempercepat arus informasi.","Membantu meningkatkan produktivitas kerja."] },
      { type:"list", h2:"Contoh Penerapan SIM", items:["Sistem absensi digital","Sistem penggajian pegawai","Sistem administrasi sekolah","Sistem data siswa atau karyawan"] },
      { type:"close", label:"Kesimpulan", closeTitle:"SIM = Efisiensi Organisasi", body:"SIM membantu organisasi dalam mengelola informasi secara cepat, tepat, dan efisien sehingga pekerjaan menjadi lebih mudah dan produktivitas meningkat." }
    ]
  },
  "sim-jenis": {
    code: "SIM 102", title: "Jenis-Jenis SIM",
    slides: [
      { type:"title", tag:"PPT 2", main:["Jenis-Jenis","Sistem Informasi","Manajemen"], accentWord:"Sistem Informasi", sub:"Dibedakan berdasarkan fungsi dan kebutuhan organisasi." },
      { type:"text", h2:"Pengertian", paragraphs:["Jenis SIM dibedakan berdasarkan fungsi dan kebutuhan organisasi.","Setiap bagian perusahaan memiliki sistem informasi yang berbeda sesuai tugas dan tanggung jawabnya."] },
      { type:"list", h2:"Sistem Informasi Akuntansi", intro:"Fungsi utama:", items:["Mengelola data keuangan perusahaan.","Mencatat transaksi keuangan.","Membantu pembuatan laporan keuangan."] },
      { type:"list", h2:"Sistem Informasi Pemasaran", intro:"Fungsi utama:", items:["Mengelola data penjualan.","Mengetahui kebutuhan pelanggan.","Membantu strategi pemasaran."] },
      { type:"list", h2:"Sistem Informasi Persediaan", intro:"Fungsi utama:", items:["Mengatur stok barang.","Mengontrol keluar masuk barang.","Menghindari kekurangan stok."] },
      { type:"list", h2:"Sistem Informasi Personalia", intro:"Fungsi utama:", items:["Mengelola data pegawai.","Mengatur absensi dan penggajian.","Membantu manajemen SDM."] },
      { type:"list", h2:"Jenis SIM Lainnya", items:["Sistem Informasi Pembelian","Sistem Informasi Distribusi","Sistem Informasi Aset","Sistem Informasi Analisis Kredit","Sistem Informasi Penelitian dan Pengembangan"] },
      { type:"close", label:"Kesimpulan", closeTitle:"Setiap SIM Punya Fungsinya", body:"Setiap jenis SIM memiliki fungsi yang berbeda sesuai kebutuhan organisasi untuk meningkatkan efektivitas kerja dan pengambilan keputusan." }
    ]
  },
  "komunikasi-kantor": {
    code: "KOM 101", title: "Komunikasi Kantor",
    slides: [
      { type:"title", tag:"PPT 3", main:["Komunikasi","Kantor"], accentWord:"Komunikasi", sub:"Proses penyampaian informasi dalam lingkungan kerja untuk kelancaran tugas." },
      { type:"text", h2:"Pengertian Komunikasi Kantor", paragraphs:["Komunikasi kantor adalah proses penyampaian informasi dalam lingkungan kerja.","Bertujuan mendukung kelancaran pekerjaan dan kerja sama antarpegawai maupun antarunit organisasi."] },
      { type:"list", h2:"Fungsi Komunikasi Kantor", items:["Alat koordinasi kerja","Menyampaikan informasi","Membantu pengawasan","Memberikan motivasi kerja","Mendukung kegiatan organisasi"] },
      { type:"list", h2:"Unsur Komunikasi", items:["Pengirim pesan","Pesan","Media komunikasi","Penerima pesan","Umpan balik (Feedback)"] },
      { type:"list", h2:"Jenis Komunikasi Kantor", items:["Komunikasi Internal — terjadi di dalam organisasi antar pegawai atau unit.","Komunikasi Eksternal — terjadi dengan pihak luar organisasi seperti klien atau mitra."] },
      { type:"list", h2:"Media Komunikasi Kantor", items:["Surat","Email","Telepon","Rapat","Chat / WhatsApp kerja"] },
      { type:"list", h2:"Hambatan Komunikasi", items:["Salah memahami pesan","Gangguan media komunikasi","Kurang jelasnya informasi","Perbedaan pendapat"] },
      { type:"close", label:"Kesimpulan", closeTitle:"Komunikasi = Kelancaran Kerja", body:"Komunikasi kantor yang baik dapat meningkatkan kerja sama dan kelancaran aktivitas organisasi secara menyeluruh." }
    ]
  },
  "komunikasi-media": {
    code: "KOM 102", title: "Komunikasi Lisan & Tulis",
    slides: [
      { type:"title", tag:"PPT 4", main:["Komunikasi","Lisan & Tulis"], accentWord:"Lisan & Tulis", sub:"Dua metode utama komunikasi dalam kegiatan kantor sehari-hari." },
      { type:"text", h2:"Pengertian", paragraphs:["Komunikasi dapat dilakukan secara lisan maupun tertulis.","Keduanya digunakan dalam kegiatan kantor sehari-hari sesuai kebutuhan dan tingkat urgensi pekerjaan."] },
      { type:"list", h2:"Komunikasi Lisan", intro:"Komunikasi yang dilakukan secara langsung melalui ucapan. Contoh:", items:["Rapat","Presentasi","Diskusi","Telepon"] },
      { type:"list", h2:"Kelebihan & Kekurangan Komunikasi Lisan", items:["+ Kelebihan: Cepat mendapat respon","+ Kelebihan: Lebih mudah menjelaskan","- Kekurangan: Mudah salah paham","- Kekurangan: Tidak memiliki bukti tertulis"] },
      { type:"list", h2:"Komunikasi Tulis", intro:"Komunikasi yang disampaikan melalui tulisan atau dokumen. Contoh:", items:["Surat","Memo","Email","Laporan"] },
      { type:"list", h2:"Kelebihan & Kekurangan Komunikasi Tulis", items:["+ Kelebihan: Dapat dijadikan arsip","+ Kelebihan: Isi lebih terstruktur","- Kekurangan: Membutuhkan waktu","- Kekurangan: Respon tidak langsung"] },
      { type:"compare", h2:"Perbedaan Komunikasi Lisan & Tulis", left:{ title:"Komunikasi Lisan", items:["Disampaikan langsung","Cepat mendapat respon","Tidak ada arsip"] }, right:{ title:"Komunikasi Tulis", items:["Disampaikan melalui tulisan","Respon lebih lambat","Bisa dijadikan arsip"] } },
      { type:"close", label:"Kesimpulan", closeTitle:"Keduanya Sama Pentingnya", body:"Komunikasi lisan dan tulis sama-sama penting dalam kegiatan kantor dan digunakan sesuai kebutuhan serta tingkat urgensi pekerjaan." }
    ]
  }
};

const ACTIVITY_KEY = 'hs_activity';
const MAX_ACTIVITY = 6;

function trackActivity(entry) {

  try {
    let list = JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]');

    list = list.filter(a => a.href !== entry.href);
    list.unshift({ ...entry, ts: Date.now() });
    if (list.length > MAX_ACTIVITY) list = list.slice(0, MAX_ACTIVITY);
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(list));
  } catch(e) {}
}

function getActivity() {
  try {
    return JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]');
  } catch(e) { return []; }
}

function clearActivity() {
  localStorage.removeItem(ACTIVITY_KEY);
}

function relativeTime(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 2) return 'Baru saja';
  if (mins < 60) return `${mins} menit lalu`;
  if (hours < 24) return `${hours} jam lalu`;
  if (days === 1) return 'Kemarin';
  return `${days} hari lalu`;
}

function initSidebar() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('overlay');
  if (!hamburger || !sidebar) return;
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });
}

document.addEventListener('DOMContentLoaded', initSidebar);