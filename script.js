// script.js

// Função para abrir o modal
function openModal(videoSrc) {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    
    modalVideo.src = videoSrc;
    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    
    modal.style.display = 'none';
    modalVideo.src = ''; // Limpa o src para parar o vídeo
}

// Adiciona os eventos de click para abrir o modal
document.querySelectorAll('.service-item, .course-item').forEach(item => {
    item.addEventListener('click', () => {
        const videoSrc = item.getAttribute('data-video');
        openModal(videoSrc);
    });
});

// Adiciona o evento de click para fechar o modal
document.querySelector('.modal .close').addEventListener('click', closeModal);

// Fecha o modal se clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target == document.getElementById('video-modal')) {
        closeModal();
    }
});
