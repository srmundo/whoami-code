// Inicializar EmailJS
(function() {
    emailjs.init("l_OMzszswABuNt3Ux"); // Reemplaza TU_USER_ID con tu ID de usuario de EmailJS
  })();

  // Manejar el envío del formulario
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Parámetros del servicio EmailJS
    const serviceID = 'service_trp24em'; // Reemplaza TU_SERVICE_ID con tu ID de servicio de EmailJS
    const templateID = 'template_u7zwtbd'; // Reemplaza TU_TEMPLATE_ID con tu ID de plantilla de EmailJS

    // Enviar el formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
      .then(function() {
        alert('Mail sent successfully!');
      }, function(error) {
        alert('Error sending email: ' + JSON.stringify(error));
      });
  });