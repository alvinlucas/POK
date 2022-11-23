<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Formulaire contact</title>
</head>

<body>
    <?php
        if(isset($_POST['submit'])) {
            $retour = mail('alvin44.lucas@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], '');
            if ($retour)
                echo '<p>Votre message a bien été envoyé.</p>';
        } else {
            echo('Votre mail n\'a pas été envoyé' );
        }
    ?>



    <?php
   
    ?>
</body>
</html>