let goodmood = [
     "https://youtu.be/8LcrpERWYj8?si=6ed2FqkQNvUE1GET" ,
  "https://youtu.be/xDelQZ1ZuA8?si=C1okHacezAjT3q00" ,
   "https://youtu.be/_r-nPqWGG6c?si=Ga7kvNX1GXJyhDNn"
]

let click = document.getElementById("generate")

click.addEventListener("click", function(){
let answer = document.getElementById("answer").value.toLowerCase();

if (answer === "good") {

    let results = document.getElementById("results");
for(let i = 0; i< goodmood.length; i++){
    results.innerHTML += "<a href='" + goodmood[i] + "' target='_blank'>`{SONG+[i+1]}`</a>";
}
}
}
);
