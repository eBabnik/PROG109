function validateForm(){
    //1) create a variable to control status of each field.  Assume that they are not valid
        var validFirstname=false;
        var validLastname=false;
        var validEmail=false;
        var validPhone=false;
        var validUsername=false;
        var validPassword=false;
        var validAddress=false;
        var validCity=false;
        var validState=false;
        var validCountry=false;
        var validZipCode=false;   
    //2) create variables to read the values from html 
        var errorMessages = "";
        var firstname = document.getElementById("FirstName").value;
        var lastname = document.getElementById("LastName").value;
        var userEmail = document.getElementById("Email").value;
        var atpos = userEmail.indexOf("@");
        var dotpos = userEmail.lastIndexOf(".");
        var phone = document.getElementById("Phone").value;
        var username = document.getElementById("UserName").value;
        var password = document.getElementById("Password").value;
        var requriedpassword =  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]/;
        var address = document.getElementById("Address").value;
        var city = document.getElementById("City").value;
        var state = document.getElementById("State").value;
        var country = document.getElementById("Country").value;
        var zipcode = document.getElementById("ZipCode").value;
    
    //3) do the validation
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
            errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
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
      
        if (phone===null || phone==="" || password.length > 15  ){
            errorMessages += "<p>The phone number is required and cannot be greater than 15 digits </p>";
            console.log("phone invalid - length")
             } else if (phone.match("^[0-9 ,-]+$")===null) {
                errorMessages += "<p>Invalid phone number</p>";
                console.log("Phone invalid — bad characters")
            } else {
                    validPhone = true;
                    console.log("Phone valid")
            }; 
      
        if (username==="null" || username==="" || username.length > 12 ) {
            errorMessages += "<p>The user name is required and cannot be greater than 12 characters</p>";
            console.log("User name invalid")
            } else {
                    validUsername = true;
                    console.log("User name valid")
            };  
      
        if (password==="null" || password==="" || password.length > 7 ) {
            errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
            console.log("Password invalid")
            } else if (!requriedpassword.test(password)  ) {
                    errorMessages += "<p>Password requires 1 upper-case, 1 lower-case, 1 numeric, 1 special character</p>";
                    console.log("Password invalid — bad characters")
                } else {
                        validPassword = true;
                        console.log("Password valid")                    
            }; 
      
        if (address==="null" || address==="") {
            errorMessages += "<p>The address is required</p>";
            console.log("Address invalid")
            } else {
                    validAddress = true;
                    console.log("Address valid")
            }; 
            
        if (city==="null" || city==="" ) {
            errorMessages += "<p>The city is required</p>";
            console.log("City invalid")
            } else {
                    validCity = true;
                    console.log("City valid")
            }; 
      
        if (state==="null" || state==="") {
            errorMessages += "<p>The State is required</p>";
            console.log("State invalid")
            } else {
                    validState = true;
                    console.log("State valid")
            }; 
      
        if (country==="null" || country==="") {
            errorMessages += "<p>The country is required</p>";
            console.log("Country invalid")
            } else {
                    validCountry = true;
                    console.log("Country valid")
            }; 
      
        if (country==="USA" && (zipcode==="null" || zipcode==="" || zipcode.length > 5 ) ) {
            errorMessages += "<p>The zipcode is required for USA and cannot be greater than 5 digits </p>";
            console.log("Zipcode invalid")
            } else {
                    validZipCode = true;
                    console.log("ZipCode valid")
            };
    
        
        //4) Send error message to HTML
        document.getElementById("fname").innerHTML = errorMessages;
        
    
        //5) return status of each field
        return (validFirstname && validLastname && validEmail && 
                validPhone && validUsername && validPassword && 
                validAddress && validCity && validState &&
                validCountry && validZipCode);
    };