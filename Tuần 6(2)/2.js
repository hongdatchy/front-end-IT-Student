a = document.getElementsByTagName('li');
console.log(a[0].innerHTML);
a[2].innerHTML = "<li>4</li><li>5</li>";
b = document.getElementById('hello');
console.log(b);
b.style.cssName = 'background-red';
document.getElementById("hello").style.background = 'red';
newBotton = document.createElement('button');

newBotton.innerHTML = 'click';
document.getElementsByTagName('body')[0].appendChild(newBotton);
var count = 0;
document.getElementsByTagName('body')[0].addEventListener('click',function(){
    count++;
    if(count%2==1){
        b.innerHTML = 'xin chao';
    }else{
        b.innerHTML = 'hello';
    }
})
console.log(typeof 42);