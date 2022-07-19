function disply(input)
         {
             document.getElementById("result").value+=input
         }
function solve()
         {   
             let a = document.getElementById("result").value
             let b = eval(a)
             document.getElementById("result").value = b
         }
function clr()
         {
             document.getElementById("result").value =""
         }

function delChar(input) 
         {
            input.value = input.value.slice(0, -1)
         }