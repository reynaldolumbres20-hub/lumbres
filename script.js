// Image Upload Functionality
const imageUpload = document.getElementById('imageUpload');
const profileImage = document.getElementById('profileImage');

if (imageUpload) {
    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                localStorage.setItem('savedPhoto', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Load saved photo
const savedPhoto = localStorage.getItem('savedPhoto');
if (savedPhoto && profileImage) {
    profileImage.src = savedPhoto;
}

// Custom Cursor Animation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 50);
    });
    
    // Hover effect on clickable elements
    const hoverElements = document.querySelectorAll('a, button, .skill-tag, .project-item, .btn-primary, .btn-secondary');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
            cursorFollower.style.background = 'rgba(108, 99, 255, 0.2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
            cursorFollower.style.background = 'transparent';
        });
    });
}
