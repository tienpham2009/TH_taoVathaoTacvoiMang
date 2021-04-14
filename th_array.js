
let x = 0;
let arr = Array();
function pushArray() {

    arr[x] = document.getElementById('input').value;
    x++;
    document.getElementById('input').value = '';
}

function displayArray() {
    let a = '<hr/>';
    for (let i = 0; i < arr.length; i++) {
        a += 'Element' + i + '=' + arr[i] + '<br/>';
    }
    document.getElementById('Result').innerHTML = a;
}