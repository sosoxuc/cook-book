(function(){

console.log('Test')

})()

var x=0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id)
}

function drop(ev) {
    ev.preventDefault()
    
    var desk = ev.target
    var data = ev.dataTransfer.getData('text')
    var ingrediant = document.createElement('div')
    ingrediant.className = 'ingrediant'
    
    var removeButton = document.createElement('a')
    removeButton.appendChild(document.createTextNode('Remove'))
    removeButton.style.cursor = 'pointer';
    removeButton.onclick = function (){
        desk.removeChild(ingrediant)
    }
    ingrediant.appendChild(removeButton)
    
    
    desk.appendChild(ingrediant)
}
