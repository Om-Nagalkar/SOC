function Validateform() {
    let x = document.forms["myform"]["myName"].value;
    let y = document.forms["myform"]["myEmail"].value;
    let z= document.forms["myform"]["mySubject"].value;
    let w = document.forms["myform"]["myMessage"].value;
    if(x=="" || y=="" || z=="" || w==""){
        alert("Please fill all the fields");
        return false
    }
    else{
        alert("Your Message was delivered!");
        return true;
    }
}