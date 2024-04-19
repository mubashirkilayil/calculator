function valRead(val){
    document.getElementById("screen").value+=val
}
function clr(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result= eval(text)
    console.log(result)
    document.getElementById("screen").value=result
}