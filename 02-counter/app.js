let count = 0;


const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");




btns.forEach(function(btn){

    btn.addEventListener('click',function(e){

        if ("increase" === e.currentTarget.classList[1]){
            count += 1;
        }else if ("decrease" === e.currentTarget.classList[1]){
            count -= 1;
        }else if ("reset" === e.currentTarget.classList[1]){
            count = 0;
        }
        value.innerHTML = count;
        if(count > 0){
            value.style.color = "green";
        }else if(count <0){
            value.style.color = "red";
        }else{
            value.style.color = 'grey';
        }
    });


});
