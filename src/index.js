document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementById('target');
    const target2 = document.getElementById('target2');
    const target3 = document.getElementById('target3');
    const target4 = document.getElementById('target4');
  
    const options = {
      root: null, // Esto es el viewport
      rootMargin: '0px',
      threshold: 0.5 // Umbral de visibilidad en el viewport (0.5 significa 50% visible)
    };
  
    function scrollHander(target, selector, negX, posX){
        const callback = (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                console.log('El elemento es visible');
                anime({
                  targets: selector,
                  translateX: posX+'px'
                });
              } else {
                console.log('El elemento no es visible');
                anime({
                  targets: target,
                  translateX: negX+'px'
                });
              }
            });
          };
        
          const observer = new IntersectionObserver(callback, options);
          observer.observe(target);
    }
    scrollHander(target, '#target', -100, 50);
    scrollHander(target2, '#target2', 150, -0);
    scrollHander(target3, '#target3', -100, 50);
    scrollHander(target4, '#target4', 150, -0);
  });
  