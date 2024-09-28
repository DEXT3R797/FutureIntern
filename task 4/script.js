function buttonclick(val){
    document.getElementById('screen').value=document.getElementById('screen').value+val;
}

function cleardisplay(){
    document.getElementById('screen').value=""
}

function clearlast(){
    document.getElementById('screen').value=document.getElementById('screen').value.slice(0,-1)
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}