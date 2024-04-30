const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {

            event.preventDefault();

            const targetId = link.getAttribute('href');

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            link.classList.add('active');
        });
    });

// Function to check if an element is in the viewport
function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('.scroll-section');
    let activeSectionId = null;
    const offset = window.innerHeight * 0.5; // Adjust this value to fine-tune the scroll detection range

    sections.forEach(section => {
        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
            activeSectionId = section.getAttribute('id');
        }
    });

    if (activeSectionId) {
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSectionId}`) {
                link.classList.add('active');
            }
        });
    }
}


// Listen for scroll events
document.addEventListener('scroll', handleScroll);
