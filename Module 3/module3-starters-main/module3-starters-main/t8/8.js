const button = document.getElementById("start");
button.addEventListener("click",function()
{
    const a = parseInt(document.getElementById("num1").value), b = parseInt(document.getElementById("num2").value),
        sign = document.getElementById("operation").value;
    if(sign == "add")
        document.getElementById("result").innerHTML = a+b;
    else if(sign == "sub")
        document.getElementById("result").innerHTML = a-b;
    else if(sign == "multi")
        document.getElementById("result").innerHTML = a*b;
    else if(b!=0)
        document.getElementById("result").innerHTML = a/b;
    else document.getElementById("result").innerHTML = "impossible!";
})