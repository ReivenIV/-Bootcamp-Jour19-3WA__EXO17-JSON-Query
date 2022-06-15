let add = document.querySelector("#add")
let suppr = document.querySelector("#suppr")
const myListe = {
    name: [] 
}
//je récupère mon localStorage
let storage = window.localStorage.getItem("Liste")
//let storage = window.sessionStorage.getItem("Liste")
console.log(storage)
let div = document.querySelector(".results")

//fonction d'affichage (exemple) 
function addItems(){
    
    //si le navigateur ne trouve pas l'élément demandé dans le storage il nous retournera null
    if(storage === null){
        let p = document.createElement("p")
        p.innerHTML = "Liste introuvable dans le storage!"
        div.appendChild(p)
    }else{
        //sinon il n'est pas null il a trouvé des donnée stockées
        let p = document.createElement("p")
        
        //on transforme les données récupérées du storage du format JSON au format objet pour pouvoir les manipuler facilement en JS
        let newObject = JSON.parse(storage)
        console.log(newObject)
        myListe.name = newObject.name
        p.innerHTML = newObject.name
        div.appendChild(p)
    }
}

document.addEventListener("DOMContentLoaded", function(){
    
    /* VERSION LOCALSTORAGE / SESSIONSTORAGE*/
    add.addEventListener("click", (e)=>{
        //supprime le comportement par défaut du navigateur
        e.preventDefault()
        
        //je récup la valeur entrée dans le champ de formulaire
        let produit = document.querySelector("#produit").value
        
        
        myListe.name.push(produit)
        
        //on convertit l'élément du format objet au format json
        let myJson = JSON.stringify(myListe)
        console.log("JSON.stringify", myJson)
        //on enregistre dans le localStorage
        window.localStorage.setItem("Liste", myJson)
        //window.sessionStorage.setItem("Liste", myJson)
       
    })
    
    suppr.addEventListener("click", (e)=>{
        //supression de notre élément du storage
        window.localStorage.removeItem("Liste")
        //window.sessionStorage.removeItem("Liste")
        
    })
    addItems()
    
    //exemple de cookie
    //stocker en utilisant des limites de poid ou une date d'expiration
    
   document.cookie = "username=John Doe; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
   
   let x = document.cookie;
   console.log(x)
})







