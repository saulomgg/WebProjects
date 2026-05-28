// ===== CLOCK UPDATE =====
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    const headerTime = document.getElementById('headerTime');
    if (headerTime) {
        headerTime.textContent = timeString;
    }
}

// Update clock every minute
setInterval(updateClock, 60000);
updateClock();

// ===== USER NAME STORAGE =====
function initializeUserProfile() {
    const userName = localStorage.getItem('noe_user_name');
    const userAvatar = localStorage.getItem('noe_user_avatar');
    
    if (userName) {
        const userNameEl = document.getElementById('userName');
        if (userNameEl) {
            userNameEl.textContent = userName;
        }
    }
    
    if (userAvatar) {
        const avatarEl = document.getElementById('userAvatar');
        if (avatarEl) {
            avatarEl.textContent = userAvatar;
        }
    }
}

// ===== NAVIGATION =====
function navigateTo(url) {
    if (url.startsWith('http')) {
        window.open(url, '_blank');
    } else {
        window.location.href = url;
    }
}

// ===== GLITCH TEXT ANIMATION =====
function initGlitchText() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(el => {
        const text = el.getAttribute('data-text') || el.textContent;
        el.setAttribute('data-text', text);
    });
}

// ===== CARD ANIMATIONS =====
function initCardAnimations() {
    const cards = document.querySelectorAll('.app-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.content-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// ===== CYBER EFFECT ON CLICK =====
function initCyberClickEffect() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.app-card') || e.target.closest('.btn-cta')) {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: fixed;
                pointer-events: none;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(0, 212, 255, 0.8) 0%, transparent 70%);
                width: 100px;
                height: 100px;
                left: ${e.clientX - 50}px;
                top: ${e.clientY - 50}px;
                animation: cyberRipple 0.6s ease-out forwards;
                z-index: 9999;
            `;
            
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        }
    });
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cyberRipple {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== SERVICE WORKER REGISTRATION =====
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../sw.js').catch(err => {
            console.log('SW registration failed:', err);
        });
    }
}

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', () => {
    initializeUserProfile();
    initGlitchText();
    initCardAnimations();
    initScrollReveal();
    initCyberClickEffect();
    initServiceWorker();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC to go back
        if (e.key === 'Escape') {
            const backBtn = document.querySelector('.btn-back');
            if (backBtn) {
                backBtn.click();
            }
        }
    });
});

// ===== PREVENT SCROLL BOUNCE ON MOBILE =====
document.addEventListener('touchmove', (e) => {
    if (e.target.closest('.app-main') || e.target.closest('.page-main')) {
        return;
    }
}, { passive: false });
