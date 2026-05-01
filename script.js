document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('back-to-top');

    // Elementos do Menu Mobile
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav a');

    // ==========================================
    // LÓGICA DO MENU MOBILE (HAMBÚRGUER)
    // ==========================================
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        menuToggle.classList.toggle('is-active');
    });

    // Fecha o menu automaticamente quando clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-active');
            menuToggle.classList.remove('is-active');
        });
    });

    // ==========================================
    // LÓGICA DE SCROLL (HEADER E BOTÃO TOPO)
    // ==========================================
    window.addEventListener('scroll', () => {
        // Encolhe o Header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Mostra o botão Voltar ao Topo depois de descer 500px
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // ==========================================
    // FUNÇÃO: VOLTAR AO TOPO SUAVEMENTE
    // ==========================================
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
