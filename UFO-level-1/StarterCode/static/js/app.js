var tableData = data;


var tbody = d3.select("tbody");

data.forEach(function(data){

    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
var input = d3.select("#datetime")
 var button = d3.select("#filter-btn");
 var form = d3.select("#form");
 button.on("click",runenter); 
 form.on("submit",runenter);

 function runenter (){ 
 d3.event.preventDefault();
 
 var input = d3.select("#datetime");
 var inputValue = input.property("value");

 console.log(inputValue);
 
 var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);
  var tbody = d3.select("tbody");
  tbody.html("");
  filteredData.forEach(function(data){

    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
//   var filteredData = function(f){

 
 
}
 
// /  var summary = d3.select(".summary");
//  d3.selectall("tbody").remove();
//  date.forEach(datetime => {
    //  summary.append("tbody").text(datetime);
//  })

