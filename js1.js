function $() 
{var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element);
}
return elements; } 

function js1_f1()
{
$('p1').style.borderBottom="10px solid  red ";
}

function js1_f2()
{
$('p1').style.borderBottom="10px solid  red ";
}
function js1_f9()
{
$('b1').style.borderRight="10px solid  black";
}

function js1_f10()
{
$('b1').style.borderRight="10px solid  black ";
}
function js1_f5()
{
$('p3').style.borderWidth="7px 7px 7px 7px";
}

function js1_f6()
{
$('p3').style.borderWidth="7px 7px 7px 7px";
}
function js1_f7()
{
$('p4').style.fontSize="250%";
}

function js1_f8()
{
$('p4').style.fontSize="250%";
}
function js1_f33()
{
$('p2').style.listStylePosition="inside";
}

function js1_f44()
{
$('p2').style.listStylePosition="outside";
}
function js1_f3()
{
$('p2').style.paddingBottom="40px";
}

function js1_f4()
{
$('p2').style.paddingBottom="40px";
}

