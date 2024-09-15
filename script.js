// Ex2 And Prep For Next Ex
const tableBody = document.getElementById('table-body');
const rows = tableBody.querySelectorAll('tr');
let counter = 1;
const dataObjects = [];

rows.forEach(row => {
    const cells = row.children;
    const dataObj = {};

    dataObj.id = counter++;
    dataObj.icon = cells[1].querySelector('img').src;
    dataObj.store = cells[2].dataset.store
    dataObj.address = cells[3].dataset.address
    dataObj.city = cells[4].dataset.city
    dataObj.price = cells[5].dataset.price
    dataObj.link = cells[6].querySelector('a').href;
    dataObj.rate = parseFloat(cells[7].dataset.rate);
    if (dataObj.rate < 2) {
        row.classList.add('table-danger');
    }
    if (dataObj.rate > 4) {
        row.classList.add('table-success');
    }
    dataObjects.push(dataObj);
});

console.log(dataObjects);

// Ex3
function averagePriceGen(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        const price = parseFloat(arr[i].price);
        if (!isNaN(price)) {
            sum += price;

        }
    }
    return sum / arr.length;
}

console.log('Average price:', averagePriceGen(dataObjects));  // should print 3812.25

// Ex4
function bestOp(arr){
    let minPrice = 0;
    let bestId = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i].rate >= 4) {
            if (minPrice === 0 || arr[i].price < minPrice) {
                minPrice = arr[i].price;
                bestId = arr[i].id;
            }
        }
    }
    return bestId;
}

console.log('Best option:', bestOp(dataObjects));  // should print 1

// Ex5
// let IsBuy = false;
let buyTable = document.querySelector('#buyTable');
rows.forEach(row => {
    // const cells = row.children;
    // cellBtns = cells[7].children
    row.addEventListener('click',(e)=>{
        if(e.target.classList.contains("d-btn")){
            console.log('Delete Btn Used');
            row.remove();
        }
        if(e.target.classList.contains("b-btn")){
            console.log('Buy Btn Used');
            buyTable.style.display = 'block';
            document.querySelector('#storeD').textContent = row.children[2].dataset.store
            document.querySelector('#priceD').textContent = row.children[5].dataset.price
        }
    })
})

document.querySelector('#sendBtn').addEventListener('click', () => {
    buyTable.style.display = 'none';
})