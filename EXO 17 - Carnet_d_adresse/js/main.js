'use strict';

/************************************************************************************/
/********************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Lorsque l'on donne en argument une fonction à jQuery, elle est utilisée comme
 * gestionnaire d'évènements pour l'évènement JavaScript natif DOMContentLoaded.
 */
document.addEventListener("DOMContentLoaded" , function(){
    // Installation des gestionnaires d'évènements.
    
    document.querySelector("#add-contact").addEventListener('click', onClickAddContact)
    document.querySelector('#clear-address-book').addEventListener('click', onClickClearAddressBook)
    /*
     * Installation d'un gestionnaire d'évènement "dans le futur", quand il y aura
     * des hyperliens ajoutés dans l'arbre DOM à partir du <ul id="address-book">. (UNIQUEMENT EN JQUERY) sinon en JS il faut le créer dans la fonction refreshAddressBook
     */
   // document.on("click", "#addressBook a", onClickShowContactDetails)
     //on raffraichit le carnet d'adresse
    refreshAddressBook()
})