const button = document.getElementById("start");
button.addEventListener("click",function() {
    const operation = document.getElementById("calculation").value.split('');
    const a = parseInt(operation[0]), b = parseInt(operation[2]);
    if(operation[1] == "+")
        document.getElementById("result").innerHTML = a+b;
    else if(operation[1] == "-")
        document.getElementById("result").innerHTML = a-b;
    else if(operation[1] == "*")
        document.getElementById("result").innerHTML = a*b;
    else if(b!=0 & operation[1]=="/")
        document.getElementById("result").innerHTML = a/b;
    else document.getElementById("result").innerHTML = "impossible!";
})