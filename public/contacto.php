<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $empresa = strip_tags(trim($_POST["company"]));
    $telefono = strip_tags(trim($_POST["phone"]));
    $servicio = strip_tags(trim($_POST["service"]));
    $mensaje = strip_tags(trim($_POST["message"]));

    // Configuración del correo
    $destinatario = "contacto@gadyt.es"; // Cambia esto si quieres recibirlo en otro mail
    $asunto = "Nuevo mensaje de contacto web: $servicio";

    // Construir el cuerpo del mensaje
    $contenido = "Has recibido un nuevo mensaje desde la web gadyt.es:\n\n";
    $contenido .= "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Empresa: $empresa\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Servicio de interés: $servicio\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Cabeceras del email
    $headers = "From: web@gadyt.es\r\n"; // Es mejor que el 'From' sea un dominio propio para evitar SPAM
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        http_response_code(200);
        echo "¡Gracias! Tu mensaje ha sido enviado.";
    } else {
        http_response_code(500);
        echo "Error: No se pudo enviar el mensaje.";
    }
} else {
    http_response_code(403);
    echo "Hubo un problema con tu envío, por favor inténtalo de nuevo.";
}
?>
