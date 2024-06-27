// Función para validar el formulario
const auth = new URLSearchParams(window.location.search)

const username = auth.get('username')
console.log(username)

const password = auth.get('password');
console.log(password)

// Función para cargar y validar usuarios desde JSON
fetch('usuarios.json')
    .then(response => response.json())
    .then(users => {
        const user = users.find(user => user.username === username && user.password === password)
        if (user) {
            window.location.href = 'blog.html'
        } else {
            alert('Usuario incorrecto')
            window.location.href = 'login.html'
        }
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error))
