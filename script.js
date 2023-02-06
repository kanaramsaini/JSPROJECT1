var index=0;

function colorChange(){
    var color=["red","pink","black","#ffbf00","#ffff00","#00ffbf"]
    document.getElementsByClassName('button_box')[0].style.backgroundColor=color[index++];
    if(index> color.length-1){
        index=0;
    }
}