let isEnglish = true;

function toggleLanguage() {
    const button = document.querySelector('.lang-button');
    if (isEnglish) {
        button.textContent = '한국';
    } else {
        button.textContent = 'En';
    }
    isEnglish = !isEnglish;
}
