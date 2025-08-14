let form = document.getElementById('contactForm');
let handleError = (input, msg = "") => {
    let nextElement = input.nextElementSibling;
    nextElement.innerText = msg;
}

let nameValidation = (input) => {
    let inputValue = input.value.trim();
    if(inputValue === ""){
        handleError(input, "Name is required");
        return false;
    }
    else if(inputValue.length < 3){
        handleError(input , "Name must be at least 3 characters");
        return false;
    }
    else {
        handleError(input);
        return true;
    }
}

let emailValidation = (input) => {
    // let inputValue = input.value.trim();
    const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.trim() === ""){
        handleError(input, "Email is required");
        return false;
    }

    else if(!regExp.test(input.value)){
        handleError(input , "Email is not valid");
        return false;
    }
    else if(regExp.test(input.value)){
        handleError(input);
        return true;
    }
    
}

let subjectValidation = (input) => {
    let inputValue = input.value.trim();
    if(inputValue === ""){
        handleError(input, "Subject is required");
        return false;
    }
    else {
        handleError(input);
        return true;
    }
}


form.addEventListener('input', (e) => {
    // console.log(e.target.value);
    if(e.target.id == 'userName'){
        nameValidation(e.target);
    }
    else if(e.target.id == 'userEmail'){
        emailValidation(e.target);
    }
    else if(e.target.id == 'userSubject'){
        subjectValidation(e.target);
    }

    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let formValid = true;

        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const subjectInput = document.getElementById('userSubject');
        const formMessage = document.getElementById('formMessage');

        // Validate all fields
        if (!nameValidation(nameInput)) formValid = false;
        if (!emailValidation(emailInput)) formValid = false;
        if (!subjectValidation(subjectInput)) formValid = false;

        // Show message
        if (!formValid) {
            formMessage.innerHTML = '<p class="form-message error" style="background:#f8d7da;color:#721c24;padding:10px;text-align:center;border-radius:5px;">One or more fields have an error. Please check and try again.</p>';
        } else {
            formMessage.innerHTML = '<p class="form-message success" style="background:#d4edda;color:#155724;padding:10px;text-align:center;border-radius:5px;">Thank you for your message. It has been sent.</p>';
            this.reset();
            // Clear error messages
            handleError(nameInput);
            handleError(emailInput);
            handleError(subjectInput);
        }

        
    // if (!formValid) {
    //     formMessage.innerHTML = '<p class="form-message error" style="background:#f8d7da;color:#721c24;padding:10px;text-align:center;border-radius:5px;">One or more fields have an error. Please check and try again.</p>';
    // } else {
    //     formMessage.innerHTML = '<p class="form-message success" style="background:#d4edda;color:#155724;padding:10px;text-align:center;border-radius:5px;">Thank you for your message. It has been sent.</p>';
    //     this.reset();
    // }
})
// الرسائل فوق الفورم
    // if (!formValid) {
    //     formMessage.innerHTML = '<p class="form-message error" style="background:#f8d7da;color:#721c24;padding:10px;text-align:center;border-radius:5px;">One or more fields have an error. Please check and try again.</p>';
    // } else {
    //     formMessage.innerHTML = '<p class="form-message success" style="background:#d4edda;color:#155724;padding:10px;text-align:center;border-radius:5px;">Thank you for your message. It has been sent.</p>';
    //     this.reset();
    // }