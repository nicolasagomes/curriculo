let currentIndex = 0;

function showNextImage() {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos
