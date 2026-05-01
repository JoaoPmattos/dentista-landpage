document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('back-to-top');

    // Monitora a rolagem da página para o Header e o botão Voltar
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

    // Função para subir ao topo clicando no botão novo
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});