// function mostrarMenos() {
//     document.getElementById('multiCollapseExample1').style.display = 'none';
//     document.getElementById('multiCollapseExample2').style.display = 'none';
// }
// function mostrarMas() {
//     document.getElementById('multiCollapseExample2').style.display = 'block';
//     document.getElementById('multiCollapseExample1').style.display = 'block';
// }

function mostrarMenos() {
    document.querySelectorAll('div.collapse').style.display = 'none';
}
function mostrarMas() {
    document.querySelectorAll('div.collapse').style.display = 'block';
}