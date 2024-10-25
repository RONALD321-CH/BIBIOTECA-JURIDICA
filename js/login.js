// Obtener los elementos del DOM
const $submit = document.getElementById("submit");
const $password = document.getElementById("password");
const $username = document.getElementById("username");
const $visible = document.getElementById("visible");

// Función para mostrar/ocultar la contraseña
document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if ($visible.checked === false) {
            $password.type = "password";
        } else {
            $password.type = "text";
        }
    }
});

// Agregar la validación al hacer clic en el botón de enviar
document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        // Usuario y contraseña correctos
        const correctUsername = "admin1234";
        const correctPassword = "456";
        
        // Validar que los campos no estén vacíos
        if ($password.value !== "" && $username.value !== "") {
            // Verificar si coinciden con el usuario y contraseña esperados
            if ($username.value === correctUsername && $password.value === correctPassword) {
                e.preventDefault(); // Evita el comportamiento predeterminado
                window.location.href = "home.html"; // Redirige a la página de inicio
            } else {
                // Mostrar mensaje de error si no coinciden
                alert("Usuario o contraseña incorrectos.");
            }
        } else {
            // Mostrar mensaje de error si los campos están vacíos
            alert("Por favor, complete ambos campos.");
        }
    }
});



