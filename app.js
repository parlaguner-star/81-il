// ============================
// DATA: Schools
// ============================
const schools = [
  {
    id: 1,
    il: "Balıkesir",
    ilce: "Bigadiç",
    koy: "Yeşildere",
    okul_adi: "Yeşildere İlkokulu",
    ogrenci_sayisi: 34,
    durum: "Aktif",
    konum_link: "https://maps.google.com/?q=Yeşildere+İlkokulu+Bigadiç",
    eklenme_tarihi: "2025-12-19",
    ziyaret_edildi: true,
    ihtiyaclar: {
      kirtasiye: { var: true, detay: "Defter, kalem, silgi seti" },
      kitap: { var: true, detay: "Hikaye kitabı, atlas" },
      kiyafet: { var: false, detay: "" },
      stem: { var: true, detay: "FLL kiti, deney seti" },
      oyun: { var: true, detay: "Kutu oyunları" },
      diger: { var: false, detay: "" }
    },
    curriculum: "FLL",
    fotograf: null,
    iletisim: {
      yetkili: "Okul Müdürü",
      telefon: "0266 XXX XX XX"
    }
  },
  {
    id: 2,
    il: "Diyarbakır",
    ilce: "Merkez",
    koy: "Örnek Köy",
    okul_adi: "Örnek Köy İlkokulu",
    ogrenci_sayisi: 28,
    durum: "Öğretmen Eksik",
    konum_link: "https://maps.google.com/?q=Diyarbakır",
    eklenme_tarihi: "2025-10-05",
    ziyaret_edildi: true,
    ihtiyaclar: {
      kirtasiye: { var: true, detay: "Temel kırtasiye seti" },
      kitap: { var: true, detay: "Ders kitapları, ansiklopedi" },
      kiyafet: { var: true, detay: "Kışlık mont, bot" },
      stem: { var: true, detay: "Robotik kit" },
      oyun: { var: false, detay: "" },
      diger: { var: true, detay: "Isıtma sistemi" }
    },
    curriculum: "GBricks",
    fotograf: null,
    iletisim: {
      yetkili: "Sınıf Öğretmeni",
      telefon: "0412 XXX XX XX"
    }
  },
  {
    id: 3,
    il: "Ağrı",
    ilce: "Doğubayazıt",
    koy: "Güneşli",
    okul_adi: "Güneşli Köyü İlkokulu",
    ogrenci_sayisi: 45,
    durum: "Bina Sorunlu",
    konum_link: "https://maps.google.com/?q=Doğubayazıt+Ağrı",
    eklenme_tarihi: "2025-11-15",
    ziyaret_edildi: false,
    ihtiyaclar: {
      kirtasiye: { var: true, detay: "Kalem, defter, boya kalemi" },
      kitap: { var: true, detay: "Çocuk hikayeleri, masal kitapları" },
      kiyafet: { var: true, detay: "Kışlık kıyafet, çizme" },
      stem: { var: true, detay: "Basit deney setleri" },
      oyun: { var: true, detay: "Eğitici oyuncaklar" },
      diger: { var: true, detay: "Su deposu tamiri" }
    },
    curriculum: "STEMa",
    fotograf: null,
    iletisim: {
      yetkili: "Muhtar",
      telefon: "0472 XXX XX XX"
    }
  },
  {
    id: 4,
    il: "Hakkâri",
    ilce: "Yüksekova",
    koy: "Dağlıca",
    okul_adi: "Dağlıca İlkokulu",
    ogrenci_sayisi: 22,
    durum: "Aktif",
    konum_link: "https://maps.google.com/?q=Yüksekova+Hakkâri",
    eklenme_tarihi: "2026-01-10",
    ziyaret_edildi: false,
    ihtiyaclar: {
      kirtasiye: { var: true, detay: "Tam set kırtasiye" },
      kitap: { var: true, detay: "Türkçe ve İngilizce kitaplar" },
      kiyafet: { var: true, detay: "Okul önlüğü, ayakkabı" },
      stem: { var: false, detay: "" },
      oyun: { var: true, detay: "Futbol topu, ip atlama" },
      diger: { var: false, detay: "" }
    },
    curriculum: "Kendi Cihazı",
    fotograf: null,
    iletisim: {
      yetkili: "Okul Müdürü",
      telefon: "0438 XXX XX XX"
    }
  },
  {
    id: 5,
    il: "Van",
    ilce: "Erciş",
    koy: "Yıldızlı",
    okul_adi: "Yıldızlı Köyü İlkokulu",
    ogrenci_sayisi: 38,
    durum: "Aktif",
    konum_link: "https://maps.google.com/?q=Erciş+Van",
    eklenme_tarihi: "2026-02-20",
    ziyaret_edildi: false,
    ihtiyaclar: {
      kirtasiye: { var: true, detay: "Resim malzemeleri, defter" },
      kitap: { var: true, detay: "Bilim kitapları" },
      kiyafet: { var: false, detay: "" },
      stem: { var: true, detay: "Kodlama seti, Arduino" },
      oyun: { var: true, detay: "Satranç, puzzle" },
      diger: { var: true, detay: "Projeksiyon cihazı" }
    },
    curriculum: "FLL",
    fotograf: null,
    iletisim: {
      yetkili: "Müdür Yardımcısı",
      telefon: "0432 XXX XX XX"
    }
  },
  {
    id: 6,
    il: "Şanlıurfa",
    ilce: "Siverek",
    koy: "Karacadağ",
    okul_adi: "Karacadağ İlkokulu",
    ogrenci_sayisi: 52,
    durum: "Öğretmen Eksik",
    konum_link: "https://maps.google.com/?q=Siverek+Şanlıurfa",
    eklenme_tarihi: "2026-03-01",
    ziyaret_edildi: false,
    ihtiyaclar: {
      kirtasiye: { var: true, detay: "Her türlü kırtasiye" },
      kitap: { var: true, detay: "Okuma seti, sözlük" },
      kiyafet: { var: true, detay: "Yazlık ve kışlık kıyafet" },
      stem: { var: true, detay: "Lego Education seti" },
      oyun: { var: true, detay: "Masa oyunları" },
      diger: { var: true, detay: "İnternet altyapısı" }
    },
    curriculum: "GBricks",
    fotograf: null,
    iletisim: {
      yetkili: "Okul Müdürü",
      telefon: "0414 XXX XX XX"
    }
  },
  {
    id: 7,
    il: "Mardin",
    ilce: "Midyat",
    koy: "Taşköy",
    okul_adi: "Taşköy İlkokulu",
    ogrenci_sayisi: 19,
    durum: "Aktif",
    konum_link: "https://maps.google.com/?q=Midyat+Mardin",
    eklenme_tarihi: "2026-03-15",
    ziyaret_edildi: false,
    ihtiyaclar: {
      kirtasiye: { var: true, detay: "Boya kalemleri, silgi" },
      kitap: { var: true, detay: "Çocuk ansiklopedisi" },
      kiyafet: { var: false, detay: "" },
      stem: { var: true, detay: "Mikroskop, deney tüpleri" },
      oyun: { var: false, detay: "" },
      diger: { var: false, detay: "" }
    },
    curriculum: "STEMa",
    fotograf: null,
    iletisim: {
      yetkili: "Sınıf Öğretmeni",
      telefon: "0482 XXX XX XX"
    }
  }
];

// Need categories mapping
const needCategories = {
  kirtasiye: { emoji: "✏️", name: "Kırtasiye" },
  kitap: { emoji: "📚", name: "Kitap" },
  kiyafet: { emoji: "👕", name: "Kıyafet" },
  stem: { emoji: "🔬", name: "STEM Materyali" },
  oyun: { emoji: "🎮", name: "Oyun / Oyuncak" },
  diger: { emoji: "💧", name: "Diğer" }
};

// Map city name to SVG ID mapping (SVG uses lowercase, non-Turkish IDs)
const cityIdMap = {
  "Adana": "adana", "Adıyaman": "adiyaman", "Afyonkarahisar": "afyonkarahisar",
  "Ağrı": "agri", "Amasya": "amasya", "Ankara": "ankara", "Antalya": "antalya",
  "Artvin": "artvin", "Aydın": "aydin", "Balıkesir": "balikesir", "Bilecik": "bilecik",
  "Bingöl": "bingol", "Bitlis": "bitlis", "Bolu": "bolu", "Burdur": "burdur",
  "Bursa": "bursa", "Çanakkale": "canakkale", "Çankırı": "cankiri", "Çorum": "corum",
  "Denizli": "denizli", "Diyarbakır": "diyarbakir", "Edirne": "edirne",
  "Elazığ": "elazig", "Erzincan": "erzincan", "Erzurum": "erzurum",
  "Eskişehir": "eskisehir", "Gaziantep": "gaziantep", "Giresun": "giresun",
  "Gümüşhane": "gumushane", "Hakkâri": "hakkari", "Hatay": "hatay",
  "Isparta": "isparta", "Mersin": "mersin", "İstanbul": "istanbul",
  "İzmir": "izmir", "Kars": "kars", "Kastamonu": "kastamonu", "Kayseri": "kayseri",
  "Kırklareli": "kirklareli", "Kırşehir": "kirsehir", "Kocaeli": "kocaeli",
  "Konya": "konya", "Kütahya": "kutahya", "Malatya": "malatya", "Manisa": "manisa",
  "Kahramanmaraş": "kahramanmaras", "Mardin": "mardin", "Muğla": "mugla",
  "Muş": "mus", "Nevşehir": "nevsehir", "Niğde": "nigde", "Ordu": "ordu",
  "Rize": "rize", "Sakarya": "sakarya", "Samsun": "samsun", "Siirt": "siirt",
  "Sinop": "sinop", "Sivas": "sivas", "Tekirdağ": "tekirdag", "Tokat": "tokat",
  "Trabzon": "trabzon", "Tunceli": "tunceli", "Şanlıurfa": "sanliurfa",
  "Uşak": "usak", "Van": "van", "Yozgat": "yozgat", "Zonguldak": "zonguldak",
  "Aksaray": "aksaray", "Bayburt": "bayburt", "Karaman": "karaman",
  "Kırıkkale": "kirikkale", "Batman": "batman", "Şırnak": "sirnak",
  "Bartın": "bartin", "Ardahan": "ardahan", "Iğdır": "igdir",
  "Yalova": "yalova", "Karabük": "karabuk", "Kilis": "kilis",
  "Osmaniye": "osmaniye", "Düzce": "duzce"
};

// Reverse map: SVG id -> City name
const idToCityName = {};
Object.entries(cityIdMap).forEach(([name, id]) => {
  idToCityName[id] = name;
});

// ============================
// APP STATE
// ============================
let mapZoom = 1;
let selectedCity = null;
let currentSchoolId = null;

// ============================
// INITIALIZATION
// ============================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initCounters();
  loadMap();
  initModal();
  initForm();
  initDetailPanelDelegation();
});

// ============================
// NAVBAR
// ============================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ============================
// HERO PARTICLES
// ============================
function initParticles() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = (Math.random() * 4 + 2) + 'px';
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size};
      height: ${size};
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(particle);
  }
}

// ============================
// ANIMATED COUNTERS
// ============================
function initCounters() {
  const counters = document.querySelectorAll('.counter-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  };
  requestAnimationFrame(update);
}

// ============================
// MAP
// ============================
async function loadMap() {
  const container = document.getElementById('mapSvgContainer');
  try {
    const response = await fetch('turkey_map.svg');
    const svgText = await response.text();
    container.innerHTML = svgText;
    initMapInteraction();
    colorizeCities();
  } catch (error) {
    console.error('Map loading error:', error);
    const errorEl = document.createElement('p');
    errorEl.className = 'map-error-message';
    errorEl.textContent = 'Harita yüklenemedi. Lütfen sayfayı yenileyin.';
    container.appendChild(errorEl);
  }
}

function colorizeCities() {
  const svg = document.querySelector('#mapSvgContainer svg');
  if (!svg) return;

  // Get cities with schools
  const citiesWithSchools = {};
  schools.forEach(school => {
    if (!citiesWithSchools[school.il]) {
      citiesWithSchools[school.il] = { hasActive: false, allVisited: true };
    }
    if (!school.ziyaret_edildi) {
      citiesWithSchools[school.il].hasActive = true;
      citiesWithSchools[school.il].allVisited = false;
    }
  });

  // Color all cities
  const groups = svg.querySelectorAll('g[id]');
  groups.forEach(g => {
    const gId = g.id;
    const cityName = idToCityName[gId];
    if (!cityName) return;

    const cityData = citiesWithSchools[cityName];

    // Remove old classes
    g.classList.remove('city-active', 'city-visited', 'city-none');

    if (cityData) {
      if (cityData.hasActive) {
        g.classList.add('city-active');
      } else {
        g.classList.add('city-visited');
      }
    } else {
      g.classList.add('city-none');
    }
  });
}

function initMapInteraction() {
  const svg = document.querySelector('#mapSvgContainer svg');
  if (!svg) return;

  const tooltip = document.getElementById('mapTooltip');
  const groups = svg.querySelectorAll('g[id]');

  groups.forEach(g => {
    // Hover tooltip
    g.addEventListener('mouseenter', () => {
      const cityName = g.getAttribute('data-city-name') || idToCityName[g.id] || g.id;
      tooltip.textContent = cityName;
      tooltip.classList.add('visible');
    });

    g.addEventListener('mousemove', (e) => {
      tooltip.style.left = e.clientX + 12 + 'px';
      tooltip.style.top = e.clientY - 35 + 'px';
    });

    g.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
    });

    // Click
    g.addEventListener('click', () => {
      const cityName = g.getAttribute('data-city-name') || idToCityName[g.id] || g.id;
      selectCity(cityName);

      // Visual highlight of selected city
      const allGroups = svg.querySelectorAll('g[id]');
      allGroups.forEach(gg => gg.classList.remove('city-selected'));
      g.classList.add('city-selected');
    });
  });

  // Zoom controls
  document.getElementById('zoomIn').addEventListener('click', () => {
    mapZoom = Math.min(mapZoom + 0.3, 3);
    svg.style.transform = 'scale(' + mapZoom + ')';
    svg.style.transformOrigin = 'center center';
  });

  document.getElementById('zoomOut').addEventListener('click', () => {
    mapZoom = Math.max(mapZoom - 0.3, 0.5);
    svg.style.transform = 'scale(' + mapZoom + ')';
  });

  document.getElementById('zoomReset').addEventListener('click', () => {
    mapZoom = 1;
    svg.style.transform = 'scale(1)';
  });
}

function selectCity(cityName) {
  selectedCity = cityName;
  const citySchools = schools.filter(s => s.il === cityName);
  const detailContent = document.getElementById('detailContent');
  const detailEmpty = document.getElementById('detailEmpty');

  if (citySchools.length === 0) {
    detailEmpty.classList.remove('hidden');
    detailContent.classList.remove('active');
    detailEmpty.innerHTML = '<div class="empty-icon">📍</div>' +
      '<h3>' + cityName + '</h3>' +
      '<p>Bu ilde henüz kayıtlı okul bulunmuyor.</p>';
    return;
  }

  detailEmpty.classList.add('hidden');
  detailContent.classList.add('active');

  const activeCount = citySchools.filter(s => !s.ziyaret_edildi).length;

  let html = '<div class="panel-city-name">' + cityName + '</div>' +
    '<div class="panel-city-summary">' +
    '📍 ' + citySchools.length + ' okul kayıtlı' +
    (activeCount > 0 ? ' • ' + activeCount + ' okul yardım bekliyor' : '') +
    '</div>';

  citySchools.forEach(school => {
    const activeNeeds = Object.entries(school.ihtiyaclar)
      .filter(([_, v]) => v.var)
      .map(([key, _]) => needCategories[key]);

    html += '<div class="school-card" data-school-id="' + school.id + '" tabindex="0" role="button" aria-label="' + school.okul_adi + ' detaylarını göster">' +
      '<div class="school-card-header">' +
      '<div class="school-name">' + school.okul_adi + '</div>' +
      (school.ziyaret_edildi ? '<div class="school-badge-visited">✓ Ziyaret Edildi</div>' : '') +
      '</div>' +
      '<div class="school-location">' + school.koy + ', ' + school.ilce + '</div>' +
      '<div class="school-needs">' +
      activeNeeds.map(n => '<span class="need-tag">' + n.emoji + ' ' + n.name + '</span>').join('') +
      '</div>' +
      '<div class="school-meta">' +
      '<span class="school-students">👥 ' + school.ogrenci_sayisi + ' öğrenci</span>' +
      '<button class="btn-detail" data-school-id="' + school.id + '">Detayları Gör →</button>' +
      '</div>' +
      '</div>';
  });

  detailContent.innerHTML = html;
}

// Event delegation for detail panel school cards
function initDetailPanelDelegation() {
  const detailContent = document.getElementById('detailContent');

  detailContent.addEventListener('click', (e) => {
    const card = e.target.closest('.school-card');
    if (card) {
      const schoolId = parseInt(card.dataset.schoolId);
      if (schoolId) openModal(schoolId);
    }
  });

  // Keyboard support for school cards
  detailContent.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.school-card');
      if (card) {
        e.preventDefault();
        const schoolId = parseInt(card.dataset.schoolId);
        if (schoolId) openModal(schoolId);
      }
    }
  });
}

// ============================
// MODAL
// ============================
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(schoolId) {
  const school = schools.find(s => s.id === schoolId);
  if (!school) return;

  currentSchoolId = schoolId;

  // Header
  document.getElementById('modalSchoolName').textContent = school.okul_adi;
  document.getElementById('modalHeaderMeta').innerHTML =
    '<span>📍 ' + school.koy + ', ' + school.ilce + ', ' + school.il + '</span>' +
    '<span>👥 ' + school.ogrenci_sayisi + ' Öğrenci</span>' +
    '<span>🏫 ' + school.durum + '</span>';

  // Info list
  const dateFormatted = new Date(school.eklenme_tarihi).toLocaleDateString('tr-TR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  document.getElementById('modalInfoList').innerHTML =
    '<div class="info-item">' +
    '<div class="info-icon">📍</div>' +
    '<div><strong>Konum:</strong> <a href="' + school.konum_link + '" target="_blank" rel="noopener noreferrer">Google Maps\'te Aç</a></div>' +
    '</div>' +
    '<div class="info-item">' +
    '<div class="info-icon">👥</div>' +
    '<div><strong>Öğrenci Sayısı:</strong> ' + school.ogrenci_sayisi + '</div>' +
    '</div>' +
    '<div class="info-item">' +
    '<div class="info-icon">🏫</div>' +
    '<div><strong>Okul Durumu:</strong> ' + school.durum + '</div>' +
    '</div>' +
    '<div class="info-item">' +
    '<div class="info-icon">📅</div>' +
    '<div><strong>Sisteme Eklenme:</strong> ' + dateFormatted + '</div>' +
    '</div>' +
    '<div class="info-item">' +
    '<div class="info-icon">' + (school.ziyaret_edildi ? '✅' : '⏳') + '</div>' +
    '<div><strong>Durum:</strong> ' + (school.ziyaret_edildi ? 'Ziyaret Edildi' : 'Ziyaret Bekleniyor') + '</div>' +
    '</div>';

  // Photo
  const modalPhoto = document.getElementById('modalPhoto');
  if (school.fotograf) {
    modalPhoto.innerHTML = '<img src="' + school.fotograf + '" alt="' + school.okul_adi + '">';
  } else {
    modalPhoto.textContent = '📸 Fotoğraf henüz eklenmedi';
  }

  // Needs list
  let needsHtml = '';
  Object.entries(school.ihtiyaclar).forEach(([key, value]) => {
    const cat = needCategories[key];
    needsHtml +=
      '<div class="need-item ' + (value.var ? 'has-need' : 'no-need') + '">' +
      '<div class="need-left">' +
      '<span class="need-emoji">' + cat.emoji + '</span>' +
      '<span class="need-name">' + cat.name + '</span>' +
      '</div>' +
      '<span class="need-detail">' + (value.var ? value.detay : 'Gerekli değil') + '</span>' +
      '</div>';
  });
  document.getElementById('modalNeedsList').innerHTML = needsHtml;

  // Curriculum
  document.getElementById('modalCurriculum').innerHTML =
    '<strong>📝 Müfredat İhtiyacı:</strong> ' + school.curriculum;

  // Form hidden field
  document.getElementById('formSchoolId').value = schoolId;

  // Reset form
  const form = document.getElementById('supportForm');
  const formSuccess = document.getElementById('formSuccess');
  form.classList.remove('hidden');
  form.reset();
  formSuccess.classList.remove('show');

  // Show modal
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus the close button for accessibility
  setTimeout(() => {
    document.getElementById('modalClose').focus();
  }, 100);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ============================
// FORM
// ============================
function initForm() {
  const form = document.getElementById('supportForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const schoolId = document.getElementById('formSchoolId').value;
    const school = schools.find(s => s.id === parseInt(schoolId));

    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const phone = document.getElementById('formPhone').value;
    const org = document.getElementById('formOrg').value;
    const message = document.getElementById('formMessage').value;

    const supportTypes = [];
    document.querySelectorAll('input[name="support"]:checked').forEach(cb => {
      supportTypes.push(cb.value);
    });

    // Log submission (in production, send via EmailJS or Formspree)
    console.log('=== DESTEK TALEBİ ===');
    console.log('Okul:', school ? school.okul_adi : 'Bilinmiyor');
    console.log('İl:', school ? school.il : '');
    console.log('Ad Soyad:', name);
    console.log('E-posta:', email);
    console.log('Telefon:', phone);
    console.log('Kurum:', org);
    console.log('Destek Türleri:', supportTypes.join(', '));
    console.log('Mesaj:', message);
    console.log('====================');

    // Show success
    form.classList.add('hidden');
    document.getElementById('formSuccess').classList.add('show');
  });
}
