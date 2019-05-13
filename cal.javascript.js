let firstRow = [{seven:7,eight:8,nine:9,divide:'/'},
                {four:4,five:5,six:6,multiply:'x'},
                {one:1,two:2,three:3,plus:'+'},
                {empty:'c',equal:'=',}]

let [{},{},{},{equal:d}] = firstRow
console.log('last row',d)

 class Calculator {
    constructor(option) {
        this.table = option.table;

        this.calHeader()
        this.calBody(this.table)

    }

calHeader(){
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.setAttribute('colspan', '4');
    const input = document.createElement('input')
    input.setAttribute('id', 'field')
    td.appendChild(input)
    tr.appendChild(td)
    thead.appendChild(tr);
    this.table.appendChild(thead)
    // console.log("tr",tr)
}

calBody(table){
const tbody = document.createElement('tbody');
 firstRow.forEach(function (item,index) {
    const tr = document.createElement('tr');
    console.log('item',item)



        for(let key in item){
            const td = document.createElement('td')
            let button = document.createElement('button')
            button.setAttribute('id','button')
            button.innerText = item[key]

            button.onclick = getValue;
            d.onclick = show;
            function getValue(){
            const val = button.innerText;
           console.log(val)
           //input.innerText = val;
           let equation = document.getElementById('field').value += val;

            }

            function show(){
                console.log(getValue())
            }
            td.appendChild(button)
            tr.appendChild(td)

        }
     tbody.appendChild(tr)
     console.log('tr',tr)

    })

table.appendChild(tbody);
    }

}

function getValue(event) {
    event.preventDefault();
}

let calculator = document.getElementById("calculator");
new Calculator({table:calculator})