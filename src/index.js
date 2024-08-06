document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("target");
  const target2 = document.getElementById("target2");
  const target3 = document.getElementById("target3");
  const target4 = document.getElementById("target4");
  const header = document.getElementById("header");

  const options = {
    root: null, // Esto es el viewport
    rootMargin: "0px",
    threshold: 0.5, // Umbral de visibilidad en el viewport (0.5 significa 50% visible)
  };

  function scrollHander(target, selector, negX, posX, clock = false) {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: selector,
            translateX: posX + "px",
          });
          
        } else {
          anime({
            targets: target,
            translateX: negX + "px",
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  }
  scrollHander(header, "#header", 0, 0, true);
  scrollHander(target, "#target", -100, 50);
  scrollHander(target2, "#target2", 150, -0);
  scrollHander(target3, "#target3", -100, 50);
  scrollHander(target4, "#target4", 150, -0);
});

function sendWhatsapp(){
    const phoneNumber = '1234567890'; // Reemplaza con el número de teléfono real
    const message = 'Hola, me gustaría obtener más información.'; // Mensaje predefinido

    document.querySelector('.whatsapp-button').href = `https://api.whatsapp.com/send?phone=${554198262582}&text=${encodeURIComponent(message)}`;

}
sendWhatsapp();

function sendEmail(form){
    
    (function() {
        emailjs.init("l_OMzszswABuNt3Ux"); // Reemplaza TU_USER_ID con tu ID de usuario de EmailJS
      })();

     // Manejar el envío del formulario
    document.getElementById(form).addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario
  
        // Parámetros del servicio EmailJS
        const serviceID = 'service_trp24em'; // Reemplaza TU_SERVICE_ID con tu ID de servicio de EmailJS
        const templateID = 'template_u7zwtbd'; // Reemplaza TU_TEMPLATE_ID con tu ID de plantilla de EmailJS
  
        // Enviar el formulario usando EmailJS
        emailjs.sendForm(serviceID, templateID, this)
          .then(function() {
            alert('Correo enviado con éxito!');
          }, function(error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
          });
      }); 

}

sendEmail("form-header");