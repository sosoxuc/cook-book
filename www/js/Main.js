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
    var data = ev.dataTransfer.getData('text')
    var ingrediant = document.createElement('div')
    ingrediant.className = 'ingrediant'
    ingrediant.style.top = '100px'
    ev.target.appendChild(ingrediant)
}
