Matrix Colorizer - Chrome Extension

Matrix Colorizer est une extension Chrome que j'ai développée pour modifier toutes les couleurs CSS d'une page web. Elle permet aussi de choisir une couleur personnalisée et de l'appliquer facilement à toute la page via un raccourci clavier.
Fonctionnalités

    🎨 Sélecteur de couleur personnalisée : Permet de choisir n'importe quelle couleur pour personnaliser la page.
    🔄 Réinitialisation : Un bouton pour réinitialiser les couleurs à l'état initial.
    ⌨️ Raccourci clavier : Ctrl+Shift+M pour activer/désactiver rapidement le mode Matrix.
    💾 Sauvegarde automatique : Les préférences de couleur sont sauvegardées automatiquement.

Installation
Étape 1 : Télécharger et installer l'extension

    Clonez ou téléchargez le code source depuis ce dépôt GitHub.
    Ouvrez Chrome et allez à l'adresse suivante : chrome://extensions/.
    Activez le Mode développeur en haut à droite.
    Cliquez sur le bouton Charger l'extension non empaquetée.
    Sélectionnez le dossier de l'extension téléchargée pour l'ajouter à Chrome.

L'extension est maintenant installée et prête à être utilisée !
Étape 2 : Utilisation de l'extension

    Ouvrez l'extension depuis l'icône dans la barre d'outils de Chrome.
    Sélectionnez une couleur via le sélecteur.
    Cliquez sur Appliquer pour modifier la couleur de la page.
    Utilisez le raccourci Ctrl+Shift+M pour activer ou désactiver le mode Matrix rapidement.
    Cliquez sur Réinitialiser pour revenir à l'état initial.

Développement
Structure du projet

    manifest.json : Fichier de configuration de l'extension Chrome.
    popup.html : Interface utilisateur (popup) pour l'extension.
    popup.js : Logique JavaScript pour gérer les interactions.
    background.js : Gestion des événements en arrière-plan.

Fonctionnalités supplémentaires

    Page d'accueil React : Un tableau de bord d'administration avec un lien pour télécharger l'extension.
    Page de téléchargement : Instructions détaillées pour installer et utiliser l'extension.
    Page Bonus : Affiche une image aléatoire de l'API https://placebear.com/.
    API locale en Go : Expose l'heure actuelle via une API locale (/time).