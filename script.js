let display = document.getElementById('display');
let minutos = document.getElementById('Minutos');
let segundos = document.getElementById('Segundos');
let start = document.getElementById('start');

let cronometroSeg;
let minutoAtual;
let segundoAtual;
let interval;

for (var i = 0; i <= 60; i++) {
    minutos.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}
for (var i = 0; i <= 60; i++) {
    segundos.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

start.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;

    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }
        else {
            alert('Acabou fml')
            clearInterval(interval);
        }
    }
    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
},1000)
})