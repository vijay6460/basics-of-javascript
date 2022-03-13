// var a=[1,2,3,4,'Hello',true,false,null,undefined,'pro',{name:'rahul',age:20}]
// // alert(`this is an array ${a}`)
// // confirm(`This is an array ${a}`)
// console.log(a)// displays the array
// console.log(a.length)//gives the length of an array
// console.log(a[2])//index of an array
// console.log(typeof(a[5]))// specifies the datatypes and index of an array
// console.log(typeof(a))//object
// console.log(a[20])//undefined
// console.log(a[10])


// var x=["fun",12,true]
// console.log(x)
// console.log(x[3],x[2],x[1],x[0])
// for(i=0;i<x.length;i++){
//     console.log(x[i])

// }
// var z=[1,2,3,'hello',true,false,'string','boolean',undefined,null]
  
// for(k=0;k<=z.length;k++){
//     console.log(z[k])
// }


//push method in an array
// we can add many  elements in an array
var a=[12,3,4,5,'hello',true]
// a.push(0,'fun',true)
// console.log(a)

// a.pop()
// console.log(a)

// a.unshift(4,23,25)
// console.log(a)

// a.shift()
// console.log(a)

//splice method  
// we can add and delete multiple values at a time
//a.splice(at what position,how many values you want to delete,new values to add)
// a.splice(4,1)//removing the element of an array of 4th position 
// console.log(a)
// a.splice(1,2)// removing the element of an array after the 2nd element
// console.log(a)
// a.splice(0,5)
// console.log(a)//removing the all elements in an array
a.splice(1,1,"pro","fun",true)// adding more than one value
console.log(a)

var k='Helloworld'
p=k.slice(7)
l=k.substring(5,9)
console.log(l)
// console.log(p)






