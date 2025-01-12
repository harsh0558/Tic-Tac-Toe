let turn = "circle";
let turns_taken = 0;
let matrix = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];



let cube1 = document.querySelector("#cube_1");
let cube2 = document.querySelector("#cube_2");
let cube3 = document.querySelector("#cube_3");
let cube4 = document.querySelector("#cube_4");
let cube5 = document.querySelector("#cube_5");
let cube6 = document.querySelector("#cube_6");
let cube7 = document.querySelector("#cube_7");
let cube8 = document.querySelector("#cube_8");
let cube9 = document.querySelector("#cube_9");
let btn = document.querySelector("#btn");


function check() {
    if (matrix[0][0] === "x" && matrix[0][1] === "x" && matrix[0][2] === "x") {
        setTimeout(() => {
            alert("PLAYER WITH CROSS WON");
            location.reload();
        }, 200);
    } else if (matrix[1][0] === "x" && matrix[1][1] === "x" && matrix[1][2] === "x") {
        setTimeout(() => {
            alert("PLAYER WITH CROSS WON");
            location.reload();
        }, 200);
    } else if (matrix[2][0] === "x" && matrix[2][1] === "x" && matrix[2][2] === "x") {
        setTimeout(() => {
            alert("PLAYER WITH CROSS WON");
            location.reload();
        }, 200);
    } else if (matrix[0][0] === "x" && matrix[1][1] === "x" && matrix[2][2] === "x") {
        setTimeout(() => {
            alert("PLAYER WITH CROSS WON");
            location.reload();
        }, 200);
    } else if (matrix[0][2] === "x" && matrix[1][1] === "x" && matrix[2][0] === "x") {
        setTimeout(() => {
            alert("PLAYER WITH CROSS WON");
            location.reload();
        }, 200);
    } else if (matrix[0][0] === "x" && matrix[1][0] === "x" && matrix[2][0] === "x") {
        setTimeout(() => {
            alert("PLAYER WITH CROSS WON");
            location.reload();
        }, 1000);
    } else if (matrix[0][1] === "x" && matrix[1][1] === "x" && matrix[2][1] === "x") {
        setTimeout(() => {
            alert("PLAYER WITH CROSS WON");
            location.reload();
        }, 200);
    } else if (matrix[0][2] === "x" && matrix[1][2] === "x" && matrix[2][2] === "x") {
        setTimeout(() => {
            alert("PLAYER WITH CROSS WON");
            location.reload();
        }, 200);
    } else if (matrix[0][0] === "o" && matrix[0][1] === "o" && matrix[0][2] === "o") {
        setTimeout(() => {
            alert("PLAYER WITH CIRCLE WON");
            location.reload();
        }, 200);
    } else if (matrix[1][0] === "o" && matrix[1][1] === "o" && matrix[1][2] === "o") {
        setTimeout(() => {
            alert("PLAYER WITH CIRCLE WON");
            location.reload();
        }, 1000);
    } else if (matrix[2][0] === "o" && matrix[2][1] === "o" && matrix[2][2] === "o") {
        setTimeout(() => {
            alert("PLAYER WITH CIRCLE WON");
            location.reload();
        }, 200);
    } else if (matrix[0][0] === "o" && matrix[1][1] === "o" && matrix[2][2] === "o") {
        setTimeout(() => {
            alert("PLAYER WITH CIRCLE WON");
            location.reload();
        }, 1000);
    } else if (matrix[0][2] === "o" && matrix[1][1] === "o" && matrix[2][0] === "o") {
        setTimeout(() => {
            alert("PLAYER WITH CIRCLE WON");
            location.reload();
        }, 200);
    } else if (matrix[0][0] === "o" && matrix[1][0] === "o" && matrix[2][0] === "o") {
        setTimeout(() => {
            alert("PLAYER WITH CIRCLE WON");
            location.reload();
        }, 1000);
    } else if (matrix[0][1] === "o" && matrix[1][1] === "o" && matrix[2][1] === "o") {
        setTimeout(() => {
            alert("PLAYER WITH CIRCLE WON");
            location.reload();
        }, 200);
    } else if (matrix[0][2] === "o" && matrix[1][2] === "o" && matrix[2][2] === "o") {
        setTimeout(() => {
            alert("PLAYER WITH CIRCLE WON");
            location.reload();
        }, 200);
    } else if (turns_taken === 9) {
        setTimeout(() => {
            alert("ITS A DRAW");
            location.reload();
        }, 200);
    }
}


function turn_checker(innerDiv,x,y){
    if(window.innerWidth>650){
        if(turn==="circle"){
            innerDiv.style.border = "none";
            innerDiv.innerText ="O";
            innerDiv.style.fontFamily = "Roboto, sans-serif";
            innerDiv.style.color = "#F2E7DC";
            innerDiv.style.textAlign = "center";
            innerDiv.style.fontSize = "120px";
            innerDiv.style.fontWeight = "40";
            turn = "cross";
            matrix[x][y] = "o";
            turns_taken++;
            setTimeout(check,1);
        }else if(turn==="cross"){
            innerDiv.style.border = "none";
            innerDiv.innerText ="X";
            innerDiv.style.fontFamily = "Roboto, sans-serif";
            innerDiv.style.color = "#F2E7DC";
            innerDiv.style.textAlign = "center";
            innerDiv.style.fontSize = "110px";
            innerDiv.style.fontWeight = "40"; 
            turn = "circle";
            matrix[x][y] = "x";
            turns_taken++;
            setTimeout(check,1);
        }
    }else if(window.innerWidth<=650){
        if(turn==="circle"){
            innerDiv.style.border = "none";
            innerDiv.innerText ="O";
            innerDiv.style.fontFamily = "Roboto, sans-serif";
            innerDiv.style.color = "#F2E7DC";
            innerDiv.style.textAlign = "center";
            innerDiv.style.fontSize = "50px";
            innerDiv.style.fontWeight = "80"; 
            turn ="cross";
            matrix[x][y] = "o";
            turns_taken++;
            setTimeout(check,1);
        }else if(turn==="cross"){
            innerDiv.style.border = "none";
            innerDiv.innerText ="X";
            innerDiv.style.fontFamily = "Roboto, sans-serif";
            innerDiv.style.color = "#F2E7DC";
            innerDiv.style.textAlign = "center";
            innerDiv.style.fontSize = "40px";
            innerDiv.style.fontWeight = "80"; 
            turn = "circle";
            matrix[x][y] = "x";
            turns_taken++;
            setTimeout(check,1);
        }
    }
}

btn.onclick =() =>{
    location.reload();
}

cube1.onclick = () =>{
    if(matrix[0][0]!=="x" && matrix[0][0]!=="o"){
        let innerDiv = document.querySelector("#inner_1");
        turn_checker(innerDiv,0,0);
    }
}

cube2.onclick = () =>{
    if(matrix[0][1]!=="x" && matrix[0][1]!=="o"){
        let innerDiv = document.querySelector("#inner_2");
        turn_checker(innerDiv,0,1);
    }
}

cube3.onclick = () =>{
    if(matrix[0][2]!=="x" && matrix[0][2]!=="o"){
        let innerDiv = document.querySelector("#inner_3");
        turn_checker(innerDiv,0,2);
    }
}

cube4.onclick = () =>{
    if(matrix[1][0]!=="x" && matrix[1][0]!=="o"){
        let innerDiv = document.querySelector("#inner_4");
        turn_checker(innerDiv,1,0);
    }
}

cube5.onclick = () =>{
    if(matrix[1][1]!=="x" && matrix[1][1]!=="o"){
        let innerDiv = document.querySelector("#inner_5");
        turn_checker(innerDiv,1,1);
    }
}

cube6.onclick = () =>{
    if(matrix[1][2]!=="x" && matrix[1][2]!=="o"){
        let innerDiv = document.querySelector("#inner_6");
        turn_checker(innerDiv,1,2);
    }
}

cube7.onclick = () =>{
    if(matrix[2][0]!=="x" && matrix[2][0]!=="o"){
        let innerDiv = document.querySelector("#inner_7");
        turn_checker(innerDiv,2,0);
    }
}

cube8.onclick = () =>{
    if(matrix[2][1]!=="x" && matrix[2][1]!=="o"){
        let innerDiv = document.querySelector("#inner_8");
        turn_checker(innerDiv,2,1);
    }
}

cube9.onclick = () =>{
    if(matrix[2][2]!=="x" && matrix[2][2]!=="o"){
        let innerDiv = document.querySelector("#inner_9");
        turn_checker(innerDiv,2,2);
    }
}


