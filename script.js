const display = document.querySelector('#innerDisplay');
numbers = document.querySelectorAll('.num');
operators = document.querySelectorAll('.op');

function toDisplay(current){

    var curDisplay = display.innerHTML;
    display.innerHTML = curDisplay + current;
}

function clear(){
    display.innerHTML = "";
}

function evaluate(){
    var operation = display.innerHTML;
    operation = operation.replace("÷", "/");
    operation = operation.replace("×", "*");
    var result = eval(operation);

    var length = result.toString().length;
    if(length )

    if(!(isNaN(result))){
        clear();
        display.innerHTML = result;
    }
    else{
        clear();
        display.innerHTML = "ERROR";
    }
}

numbers.forEach((button)=>{
    button.addEventListener('click', () =>{
        toDisplay(button.innerHTML);
    })
});

operators.forEach((button)=>{
    if((button.innerHTML != 'CLEAR') &&
    (button.innerHTML != '=')){

        button.addEventListener('click', () =>{
            toDisplay(button.innerHTML);
        }) 
    }
    else if(button.innerHTML == 'CLEAR'){
        button.addEventListener('click', ()=>{
            clear();
        })
    }
    else{
        button.addEventListener('click', ()=>{
            evaluate();
        })
    }
});