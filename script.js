const imageUpload = document.getElementById('imageUpload');
const profileImage = document.getElementById('profileImage');

imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
            localStorage.setItem('savedPhoto', e.target.result);
        }
        reader.readAsDataURL(file);
    }
});

const savedPhoto = localStorage.getItem('savedPhoto');
if (savedPhoto) {
    profileImage.src = savedPhoto;
}