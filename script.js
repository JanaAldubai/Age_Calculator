function calculateAge() {
    var input = document.getElementById("birthday").value;
    var dateEntered = new Date(input); 

    if (input == null || input == '') {  
        document.getElementById("yearNumber").innerHTML = "0";
        document.getElementById("monthNumber").innerHTML = "0";
        document.getElementById("dayNumber").innerHTML = "0";
        document.getElementById("error").innerHTML = "Please enter a valid date!";    
    }

    else {
        var yearEntered = dateEntered.getYear();  
        var monthEntered = dateEntered.getMonth();  
        var dayEntered = dateEntered.getDate();

        var currentDate = new Date();    
        var currentYear = currentDate.getYear();  
        var currentMonth = currentDate.getMonth();  
        var currentDay = currentDate.getDate(); 

        if (yearEntered > currentYear || 
            ( (yearEntered == currentYear) && (monthEntered > currentMonth) ) ||
            ( (yearEntered == currentYear) && (monthEntered == currentMonth) && (dayEntered >= currentDay) )
        ) {
            document.getElementById("yearNumber").innerHTML = "0";
            document.getElementById("monthNumber").innerHTML = "0";
            document.getElementById("dayNumber").innerHTML = "0";
            document.getElementById("error").innerHTML = "Please enter a valid date!";
        }

        else { 
            var userYear = currentYear - yearEntered;  
      
            if (currentMonth >= monthEntered) {
                var userMonth = currentMonth - monthEntered;
            } 
            else {  
                userYear--;  
                var userMonth = currentMonth + (12 - monthEntered);  
            }

            if (currentDay >= dayEntered)  
                var userDay = currentDay - dayEntered;  

            else {  
                userMonth--;
                var userDay = currentDay + (30 - dayEntered);  
            
                if (userMonth < 0) {  
                  userMonth = 11;  
                  userYear--;  
                }  
              }  

            document.getElementById("yearNumber").innerHTML = userYear;
            document.getElementById("monthNumber").innerHTML = userMonth;
            document.getElementById("dayNumber").innerHTML = userDay;
            document.getElementById("error").innerHTML = "";
        }
    } 
}