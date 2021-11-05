function plus () {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2= parseInt(num2);
    result =  num1 + num2
    document.getElementById('out').innerHTML= result;
}
function minus(){
    var num1, num2, result
    num1= document.getElementById('n1').value;
    num2= document.getElementById('n2').value;
    result = num1 - num2;
    document.getElementById('out').innerHTML= result;
}
function multiply() {
    var num1, num2, result
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = num1 * num2
    document.getElementById('out').innerHTML=result;
}
function divide() {
    var num1, num2, result
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result= num1 / num2;
    document.getElementById('out').innerHTML=result;
}
function square() {
    var num3 = document.getElementById('n3').value
        result = num3 * num3;
    document.getElementById('out').innerHTML= result;
}
function language() {
    let first = document.getElementById("first"),
        second = document.getElementById("second"),
        third= document.getElementById("third"),
        four = document.getElementById("four"),
        five = document.getElementById("five");

    first.style.color= 'red';
    second.style.color= 'red';
    third.style.color= 'red';
    four.style.color= 'green';
    five.style.color= 'red';
}
function task1(){
var t1 = document.getElementById('task1');
t1.innerHTML= 'Ни одной. Все улетели';
}
function task2(){
    var t2 = document.getElementById('task2');
    t2.innerHTML='Из полного девятилитрового ведра нужно вылить в реку 8литров воды, пользуясь ведром в 4 литра. Затем литр, оставшийся в большом ведре, нужно перелить в пустое четырехлитровое ведро. Если в него теперь добавить три литра из полного большого ведра, то в девятилитровом ведре как раз останется шесть литров воды.'
}
function task3(){
    var t3 = document.getElementById('task3');
    t3.innerHTML='4';
}