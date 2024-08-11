let allStep = document.querySelectorAll(".step h3");
let allP = document.querySelectorAll(".step p");
let allUl = document.querySelectorAll(".step ul");
let containerStep = document.querySelectorAll(".step");
if (window.innerWidth <= 900) {
  containerStep.forEach((element, index) => {
    // Configuramos el IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // El elemento ha entrado en el viewport
            allP.forEach((e, idx) => {
              if (idx === index) {
                e.style.opacity = "1";
              }
            });
            allUl.forEach((e, idx) => {
              if (idx === index) {
                e.style.opacity = "1";
              }
            });
          } else {
            // El elemento ha salido del viewport
            allP.forEach((e, idx) => {
              if (idx === index) {
                e.style.opacity = "0";
              }
            });
            allUl.forEach((e, idx) => {
              if (idx === index) {
                e.style.opacity = "0";
              }
            });
          }
        });
      },
      {
        threshold: 1, // Configuración: El elemento debe estar al 50% visible para activar el evento
      }
    );
    // Empezamos a observar el elemento
    observer.observe(element);
  });
}
allStep.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    allP.forEach((e, idx) => {
      if (idx === index) {
        e.style.opacity = "1";
      }
    });
    allUl.forEach((e, idx) => {
      if (idx === index) {
        e.style.opacity = "1";
      }
    });
  });
  element.addEventListener("mouseout", () => {
    allP.forEach((e, idx) => {
      if (idx === index) {
        e.style.opacity = "0";
      }
    });
    allUl.forEach((e, idx) => {
      if (idx === index) {
        e.style.opacity = "0";
      }
    });
  });
});
