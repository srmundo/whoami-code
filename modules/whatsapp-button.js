let wButton = document.querySelectorAll('#whatsappButton');

wButton.forEach(e=>{
    e.addEventListener('click', function() {
        const phoneNumber = '554198262582'; // Número de teléfono en formato internacional (sin el signo +)
        const message = 'Hello, I have a project in mind, how can you help me?'; // Mensaje predefinido
    
        // Codificar el mensaje para que sea compatible con la URL
        const encodedMessage = encodeURIComponent(message);
    
        // Crear la URL para WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
        // Redirigir al usuario a la URL de WhatsApp
        window.open(whatsappUrl, '_blank');
    });
});