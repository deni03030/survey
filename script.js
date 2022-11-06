function submitForm() {
    event.preventDefault();
    console.log("Klikket på");



/* skal til at gemme alt i boksen så man kan se det næste display block/none */
const spg1 = document.querySelector(".spg1");
const spg2 = document.querySelector(".spg2");
const spg3 = document.querySelector(".spg3");
const spg4 = document.querySelector(".spg4");
const spg5 = document.querySelector(".spg5");

const slut = document.querySelector(".slut");

/*Den første _1 ul i index*/
/*fanger de forskellige valg */
const ul1_2 = document.querySelector(".valg1_2");
const ul2_1 = document.querySelector(".valg2_1");
const ul2_2 = document.querySelector(".valg2_2");
const ul3_1 = document.querySelector(".valg3_1");
const ul3_2 = document.querySelector(".valg3_2");
const ul4_1 = document.querySelector(".valg4_1");
const ul4_2 = document.querySelector(".valg4_2");
const ul5_1 = document.querySelector(".valg5_1");
const ul5_2 = document.querySelector(".valg5_3");

const Feedback = document.querySelector(".Feedback");


/*
const answerToS1 = document.querySelector("input[name=s1]:checked").value;
console.log(answerToS1)*/

/*første spørgsmål*/

ul1_2.addEventListener("click", function() {
   // console.log ("Jeg er klicket på");
    /* Test at det virker */
    if(document.getElementById('s1-svar1').checked) {
        spg1.style.display = "none";
        spg2.style.display = "block";
    } 
    else if(document.getElementById('s1-svar2').checked) {
        spg1.style.display = "none";
        spg2.style.display = "block";  
    } 
    else { 
       alert("husk at svar"); 
    };
    
});


/*andet spørgsmål*/
ul2_2.addEventListener("click", function() {
    console.log ("Jeg er klicket på2");
    /* Test at det virker */
    if(document.getElementById('s2-svar1').checked) {
        spg2.style.display = "none";
        spg3.style.display = "block";
    } 
    else if(document.getElementById('s2-svar2').checked) { 
        spg2.style.display = "none";
        spg3.style.display = "block"; 
    } 
    else { 
       alert("husk at svar");
    }
});
/*Tilbage knapper til s1*/
ul2_1.addEventListener("click", function() {
    console.log ("Jeg er klicket på4");
    /* Test at det virker */
    spg2.style.display = "none";
    spg1.style.display = "block";
});
ul3_2.addEventListener("click", function() {
    console.log ("Jeg er klicket på3");
    /* Test at det virker */
    if(document.getElementById('s3-svar1').checked) {
        spg3.style.display = "none";
        spg4.style.display = "block";
    } 
    else if(document.getElementById('s3-svar2').checked) { 
        spg3.style.display = "none";
        spg4.style.display = "block"; 
    } 
    else if(document.getElementById('s3-svar3').checked) {
        spg3.style.display = "none";
        spg4.style.display = "block";
    } 
    else if(document.getElementById('s3-svar4').checked) { 
        spg3.style.display = "none";
        spg4.style.display = "block"; 
    } 
    else if(document.getElementById('s3-svar5').checked) {
        spg3.style.display = "none";
        spg4.style.display = "block";
    } 
    else { 
       alert("husk at svar");
       spg4.style.display = "none";
       spg3.style.display = "block"; 
    }
});
/*Tilbage knapper til s2*/
ul3_1.addEventListener("click", function() {
    console.log ("Jeg er klicket på4");
    /* Test at det virker */
    spg3.style.display = "none";
    spg2.style.display = "block";
});

ul4_2.addEventListener("click", function() {
    console.log ("Jeg er klicket på4");
    /* Test at det virker */
    if(document.getElementById('s4-svar1').checked) {
        spg4.style.display = "none";
        spg5.style.display = "block";
    } 
    else if(document.getElementById('s4-svar2').checked) { 
        spg4.style.display = "none";
        spg5.style.display = "block"; 
    } 
    else if(document.getElementById('s4-svar3').checked) {
        spg4.style.display = "none";
        spg5.style.display = "block";
    } 
    else if(document.getElementById('s4-svar4').checked) { 
        spg4.style.display = "none";
        spg5.style.display = "block"; 
    } 
    else if(document.getElementById('s4-svar5').checked) {
        spg4.style.display = "none";
        spg5.style.display = "block";
    } 
    else {
       alert("husk at svar");
       spg5.style.display = "none";
       spg4.style.display = "block"; 
    }
});
/*Tilbage knapper til s3*/
ul4_1.addEventListener("click", function() {
    console.log ("Jeg er klicket på4");
    /* Test at det virker */
    spg4.style.display = "none";
    spg3.style.display = "block";
});

ul5_2.addEventListener("click", function() {
    console.log ("Jeg er klicket på5");
    /* Test at det virker */
    spg5.style.display = "none";
    Feedback.style.display = "none";
    slut.style.display = "block";
});
/*Tilbage knapper til s4*/
ul5_1.addEventListener("click", function() {
    console.log ("Jeg er klicket på4");
    /* Test at det virker */

    spg5.style.display = "none";
    spg4.style.display = "block";
});


const svarTilS1 = document.querySelector("input[name=s1]:checked").value;
console.log(svarTilS1);
const svarTilS2 = document.querySelector("input[name=s2]:checked").value;
console.log(svarTilS2)
const svarTilS3 = document.querySelector("input[name=s3]:checked").value;
console.log(svarTilS3)
const svarTilS4 = document.querySelector("input[name=s4]:checked").value;
console.log(svarTilS4)
};

/*Console.log for textarea*/
//Vi henter vores element via Id 

const message = document.getElementById('besked');


console.log(message.value); 

message.value = 'Skriv her...';

// Den funktion viser hvad der bliver skrivet i textareaet
message.addEventListener('input', function handleChange(event) {
  console.log(event.target.value);
});

function checkButton() {  
    if(document.getElementById('JA').checked) { 
        document.getElementById("disp").innerHTML 
            = document.getElementById("JA").value 
            + " radio button is checked"; 
    } 
    else if(document.getElementById('Nej').checked) { 
        document.getElementById("disp").innerHTML 
            = document.getElementById("Nej").value 
            + " radio button is checked";   
    } 
    else { 
        document.getElementById("error").innerHTML 
            = "You have not selected any season"; 
    } 
}

/*https://www.javatpoint.com/oprweb/test.jsp?filename=how-to-check-a-radio-button-using-javascript2
 */

