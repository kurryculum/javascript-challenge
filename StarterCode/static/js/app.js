var tabledata = data;

var tbody = d3.select("tbody")

data.forEach(function(data){

    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
 var button = d3.select("#filter-btn");
 var form = d3.select("#form");
 button.on("click",runEnter);
 button.on("submit",runEnter);
 function runEnter(){
 d3.event.preventDefault();
 var inputElement = d3.select("datetime");
 var inputValue = inputElement.property("value");

 console.log(inputValue);
 }