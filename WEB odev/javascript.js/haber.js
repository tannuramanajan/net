function toggleDetails(element) {
    const details = element.parentElement.querySelector('.news-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        element.textContent = 'Kapat';
    } else {
        details.style.display = 'none';
        element.textContent = 'Devamını Oku';
    }
}