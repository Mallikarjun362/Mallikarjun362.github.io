const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    const _randomColor = getRandomColor();
    document.getElementsByClassName("color")[0].innerHTML = _randomColor;
    document.body.style.backgroundColor = _randomColor;
    console.log(_randomColor);
});

function getRandomColor(){
    let _color = '';
    const hexLength = hex.length;
    for(let i = 0;i<6;i++){
        _color += hex[Math.floor( hexLength* Math.random())];
    }
    return "#"+_color;
}

