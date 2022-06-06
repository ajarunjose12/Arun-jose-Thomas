function compute()
{
    p = document.getElementById("principal").value;
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var amount=principal*years*rate/100;
    var year=new Date().getFullYear()+ parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <span class='number'>"+principal+",</span>\<br\>at an interest rate of <span class='number'> "+rate+"%</span>\<br\>You will receive an amount of<span class='number'> "+amount+",</span>\<br\>in the year <span class='number'>"+year+"</span>\<br\>";
    
}
function updateRate(){
    
    var rateval=document.getElementById("rate").value;
    console.log(rateval);
    console.log(typeof rateval);
    var x = rateval+ " % ";
    document.getElementById("rate_val").innerText=x;
}


