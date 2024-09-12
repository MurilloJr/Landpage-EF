document.addEventListener("DOMContentLoaded", function() {
    const serviceItems = document.querySelectorAll('.service-item');
    const courseItems = document.querySelectorAll('.course-item');
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModal = document.querySelector('.modal .close');

    function openModal(videoSrc) {
        modalVideo.src = videoSrc;
        modal.style.display = 'block';
    }

    function closeModalFn() {
        modal.style.display = 'none';
        modalVideo.src = ''; // Stop video when modal is closed
    }

    // Add click event listeners to service items
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            openModal(videoSrc);
        });
    });

    // Add click event listeners to course items
    courseItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            openModal(videoSrc);
        });
    });

    // Add click event listener to close button
    closeModal.addEventListener('click', closeModalFn);

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalFn();
        }
    });
});
