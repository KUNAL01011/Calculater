let string = "";
let buttons = document.querySelectorAll('.btn');
let arr = Array.from(buttons);


arr.forEach((button)=>{
    button.addEventListener('click', (a)=>{
        console.log(typeof(a.target.innerHTML))
        if(a.target.innerHTML == '='){
            console.log(typeof(a.target.innerHTML))
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(a.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(a.target.innerHTML == 'C'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
            string = string + a.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

