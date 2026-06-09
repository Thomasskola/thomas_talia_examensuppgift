const aKey = document.querySelector(".a");

document.addEventListener("keydown", (event) => {

    if(event.key === "a"){

        aKey.style.backgroundColor = "red";

    }

});

document.addEventListener("keyup", (event) => {

    if(event.key === "a"){

        aKey.style.backgroundColor = "black";

    }

    console.log

});