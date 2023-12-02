const  buttons= document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

// for each button
buttons.forEach(function(button){
    // console.log(button) haar ek butttonpr event listerner lagye ge
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
        // body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
        // body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
        // body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
        // body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
        // body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id;
        }
    })
})