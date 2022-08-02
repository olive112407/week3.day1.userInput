let input = document.querySelector("#title_input");
let log = document.getElementById("main_title");
let result = document.getElementById("story_result");
let submit = document.getElementById("submit_button");
submit.addEventListener("click", submitForm);
input.addEventListener("change", updateValue);


function updateValue(e){
    log.textContent = e.target.value;
}


function submitForm(event) {
    event.preventDefault();

    let nounElem = document.querySelector("#noun");
    let verbElem = document.querySelector("#verb");    
    let adjectiveElem = document.querySelector("#adjective");

    let noun = nounElem.value;
    let verb = verbElem.value;
    let adjective = adjectiveElem.value;

    let message = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;
    result.textContent = message;

    nounElem.value = "";
    verbElem = "";
    adjectiveElem = "";
    // let message1 = `Please fill in all fields`;
    // let message2 = `Please fill in all fields`;
    // let message3 = `Please fill in all fields`;



    // if (nounElem.value = "") {
    //     message = `Please fill in all fields`;
    //     result.textContent = message;
    // }
    
    // if (verbElem.value = "") {
    //     result.textContent = message;
    // }

    // if (adjectiveElem.value = "") {  
    //     result.textContent = message;
    // }

}