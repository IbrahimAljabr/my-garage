'use strict'

//global var

var form=document.getElementById('formId');
var table=document.getElementById('tableId');


var arrayOfCars=[];

function Cars(name,cat,modle){

    this.name=name;
    this.cat=cat;
    this.modle=modle;

    arrayOfCars.push(this);
}


Cars.prototype.renderCars=function(){

    
    var tr=document.createElement('tr');
    
    var td=document.createElement('td');
    var img=document.createElement('img');

    img.setAttribute('src',this.cat)
    tr.appendChild(td);
    td.textContent='Car Name: '+this.name+'   Model Year: '+this.modle;


    
    td.appendChild(img);
    table.appendChild(tr);

}

//functions


function checkIfEmpty(){

    if(localStorage.getItem('carsData'))
    {
        var newObj=JSON.parse(localStorage.getItem('carsData'))

        for (var index = 0; index < newObj.length; index++) {
            var newCar=new Cars(newObj[index].name,newObj[index].cat,newObj[index].modle);

            newCar.renderCars();
            
        }
        
    }
}

function myFunction() {
    localStorage.clear();
    arrayOfCars=[];
    table.innerHTML="";
  }

function clearBtn(){

    
}

function submitForm(event){
    event.preventDefault();

    var carName=event.target.carName.value;
    var category=event.target.category.value;
    var modle=event.target.modle.value;

    var newCar=new Cars(carName,category,modle);

    newCar.renderCars();
    localStorage.setItem('carsData',JSON.stringify(arrayOfCars))


}


checkIfEmpty();
addEventListener('submit',submitForm);