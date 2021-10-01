let submitButton = document.getElementById("formButton")
submitButton.addEventListener("click", submitForm)


function submitForm (event){
event.preventDefault();

    
    let name = document.getElementById("name_input").value;
    let email = document.getElementById("email_input").value;
    let message = document.getElementById("message_input").value;
    
    window.alert (`Hello, ${name} of ${email}! I got your messsage: ${message}`)
    
}