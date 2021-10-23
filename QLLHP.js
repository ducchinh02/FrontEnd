var x = document.getElementById("card");
function show(){
    if (x.className === "fullcard") {
        x.className += " filter";
    } else {
        x.className = "fullcard";
    }
    
}