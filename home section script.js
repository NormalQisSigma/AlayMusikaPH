// Source: Home Section Script
          
let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(index) {
            slides.forEach(slide => slide.style.display = 'none');
            slides[index].style.display = 'block';
        }
        
        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }
        
        function prevSlide() {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            showSlide(slideIndex);
        }
        
        showSlide(slideIndex);

        
    // Get elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const thumbnails = document.querySelectorAll('.thumbnail');

// Open modal when a thumbnail is clicked
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = thumbnail.src; // Use the clicked image's source
    caption.innerHTML = thumbnail.alt; // Use the alt text as the caption
  });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
