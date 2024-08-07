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

function sendWhatsapp() {
  const phoneNumber = "1234567890"; // Reemplaza con el número de teléfono real
  const message = "Hola, me gustaría obtener más información."; // Mensaje predefinido

  document.querySelector(
    ".whatsapp-button"
  ).href = `https://api.whatsapp.com/send?phone=${554198262582}&text=${encodeURIComponent(
    message
  )}`;
}
sendWhatsapp();

function sendEmail(form) {
  (function () {
    emailjs.init("l_OMzszswABuNt3Ux"); // Reemplaza TU_USER_ID con tu ID de usuario de EmailJS
  })();

  // Manejar el envío del formulario
  document.getElementById(form).addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Parámetros del servicio EmailJS
    const serviceID = "service_trp24em"; // Reemplaza TU_SERVICE_ID con tu ID de servicio de EmailJS
    const templateID = "template_u7zwtbd"; // Reemplaza TU_TEMPLATE_ID con tu ID de plantilla de EmailJS

    // Enviar el formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this).then(
      function () {
        alert("Mail sent successfully!");
      },
      function (error) {
        alert("Error sending email: " + JSON.stringify(error));
      }
    );
  });
}
document
  .getElementById("selector-lang")
  .addEventListener("change", function () {
    const idioma = this.value;
    switchLang(idioma);
  });
function switchLang(idioma) {
    let titleHead = document.getElementById("title-head");
    let elementsAll = document.childNodes[1].childNodes[2].children;
    let nav = elementsAll[1];
    let header = elementsAll[2];
    let section1 = elementsAll[3];
    let section2 = elementsAll[4];
    let section3 = elementsAll[5];
    let section5 = elementsAll[6];
    let section6 = elementsAll[7];

    fetch(`lang/${idioma}.json`)
      .then((response) => response.json())
      .then((data) => {
        nav.children[1].children[0].children[0].children[0].children[1].innerHTML =
          data.started;
        nav.children[1].children[0].children[1].children[0].children[1].innerHTML =
          data.servicios;
        nav.children[1].children[0].children[2].children[0].children[1].innerHTML =
          data["why-we"];
        nav.children[1].children[0].children[3].children[0].children[1].innerHTML =
          data["contact-us"];

        header.children[1].children[0].children[0].children[0].innerHTML =
          data.transforma;
        header.children[1].children[0].children[0].children[1].innerHTML =
          data.innovacion;

        header.children[1].children[0].children[1].children[0].children[1].innerHTML =
          data["enviar_whatsapp"];
        header.children[1].children[0].children[1].children[2].innerHTML =
          data["envianos_correo"];
        header.children[1].children[0].children[1].children[4].children[0].children[0].innerHTML =
          data.nombre;
        header.children[1].children[0].children[1].children[4].children[1].children[0].innerHTML =
          data["correo_electronico"];
        header.children[1].children[0].children[1].children[4].children[2].children[0].innerHTML =
          data.mensaje;
        header.children[1].children[0].children[1].children[4].children[3].innerHTML =
          data["enviar_correo"];

        section1.children[0].children[0].innerHTML = data.bienvenido;
        section1.children[0].children[1].children[0].innerHTML =
          data.introduccion;
        section2.children[0].children[0].innerHTML = data.servicios;
        section2.children[0].children[1].children[0].children[0].children[0].innerHTML =
          data["desarrollo_software"];
        section2.children[0].children[1].children[0].children[1].innerHTML =
          data["descripcion_desarrollo_software"];
        section2.children[0].children[1].children[1].children[0].children[0].innerHTML =
          data["diseno_web"];
        section2.children[0].children[1].children[1].children[1].innerHTML =
          data["descripcion_diseno_web"];
        section2.children[0].children[1].children[2].children[0].children[0].innerHTML =
          data["optimizacion"];
        section2.children[0].children[1].children[2].children[1].innerHTML =
          data["descripcion_optimizacion"];
        section3.children[0].children[0].innerHTML = data["porque_elegirnos"];
        section3.children[0].children[1].children[0].children[0].innerHTML =
          data.experiencia;
        section3.children[0].children[1].children[0].children[1].innerHTML =
          data["soluciones_personalizadas"];
        section3.children[0].children[1].children[0].children[2].innerHTML =
          data["enfoque_resultados"];
        section3.children[0].children[1].children[0].children[3].innerHTML =
          data["compromiso_calidad"];
          section5.children[0].children[0].innerHTML = data.testimonios;
          section5.children[0].children[1].children[0].innerHTML = data.testimonio1;
          section5.children[0].children[2].children[0].innerHTML = data.testimonio2;
          section6.children[0].children[0].innerHTML = data.contacto;
          section6.children[0].children[1].innerHTML = data.descripcion_contacto;
          section6.children[0].children[2].children[0].children[0].innerHTML = data.nombre;
          section6.children[0].children[2].children[1].children[0].innerHTML = data.correo_electronico;
          section6.children[0].children[2].children[2].children[0].innerHTML = data.mensaje;
          section6.children[0].children[2].children[3].children[0].innerHTML = data.enviar_correo;
          section6.children[0].children[2].children[3].children[1].innerHTML = data.tambien_puedes;
          section6.children[0].children[2].children[3].children[2].children[1].innerHTML = data.enviar_whatsapp;
          elementsAll[8].children[0]. innerHTML = data.footer;
          elementsAll[8].children[1]. innerHTML = data.redes_sociales;
        console.log(elementsAll[8].children);
      })
      .catch((error) =>
        console.error("Error al cargar el archivo de idioma:", error)
      );
  
}

sendEmail("form-header");
sendEmail("form-last");
