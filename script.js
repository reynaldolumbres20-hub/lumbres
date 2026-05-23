// Image Upload
const imageUpload = document.getElementById('imageUpload');
const profileImage = document.getElementById('profileImage');
const uploadStatus = document.getElementById('uploadStatus');

const savedPhoto = localStorage.getItem('savedPhoto');
if (savedPhoto && profileImage) {
    profileImage.src = savedPhoto;
}

if (imageUpload) {
    imageUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                uploadStatus.innerHTML = '❌ File too large (max 2MB)';
                uploadStatus.style.color = '#ff6b6b';
                setTimeout(() => uploadStatus.innerHTML = '', 3000);
                return;
            }
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                localStorage.setItem('savedPhoto', e.target.result);
                uploadStatus.innerHTML = '✅ Profile updated!';
                uploadStatus.style.color = '#4ecdc4';
                setTimeout(() => uploadStatus.innerHTML = '', 3000);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Typing Animation
const roles = ['Web Developer', 'Graphic Designer', 'IT Graduate'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedText = document.querySelector('.typed-text');

function typeEffect() {
    if (!typedText) return;
    const current = roles[roleIndex];
    if (isDeleting) {
        typedText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
        return;
    }
    setTimeout(typeEffect, isDeleting ? 100 : 150);
}
setTimeout(typeEffect, 500);

// Scroll Reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass-card, .project-card, .achievement-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.5s ease';
    revealObserver.observe(el);
});
