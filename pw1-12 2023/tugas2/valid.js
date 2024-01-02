function validation(){
    document.getElementById('errorMessage').innerHTML = "";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let number = document.getElementById('number').value;

    let error = false;

    if(name.length > 30){
        alert("Name should be 30 characters or less");
        error = true;
    }
    let emailRegex = /^\S+@\S+\.\S+$/;
    if(!email.match(emailRegex)){
        alert("Invalid email");
        error = true;
    }
    if(!time){
        alert("Invalid time");
        error = true;
    }
    if(!date){
        alert("Invalid date");
        error = true;
    }
    if(!number || isNaN(number)||number<1){
        alert("Invalid number of tickets");
        error = true;
    }
    if(!error){
        document.getElementById('output').innerHTML = "Name:" + name +"<br>Email:" + email + "<br>Date:" + date + "<br>Departur time:" + time + "<br>Number Of Tickets:" + number;
    }
}