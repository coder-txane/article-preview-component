const shareButton = document.querySelector('.share-icon');
const shareButtonDark = document.querySelector('.share-icon-dark');
const profileElement = document.querySelector('.profile-container');
const shareElement = document.getElementById('share-container');

// sets initial states

if (window.innerWidth < 601) {
    profileElement.style.display = 'flex';
    shareElement.style.display = 'none';
} else {
    profileElement.style.display = 'flex';
    shareElement.style.display = 'none';
}

const toggleShareElement = () => {
    if (window.innerWidth < 601) {
        profileElement.style.display = (profileElement.style.display === 'flex') ? 'none' : 'flex';
        shareElement.style.display = (profileElement.style.display === 'flex') ? 'none' : 'flex';
    } else {
        shareElement.style.display = (shareElement.style.display === 'flex') ? 'none' : 'flex';
    }
};

shareButton.addEventListener("click", toggleShareElement);
shareButtonDark.addEventListener("click", toggleShareElement);