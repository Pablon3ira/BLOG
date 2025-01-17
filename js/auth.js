// Función para validar el formulario
const auth = new URLSearchParams(window.location.search);

const name = auth.get('name');
console.log(name);

const password = auth.get('password');
console.log(password);

// Función para cargar y validar usuarios desde JSON
fetch('/js/usuarios.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(users => {
        const user = users.find(user => user.name === name && user.password === password);
        if (user !== undefined) {
            window.location.replace('blog.html');
        } else {
            alert('Datos incorrectos');
            window.location.replace('login.html');
        }
    })
    .catch(error => {
        console.error('Hubo un problema con la petición Fetch:', error);
        alert('Error al cargar los datos de usuario. Intente nuevamente más tarde.');
    });



