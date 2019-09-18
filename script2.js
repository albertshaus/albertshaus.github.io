var usernames = []
var test = ["wasser", "erde"]



    
function register() {
    
    var username = document.getElementById("username").value;
    
    myFunction();
    
    if (usernames.every(checkarray) === true) {
    
        usernames.push(username);
        console.log(usernames);
        document.getElementById("fehlerMeldung2").innerHTML = username + " dein username wurde gespeichter";
         
    if (username === username) {
        document.getElementById("username").value = "";
        console.log("ja");
        
    }
    } else {
        
        document.getElementById("fehlerMeldung2").innerHTML = username + " wurde schon verwendet";
    }
}
    
function checkarray(usernames) {
    return usernames !== document.getElementById("username").value;
}

function myFunction() {
    document.getElementById("fehlerMeldung").innerHTML = usernames.every(checkarray);
}