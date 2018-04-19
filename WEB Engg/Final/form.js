function validation(form){
    var name = form.field1.value+form.field2.value;
    var uname = form.field8.value
    var email = form.field3.value;
    var phone = form.field6.value;
    var password = form.field9.value;
    var uname= form.field8.value;
    console.log("Validating :"+name+" - "+email+" - "+phone+" - "+uname);
    if(name == "" | uname == ""
        | email == "" | password == ""){
        alert("Complete the Form");
        console.log("Empty Form")
        return;
    }

    var unamepattern = /^[a-zA-Z0-9]+$/;
    var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordpatt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/;
    if(!uname.match(unamepattern)){
        alert("Enter Valid Username")
        console.log("invalid username")
    }else if(!email.match(emailpattern)){
        alert("Enter Valid Email Address")
        console.log("Invalid email")
    }else if(!password.match(passwordpatt)){
        alert("Create Stronger Password!")
        console.log("Weak password")
    }else{
        var date = new Date();
        var n = date.toDateString();
        var time = date.toLocaleTimeString();
        alert("SignUp Succesful at "+time+" "+date);
        console.log("Message Sent")
    }

}