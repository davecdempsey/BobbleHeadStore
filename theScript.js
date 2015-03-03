// Professional Athlete String values
var strTim = "tim";
var strMike = "mike";


// Government Official String values
var strAbe = "abe";
var strObama = "obama";


// Movie Star String values
var strDwight = "dwight";
var strSheldon = "sheldon";

// Professional Athlete counters
var timCounter = 0;
var mikeCounter = 0;

// Government Official counters
var abeCounter = 0;
var obamaCounter = 0;

// Movie Star counters
var dwightCounter = 0;
var sheldonCounter = 0;

// Professional Athlete cost
var timCost; 
var mikeCost;

// Government Official cost
var abeCost;
var obamaCost;


// Movie Star cost
var dwightCost;
var sheldonCost;

// Total without tax or shipping
var subTotal;

// SubTotal in taxes
var subTax;


// final price including tax and shipping
var finalCost;

// Home Page Functions

function loadHome(){
    
    
    document.getElementById("HomeInformation").innerHTML =
    "Welcome to the online bobble head store. We provide many different bobble heads. Our categories include Professional Athletes, US Presidents and TV Characters.";
    
}

function athlete(){
    document.getElementById("HomeInformation").innerHTML =
    "The athlete bobble heads that we provide are current NFL players, specifically QB's.";
}

function president(){
    document.getElementById("HomeInformation").innerHTML =
    "The US President bobble heads that we provide are 2 of the most famous US Presidents to sit in office.";
}

function actor(){
    document.getElementById("HomeInformation").innerHTML =
    "The TV charcter bobble heads that we provide are some of the morst popular characters on television today.";
}

// COOKIE FUNCTIONS

//fucntion to see if cookies need to be loaded
function loadPage(){
    if(window.getCookie("page") != null && window.getCookie("page") != ""){
        
        // pass cookies
        window.passCookies();
        
        newCookie();
        
    }
    else{
        // write new cookie
        setSessionCookie("0", "0", "0", "0", "0", "0", "1");
    }
}

function loadPageShipping(){
    subTotal = 0;
    subTax = 0;
    finalCost = 0;
    var theString = "";
    var timB = false;
    var mikeB = false;
    var abeB = false;
    var obamaB = false;
    var dwightB = false;
    var sheldonB = false;
    
    // Professional Athlete conutners
    timCounter = parseInt(window.getCookie(strTim));
    if(timCounter > 0)
        timB = true;
    mikeCounter = parseInt(window.getCookie(strMike));
    if(mikeCounter > 0)
        mikeB = true;
    
    
    // Government Officials counters
    abeCounter = parseInt(window.getCookie(strAbe));
    if(abeCounter > 0)
        abeB = true;
    obamaCounter = parseInt(window.getCookie(strObama));
    if(obamaCounter > 0)
        obamaB = true;
    
   
    
    // Movie Star counters
    dwightCounter = parseInt(window.getCookie(strDwight));
    if(dwightCounter > 0)
        dwightB = true;
    
    sheldonCounter = parseInt(window.getCookie(strSheldon));
    if(sheldonCounter > 0)
        sheldonB = true;
    
  
    
    // Professional Athlete cost functions
    timCost = timTotal(timCounter);
    mikeCost = mikeTotal(mikeCounter);
    
  
    
    // Government Officials cost functions
    abeCost = abeTotal(abeCounter);
    obamaCost = obamaTotal(obamaCounter);
    
   
    
    // Movie Star cost functions
    dwightCost = dwightTotal(dwightCounter);
    sheldonCost = sheldonTotal(sheldonCounter);
    
   
    
    // total cost function without tax or shipping
    subTotal = finalTotal();
    
    
    // tax function
    subTax = parseFloat(totalTax(subTotal));
    var subTaxFixed = subTax.toFixed(2);
    
    
    
    // total price with tax and shipping
    finalCost = parseFloat(subTotal) + parseFloat(subTax) + 5;
    var finalCostFixed = finalCost.toFixed(2);
    
    if(timB)
        document.getElementById("itemT").innerHTML = timCounter + " Tim Tebow Bobble Head";
    else
        document.getElementById("itemT").innerHTML = "";
        
    if(mikeB)
        document.getElementById("itemM").innerHTML = mikeCounter + " Micheal Vick Bobble Head";
    else
        document.getElementById("itemM").innerHTML = "";
        
    if(abeB)
        document.getElementById("itemA").innerHTML = abeCounter + " Abe Lincoln Bobble Head";
    else
        document.getElementById("itemA").innerHTML = "";
    if(obamaB)
        document.getElementById("itemO").innerHTML = obamaCounter + " Barack Obama Bobble Head";
    else
        document.getElementById("itemO").innerHTML = "";
    if(dwightB)
        document.getElementById("itemD").innerHTML = dwightCounter + " Dwight Schrute Bobble Head";
    else
        document.getElementById("itemD").innerHTML = "";
    if(sheldonB)
        document.getElementById("itemS").innerHTML = sheldonCounter + " Sheldon Cooper Bobble Head";
    else
        document.getElementById("itemS").innerHTML = "";


    //document.getElementById("itemCost").innerHTML = "$" + finalCostFixed;
    
    document.getElementById("subTotalTaxShipping").innerHTML = "$" + subTaxFixed;

    document.getElementById("totalCostShipping").innerHTML = "$" + finalCostFixed;
    
    document.getElementById("subTotalShipping").innerHTML = "$" + subTotal;
}


// deletes cookies and creates cookies
function newCookie(){
    
    // delete cookies
    window.deleteCookie("page");
        
    window.deleteCookie(strTim);
    window.deleteCookie(strMike);
        
    window.deleteCookie(strAbe);
    window.deleteCookie(strObama);
        
    window.deleteCookie(strDwight);
    window.deleteCookie(strSheldon);

    // write new cookie
    setSessionCookie(String(timCounter), String(mikeCounter), String(abeCounter), String(obamaCounter), String(dwightCounter), String(sheldonCounter), "1");
}

// creates cookie
function setSessionCookie(timNum, mikeNum, abeNum, obamaNum, dwightNum, sheldonNum, pageLoad){
    // page has been loaded before variable
    document.cookie = "page=" + pageLoad;
    
    // add athlete amounts
    document.cookie = "tim=" + timNum;
    document.cookie = "mike=" + mikeNum;
    
    // add government officials amounts
    document.cookie = "abe=" + abeNum;
    document.cookie = "obama=" + obamaNum;
    
    // add movie star amounts
    document.cookie = "dwight=" + dwightNum;
    document.cookie = "sheldon=" + sheldonNum;
}

// adds the number of tim's requested
function addTim(){
    
    timCounter = timCounter + parseInt(document.form1.timQuantity.value);
    window.alert("You have successfuly added " + document.form1.timQuantity.value + " tim to your cart");
    window.deleteCookie(strTim);
    newCookie();
}


// adds the number of mike requested
function addMike(){
    mikeCounter = mikeCounter + parseInt(document.form2.mikeQuantity.value);
    window.alert("You have successfuly added " + document.form2.mikeQuantity.value + " Michael Vick bobble head to your cart");
    window.deleteCookie(strMike);
    newCookie();
}

// adds the number of abe requested
function addAbe(){
    abeCounter = abeCounter + parseInt(document.form3.abeQuantity.value);
    window.alert("You have successfuly added " + document.form3.abeQuantity.value + " Abe Lincoln bobble head to your cart");
    window.deleteCookie(strAbe);
    newCookie();
}


// adds the number of obama requested
function addObama(){
    obamaCounter = obamaCounter + parseInt(document.form4.obamaQuantity.value);
    window.alert("You have successfuly added " + document.form4.obamaQuantity.value + " Barack Obama bobble head to your cart");
    window.deleteCookie(strObama);
    newCookie();
}

// adds the number of dwight requested
function addDwight(){
    dwightCounter = dwightCounter + parseInt(document.form5.dwightQuantity.value);
    window.alert("You have successfuly added " + document.form5.dwightQuantity.value + " Dwight Schrute bobble head to your cart");
    window.deleteCookie(strDwight);
    newCookie();
}

// adds the number of sheldon requested
function addSheldon(){
    sheldonCounter = sheldonCounter + parseInt(document.form6.sheldonQuantity.value);
    window.alert("You have successfuly added " + document.form6.sheldonQuantity.value + " Sheldon Cooper bobble head to your cart");
    window.deleteCookie(strSheldon);
    newCookie();
}


// total number of tim's
function timTotal(numberTim){
    var tim = numberTim * 23.99;
    
    // round to the closest 2 decimal places
    var result = tim.toFixed(2);
    return String(result);
}

// totally number of mike's
function mikeTotal(numberMike){
    var mike = numberMike * 23.99;
    
    // round to the closest 2 decimal places
    var result = mike.toFixed(2);
    return String(result);
}

// totally number of abe's
function abeTotal(numberAbe){
    var abe = numberAbe * 15.99;
    
    // round to the closest 2 decimal places
    var result = abe.toFixed(2);
    return String(result);
}

// totally number of obama's
function obamaTotal(numberObama){
    var obama = numberObama * 19.99;
    
    // round to the closest 2 decimal places
    var result = obama.toFixed(2);
    return String(result);
}


// totally number of dwight
function dwightTotal(numberDwight){
    var dwight = numberDwight * 23.99;
    
    // round to the closest 2 decimal places
    var result = dwight.toFixed(2);
    return String(result);
}

// totally number of sheldon
function sheldonTotal(numberSheldon){
    var sheldon = numberSheldon * 23.99;
    
    // round to the closest 2 decimal places
    var result = sheldon.toFixed(2);
    return String(result);
}

function totalTax(costOfItems){
    var subtotalTax = (costOfItems * .0575)
    
    // round to the closest 2 decimal places
    var result = subtotalTax.toFixed(2);
    return String(result);
}

function finalTotal(){
    var result = parseFloat(timCost) + parseFloat(mikeCost) + parseFloat(abeCost) + parseFloat(obamaCost) + parseFloat(dwightCost) + parseFloat(sheldonCost);
    
    // round to the closest 2 decimal places
    var fixedResult = result.toFixed(2);
    return String(fixedResult);
}

function finalPrice(){
    var result;
    if(parseFloat(subTotal) + parseFloat(subTax) == 0)
        result = 0;
    else
        result = parseFloat(subTotal) + parseFloat(subTax) + 5;
    
    if(result > 0){
        document.getElementById("payForOrder").innerHTML = "<a href='shipInfo.html'>Pay For Order</a>";
    }
    else
        document.getElementById("payForOrder").innerHTML = "Pay For Order";
        
    return result.toFixed(2);
}

function passCookies(){
    subTax = 0;
    finalCost = 0;
    subTotal = 0;
    
    // Professional Athlete conutners
    timCounter = parseInt(window.getCookie(strTim));
    mikeCounter = parseInt(window.getCookie(strMike));
    
    // Government Officials counters
    abeCounter = parseInt(window.getCookie(strAbe));
    obamaCounter = parseInt(window.getCookie(strObama));
    
    // Movie Star counters
    dwightCounter = parseInt(window.getCookie(strDwight));
    sheldonCounter = parseInt(window.getCookie(strSheldon));
    
    // Professional Athlete cost functions
    timCost = timTotal(timCounter);
    mikeCost = mikeTotal(mikeCounter);
    
    // Government Officials cost functions
    abeCost = abeTotal(abeCounter);
    obamaCost = obamaTotal(obamaCounter);
    
    // Movie Star cost functions
    dwightCost = dwightTotal(dwightCounter);
    sheldonCost = sheldonTotal(sheldonCounter);
    
    // total cost function without tax
    subTotal = finalTotal();
    
    // tax function
    subTax = totalTax(subTotal);
    
    // total price with tax and shipping
    finalCost = finalPrice();
    
    // writes the amount of tim and cost of the total in the cart page
    document.getElementById("timCount").innerHTML = String(timCounter);
    document.getElementById("timPrice").innerHTML = "$" + timCost;
   
    // writes the amount of mike and cost of the total in the cart page
    document.getElementById("mikeCount").innerHTML = String(mikeCounter);
    document.getElementById("mikeCost").innerHTML = "$" + mikeCost;
    
    // writes the amount of abe and cost of the total in the cart page
    document.getElementById("abeCount").innerHTML = String(abeCounter);
    document.getElementById("abeCost").innerHTML = "$" + abeCost;
    
    // writes the amount of obama and cost of the total in the cart page
    document.getElementById("obamaCount").innerHTML = String(obamaCounter);
    document.getElementById("obamaCost").innerHTML = "$" + obamaCost;
    
    // writes the amount of dwight and cost of the total in the cart page
    document.getElementById("dwightCount").innerHTML = String(dwightCounter);
    document.getElementById("dwightCost").innerHTML = "$" + dwightCost;
    
    // writes the amount of sheldon and cost of the total in the cart page
    document.getElementById("sheldonCount").innerHTML = String(sheldonCounter);
    document.getElementById("sheldonCost").innerHTML = "$" + sheldonCost;
    
    
    document.getElementById("subTotalTax").innerHTML = "<b>$" + subTax + "</b>";
    
    document.getElementById("totalCost").innerHTML = "<b>$" + finalCost + "</b>";
    
    document.getElementById("subTotal").innerHTML = "<b>$" + subTotal + "</b>";
}


// Removes one tim from total
function removeOneTim(){
    timCounter = timCounter - 1;
    
    if(timCounter < 0)
        timCounter = 0;
    
    window.newCookie();
    
    timCost = timTotal(timCounter);
    
    
    document.getElementById("timCount").innerHTML = timCounter;
    document.getElementById("timPrice").innerHTML = "$" + timCost;
    
    subTotal = finalTotal();
    subTax = totalTax(subTotal);
    finalCost = finalPrice();
    
    document.getElementById("subTotalTax").innerHTML = "<b>$" + subTax + "</b>";
    
    document.getElementById("totalCost").innerHTML = "<b>$" + finalCost + "</b>";
    
    document.getElementById("subTotal").innerHTML = "<b>$" + subTotal + "</b>";
    
}

// Removes one Mike from the total
function removeOneMike(){
    mikeCounter = mikeCounter - 1;
    
    if(mikeCounter < 0)
        mikeCounter = 0;
    
    window.deleteCookie(strMike);
    window.newCookie();
    
    mikeCost = mikeTotal(mikeCounter);
    
    document.getElementById("mikeCount").innerHTML = mikeCounter;
    document.getElementById("mikeCost").innerHTML = "$" + mikeCost;
    
     subTotal = finalTotal();
    subTax = totalTax(subTotal);
    finalCost = finalPrice();
    
    document.getElementById("subTotalTax").innerHTML = "<b>$" + subTax + "</b>";
    
    document.getElementById("totalCost").innerHTML = "<b>$" + finalCost + "</b>";
    
    document.getElementById("subTotal").innerHTML = "<b>$" + subTotal + "</b>";
   
}

// Removes one abe from total
function removeOneAbe(){
    abeCounter = abeCounter - 1;
    
    if(abeCounter < 0)
        abeCounter = 0;
    
    window.newCookie();
    
    abeCost = abeTotal(abeCounter);
    
    document.getElementById("abeCount").innerHTML = abeCounter;
    document.getElementById("abeCost").innerHTML = "$" + abeCost;
    
    subTotal = finalTotal();
    subTax = totalTax(subTotal);
    finalCost = finalPrice();
    
    document.getElementById("subTotalTax").innerHTML = "<b>$" + subTax + "</b>";
    
    document.getElementById("totalCost").innerHTML = "<b>$" + finalCost + "</b>";
    
    document.getElementById("subTotal").innerHTML = "<b>$" + subTotal + "</b>";
}

// Removes one obama from total
function removeOneObama(){
    obamaCounter = obamaCounter - 1;
    
    if(obamaCounter < 0)
        obamaCounter = 0;
    
    
    window.newCookie();
    
    obamaCost = obamaTotal(obamaCounter);
    
    document.getElementById("obamaCount").innerHTML = obamaCounter;
    document.getElementById("obamaCost").innerHTML = "$" + obamaCost;
    
    subTotal = finalTotal();
    subTax = totalTax(subTotal);
    finalCost = finalPrice();
    
    document.getElementById("subTotalTax").innerHTML = "<b>$" + subTax + "</b>";
    
    document.getElementById("totalCost").innerHTML = "<b>$" + finalCost + "</b>";
    
    document.getElementById("subTotal").innerHTML = "<b>$" + subTotal + "</b>";
   
}

// Removes one dwight from total
function removeOneDwight(){
    dwightCounter = dwightCounter - 1;
    
    if(dwightCounter < 0)
        dwightCounter = 0;
    
    
    window.newCookie();
    
    dwightCost = dwightTotal(dwightCounter);
    
    document.getElementById("dwightCount").innerHTML = dwightCounter;
    document.getElementById("dwightCost").innerHTML = "$" + dwightCost;
    
    subTotal = finalTotal();
    subTax = totalTax(subTotal);
    finalCost = finalPrice();
    
    document.getElementById("subTotalTax").innerHTML = "<b>$" + subTax + "</b>";
    
    document.getElementById("totalCost").innerHTML = "<b>$" + finalCost + "</b>";
    
    document.getElementById("subTotal").innerHTML = "<b>$" + subTotal + "</b>";
    
}


// Removes one sheldon from total
function removeOneSheldon(){
    sheldonCounter = sheldonCounter - 1;
    
     if(sheldonCounter < 0)
        sheldonCounter = 0;
    
    window.newCookie();
    
    sheldonCost = sheldonTotal(sheldonCounter);
    
    
    document.getElementById("sheldonCount").innerHTML = sheldonCounter;
    document.getElementById("sheldonCost").innerHTML = "$" + sheldonCost;
    
    subTotal = finalTotal();
    subTax = totalTax(subTotal);
    finalCost = finalPrice();
    
    document.getElementById("subTotalTax").innerHTML = "<b>$" + subTax + "</b>";
    
    document.getElementById("totalCost").innerHTML = "<b>$" + finalCost + "</b>";
    
    document.getElementById("subTotal").innerHTML = "<b>$" + subTotal + "</b>";
    
}

/*** READS COOKIE ***/
function getCookie(strName){
    
    //variable declaration
    var intStart, intEnd;
    
    //check to make sure we have data in the cookie
    if (document.cookie.length > 0){
        
        //find the index of the key
        intStart = document.cookie.indexOf(strName + "=");
        
        //if the cookie name was found
        if (intStart != -1){
            
            //reset the start position to read the value
            intStart = intStart + strName.length + 1;
            
            //Find the semicolon right after the Cookie name
            intEnd = document.cookie.indexOf(";",intStart);
            
            //Make sure we found it
            if (intEnd == -1){
                intEnd = document.cookie.length;
            }
            //return the substring
            return document.cookie.substring(intStart,intEnd);
        }
        else{
            return "";
        }
    }
}

/*** EXPIRES COOKIE ***/
function deleteCookie(strName){
    //force expire the cookie
    document.cookie = strName + "=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
} 


// ROLLING OVER IMAGES
// Preloading images
Images = new Array();

T1 = new Image();
T1.src = "images/timTebow1.jpg";

T2 = new Image();
T2.src = "images/timTebow2.jpg";

MV1 = new Image();
MV1.src = "images/michaelVick1.jpg";

MV2 = new Image();
MV2.src = "images/michaelVick2.jpg";

A1 = new Image();
A1.src = "images/abeLincoln1.jpg";

A2 = new Image();
A2.src = "images/abeLincoln2.jpg";

O1 = new Image();
O1.src = "images/obama1.jpg";

O2 = new Image();
O2.src = "images/obama2.jpg";

D1 = new Image();
D1.src = "images/dwight1.jpg";

D2 = new Image();
D2.src = "images/dwight2.jpg";

S1 = new Image();
S1.src = "images/sheldon1.jpg";

S2 = new Image();
S2.src = "images/sheldon2.jpg";


function swapImage(strPreviousImage){
    if(strPreviousImage == "T1"){
        document.timTebow.src = T2.src;
    }
    else if(strPreviousImage == "T2"){
        document.timTebow.src = T1.src;
    }
    else if(strPreviousImage == "MV1"){
        document.michaelVick.src = MV2.src;
    }
    else if(strPreviousImage == "MV2"){
        document.michaelVick.src = MV1.src;
    }
    else if(strPreviousImage == "A1"){
        document.abe.src = A2.src;
    }
    else if(strPreviousImage == "A2"){
        document.abe.src = A1.src;
    }
    else if(strPreviousImage == "O1"){
        document.obama.src = O2.src;
    }
    else if(strPreviousImage == "O2"){
        document.obama.src = O1.src;
    }
    else if(strPreviousImage == "D1"){
        document.dwight.src = D2.src;
    }
    else if(strPreviousImage == "D2"){
        document.dwight.src = D1.src;
    }
    else if(strPreviousImage == "S1"){
        document.sheldon.src = S2.src;
    }
    else if(strPreviousImage == "S2"){
        document.sheldon.src = S1.src;
    }
}

// Shipping Information Page

// variables for the shipping information
var firstName;
var lastName;
var address;
var city;
var state;
var zip
var phone;
var email;
var y = 0;
var z = 0;





// setting the background to yellow when onfocus
function setBackground(x){
   document.getElementById(x).style.background="yellow";
}
// setting the background back to white when onblur
function goBackToBackground(y){
   document.getElementById(y).style.background="white";
}


// validates all the shipping information entered into the contact page
function validate(){
    var firstNameMissing = true;
    var lastNameMissing = true;
    var addressMissing = true;
    var cityMissing = true;
    var stateMissing = true;
    var zipMissing = true;
    var phoneMissing = true;
    var emailMissing = true;
    var foundAt = false;
    var foundDec = false;
    var yo = "yo";
    var theString = "";
    
    
    
    
    //checks to see if the first name is blank
    if(document.frmCustomerInfo.firstName.value != ''){
        firstName = document.frmCustomerInfo.firstName.value;
        firstNameMissing = false;
        
    }
    else
      theString += "   First Name \n";
    
    
    
    //checks to see if the the last name is blank
    if(document.frmCustomerInfo.lastName.value != ''){
        lastName = document.frmCustomerInfo.lastName.value;
        lastNameMissing = false;
    }
    else
      theString += "   Last Name \n";
    
    
    // checks to see if the address box is blank
    if(document.frmCustomerInfo.addrLine.value != ''){
        address = document.frmCustomerInfo.addrLine.value;
        addressMissing = false;
    }
    else
      theString += "   Address \n";
   
    //checks to see if city was left blank
    if(document.frmCustomerInfo.city.value != ''){
        cityMissing= false;
        city = document.frmCustomerInfo.city.value;
    }
    else
      theString += "   City \n";
    
    
    
    var a=document.getElementById("state").selectedIndex;
    var b=document.getElementById("state").options;
    
    // checks to see if the state menu select option was chosen
    if(b[a].text  != "State"){
        stateMissing = false;
        state = b[a];
        
    }
    else
      theString += "   State \n";
    
    
    // checks to see if the zip code box was left blank
    if(document.frmCustomerInfo.zipCode.value != '' && document.frmCustomerInfo.zipCode.value.length == 5){
        zipMissing = false;
        zip = document.frmCustomerInfo.zipCode.value;
        
        // if it wasnt left blank the for loop checks to make sure each character is a number
        for(x = 0; x < 5; x++){
            if(document.frmCustomerInfo.zipCode.value.charAt(x) == '0' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '1' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '2' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '3' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '4' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '5' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '6' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '7' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '8' ||
               document.frmCustomerInfo.zipCode.value.charAt(x) == '9'){
                y = 0;
            }
            else{
                zipMissing = true;
            }
        }
        if(zipMissing)
            theString += "   Zip Code \n";
        
      }
      else
        theString += "   Zip Code \n";
    
    
    // checks to see if the phone number is left blank
    if(document.frmCustomerInfo.phoneNum.value != '' && document.frmCustomerInfo.phoneNum.value.length == 10){
        phoneMissing = false;
        phone = document.frmCustomerInfo.phoneNum.value;
        
        // if not left blank then the for loop checks to see if the characters are numbers
        for(x = 0; x < 10; x++){
            if(document.frmCustomerInfo.phoneNum.value.charAt(x) == '0' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '1' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '2' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '3' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '4' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '5' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '6' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '7' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '8' ||
               document.frmCustomerInfo.phoneNum.value.charAt(x) == '9'){
                y = 0;
            }
            else{
                phoneMissing = true;
            }
        }
        if(phoneMissing)
            theString += "   Phone Number \n";
    }
    else
      theString += "   Phone Number \n";
    
    
    if(document.frmCustomerInfo.email.value != ''){
        emailMissing = false;
        email = document.frmCustomerInfo.email.value;
        for(g = 0; g < email.length; g++){
            if(email.charAt(g) == "@"){
               foundAt = true;
               y = g;
            }
        }
        if(foundAt){
            for(g = y; g < email.length; g++){
               if(email.charAt(g) == "."){
                  foundDec = true;
                  z = g;
                }
            }
            if(foundDec && (z+4 == email.length)){
                emailMissing = false;
            }
            else{
                emailMissing = true;
                theString = + "   Valid Email \n";
            } 
        }
        else{
            emailMissing = true;
            theString += "   Valid Email \n";
        }
        
    }
    else
      theString += "   Email \n";
    
    if(firstNameMissing || lastNameMissing || addressMissing || cityMissing ||
       stateMissing || zipMissing || phoneMissing || emailMissing){
      window.alert("Missing or Incomplete Fields: \n \n" + theString);
      return false;
    }
    else{
      return true;
    }
}

function validateCredit(){
    var fullNameMissing = true;
    var creditTypeMissing = true;
    var creditCardMissing = true;
    var creditCardMissing1 = true;
    var creditCardMissing2 = true;
    var creditCardMissing3 = true;
    var creditCardMissing4 = true;
    var theString = "";
    
    
    
    //checks to see if the full name on card is blank
    if(document.frmCreditCard.nameOnCard.value != ''){
        fullNameMissing = false;
        
    }
    else{
      theString += "   Full Name On Card \n";
      
    } 
    //checks to see if the address radio type is not checked
    if(document.frmCreditCard.cardType[0].checked || document.frmCreditCard.cardType[1].checked){
       creditTypeMissing = false;
       
    }
    else{
        theString += "   Credit Card Type \n";
        
    } 
     // checks to see if the first set of credit card numbers is left blank
    if(document.frmCreditCard.cardNum1.value != '' && document.frmCreditCard.cardNum1.value.length == 4){
        creditCardMissing1 = false;
        
        // if not left blank then the for loop checks to see if the characters are numbers
        for(x = 0; x < 4; x++){
            if(document.frmCreditCard.cardNum1.value.charAt(x) == '0' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '1' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '2' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '3' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '4' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '5' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '6' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '7' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '8' ||
               document.frmCreditCard.cardNum1.value.charAt(x) == '9'){
                y = 0;
            }
            else{
                creditCardMissing1 = true;
            }
        }
        
    }
    
    
    // checks to see if the Second set of credit card numbers is left blank
    if(document.frmCreditCard.cardNum2.value != '' && document.frmCreditCard.cardNum2.value.length == 4){
        creditCardMissing2 = false;
        
        // if not left blank then the for loop checks to see if the characters are numbers
        for(x = 0; x < 4; x++){
            if(document.frmCreditCard.cardNum2.value.charAt(x) == '0' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '1' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '2' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '3' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '4' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '5' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '6' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '7' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '8' ||
               document.frmCreditCard.cardNum2.value.charAt(x) == '9'){
                y = 0;
            }
            else{
                creditCardMissing2 = true;
            }
        }
        
    }
    
    
    // checks to see if the Thrid set of credit card numbers is left blank
    if(document.frmCreditCard.cardNum3.value != '' && document.frmCreditCard.cardNum3.value.length == 4){
        creditCardMissing3 = false;
        
        // if not left blank then the for loop checks to see if the characters are numbers
        for(x = 0; x < 4; x++){
            if(document.frmCreditCard.cardNum3.value.charAt(x) == '0' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '1' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '2' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '3' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '4' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '5' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '6' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '7' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '8' ||
               document.frmCreditCard.cardNum3.value.charAt(x) == '9'){
                y = 0;
            }
            else{
                creditCardMissing3 = true;
            }
        }
        
    }
    
    
    // checks to see if the Fourth set of credit card numbers is left blank
    if(document.frmCreditCard.cardNum4.value != '' && document.frmCreditCard.cardNum4.value.length == 4){
        creditCardMissing4 = false;
        
        // if not left blank then the for loop checks to see if the characters are numbers
        for(x = 0; x < 4; x++){
            if(document.frmCreditCard.cardNum4.value.charAt(x) == '0' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '1' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '2' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '3' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '4' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '5' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '6' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '7' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '8' ||
               document.frmCreditCard.cardNum4.value.charAt(x) == '9'){
                y = 0;
            }
            else{
                creditCardMissing4 = true;
            }
        }
        
    }
    else
            window.alert("incomplete card4");
    
    if(creditCardMissing1 || creditCardMissing2 || creditCardMissing3 || creditCardMissing4){
        crediCardMising = true;
        theString += "   Credit Card Number \n";
        
        
    }
    else{
        crediCardMising = false;
       
    }   
    if(crediCardMising || creditTypeMissing || fullNameMissing){
      window.alert("Missing or Incomplete Fields: \n \n" + theString);
      return false;
    }
    else{
      return true;
    }
    
    
}

function verify(){
    window.alert("Thank You For Your Order");
    return true;
}
