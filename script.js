const form = document.getElementById("form");
const container = document.querySelector('.contact-container');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    container.innerHTML = '<p class="final-msg"> Thanks for your message. <br/> I will get back to you soon'
})