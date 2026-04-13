// Seleção dos elementos
const mobileMenuIcon = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-links');

// Abre e fecha o menu ao clicar no ícone hambúrguer
mobileMenuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fecha o menu automaticamente ao clicar em um link (melhor usabilidade)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Clique Secreto Admin (5x no logo)
let clicks = 0;
document.getElementById('logo-admin-trigger').addEventListener('click', () => {
    clicks++;
    if(clicks === 5) {
        alert("Painel Administrativo Habilitado!");
        clicks = 0;
    }
});









