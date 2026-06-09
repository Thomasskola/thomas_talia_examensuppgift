document.addEventListener("keydown", (event) => {

    const key = document.querySelector("." + event.key);

    if(key){

        key.style.backgroundColor = "red";

    }

});

document.addEventListener("keyup", (event) => {

    const key = document.querySelector("." + event.key);

    if(key){

        key.style.backgroundColor = "white";

    }

});


document.addEventListener("keydown", (event) => {

    const number = document.querySelector(".number" + event.key);

    if(number){

        number.style.backgroundColor = "red";

    }

});

document.addEventListener("keyup", (event) => {

    const number = document.querySelector(".number" + event.key);

    if(number){

        number.style.backgroundColor = "white";

    }

// spacebar koden


    document.addEventListener("keydown", (event) => {

        if(event.key === " "){
    
            document.querySelector(".space").style.backgroundColor = "red";
    
        }
    
    });
    
    document.addEventListener("keyup", (event) => {
    
        if(event.key === " "){
    
            document.querySelector(".space").style.backgroundColor = "white";
    
        }
    
    });

});



    document.addEventListener("keydown", (event) => {

        console.log(event.key);
    
    });