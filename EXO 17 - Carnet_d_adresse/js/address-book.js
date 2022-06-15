'use strict';

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

const DOM_STORAGE_ITEM_NAME = 'Address Book';



/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/
//fonction de création d'un objet de contact
function createContact(title, lastName, firstName, phone)
{
    //création d'un objet contact avec les propriété firstName, lastName, phone
    let newContact = {
        nom : lastName,
        prenom : firstName,
        tel : phone,
    }
    
    //condition switch sur title pour déterminer une nouvelle propriété title à l'objet contact (selon si c'est M. Mlle. Mme.)
    switch(title){
        case 1:
            newContact.civilite = "Madame"
        break;
        case 2:
            newContact.civilite = "Madmoiselle"
        break;
        case 3:
            newContact.civilite = "Monsieur"
        break;
    }
    
    
    //on retourne le contact
    return newContact
}

//fonction de récupération des contacts dans le localStorage (appel utilities)
function loadAddressBook()
{
    // Chargement du carnet d'adresses depuis le DOM storage. (fonction utilities)
    let storage = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME)
    // Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
    if (storage === null){
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
    let addressBook = document.getElementById("address-book");
    
    let carnetAdress = loadAddressBook() //soit tu receptionne un tableau vide, soit un tableau d'objet avec les contacts déjà enregistrés
    // Suppression de l'ensemble du carnet d'adresses HTML.
    addressBook.innerHTML = ""
    // Construction de la liste <ul> contenant le carnet d'adresses HTML. 
    let ul = document.createElement('ul');
    // Affichage HTML du carnet d'adresses, un contact à la fois. (boucle for)
    
    for (let i = 0; i < carnetAdress.length; i++) {
        // Construction de l'hyperlien <a> contenant le nom et prénom du contact.
        let a = document.createElement('a');
         /*
         * 1. Insertion de la balise <a> dans une nouvelle balise <li>
         * 2. Ajout de la balise <li> à l'intérieur de la balise <ul>
            3. si vous n'êtes pas en JQUERY, installation d'écouteur d'événement qui déclenche l'affichage des détails du contact
         */
        a.setAttribute("href","#");
        a.dataset.index = i;
        a.innerHTML = `${carnetAdress[i].firstName} ${carnetAdress[i].lastName}`;
        a.addEventListener("click", onClickShowContactDetails)
        //ajout de l'élément au html
        li.appendChild(a);
        ul.appendChild(li);
    }
    addressBook.appendChild(ul);
}

//fonction d'ajout d'un contact dans le localStorage (utilities)
function saveAddressBook(data)
{
    // Enregistrement du carnet d'adresses dans le DOM storage.    
    saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, data);
}