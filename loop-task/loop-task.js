// for loop task reverse counting till 0

function showNumbers() {
    let getValue = parseInt(document.getElementById('num').value);

    for (let count = getValue; count >= 0; count--) {
        console.log(count);

    }

}