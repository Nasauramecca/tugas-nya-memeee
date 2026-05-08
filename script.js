/**
 * Fungsi Navigasi Halaman
 * @param {string} pageId - ID dari element section yang mau dimunculkan
 */
function navigateTo(pageId) {
    // 1. Ambil semua elemen dengan class 'page'
    const pages = document.querySelectorAll('.page');

    // 2. Sembunyikan semua page (hapus class active)
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 3. Tampilkan page yang dituju
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }

    // 4. Scroll ke atas otomatis
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    
    if (splash) {
        // Tunggu 2 detik baru mulai animasi geser
        setTimeout(() => {
            splash.classList.add('splash-up');
            
            // Hapus dari tampilan setelah animasi slide selesai (800ms)
            setTimeout(() => {
                splash.style.display = 'none';
            }, 800); 
        }, 1000);
    }
});