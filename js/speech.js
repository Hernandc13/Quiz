console.log("Libreria annyang");
if(annyang){
    console.log("Entra a if annyang");
        var comandos={
        'iniciar evaluación':function(){
            console.log('iniciar evaluación');
            //info_box.classList.add("activeInfo");
        },
        'continuar':function(){
            console.log('continuar');
            info_box.classList.remove("activeInfo"); //hide info box
            quiz_box.classList.add("activeQuiz"); //show quiz box
            showQuetions(0); //calling showQestions function
            queCounter(1); //passing 1 parameter to queCounter
            startTimer(15); //calling startTimer function
            startTimerLine(0); //calling startTimerLine function
            const items = document.getElementsByClassName("que");
            for (let index = 0; index < items.length; index++) {
                    decir(items[index].innerHTML);    
            }
        },
        'siguiente':function(){
            console.log('siguiente');
            if(que_count < questions.length - 1){ //if question count is less than total question length
                que_count++; //increment the que_count value
                que_numb++; //increment the que_numb value
                showQuetions(que_count); //calling showQestions function
                queCounter(que_numb); //passing que_numb value to queCounter
                clearInterval(counter); //clear counter
                clearInterval(counterLine); //clear counterLine
                startTimer(timeValue); //calling startTimer function
                startTimerLine(widthValue); //calling startTimerLine function
                timeText.textContent = "Time Left"; //change the timeText to Time Left
                next_btn.classList.remove("show"); //hide the next button
            }else{
                clearInterval(counter); //clear counter
                clearInterval(counterLine); //clear counterLine
                showResult(); //calling showResult function
            }
        },
        'inciso a':function (){
            console.log('inciso a');
            var items = document.getElementsByClassName("option");
           for (let index = 0; index < items.length; index++) {
           var cadena=items[index].innerHTML;  
           var primerCaracter = cadena.charAt(7);
                    if(primerCaracter=='a'){
                        items[index].onclick();
                 }
            }
        },
        'inciso b':function (){
            console.log('inciso b');
            var items = document.getElementsByClassName("option");
           for (let index = 0; index < items.length; index++) {
           var cadena=items[index].innerHTML;  
           var primerCaracter = cadena.charAt(7);
                    if(primerCaracter=='b'){
                        items[index].onclick();
                 }
            }
        },
        'inciso c':function (){
            console.log('inciso c');
            var items = document.getElementsByClassName("option");
           for (let index = 0; index < items.length; index++) {
           var cadena=items[index].innerHTML;  
           var primerCaracter = cadena.charAt(7);
                    if(primerCaracter=='c'){
                        items[index].onclick();
                 }
            }
        },
        'inciso d':function (){
            console.log('inciso d');
            var items = document.getElementsByClassName("option");
           for (let index = 0; index < items.length; index++) {
           var cadena=items[index].innerHTML;  
           var primerCaracter = cadena.charAt(7);
                    if(primerCaracter=='d'){
                        items[index].onclick();
                 }
            }
        },
    };
    annyang.addCommands(comandos);
    annyang.setLanguage("en-MX");
    annyang.start();
}


var checkbox = document.getElementById('input');
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked){
    const items = document.getElementsByClassName("info");
for (let index = 0; index < items.length; index++) {
    decir(items[index].innerHTML);    
}
  }
}

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}