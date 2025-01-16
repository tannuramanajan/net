document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const container = document.querySelector('.container');


    sections[0].classList.add('visible');

    container.addEventListener('scroll', () => {
        const scrollPosition = container.scrollTop + window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - container.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    });


    const magnifier = document.querySelector('.magnifier');
    const magnifyingText = document.querySelector('.magnifying-text');

    magnifyingText.addEventListener('mousemove', (event) => {
        magnifier.style.display = 'block';
        const mouseX = event.pageX;
        const mouseY = event.pageY;


        magnifier.style.left = mouseX - magnifier.offsetWidth / 2 + 'px';
        magnifier.style.top = mouseY - magnifier.offsetHeight / 2 + 'px';
    });

    magnifyingText.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
    });
});