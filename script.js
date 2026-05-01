const scriptURL = 'https://script.google.com/macros/s/AKfycbyMcs6xKTii0cE87NLLcQh6ciwVF3b6n2AuYxpFPO5aqrqY_VH49J6yLVP7Mlbnu-0k/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("form-msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  msg.innerHTML = "Sending..."
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){ msg.innerHTML = "" }, 5000)
        form.reset()
    })
    .catch(error => {
        msg.innerHTML = "Error! Please try again."
        console.error('Error!', error.message)
    })
})

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('visible');
        }
    }
}
reveal();
