'use strict';

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

const DOM_STORAGE_ITEM_NAME = 'Address Book';



/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/
//fonction de création d'un objet de contact
function createContact(title, firstName, lastName, phone)
{
    //création d'un objet contact avec les propriété firstName, lastName, phone
    let contact = {
        firstName: firstName,
        lastName: lastName,
        phone: phone
    }
    /*
        let contact = new Object()
        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.phone = phone
    */
    
    //condition switch sur title pour déterminer une nouvelle propriété title à l'objet contact (selon si c'est M. Mlle. Mme.)
    switch (title) {
        case '1':
            contact.title = 'Mme.'
        break;
        case '2':
            contact.title = 'Mlle.'
        break;
        case '3':
            contact.title = 'Mr.'
        break;
    }
    
    
    //on retourne le contact
    return contact
}

//fonction de récupération des contacts dans le localStorage (appel utilities)
function loadAddressBook()
{
    // Chargement du carnet d'adresses depuis le DOM storage. (fonction utilities)
    let storage = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME)
    // Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
    if(storage === null){
        // Oui, création d'un carnet d'adresses vide.
        storage = []
    }
    //on retourne la valeur du storage
    return storage
}

//fonction d'affichage dans le HTML des éléments du localStorage
function refreshAddressBook()
{
    //chargement du carnet d'adresse
    const addressBook = loadAddressBook()
    // Suppression de l'ensemble du carnet d'adresses HTML.
    $("#address-book").empty()
    // Construction de la liste <ul> contenant le carnet d'adresses HTML.
    const ul = $("<ul>") //équivaut à const = document.createElement('ul')
    // Affichage HTML du carnet d'adresses, un contact à la fois. (boucle for)
    for(let i = 0; i < addressBook.length; i++){
        // Construction de l'hyperlien <a> contenant le nom et prénom du contact.
        const link = $('<a>').attr("href", "#").data("index", i).text(
            `${addressBook[i].firstName} ${addressBook[i].lastName}`
        )
         /*
         * 1. Insertion de la balise <a> dans une nouvelle balise <li>
         * 2. Ajout de la balise <li> à l'intérieur de la balise <ul>
            3. si vous n'êtes pas en JQUERY, installation d'écouteur d'événement qui déclenche l'affichage des détails du contact
         */
        ul.append($("<li>").append(link))
    }
    //ajout de l'élément au html
    $("#address-book").append(ul)
}

//fonction d'ajout d'un contact dans le localStorage (utilities)
function saveAddressBook(data)
{
    // Enregistrement du carnet d'adresses dans le DOM storage.
    saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, data)
}