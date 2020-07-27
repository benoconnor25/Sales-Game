var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 1000;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   };
   
function createTable()
   {
   rn = 500;
   cn = 4;
     
    for(var r=0;r<parseInt(rn,10);r++)
     {
        var x=document.getElementById('myTable').insertRow(r+1);
        var random_number = Math.floor(Math.random() * 100);
            console.log(random_number);
        var number_two = Math.floor(Math.random() * 25);
        var things = ['Rock', 'Paper', 'Scissors'];
        var thing = things[Math.floor(Math.random()*things.length)];
        var regions = ['North', 'South', 'East','West'];
        var region = regions[Math.floor(Math.random()*regions.length)];
    
    //price

       for(var c=0;c<parseInt(1,10);c++)  
       {
        var y=  x.insertCell(c);
        y.innerHTML=number_two; 
       }

    //qty
        for(var c=0;c<parseInt(1,10);c++)  
       {
        var y=  x.insertCell(c);
        y.innerHTML=random_number; 
       }
    //product        
       for(var c=0;c<parseInt(1,10);c++)  
       {
       var y=  x.insertCell(c);
       y.innerHTML=thing; 
       }

    //region        

       for(var c=0;c<parseInt(1,10);c++)  
       {
       var y=  x.insertCell(c);
       y.innerHTML=region; 
       }
      }
   }
//crate sales by region table
   function createTable2()
   {
   rn = 1;
   cn = 2;
     
    for(var r=0;r<parseInt(rn,10);r++)
     {
        var x=document.getElementById('salesbyregion').insertRow(r+1);
        var things = ['Rock', 'Paper', 'Scissors'];
        var thing = things[Math.floor(Math.random()*things.length)];
        var regions = ['North', 'South', 'East','West'];
        var region = regions[Math.floor(Math.random()*regions.length)];
    
    //price

       for(var c=0;c<parseInt(1,10);c++)  
       {
        var y=  x.insertCell(c);
        y.innerHTML=thing; 
       }

    //qty
        for(var c=0;c<parseInt(1,10);c++)  
       {
        var y=  x.insertCell(c);
        y.innerHTML=region; 
       }
    
      }
   }

   function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        csv.push(row.join(","));        
    }
    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}
function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});
    // Download link
    downloadLink = document.createElement("a");
    // File name
    downloadLink.download = filename;
    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);
    // Hide download link
    downloadLink.style.display = "none";
    // Add the link to DOM
    document.body.appendChild(downloadLink);
    // Click download link
    downloadLink.click();
}



