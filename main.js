

//PROGRAMOS LA MUESTRA DE LA CARTA

var imgRemoved = false;

function flip(event){ 
    if (imgRemoved == false){
        var imgEliminar = document.getElementById("0");
        imgEliminar.remove();
        imgRemoved = true;
    } else {
        console.log("Eliminé la imagen")
    }
    var arr = ["¿Qué cosas te hacen feliz?", "Cuéntanos uno de tus sueños", "Quiero que (ELLA/VENIR)", "(TÚ/JUGAR)", "¿Qué trabajo te gustaría tener?", 
    "Háblanos de una ocasión en la que tuviste miedo", "¿Qué hiciste el pasado domingo?", "¿Qué ropas te gusta comprar?", "Describe algo que tú sabes hacer muy bien", "Describe lo que más te gusta hacer en tu tiempo libre",
    "¿Qué cualidad te importa en tus amigos?", "Cuéntanos dos cualidades tuyas", "¿Qué planes tienes para el fin de semana?", "¿Qué haces hoy?", "¿Cómo es el clima el día de hoy?", "¿Dónde hay un supermercado?", 
    "¿Qué te gusta hacer los días domingos?", "¿Cuál es tu programa favorito en la TV?",
    "¿Cuál era tu comida favorita cuando niño(a)?", "Si te regalan un ticket de avión, ¿a dónde viajarías", 
    "¿Cuál es el mejor regalo que te han hecho?", "¿Cuál es tu asignatura (clase) favorita?", "¿Cuál es la mejor película que has visto en tu vida?",
    "¿Cuál es tu deporte favorito?", "¿Cuáles han sido las mejores vacaciones de tu vida?", "¿En qué ciudad del mundo te gustaría vivir?",
    "Si tuvieras que crear un podcast, ¿de qué tema trataría?", "¿Qué haces los domingos a las 4 de la tarde?", "¿Qué haces los lunes a las 10 y cuarto de la mañana?", "¿Qué haces los jueves a las ocho y media de la noche?",
    "¿A qué hora son tus clases de Matemáticas?", "¿A qué hora son tus clases de inglés?", "¿A qué terminas la escuela los jueves?", "¿Puedes contar los números del 1 al 20?", "¿Cómo se dice en español: SPISE - GJØRE - DRIKKE - LIKE?",
    "Puedes conjugar (å bøye) el presente del verbo TENER?", "Puedes conjugar (å bøye) el presente del verbo HACER?", "Cómo se dice en español: Å SETTE - TAR - GI - GÅ (GO) - SI?", 
    "Cómo se dice en español: Å LAGE - KAN - KUNNE - TRENGE - ØNSKER - ÅPNE?", "¿Cómo se dice en español: Å GÅ (WALK) - SØKE PÅ - LUKKE - LÅSE - BEGYNNE?", "¿Cómo se dice en español: Å KJØPE - KJØRE - VITE - KJENNE - SPØR - SOVE ?",
    "¿Cómo se dice en español: Å FINNE - FORSTÅ - SKRIVE - HØRE?", " ¿Cómo se dice en español: Å TENKE - LESE - SE PÅ?", "¿Cómo se dice en español: Å MISTE - SPILLE - GÅ UT - HOPPE - JOBBE - KOMME", "¿Cómo se dice en español:Å TA MED - FØLE SEG - SETE NED - BETALE?",
    "¿Cómo se dice: unos autos o unas autos?¿Por qué?", "¿Cómo se dice: las mesas o las mesases?¿Por qué", "¿Cómo se dice: una pizza o unas pizzas>?¿Por qué?"];
    var i = arr.length-1, j, temp;
    while(i > 0, i--){
        j = Math.floor(Math.random() * (arr.length));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    var randomCart = arr[0];
    var textoCarta = document.getElementById("parrafo");
    textoCarta.innerHTML = randomCart;
    
}
   



            

        
    
    
        



    


    












/*
const cardsArray = Array.from(cards);
console.log(cardsArray);
*/

/*
let cardsShuffle = function (cardsArray){
    let newPos;
    for (let i = cardsArray.lenght -1; i> 0; i--){
        newPos = Math.floor(Math.random()* ( i+1));
        temp = cardsArray[i];
        cardsArray[i]=cardsArray[newPos];
        cardsArray[newPos] = temp;
    }
    return cardsArray;
};
*/














    

  
   

 





