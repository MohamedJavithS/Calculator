function disply(input, character)
{
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}


function clr()
{
	document.getElementById("result").value = ""
}

function delChar(input)
{
	input.value = input.value.slice(0,-1)
}

function solve(form)
{
	form.result.value = eval(form.result.value)
}

/*function solve()
{   
     let a = document.getElementById("result").value
     let b = eval(a)
     document.getElementById("result").value = b
}*/

function sin1() 
{
	document.sciCalc.result.value = Math.sin(document.sciCalc.result.value)
}

function cos1()
{
	document.sciCalc.result.value = Math.cos(document.sciCalc.result.value)
}

function tan1()
{
	document.sciCalc.result.value = Math.tan(document.sciCalc.result.value)
}

function log1()
{
	document.sciCalc.result.value = Math.log10(document.sciCalc.result.value)
}

function sqrt1()
{
	document.sciCalc.result.value = Math.pow(document.sciCalc.result.value, 1/2)
}

function sq()
{
	document.sciCalc.result.value = Math.pow(document.sciCalc.result.value,2)
}

function cubert1()
{
	document.sciCalc.result.value = Math.pow(document.sciCalc.result.value, 1/3)
}

function pii()
{
   document.sciCalc.result.value = Math.PI
}