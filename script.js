document.addEventListener("DOMContentLoaded", function () {

     setLanguage('en');
    
    // ==========================================
    // --- 1. ANIMASI SCROLL ---
    // ==========================================
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ==========================================
    // --- 2. SLIDER SAMSUNG (AUTO PLAY & MANUAL) ---
    // ==========================================
    let slideIndex = 0;
    const samsungTrack = document.getElementById('track-samsung');
    
    if (samsungTrack) {
        const slides = samsungTrack.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            if (totalSlides === 0) return;
            slideIndex = ((index % totalSlides) + totalSlides) % totalSlides;
            samsungTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        window.moveSlide = function (n, event) {
            if(event) event.preventDefault();
            showSlide(slideIndex + n);
        }

        if (totalSlides > 1) {
            setInterval(() => {
                showSlide(slideIndex + 1);
            }, 4000);
        }
    }

    // ==========================================
    // --- 3. SLIDER SOSIAL MEDIA (AUTO PLAY 5 DETIK) ---
    // ==========================================
    const sosmedTracks = document.querySelectorAll('.sosmed-slider-track');

    sosmedTracks.forEach(track => {
        const sosmedSlides = track.querySelectorAll('.sosmed-slide');
        let currentIndex = 0;

        if (sosmedSlides.length > 1) {
            setInterval(() => {
                currentIndex++;
                
                if (currentIndex >= sosmedSlides.length) {
                    currentIndex = 0;
                }

                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                
            }, 5000); // 5 detik
        }
    });
});

// ==========================================
// --- FUNGSI GLOBAL (DI LUAR DOMContentLoaded) ---
// ==========================================

// --- 4. LOGIKA GANTI BAHASA ---
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-id][data-en]');
    elements.forEach(el => {
        el.innerHTML = (lang === 'en') ? el.getAttribute('data-en') : el.getAttribute('data-id');
    });

    const buttons = document.querySelectorAll('.lang-toggle button');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (lang === 'en') buttons[1].classList.add('active');
    else buttons[0].classList.add('active');
}

// --- 5. FUNGSI MODAL DETAIL PROJECT ---
function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // KHUSUS UNTUK VIDEO: Putar video saat popup dibuka
    const video = modal.querySelector('video');
    if (video) {
        video.play();
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';

    // KHUSUS UNTUK VIDEO: Hentikan dan reset ke detik 0
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Tutup modal jika klik di luar kotak
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = 'auto';
        closeModal(event.target.id);
    }
}

// --- 6. FUNGSI SLIDER KHUSUS MODAL SAMSUNG ---
let modalSlideIndex = 0;

function moveModalSlide(n, modalId, event) {
    event.preventDefault(); 
    const modal = document.getElementById(modalId);
    const slides = modal.querySelectorAll('.modal-slide');

    modalSlideIndex += n;

    if (modalSlideIndex >= slides.length) modalSlideIndex = 0;
    if (modalSlideIndex < 0) modalSlideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[modalSlideIndex].classList.add('active');
}