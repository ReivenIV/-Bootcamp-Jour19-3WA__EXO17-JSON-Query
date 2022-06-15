'use strict';

// AUCUN ECOUTEUR D'EVENEMENT ICI ILS SERONT DANS LE MAIN ICI CE SONT LES CALLBACK APPELEE PAR LES ECOUTEURS DU MAIN
/***************************************************************************************/
/**************************** EVENEMENTS CARNET D'ADRESSES *****************************/
/***************************************************************************************/
//fonction d'affichage du formulaire lors du click sur le boutton plus
function onClickAddContact()
{
    // Réinitialisation du formulaire (efface les champs texte, etc.).
    $('#contact-form').trigger('reset')
    // Basculement du formulaire en mode ajout puis affichage. (dataset)
    $('#contact-form').data('mode', 'add').fadeIn('fast')
}
//fonction de suppression de tous les contacts
function onClickClearAddressBook()
{
    // Sauvegarde d'un carnet d'adresse vide, écrasant le carnet d'adresse existant.
    saveAddressBook([])
    // Mise à jour de l'affichage.
    $("#contact-details").hide()
    //on raffraichit le cahier d'adresse (fonction)
    refreshAddressBook()
}

//fonction de modification d'un contact
function onClickEditContact()
{
    /*
     * this = objet DOM qui a déclenché l'évènement, en jquery $(this)
     *        il s'agit donc de l'hyperlien généré dans onClickShowContactDetails()
     *
     * On initialise jQuery avec la variable this pour obtenir un objet jQuery
     * représentant l'hyperlien qui a donc déclenché l'évènement.
     *
     * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx 
     */
     let index = $(this).data("index")
     //chargement du storage
     const addressBook = loadAddressBook()
     //récupération du contact correspondant à l'index de mon tableau de contact
     const contact = addressBook[index]
     //on injecte dans les champs de formulaire les valeurs de notre contact
     $("#firstName").val(contact.firstName)
     $("#lastName").val(contact.lastName)
     $("#phone").val(contact.phone)
     
     // Sélection de la bonne <option> HTML de la liste déroulante.
     switch(contact.title){
        case "Mme.":
            $("#title").val(1)
        break;
        case "Mlle.":
            $("#title").val(2)
        break;
        case "Mr.":
            $("#title").val(3)
        break;
     }
     // Basculement du formulaire en mode édition puis affichage.
     $("#contact-form").data("mode", "edit").fadeIn('slow')
     
}
//fonction d'ajout ou edition d'un nouveau contact
function onClickSaveContact()
{
    // Création d'un objet contact avec les données du formulaire. (appel de fonction)
    const contact = createContact(
        $("#title").val(),
        $("#firstName").val(),
        $("#lastName").val(),
        $("#phone").val()
    )
    
    //on charge le carnet présent dans le storage 
    let addressBook = loadAddressBook()
    //si le formualaire est en mode "ajout"
    if($("#contact-form").data('mode') === "add"){
        //il faut ajouter le contact au carnet d'adresses.
        addressBook.push(contact)
    //sinon (mode edit)
    }else{
         //il faut modifier un contact existant. 1-on recup le data-index du detail qui se trouve dans le lien a
         const index = $("#contact-details a").data('index')
         //on écrase l'ancienne valeur de l'index du tableau correspondant par le contact
        addressBook[index] = contact
    }
    //on sauvegarde
    saveAddressBook(addressBook)
    
    // Mise à jour de l'affichage.
    $("#contact-form").fadeOut('slow')
    $("#contact-details").hide()
    refreshAddressBook()
}

//fonction d'affichage des détails du contact sur lequel on a cliqué dans la liste
function onClickShowContactDetails()
{
    /*
     * this = objet DOM qui a déclenché l'évènement,
     *        il s'agit donc de l'un des hyperliens généré dans refreshAddressBook()
     *
     * On initialise jQuery avec la variable this pour obtenir un objet jQuery
     * représentant l'hyperlien qui a donc déclenché l'évènement.
     *
     * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
     */
     let index = $(this).data("index")
     
     // Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.
     const addressBook = loadAddressBook()
     const contact = addressBook[index]
     /*
     * Affichage des données du contact, enregistrement du numéro (index) du contact dans
     * l'attribut HTML data-index de l'hyperlien "Editer ce contact"
     */
     $("#contact-details h3").text(`${contact.title} ${contact.firstName} ${contact.lastName}`)
     $("#contact-details p").text(contact.phone)
     $("#contact-details a").data("index",index)
     // Mise à jour de l'affichage.
     $("#contact-details").show()
}