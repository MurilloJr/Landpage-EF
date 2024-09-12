/* styles.css */

/* Estilos globais */
body {
    font-family: 'Arial', sans-serif;
    color: #333;
    margin: 0;
    padding: 0;
    background-image: url('assets/Logo_EF.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Estilo do cabeçalho */
header {
    background: rgba(0, 0, 0, 0.7); /* Fundo escuro e transparente */
    color: rgb(212, 175, 55);
    padding: 20px 0;
    position: fixed;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-bottom: 3px solid rgb(212, 175, 55);
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20px;
}

.site-info {
    flex: 2;
    text-align: center;
}

.site-title {
    color: rgb(212, 175, 55);
    font-size: 2.5em;
    margin: 0;
    font-family: 'Poppins', sans-serif; /* Fonte alterada para Poppins */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.tagline {
    color: #fff;
    font-size: 1.2em;
    margin-top: 5px;
    font-style: italic;
}

nav {
    flex: 1;
    text-align: right;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
    justify-content: center; /* Centraliza os itens no nav */
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: rgb(212, 175, 55);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    position: relative;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: rgb(241, 196, 15);
}

nav ul li a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: rgb(212, 175, 55);
    transition: width 0.3s;
}

nav ul li a:hover::after {
    width: 100%;
}

/* Seção de Hero */
#hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('assets/hero-background.jpg') no-repeat center center;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding: 120px 20px;
    min-height: 500px;
}

.hero-image img {
    width: 180px;
    height: auto;
    border-radius: 50%;
    border: 3px solid rgb(212, 175, 55);
    margin-bottom: -30px;
    margin-top: 70px;
    filter: grayscale(100%) opacity(0.8);
    transition: filter 0.3s ease;
}

.hero-image img:hover {
    filter: grayscale(0%) opacity(1);
}

.hero-content h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif; /* Fonte alterada para Poppins */
}

.hero-content p {
    font-size: 1.2em;
    margin-bottom: 30px;
}

.btn-primary {
    background-color: rgb(212, 175, 55);
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1.1em;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: rgb(241, 196, 15);
}

/* Seção de Serviços */
#services {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 60px 20px;
    text-align: center;
}

#services h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    font-family: 'Poppins', sans-serif; /* Fonte alterada para Poppins */
    color: rgb(212, 175, 55);
}

.services-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.service-item {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1 1 calc(33.333% - 40px);
    box-sizing: border-box;
    cursor: pointer; /* Adicionado para indicar que é clicável */
}

/* Seção de Cursos */
#courses {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 60px 20px;
    text-align: center;
}

#courses h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    font-family: 'Poppins', sans-serif; /* Fonte alterada para Poppins */
    color: rgb(212, 175, 55);
}

.courses-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.course-item {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1 1 calc(33.333% - 40px);
    box-sizing: border-box;
    cursor: pointer; /* Adicionado para indicar que é clicável */
}

/* Seção de Contato */
#contact {
    background-color: rgba(212, 175, 55, 0.8);
    padding: 60px 0;
    text-align: center;
    color: #fff;
}

#contact h3 {
    font-size: 2em;
    margin-bottom: 30px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-details {
    margin-bottom: 20px;
}

.contact-details p {
    margin: 10px 0;
    font-size: 1.1em;
    color: #333;
}

.contact-details a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
}

.contact-details a:hover {
    color: rgb(241, 196, 15);
}

.social-links {
    margin-top: 20px;
}

.social-links a {
    display: inline-block;
    margin: 0 10px;
}

.social-links img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease, opacity 0.3s ease; /* Adicionando transição para opacidade */
    opacity: 0.9; /* Transparência inicial */
}

.social-links img:hover {
    transform: scale(1.1);
    opacity: 1; /* Transparência reduzida após hover */
}

/* Rodapé */
footer {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px 0;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
}

footer p {
    margin: 0;
    font-size: 1em;
}

/* Estilo para o modal */
.modal {
    display: none; /* Ocultar modal por padrão */
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
}

.modal-content {
    position: relative;
    width: 90%;
    max-width: 500px;
    margin: 5% auto;
    padding: 0;
    background-color: #fff;
    border-radius: 8px;
}

.modal-content video {
    width: 100%;
    height: auto;
    max-width: 100%; /* Garante que o vídeo não exceda a largura do modal */
}

/
