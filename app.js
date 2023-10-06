function touch(a){
    document.getElementById('inp').value += a
}   

function equal(){
    var b = document.getElementById('inp')
    b.value = eval (b.value)

}

function ac(){
    document.getElementById('inp').value = ''
}

function del(){
 var  a =  document.getElementById("inp")
a.value = a.value.slice(0,-1)
}

// var str = "5+2-"
// var newInp = "+"
// var last = str[str.length -1]
// var arr = ["+","-","*","/"]
// if(arr.indexOf(last) === -1 && arr.indexOf(newInp) !== -1){
//     str = str.slice(0, -1) + newInp
// }else{
//     str += newInp
// }

// console.log(str)
