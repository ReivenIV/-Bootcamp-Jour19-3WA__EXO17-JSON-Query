'use strict';

// AUCUN ECOUTEUR D'EVENEMENT ICI ILS SERONT DANS LE MAIN ICI CE SONT LES CALLBACK APPELEE PAR LES ECOUTEURS DU MAIN
/***************************************************************************************/
/**************************** EVENEMENTS CARNET D'ADRESSES *****************************/
/***************************************************************************************/
//fonction d'affichage du formulaire lors du click sur le boutton plus
function onClickAddContact(){

    // Réinitialisation du formulaire (efface les champs texte, etc.).
    let form = document.querySelector('#contact-form');
    // Basculement du formulaire en mode ajout puis affichage.
    form.classList.toggle('hide');
}
//fonction de suppression de tous les contacts
function onClickClearAddressBook(){

    // Sauvegarde d'un carnet d'adresse vide, écrasant le carnet d'adresse existant.
    saveAddressBook([])
    // Mise à jour de l'affichage.
    let suprimer = document.querySelector('#contact-details')
    suprimer.classList.add('hide')
    //on raffraichit le cahier d'adresse (fonction)
    refreshAddressBook()
}

//fonction de modification d'un contact
function onClickEditContact(){

    /*
     * this = objet DOM qui a déclenché l'évènement, en jquery $(this)
     *        il s'agit donc de l'hyperlien généré dans onClickShowContactDetails()
     *
     * On initialise jQuery avec la variable this pour obtenir un objet jQuery
     * représentant l'hyperlien qui a donc déclenché l'évènement.
     *
     * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx 
     */
     
     
     // Sélection de la bonne <option> HTML de la liste déroulante.
     
     // Basculement du formulaire en mode édition puis affichage.
     
}
//fonction d'ajout ou edition d'un nouveau contact
function onClickSaveContact(){

    // Création d'un objet contact avec les données du formulaire.
    const contact = createContact(
        document.querySelector("#").value,
        document.querySelector("#").value,
        document.querySelector("#").value,
        document.querySelector("#").value,
    )
    
    //si le formualaire est en mode "ajout"
    
        //il faut ajouter le contact au carnet d'adresses.


    //sinon (mode edit)
    
         //il faut modifier un contact existant.


    //on sauvegarde
    
    
    // Mise à jour de l'affichage.

}

//fonction d'affichage des détails du contact sur lequel on a cliqué dans la liste
function onClickShowContactDetails(){

    /*
     * this = objet DOM qui a déclenché l'évènement,
     *        il s'agit donc de l'un des hyperliens généré dans refreshAddressBook()
     *
     * On initialise jQuery avec la variable this pour obtenir un objet jQuery
     * représentant l'hyperlien qui a donc déclenché l'évènement.
     *
     * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
     */
     
     
     // Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.
     
     /*
     * Affichage des données du contact, enregistrement du numéro (index) du contact dans
     * l'attribut HTML data-index de l'hyperlien "Editer ce contact"
     */
     
     // Mise à jour de l'affichage.
     
}