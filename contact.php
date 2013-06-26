<?php
include 'contact_config.php';
error_reporting (E_ALL ^ E_NOTICE);
$post = (!empty($_POST)) ? true : false;
if($post)
{
    include 'functions.php';

    $name = stripslashes($_POST['name']);
    $email = $_POST['email'];
    $message = stripslashes($_POST['message']);
     $phone = $_POST['phone'];
    $error = array();
    // Check name
    if(!$name)
    {
        $error[] = 'Porfavor ingrese su nombre.';
    }

    // Check email
    if(!$email)
    {
        $error[] = 'Porfabor ingresa tu correo.';
    }

    if($email && !ValidateEmail($email))
    {
        $error[] = 'Porfavor ingresa un correo valido.';
    }
    if(!$phone)
    {
        $error[] = 'Porfavor ingrese su telefono.';
    }

    // Check message (length)
    if(!$message || strlen($message) < 15)
    {
        $error[] = "Porfavor ingresa un mensaje de mas de 15 caracteres.";
    }

    if(!$error)
    {
        $headers = 'From: '. WEBMASTER_EMAIL . "\r\n" .
            'Reply-To: '. WEBMASTER_EMAIL . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        $mail = mail(WEBMASTER_EMAIL, $message, $headers);

        mail($to, $message, $headers);

        if($mail)
        {
            echo json_encode(array('status' => 'OK'));
        }
        else
        {
            echo json_encode(array('status' => 'error', 'text' => array('Error')));
        }
    }
    else
    {
        echo json_encode(array('status' => 'error', 'text' => $error));
    }
}
?>
