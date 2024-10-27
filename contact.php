<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération et sécurisation des données
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validation des champs
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Paramètres de l'email
        $to = "maevadedoh@gmail.com"; // Remplacez par votre adresse email
        $subject = "Nouveau message de contact de $name";
        $body = "Nom: $name\n";
        $body .= "Email: $email\n\n";
        $body .= "Message:\n$message";

        // Entêtes de l'email
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Merci pour votre message ! Nous vous contacterons bientôt.";
        } else {
            echo "Une erreur est survenue. Veuillez réessayer plus tard.";
        }
    } else {
        echo "Veuillez remplir tous les champs correctement.";
    }
} else {
    echo "Méthode de requête invalide.";
}


if (mail($to, $subject, $body, $headers)) {
    header("Location: merci.html"); // Page de confirmation de succès
    exit;
} else {
    echo "Une erreur est survenue. Veuillez réessayer plus tard.";
}

?>

