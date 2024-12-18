function copyEmail() {
    var email = document.getElementById("email").innerText;

    
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = email;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('gallery-container');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    const images = galleryContainer.getElementsByTagName('img');
    const totalImages = images.length;
    let currentIndex = 0;

    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function updateGalleryPosition() {
        const offset = -currentIndex * (images[0].width + 20); 
        galleryContainer.style.transform = `translateX(${offset}px)`;
    }

    
    rightArrow.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateGalleryPosition();
        }
    });

    
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateGalleryPosition();
        }
    });

   
    Array.from(images).forEach((image, index) => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = image.src;
            currentIndex = index;
        });
    });

    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            modalImage.src = images[currentIndex].src;
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            modalImage.src = images[currentIndex].src;
        }
    });

    
    setInterval(() => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateGalleryPosition();
    }, 3000); 
});
