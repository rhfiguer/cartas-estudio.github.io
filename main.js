

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
    "¿Cómo se dice: unos autos o unas autos?¿Por qué?", "¿Cómo se dice: las mesas o las mesases?¿Por qué", "¿Cómo se dice: una pizza o unas pizzas>?¿Por qué?",
    "¿Cómo se dice: Yo soy en Noruega o Yo estoy en Noruega?", "¿Cómo se dice: Yo soy de Noruega o Yo estoy de Noruega?", "¿Cómo se dice: Det gamle og grønne bordet en español?", "¿Cómo se dice Hvor er det toalletet?", "¿Cómo se dice Det er (or There is/There are en inglés) en español?",
    "Cómo se dice Det er mange fotballkamper i dag en español?", "¿Cómo se dice Fotballspiller en español?", "¿Cómo se conjuga Å ha spist en español para TODOS los pronombres?", "Cómo se dice Sommertur en español?", "¿Cómo se dice en español De intelligente, modige og glade jentene?", "¿Cómo se dice en español De intelligente, modige og glade guttene?",
    "Cómo se dice en español Din morsmor y Morsmoren din?", "¿Cómo se conjuga el verbo SER en presente?", "¿Cómo se conjuga para todos los pronombres Å må spise?", "¿Cómo se conjuga el presente de Å må gå hjem?", "¿Cómo se conjuga el presente de Å må kjøpe nye skoer?",
    "¿Cómo se conjuga el presente de Å må lage mat?", "¿Cómo se conjuga el presente de Å må ta bussen?", "¿Cómo se conjuga el presente de Skal gå hjem snart?", "¿Cómo se conjuga el presente de Skal legge meg tidlig i dag?", "Cómo se dicen los números 21, 31, 41 y 51?", 
    "¿Cómo se conjuga el presente de Skal spille mye Playstation denne helga?", "¿Cómo se dice Mobiltelefonen?", "¿Por qué Una casa grande está correcto?", "¿Es correcto decir Hay muchas agua en el río?", "Cuál es correcto: Juego tennis a las 6, o Juego tennis las 6?", 
    "Cuál es correcto: Juego tennis a las 6, o Juego tennis las 6?", "Cuál es correcto: Estudio Norsk a las 9, o Estudio Norsk las 6?", "Cuál es correcto: Ceno a las 5, o Ceno las 5?", "¿Cómo se conjuga Å HA DRØMT?", "¿Cómo se conjuga Å HA DANSET?", "¿Cómo se conjuga Å HA GÅTT?",
    "¿Cómo se conjuga Å HA TATT?", "¿Cómo se dice en español GI MATEN TIL MEG?", "¿Cómo se dice en español GI MATEN TIL HÅVARD?", "En español hay UN verbo para Å GÅ-DRA, ¿Cuál es?",
    "En español hay un verbo para Å LAGE-GJØRE, ¿Cuál es?", "¿Cómo se dice en español SI DETTE TIL SIGRID?", "Cuéntame tres lugares que quieres visitar en tu vida", "¿Cómo se dice FORDI en español?", "¿Cuál es tu clase favorita? ¿Por qué?", "¿Cuál es la diferencia entre POR QUÉ Y PORQUE?" ];
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














    

  
   

 





