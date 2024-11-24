document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1];
        const targetSection = document.querySelector(`#${targetId}`);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = this.getAttribute('href');
        }
    });
});

const tableRows = document.querySelectorAll('table tbody tr');
tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = '#00bfff';
        row.style.color = '#000';
        row.style.transition = 'background-color 0.3s, color 0.3s';
    });
    row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = '';
        row.style.color = '';
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const hours = new Date().getHours();
    let greeting = '¡Bienvenido!';
    if (hours >= 6 && hours < 12) {
        greeting = '¡Buenos días! 💪 Prepárate para un gran entrenamiento.';
    } else if (hours >= 12 && hours < 18) {
        greeting = '¡Buenas tardes! 🏋️‍♂️ Sigue esforzándote para alcanzar tus metas.';
    } else {
        greeting = '¡Buenas noches! 🧘‍♂️ Relájate y recarga energías.';
    }
    alert(greeting);
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        
        alert(`¡Gracias, ${name}! Hemos recibido tu mensaje. Te hemos enviado un correo a ${email}.`);
        
        this.reset();
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});
