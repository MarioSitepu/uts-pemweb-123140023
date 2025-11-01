<div align="center">

# 🍽️ Recipe Finder

<div align="center">

**Aplikasi pencarian resep makanan berbasis web modern yang dibangun dengan React**

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React%20Router-6.30.1-CA4245.svg)](https://reactrouter.com/)
[![TheMealDB](https://img.shields.io/badge/API-TheMealDB-orange.svg)](https://www.themealdb.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

![Recipe Finder Hero](https://img.shields.io/badge/Recipe%20Finder-%F0%9F%8D%BD-orange)

*Aplikasi untuk menemukan inspirasi kuliner harian Anda dengan resep lengkap dari berbagai dapur dunia*

</div>

---

</div>

## 📋 Daftar Isi

- [Tentang Aplikasi](#-tentang-aplikasi)
- [Fitur Unggulan](#-fitur-unggulan)
- [Preview Aplikasi](#-preview-aplikasi)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Proyek](#-struktur-proyek)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Use Cases & Contoh Penggunaan](#-use-cases--contoh-penggunaan)
- [Arsitektur Kode](#-arsitektur-kode)
- [API Integration](#-api-integration)
- [Performance & Optimization](#-performance--optimization)
- [Development](#-development)
- [Deployment](#-deployment)
- [FAQ](#-faq-frequently-asked-questions)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Tentang Aplikasi

**Recipe Finder** adalah aplikasi web modern yang memungkinkan pengguna untuk mencari, menjelajahi, dan menemukan resep makanan dari seluruh dunia. Dibangun dengan React dan menggunakan TheMealDB API sebagai sumber data resep, aplikasi ini menyediakan pengalaman pengguna yang intuitif dan menarik untuk para pecinta kuliner.

### 🎨 Tujuan Proyek
- Menyediakan platform pencarian resep yang mudah digunakan
- Menampilkan resep dengan detail lengkap termasuk bahan dan instruksi
- Menawarkan berbagai filter untuk mencari resep berdasarkan kategori dan area
- Menyediakan antarmuka yang responsif dan modern

### 🚀 Alasan Menggunakan Aplikasi Ini
- **Data Lengkap**: Akses ke ribuan resep dari berbagai negara
- **Gratis & Open Source**: Tidak perlu biaya, kode terbuka
- **Responsif**: Bekerja sempurna di desktop, tablet, dan mobile
- **Real-time Data**: Menggunakan API langsung dari TheMealDB
- **User-Friendly**: Interface yang intuitif dan mudah dipelajari

---

## ✨ Fitur Unggulan

### 🔍 **Pencarian Canggih**
- **Pencarian Berdasarkan Nama**: Cari resep dengan mengetik nama makanan
- **Filter Kategori**: Filter resep berdasarkan kategori (Beef, Chicken, Dessert, dll)
- **Filter Area**: Temukan resep khas dari berbagai negara dan wilayah
- **Kombinasi Filter**: Gabungkan multiple filter untuk hasil pencarian yang lebih spesifik

### 🎲 **Random Recipe**
- **Acak Resep**: Klik tombol "Random Recipe" untuk mendapatkan resep acak
- **20 Random Recipes**: Otomatis menampilkan 20 resep acak saat pertama kali membuka aplikasi
- **Deteksi Duplikasi**: Menghindari menampilkan resep yang sama

### 📄 **Pagination**
- **Grid Layout**: Tampilan 12 resep per halaman (3 baris × 4 kolom)
- **Navigasi Halaman**: Kontrol pagination yang intuitif
- **Scroll otomatis**: Auto-scroll ke atas saat berpindah halaman

### 📱 **Detail Resep Lengkap**
- **Informasi Lengkap**: Nama, kategori, area, dan tag
- **Daftar Bahan**: Bahan-bahan lengkap dengan takaran
- **Instruksi**: Langkah-langkah memasak yang terstruktur
- **Video Tutorial**: Link ke YouTube (jika tersedia)
- **Desain Card**: Tampilan yang menarik dan mudah dibaca

### 🎨 **UI/UX Modern**
- **Desain Responsif**: Optimal di desktop, tablet, dan mobile
- **Loading Animation**: Animasi loading yang menarik
- **Hover Effects**: Interaktif dengan efek hover pada card
- **Color Scheme**: Palet warna oranye yang hangat dan menarik
- **Typography**: Tipografi yang jelas dan mudah dibaca

### ♿ **Accessibility**
- **ARIA Labels**: Semua elemen interaktif memiliki label ARIA
- **Keyboard Navigation**: Mendukung navigasi dengan keyboard
- **Semantic HTML**: Menggunakan elemen HTML semantik

---

## 🖼️ Preview Aplikasi

Berikut adalah fitur-fitur utama yang dapat Anda lihat di aplikasi:

### 🏠 Halaman Beranda
Halaman utama menampilkan:
- **Header dengan Logo**: Gradient oranye yang menarik dengan logo aplikasi
- **Form Pencarian Multi-Filter**: Input pencarian, dropdown kategori, dropdown area
- **Grid Layout Responsif**: 12 resep per halaman (3 baris × 4 kolom)
- **Loading Animation**: Spinner animasi dengan pesan "Loading delicious recipes..."
- **Pagination**: Navigasi halaman dengan tombol Prev/Next dan nomor halaman

```
┌─────────────────────────────────────────────────────────┐
│  🍽️ Recipe Finder                                      │
│  Find your daily culinary inspiration...                │
├─────────────────────────────────────────────────────────┤
│  [Search...] [Category ▼] [Area ▼] [Search] [Random]  │
├─────────────────────────────────────────────────────────┤
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                           │
│  │ 🍗 │ │ 🐟 │ │ 🍰 │ │ 🥩 │                           │
│  │Name│ │Name│ │Name│ │Name│                           │
│  └────┘ └────┘ └────┘ └────┘                           │
│  [1] [2] [3] ... [Next >>]                             │
└─────────────────────────────────────────────────────────┘
```

### 🔎 Halaman Pencarian
Fitur pencarian menyediakan:
- **Search Input**: Placeholder "Search for a meal..."
- **Category Filter**: 14 kategori (Beef, Chicken, Dessert, Lamb, Miscellaneous, Pasta, Pork, Seafood, Side, Starter, Vegan, Vegetarian, Breakfast, Goat)
- **Area Filter**: 25+ area/negara (American, British, Canadian, Chinese, Croatian, Dutch, Egyptian, Filipino, French, Greek, Indian, Irish, Italian, Jamaican, Japanese, Kenyan, Malaysian, Mexican, Moroccan, Polish, Portuguese, Russian, Spanish, Thai, Tunisian, Turkish, Ukrainian, Vietnamese)
- **Search Button**: Tombol untuk trigger pencarian
- **Random Recipe Button**: Tombol untuk mendapatkan 20 resep acak

### 📝 Halaman Detail Resep
Menampilkan informasi lengkap:
- **Header Section**: 
  - Gambar resep besar (600x600px)
  - Nama resep sebagai heading
  - Badge meta informasi (Category, Area, Tags)
- **Ingredients Section**: Daftar bahan dengan takaran (maksimal 20 item)
- **Instructions Section**: Instruksi step-by-step dengan nomor step
- **YouTube Link**: Button untuk menonton video tutorial (jika tersedia)
- **Back Button**: Link untuk kembali ke halaman beranda

### 🎨 Color Scheme & Design
- **Primary Color**: Orange gradient (#FF6B35 → #FF8C42)
- **Background**: Cream/Off-white (#FAF5F0)
- **Cards**: White dengan box-shadow untuk depth
- **Hover Effects**: Transform scale dan shadow yang meningkat
- **Typography**: System fonts (San Francisco, Segoe UI, Roboto)

**📸 Untuk Screenshot**: 
1. Jalankan `npm start` 
2. Buka `http://localhost:3000`
3. Capture screenshot dengan browser DevTools (F12 → Device Toolbar)
4. Gunakan mode responsive untuk berbagai ukuran layar

---

## 🛠️ Teknologi yang Digunakan

### **Frontend Framework**
```
React 19.2.0        - Library JavaScript untuk membangun UI
React DOM 19.2.0    - Rendering React ke DOM
```

### **Routing**
```
React Router DOM 6.30.1  - Client-side routing
```

### **Build Tools**
```
React Scripts 5.0.1     - Build configuration
CRACO 7.1.0             - Custom configuration untuk webpack
```

### **Testing**
```
@testing-library/react       - Testing utilities
@testing-library/jest-dom    - Jest DOM matchers
@testing-library/user-event  - User interaction simulation
```

### **External API**
```
TheMealDB API  - Database resep makanan gratis
Base URL: https://www.themealdb.com/api/json/v1/1/
```

---

## 📁 Struktur Proyek

```
uts-pemweb-123140023/
├── public/
│   ├── favicon.ico         # Ikon aplikasi
│   ├── index.html          # HTML utama
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots config
│
├── src/
│   ├── api/
│   │   └── mealsAPI.js     # Module API integration
│   │
│   ├── components/
│   │   ├── DataTable.jsx   # Grid layout untuk menampilkan meals
│   │   ├── DetailCard.jsx  # Detail lengkap dari satu meal
│   │   ├── Footer.jsx      # Footer dengan informasi author
│   │   ├── Header.jsx      # Header dengan logo dan tagline
│   │   ├── Loading.jsx     # Loading animation component
│   │   ├── Pagination.jsx  # Pagination navigation
│   │   └── SearchForm.jsx  # Form pencarian dan filter
│   │
│   ├── App.jsx             # Root component dengan routing
│   ├── App.css             # Global styles
│   ├── App.test.js         # Unit tests untuk App
│   ├── index.js            # Entry point aplikasi
│   ├── index.css           # Base styles
│   ├── logo.svg            # Logo SVG
│   ├── makan.png           # Logo aplikasi
│   ├── reportWebVitals.js  # Web vitals reporting
│   └── setupTests.js       # Test configuration
│
├── craco.config.js         # CRACO configuration
├── package.json            # Dependencies dan scripts
├── package-lock.json       # Locked dependencies
├── LICENSE                 # MIT License
└── README.md               # Dokumentasi proyek
```

---

## 🚀 Instalasi & Penggunaan

### **Prerequisites**
Pastikan Anda telah menginstal:
- **Node.js** (versi 14.0.0 atau lebih tinggi)
- **npm** atau **yarn**

### **Quick Start (3 Langkah Mudah)**

#### 1️⃣ Clone Repository
```bash
git clone https://github.com/MarioSitepu/uts-pemweb-123140023.git
cd uts-pemweb-123140023
```

#### 2️⃣ Install Dependencies
```bash
npm install
```

#### 3️⃣ Jalankan Aplikasi
```bash
npm start
```
Aplikasi akan otomatis terbuka di browser di **`http://localhost:3000`**

---

### **Scripts Lanjutan**

#### Build untuk Production
```bash
npm run build
```
File production akan berada di folder `build/`, siap untuk deployment ke berbagai platform (Netlify, Vercel, GitHub Pages, dll)

#### Jalankan Tests
```bash
npm test
```
Menjalankan suite testing dengan watch mode interaktif

#### Eject dari Create React App
```bash
npm run eject
```
⚠️ **Warning**: One-way operation! Setelah eject, Anda tidak bisa kembali ke template CRA.

---

## 🏗️ Arsitektur Kode

### **Component Hierarchy**
```
App (Root Component)
├── Header
├── Routes
│   ├── Home (/)
│   │   ├── SearchForm
│   │   ├── Loading (conditional)
│   │   ├── Error (conditional)
│   │   └── DataTable
│   │       └── Pagination
│   │
│   └── Recipe Detail (/recipe/:id)
│       └── DetailCard
│
└── Footer
```

### **State Management**
Aplikasi menggunakan React Hooks untuk state management:
- **useState**: Untuk state lokal component
- **useEffect**: Untuk side effects dan data fetching
- **useRef**: Untuk persistent reference (menandai initial load)
- **useMemo**: Untuk optimasi perhitungan pagination
- **useParams**: Untuk mendapatkan URL parameters

### **Routing**
Menggunakan React Router v6:
- `/` - Halaman beranda dengan pencarian dan daftar resep
- `/recipe/:id` - Halaman detail resep spesifik

---

## 💡 Use Cases & Contoh Penggunaan

### 🎯 Skenario Pencarian

#### **Skenario 1: Pencarian Sederhana**
User ingin mencari resep "Chicken":
1. Ketik "Chicken" di search box
2. Klik tombol "Search"
3. Hasil: Daftar semua resep yang mengandung kata "Chicken"

#### **Skenario 2: Filter Kategori**
User ingin melihat semua dessert:
1. Pilih "Dessert" dari dropdown Category
2. Klik tombol "Search"
3. Hasil: Semua resep dessert

#### **Skenario 3: Filter Area**
User ingin resep dari Italia:
1. Pilih "Italian" dari dropdown Area
2. Hasil: Semua resep masakan Italia

#### **Skenario 4: Kombinasi Filter**
User ingin dessert dari Amerika:
1. Pilih "Dessert" dari Category
2. Pilih "American" dari Area
3. Klik "Search"
4. Hasil: Dessert khas Amerika

#### **Skenario 5: Random Discovery**
User ingin inspirasi resep acak:
1. Klik tombol "Random Recipe"
2. Hasil: 20 resep acak yang berbeda

#### **Skenario 6: Browsing Detail**
User ingin melihat cara membuat suatu resep:
1. Klik pada salah satu card resep
2. Halaman detail terbuka dengan:
   - Gambar besar
   - List bahan lengkap
   - Instruksi step-by-step
   - Link video YouTube (jika ada)

### 🔍 Contoh Query & Hasil

| Query | Type | Jumlah Resep |
|-------|------|--------------|
| "chicken" | Search by name | ~300+ |
| "Beef" | Category | ~100+ |
| "Italian" | Area | ~200+ |
| "Dessert" + "American" | Combined | ~50+ |
| Random | Random | 20 |

---

## 🔌 API Integration

### **API Functions di `mealsAPI.js`**

<details>
<summary>Klik untuk melihat detail fungsi API</summary>

#### 1. **fetchCategories()**
Mengambil daftar semua kategori resep.
```javascript
// GET https://www.themealdb.com/api/json/v1/1/categories.php
// Return: Array of category objects
```

#### 2. **fetchAreas()**
Mengambil daftar semua area/negara.
```javascript
// GET https://www.themealdb.com/api/json/v1/1/list.php?a=list
// Return: Array of area objects
```

#### 3. **searchMeals({ searchTerm, category })**
Mencari resep berdasarkan nama atau kategori.
```javascript
// Prioritas: searchTerm > category > default
// GET https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
// atau
// GET https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert
// Return: Array of meal objects
```

#### 4. **filterByArea(area)**
Memfilter resep berdasarkan area/negara.
```javascript
// GET https://www.themealdb.com/api/json/v1/1/filter.php?a=American
// Return: Array of meal objects (lightweight)
```

#### 5. **getMealById(id)**
Mendapatkan detail lengkap satu resep.
```javascript
// GET https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
// Return: Single meal object with full details
```

#### 6. **getMealDetailsByIds(ids)**
Mendapatkan detail lengkap multiple resep.
```javascript
// Batch request untuk multiple IDs
// Return: Array of meal objects
```

#### 7. **getRandomRecipe()**
Mendapatkan satu resep acak.
```javascript
// GET https://www.themealdb.com/api/json/v1/1/random.php
// Return: Single random meal object
```

#### 8. **getMultipleRandomRecipes(count)**
Mendapatkan multiple resep acak dengan deteksi duplikasi.
```javascript
// Fetch 'count' random recipes dengan Promise.all()
// Auto-remove duplicates berdasarkan idMeal
// Return: Array of unique random meal objects
```

</details>

### **Error Handling**
Setiap fungsi API memiliki error handling:
- Mengembalikan empty array `[]` jika data null
- Try-catch untuk network errors
- Console logging untuk debugging
- User-friendly error messages

---

## ⚡ Performance & Optimization

### **Code Splitting**
- React Router otomatis melakukan code splitting per route
- Lazy loading untuk component yang jarang digunakan

### **Memoization**
- **useMemo** untuk menghitung pagination (currentMeals, totalPages)
- Mencegah re-calculation yang tidak perlu pada setiap render

### **Pagination**
- Tampilan 12 items per halaman mengurangi DOM nodes
- Smooth scroll ke atas saat pindah halaman

### **Image Optimization**
- Lazy loading images secara default oleh browser
- Optimized image sizes dari API

### **API Optimization**
- Batching multiple requests dengan `Promise.all()`
- Deduplication untuk random recipes
- Cache-friendly API calls

---

## 💻 Development

### **Scripts yang Tersedia**

| Script | Deskripsi |
|--------|-----------|
| `npm start` | Menjalankan development server di localhost:3000 |
| `npm run build` | Build aplikasi untuk production |
| `npm test` | Menjalankan test suite |
| `npm run eject` | Eject dari Create React App (one-way operation) |

### **Code Style**
- **ESLint**: Konfigurasi default React App
- **Prettier**: Code formatting
- **JSDoc**: Dokumentasi inline untuk semua fungsi

### **Best Practices yang Diterapkan**
✅ Functional Components dengan Hooks  
✅ Semantic HTML  
✅ CSS Grid dan Flexbox untuk layout  
✅ Mobile-first responsive design  
✅ Accessibility (ARIA labels)  
✅ Error boundaries dan error handling  
✅ Loading states  
✅ Prop validation (melalui dokumentasi JSDoc)  

---

## 🚀 Deployment

Aplikasi ini dapat di-deploy ke berbagai platform hosting:

### **Netlify (Recommended)**
```bash
npm run build
# Drag & drop folder build/ ke Netlify
```
Atau gunakan Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### **Vercel**
```bash
npm install -g vercel
vercel --prod
```

### **GitHub Pages**
```bash
npm install --save-dev gh-pages
# Tambahkan script di package.json:
# "homepage": "https://username.github.io/repo-name"
# "deploy": "gh-pages -d build"
npm run build
npm run deploy
```

### **Firebase Hosting**
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

### **Heroku**
```bash
heroku create your-app-name
git push heroku main
```

---

## ❓ FAQ (Frequently Asked Questions)

### **Q: Apakah aplikasi ini bisa digunakan tanpa koneksi internet?**
A: Tidak, aplikasi ini memerlukan koneksi internet karena data resep diambil secara real-time dari TheMealDB API.

### **Q: Apakah data resep tersimpan di database lokal?**
A: Tidak, aplikasi ini tidak memiliki backend atau database. Semua data diambil dari API TheMealDB.

### **Q: Apakah saya bisa menambahkan resep sendiri?**
A: Untuk saat ini tidak bisa, karena aplikasi ini hanya menampilkan data dari TheMealDB API. Namun, fitur ini bisa ditambahkan di masa depan dengan backend.

### **Q: Apakah aplikasi ini menggunakan cookies atau tracking?**
A: Tidak, aplikasi ini tidak menggunakan cookies, localStorage, atau tracking apapun. Semua data hanya ditampilkan tanpa disimpan.

### **Q: Berapa banyak resep yang tersedia?**
A: TheMealDB API menyediakan ribuan resep dari berbagai negara dan kategori.

### **Q: Apakah aplikasi ini mobile-friendly?**
A: Ya, aplikasi ini fully responsive dan dapat digunakan dengan baik di desktop, tablet, dan mobile.

### **Q: Teknologi apa yang digunakan untuk build?**
A: Menggunakan Create React App (CRA) dengan custom configuration melalui CRACO.

### **Q: Apakah ada limit API calls?**
A: TheMealDB API bebas digunakan tanpa limit untuk penggunaan non-komersial.

### **Q: Bagaimana cara deploy aplikasi?**
A: Lihat bagian [Deployment](#-deployment) di atas untuk panduan lengkap berbagai platform hosting.

### **Q: Apakah saya bisa meng-customize warna dan tema?**
A: Ya, Anda bisa mengedit file `src/App.css` untuk mengubah color scheme dan styling.

---

## 🐛 Troubleshooting

### **Masalah: npm install gagal**
**Solusi**:
```bash
# Hapus node_modules dan package-lock.json
rm -rf node_modules package-lock.json
# Install ulang
npm install
```

### **Masalah: Port 3000 sudah digunakan**
**Solusi**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### **Masalah: Build gagal karena memory limit**
**Solusi**:
```bash
# Install increase-memory-limit
npm install -g increase-memory-limit
increase-memory-limit
# Build ulang
npm run build
```

### **Masalah: Aplikasi tidak menampilkan data**
**Solusi**:
1. Pastikan koneksi internet aktif
2. Cek console browser untuk error API
3. Pastikan TheMealDB API accessible
4. Clear cache browser dan reload

### **Masalah: Images tidak dimuat**
**Solusi**:
1. Cek koneksi internet
2. Pastikan API TheMealDB images accessible
3. Check browser console untuk CORS errors

### **Masalah: Pagination tidak berfungsi**
**Solusi**:
1. Pastikan ada minimal 13 items untuk pagination
2. Check console untuk errors
3. Verifikasi props yang dikirim ke Pagination component

---

## 🤝 Contributing

Kontribusi sangat diterima! Silakan ikuti langkah berikut:

1. **Fork** repository ini
2. Buat **branch** baru untuk fitur Anda (`git checkout -b feature/AmazingFeature`)
3. **Commit** perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. **Push** ke branch (`git push origin feature/AmazingFeature`)
5. Buka **Pull Request**

### **Guidelines**
- Ikuti code style yang ada
- Tambahkan JSDoc untuk fungsi baru
- Test perubahan Anda sebelum commit
- Update README jika perlu

---

## 📄 License

Proyek ini menggunakan **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

---

## 👨‍💻 Author

<div align="center">

### **Mario Fransiskus Sitepu**

**🎓 Teknik Informatika ITERA**  
**📧 NIM: 123140023**

[![GitHub](https://img.shields.io/badge/GitHub-MarioSitepu-181717?logo=github)](https://github.com/MarioSitepu)

---

<div align="center">

### 🎉 Terima Kasih Telah Mengunjungi!

*Dibuat dengan ❤️ menggunakan React dan TheMealDB API*

⭐ Jika Anda menyukai proyek ini, jangan lupa untuk memberikan star!

[🔝 Kembali ke Atas](#-recipe-finder)

</div>

</div>
