function validateForm() {
    if (firstName() //&&
       // lastName()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}
 
FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;
    var validLastname=false;
    var validEmail=false;
    var validPhone=false;
  

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var lastname = document.getElementById("LastName").value;
    var userEmail = document.getElementById("Email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };
  
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };  
  
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
        console.log("email invalid")
        } else {
                validEmail = true;
                console.log("Email valid")
        };  
  
    if (isNaN(phone) || phone.lenght >15 || phone===null || phone===""){
        errorMessages += "<p>Invalid Phone number</p>";
        console.log("phone invalid")
        } else {
                validPhone = true;
                console.log("Phone valid")
        };         
      

    
    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;
    

    //5) return status of each field
    return (validFirstname && validLastname && validEmail);
};
