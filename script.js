// ========== TWO GATES ENTRANCE SYSTEM ==========
const gatesContainer = document.getElementById('gatesContainer');
const mainContent = document.getElementById('mainContentWrapper');
const openGatesBtn = document.getElementById('openGatesBtn');
const leftGate = document.querySelector('.gate-left');
const rightGate = document.querySelector('.gate-right');

function openGates() {
    leftGate.classList.add('swing-open');
    rightGate.classList.add('swing-open');
    
    setTimeout(() => {
        gatesContainer.classList.add('hide-gates');
        setTimeout(() => {
            gatesContainer.style.display = 'none';
        }, 500);
    }, 800);
    
    setTimeout(() => {
        mainContent.classList.add('reveal-main');
        startTypingAnimation();
        startScrollReveal();
    }, 900);
}

if (openGatesBtn) {
    openGatesBtn.addEventListener('click', openGates);
}

document.querySelectorAll('.gate-handle').forEach(handle => {
    handle.addEventListener('click', function(e) {
        e.stopPropagation();
        openGates();
    });
});

// ========== TYPING ANIMATION ==========
const roles = ['Web Developer', 'Graphic Designer', 'IT Graduate'];
let roleIdx = 0, charIdx = 0, deleting = false;
let roleText = null;
let typingTimeout = null;

function startTypingAnimation() {
    roleText = document.getElementById('roleText');
    if (!roleText) return;
    typeRole();
}

function typeRole() {
    if (!roleText) return;
    const current = roles[roleIdx];
    if (deleting) {
        roleText.textContent = current.substring(0, charIdx - 1);
        charIdx--;
    } else {
        roleText.textContent = current.substring(0, charIdx + 1);
        charIdx++;
    }
    if (!deleting && charIdx === current.length) {
        deleting = true;
        typingTimeout = setTimeout(typeRole, 2000);
        return;
    }
    if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingTimeout = setTimeout(typeRole, 500);
        return;
    }
    typingTimeout = setTimeout(typeRole, deleting ? 80 : 120);
}

// ========== SCROLL REVEAL ==========
function startScrollReveal() {
    const revealElements = document.querySelectorAll('.info-card, .project, .achievement');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.5s ease';
        revealObserver.observe(el);
    });
}

window.addEventListener('load', function() {
    if (gatesContainer.style.display === 'none') {
        startTypingAnimation();
        startScrollReveal();
    }
});
