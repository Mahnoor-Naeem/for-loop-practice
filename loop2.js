

function countNum(){
   let minNum = parseInt(document.querySelector('#minInp').value);
   let maxNum = parseInt(document.querySelector('#maxInp').value);
   let stepNum = parseInt(document.querySelector('#stepInp').value);

   // This is infinite loop its never stop while we stopping forcely...

//    for(let count = minNum; count <= maxNum; count -= stepNum){
//        console.log(count);
//    }

   for(let count = minNum; count <= maxNum; count += stepNum){
    console.log(count);
}
}