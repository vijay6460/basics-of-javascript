// This is used for the document.getElementById this can be checked for the below function by using the id and function name

/* function save(){
    var a=document.getElementById("one").value
      console.log(a)
  }
   */


//Grabing all the values using the class name

// It creates an array the className


function save(){
    /* var b=document.getElementsByClassName("fun")
    console.log(b)
    console.log(b[0])// It will display the whole tag element
    console.log(b[1].innerHTML)// It will displays the whole content what ever  the content present inside the tags
 */
var r=document.getElementsByTagName("li")
console.log(r)
console.log(r[1].innerHTML)
for(i=0;i<=r.length-1;i++)// using for loop we can iterate and array
// console.log(r[i])
console.log(r[i].innerHTML)// using innerHTML we can display the content inside the tags
}


/* function pro(){
   var g= document.createElement("input")
   document.body.appendChild(g)
} */



function pro(){
    var f=document.getElementById("one")
    f.setAttribute("type","number")
}

  