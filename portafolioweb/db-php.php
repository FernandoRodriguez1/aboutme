<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json");



include("con_db.php");

if (isset($_POST["register"])) {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);
    $release_date = date("Y-m-d"); 
    if ($connect) {
        ?>
            <h3 class="ok">Se envió correctamente el formulario</h3>
        <?php
    }
    if (strlen($name) > 0 && strlen($email) > 0 && strlen($message)>0 ) {
        $consulta = "INSERT INTO data_form (name_user, email_user, message_user, release_date) VALUES ('$name', '$email', '$message', '$release_date')";
        $resultado = mysqli_query($connect, $consulta);
        if ($resultado) {
            ?>
            <h3 class="ok">Se envió correctamente el formulario</h3>
            <?php
        } else {
            ?>
            <h3 class="bad">ERROR</h3>
            <?php
        }
    } else {
        ?>
        <h3 class="bad">Complete los campos para enviar</h3>
        <?php
    }
}
?>
