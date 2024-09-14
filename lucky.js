document.addEventListener("DOMContentLoaded", function() {
    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const aboutText = document.querySelector('.about-text');
    
    const aboutMe = ["HR Manager", "Content Writer", "Web Developer"];
    let aboutIndex = 0;

    function typeText(text, element, callback) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 100);
    }

    function eraseText(element, callback) {
        const interval = setInterval(() => {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 50);
    }

    function rotateAboutText() {
        eraseText(aboutText, () => {
            aboutIndex = (aboutIndex + 1) % aboutMe.length;
            typeText(aboutMe[aboutIndex], aboutText, () => {
                setTimeout(rotateAboutText, 2000);
            });
        });
    }

    rotateAboutText();

    // Skill Bars Animation
    const skillBars = document.querySelectorAll('.progress');

    function updateSkillBars() {
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage;
        });
    }

    const handleScroll = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                updateSkillBars();
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load

    // Add animation for landing page content
    const landingContent = document.querySelector('.landing-content');
    if (landingContent) {
        landingContent.classList.add('show');
    }
});

function toggleMenu() {
    const navbarNav = document.querySelector('.navbar-nav');
    navbarNav.style.display = navbarNav.style.display === 'block' ? 'none' : 'block';
}
