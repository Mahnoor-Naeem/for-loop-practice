
function printTable(){
    let tableNum = parseInt(document.querySelector('#table-num').value);
    let stratTable = parseInt(document.querySelector('#start-table').value);
    let EndTable = parseInt(document.querySelector('#end-table').value);
    

    for(let i = stratTable; i <= EndTable; i++){
        let showTable = document.querySelector('#show-table');
        let calcTable =  tableNum+ " X "+ i+ ' = '+ tableNum*i;
        showTable.innerHTML = calcTable;
        // showTable.append().calcTable;
        console.log(tableNum+ " X "+ i+ ' = '+ tableNum*i);
    }
}


