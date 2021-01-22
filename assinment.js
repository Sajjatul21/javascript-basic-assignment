// Question No-1 (Convert Kilometer to Meter)-->

function kilometerToMeter(kilometer){
 
    if(typeof(kilometer)=="string" || typeof(kilometer)=="object"){
      console.log("Pease input only number");
  } 
   kilometer= Math.abs(kilometer);

    var meter = kilometer * 1000;     /**1 kilometer = 1000 meter*/
    return meter;
}
var result = kilometerToMeter(12);
console.log(result);



// Question No-2 (Budget Calculator)

function budgetCalculator(watch, phone, laptop) {
    
    if(typeof(watch)=="string" || typeof(phone)=="string" || typeof(laptop)=="string"){
        console.log("Pease input only number");
    } 

    var budgetWatch = watch * 50;         
    var budgetMobile = phone * 100;       
    var budgetLaptop = laptop * 500;     
    var total= budgetWatch + budgetMobile + budgetLaptop;
    return total;
}

var result = budgetCalculator(1,2,1);
console.log(result);


// Question-03 (Hotel Cost Calculators)-->

function hotelCost(days) {
    if(typeof(days)=="string" || typeof(days)=="object" ){
        console.log("Pease input only day number");
    } 
    var cost = 0;
    if (days <= 10) {  
        cost += days * 100;              //For first 1 to 10 days 100(per Day)        
    }
    else if (days > 10 && days <= 20) {
      var firstTenDay=10*100;
      var nextTenDay=days-10;
      var secondTenDay=nextTenDay*80;          //For 11 to 20 days 80(per Day)
      cost=firstTenDay+secondTenDay;
    }
    else {
        firstTenDay=10*100;
        secondTenDay=10*80;
        var nextTenDay=days-20;
        var thirdTenDay=nextTenDay*50;           //For 21 to more 50(per Day)
        cost=firstTenDay+secondTenDay+thirdTenDay;
    }
             
    return cost;
}
var output = hotelCost(14);
console.log(output);




// Question No-04 (Mega Friend Name)-->

function megaFriend(friendName){

    if(typeof(friendName)=="number" || typeof(friendName)=="undefined"){
        console.log("Pease input only name");
    } 
    var largest = friendName[0];

    for (i = 0; i < friendName.length; i++){
        var nextName = friendName[i];
        if (nextName.length > largest.length){
            largest = nextName;
        }
    }
    return largest;
}
var output = megaFriend(["Shihab", "Sajjatul Islam", "Imran","Ismail","Rakib","Rupanjel"]);
console.log(output);