function Estrai(){
    var Domande = [
        "Let's talk about the popolation of South Africa",
        "What are the languages of the South Africa?",
        "Let's talk about the history of South Africa",
        "What are the differences of the popolation?",
        "Let's talk about the Apartheid",
        "Let's talk about the life of Nelson Mandela",
        "What is the A.N.C."
     ];
     var randomNum = Math.floor(Math.random()*Domande.length);
     
     alert(Domande[randomNum]);
}