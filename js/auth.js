// Función para validar el formulario
const auth = new URLSearchParams(window.location.search)

const name = auth.get('name')
console.log(name)

const password = auth.get('password');
console.log(password)

// Función para cargar y validar usuarios desde JSON
fetch('../js/usuarios.json')
    .then(response => response.json())
    .then(users => {
        const user = users.find(user => user.name === name && user.password === password)
        if (user !== null) {
            window.location.href = 'blog.html'
        } else {
            alert('Datos incorrectos')
            window.location.href = 'login.html' 
        }
    })





