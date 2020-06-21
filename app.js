// =============> \/\/\/\/\/     CHAPTER # 21 -25   \/\/\/\/\/ <=================

//   ==== TASK 1 <========

// var a = prompt('Enter Your Name')
// var b = prompt('Enter Your Last Name')
// var c = ("HEY!!!"  + a  + " " + b)
// {
//     alert(c)
// }

//   =======> TASK 2
  

// var str = prompt('Enter Your Favorite Mobile Model')
// document.write('My favorite mobile model is' + " " + str + "<br>")
// var n = str.length;
// document.write('The Number Of String Are' +  "  " + n)

//   =======> TASK 3


// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("String : Pakistani" + " " + "<br>" )
// document.write("Index of 'n'" + "  " + n)

//   =======> TASK 4


// var str = "Hello World!";
// var n = str.indexOf("l", 5);
// document.write("String : Hello World" + " " + "<br>" )
// document.write("Index of 'l'" + "  " + n)
 

//   =======> TASK 5

// var str = "Pakistani";
// var res = str.charAt(3)
// document.write("Character At index 3:" + " " + res)

//   =======> TASK 6

// var a = 'Pak'
// var b = 'is'
// var c = 'tani'
// var res = a.concat(b , c);{
//     alert(res)
// }

//   =======> TASK 7


// var languages = ['Hyderabad']; 
// document.write(languages + "<br>");
// var removed = languages.splice(0,1, 'Islamabad') 
// document.write(languages + "<br>"); 
// document.write(removed + "<br>");  


//   =======> TASK 8



// var message = ('Ali and Sami are best friends. They play cricket and football together');
// var end = message.replace(/and/g , "&")
// document.write(message + " " + "<br>")
// document.write(end)


//   =======> TASK 9



// var val = "472";
// document.write("value" + (+val) + " <br> type  string  <br>");
// document.write("value" + (+val) + "<br> type  number  <br>");


//   =======> TASK 10


// var a = prompt('Enter dry fruit name;')

// var b =a.toUpperCase();

// document.write(b+ " " + "<br>")


//   =======> TASK 11


// var name = 'peanut'
// var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
// document.write(nameCapitalized )


//   =======> TASK 12
 


// document.write("Number" + " " + 32.36 + "<br>")
// document.write("string" + " " + 3226 + "<br>")


//   =======> TASK 13

// var name = prompt('Enter a user name')
// if( name ===  '!'){
//     alert("enter a valid user name")
// }

// else if(name === ''){
//     alert('Please Fill Out this portion')
// }
// else if ( name === ','){
//     alert("enter a valid user name")
// }
// else if ( name === '@'){
//     alert("enter a valid user name")
// }
// else if ( name === '#'){
//     alert("enter a valid user name")
// }


//   =======> TASK 14


//  var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties']   
//  var b = prompt('Welcome to ABC bakery', 'What do you wana order')
//  var c = b.toLowerCase();

// for(i = 0; i < a.length; i++ ){
//     if(a[i] === c ){alert(b + "is avaiable" + " " + "at our store");}
//     else('Sorry item isnot available')
// } 

//   =======> TASK 16

// var university = 'University of Karachi';
// var res = univerity.split(" ", 1);
// document.write(res)


//   =======> TASK 17
 
// var str = prompt("Enter Any Thing"); 
// var res = str.charAt(str.length-1); 
// document.write(res)


 

// =============> \/\/\/\/\/     CHAPTER # 26 - 30   \/\/\/\/\/ <=================


//   =======> TASK 1

// var a = prompt('Enter a value');
// document.write('Number' + ' ' + '=' + ' ' +   a + '<br>');
// var round = Math.round(a)
// document.write("Round-off value" + " " + "=" + round+ '<br>')
// var floor = Math.floor(a)
// document.write("Floor value" + " " + "=" + floor+ '<br>')
// var ceil = Math.ceil(a)
// document.write("Ceil value" + " " + "=" + ceil+ '<br>')


//   =======> TASK 2

// var a = prompt('Enter a negative integer');
// document.write('Number' + ' ' + '=' + ' ' +   a + '<br>');
// var round = Math.round(a)
// document.write("Round-off value" + " " + "=" + round+ '<br>')
// var floor = Math.floor(a)
// document.write("Floor value" + " " + "=" + floor+ '<br>')
// var ceil = Math.ceil(a)
// document.write("Ceil value" + " " + "=" + ceil+ '<br>')


//   =======> TASK 3
 
// var firstuser = prompt('enter firstusername');
// var seconduser = prompt('enter secondusername');

// var dice = Math.random() * 2
// var floor= Math.floor(dice)
// if(floor === '0'){
//     alert('dice value 4')
// }else{(
//     alert(' dice value 6')

// )}



//   =======> TASK 4

// var a = prompt('Enter a value');
// var b = Math.abs(a)
// document.write('The absolute value of' + ' ' +  a + 'is' + ' ' + b)

//   =======> TASK 5


// var headuser = prompt('enter headusername');
// var tailuser = prompt('enter tailusername');

// var toss = Math.random() * 2;
// var floor= Math.floor(toss)
// if(floor === '0'){
//     document.write(2)
//     document.write( headuser + " "  + 'win the toss')
// }else{(
//     document.write(tailuser + " "  + 'win the toss')

// )}


//   =======> TASK 6


// var a = Math.random() *100;
// var b = Math.ceil(a);
// document.write('The Random Number Between 1 & 100' + ' ' + '=' + ' ' + ' ' + b)


//   =======> TASK 7 


// var a = prompt('Enter your weight in kilogram(s)')
// var num = parseInt("50");
// document.write('The weight of user is' + ' ' + num + ' ' + 'kilogram(s)')


//   =======> TASK 8

// var a = prompt('Enter the secret number');
// var b = "7";
// if(a === b){
//     alert('Congratulations!')
// }
// else{
//     alert('Try again!')
// }

 // =============> \/\/\/\/\/     CHAPTER #  31 - 34  \/\/\/\/\/ <=================



 //   =======> TASK 1


//  var a = new Date();
//  document.write('<h1>' + a  + '</h1>')


//    =======> TASK 2

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
//  document.write('<h1>' + n  + '</h1>')





 //   =======> TASK 3


// var d = new Date();
// var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednesday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "saturday";
// var n = day[d.getDay()];
//  document.write('<h1>' + n  + '</h1>')


//    =======> TASK 4

//  var a = new Date();
//  var b = a.toString();
//  var c = b.slice(0,3);
//  var day = new Array();
// day[0] = "Sunday";
// day[1] = "Monday";
// day[2] = "Tuesday";
// day[3] = "Wednesday";
// day[4] = "Thursday";
// day[5] = "Friday";
// day[6] = "saturday";
//  if(day === 0 ){
//      alert(funday)
//  }
//  else{
//      document.write("<h1>Its" + " " + " " + c + "</h1>")
//  }



// //    =======> TASK 5

// var a = new Date();
// var dayOfMonth = a.getDate(); 
// document.write(dayOfMonth);
// if(dayOfMonth === 15){
//     document.write('First fifteen  days of the month')
// }
// else{
//     document.write('<h1>' + ' ' + 'Last days of the month' + '</h1>')
// }


//    =======> TASK 6


// var a = new Date();
// var millisince = a.getTime();
// var minusince = a.getMinutes('Jan, 1st, 1970');
// document.write('<h1>' +  'Current date : '+  a  +  '</h1>' + '<br>')
// document.write( '<h1>' +  'Elapsed milli second since 1970 :' +  millisince + '</h1>' + '<br>')
// document.write( '<h1>' +  'Elapsed minutes since 1970 :' +  minusince + '</h1>' + '<br>')

//    =======> TASK 7

// var a = new Date();
// var b = a.getHours();
// var c = a.getMinutes();
// document.write('<h1>' +  b +  'Hour ' + c + 'Minutes '  +  '</h1>' + '<br>')
// if(b === (1,2,3,4,5,6,7,8,9,10,11,12)){
//     document.write('<h1>' +  'Its' +  ' ' + ' ' + 'AM' +  '</h1>' + '<br>')
// }
// else{
//     document.write('<h1>' +  'Its' +  ' ' + ' ' +   'PM' +  '</h1>' + '<br>')
// }
 
//    =======> TASK 8

// var a = new Date();
// var b = a.setFullYear(2020);
// var c = a.setMonth(11);
// var d = a.setDate(31);
// var e = a.setHours(0);
// var f = a.setMinutes(0);
// var e = a.setSeconds(0);
// document.write('<h1>' +  'Later Time' + '</h1>' +  ' ' + ' ' +   a  + '<br>')

//    =======> TASK 9

// var a = new Date();
// var b = new Date(2015);
// var c = b.setMonth(5);
// var diff = a - b;
// alert(diff)

//    =======> TASK 10

// var a = new Date();
// var b = a.setFullYear(2015);
// var c = a.setMonth(11);
// var d = a.setDate(5);
// var e = a.setHours(22);
// var f = a.setMinutes(50);
// var g = a.setSeconds(16);
// var i = new Date;
// var j = i.setFullYear(2015);
// var k = j - i ;
// document.write('<h1>' +  'Later Time' + '</h1>' +  ' ' + ' ' +   a  + '<br>' + ' ' + j + ' ' + ' ' + 'Second has passed away since the begning of 2015')


//    =======> TASK 11


// var a = new Date();
// document.write('<h1>Current Time ;' +'</h1>' + a + '<br>' )
// var b = new Date();
// var c = b.setFullYear(2020);
// var f = b.setHours(9);
// document.write( '<h1>1hour Before' + '</h1> ' + ' ' + ' ' + b + '<br>' )

//    =======> TASK 12


// var a = new Date();
// document.write('<h1>Current Date ;' +'</h1>' + a + '<br>' )
// var b = new Date();
// var c = b.setFullYear(1920);
// document.write( '<h1>100 Years Back ;' + '</h1> ' + ' ' + ' ' + b + '<br>' )


//    =======> TASK 13

// var dob = new Date(prompt('Enter your date of birth','05-09-2003'));
// var dobmilli = dob.getTime();
// var today = new Date();
// var todaymilli = today.getTime();
// var diff = todaymilli - dobmilli
// var accugae = Math.floor(diff/(1000*60*60*24*30*12));
// document.write('<h1>' + '<center>' + 'WELCOME TO AGE CALCULATOR' + '</center>' + '</h1>')
// document.write('<h1>'  + 'YOUR AGE IS ' + '<br>' + accugae + '</h1>')
// document.write('<h1>'  + 'YOUR DATE OF BIRTH IS ' + '<br>' + dob + '</h1>' + '<br>')


// //    =======> TASK 14

// var a = 'K- Electric';
// document.write('<h1>' + '<u>' + a + '</u>' +'</h1>')
// var str = prompt('Enter your name');
// var res = str.toUpperCase();
// document.write('<h1>' + 'Costumer Name:' + ' ' + ' ' +  str +'</h1>')
// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
//  document.write('<h1>' +  'Month  :' + ' ' + n  + '</h1>')
//  var e = prompt('Number Of Units');
//  document.write('<h1>'  + 'Number Of Units :' + ' ' + e + '</h1>')
//  document.write('<h1>'  + 'Charge Per Units :' + ' ' + '16' + '</h1>')
//  document.write('<br>');
//  document.write('<br>');
//  var f = e * 16;
//  document.write( '<h1>' + 'Net Amount Payable (within Due Date) :'  + ' ' + f + '</h1>' + '<br>')
//  document.write('<h1>' + ' Late Payment Surcharge :' + '350' + '</h1>' + '<br>')
// document.write('<h1>' + ' Gross Amount Payable (after Due Date) :' + (f + 350)  + '</h1>')


// =============> \/\/\/\/\/     CHAPTER # 35 - 38   \/\/\/\/\/ <=================


//    =======> TASK 1


// var a = new Date();
// function greet(){
//     document.write(a)
// }
// greet();

//    =======> TASK 2

// var a = prompt('Enter your first name');
// var b = prompt('Enter your last name');
// function greet(){
//     document.write( a + b )
// }
// greet();


//    =======> TASK 3


// var a = +prompt('enter 1');
// var b = +prompt('enter 2');
// function add(a,b){
//     var c = (a + b);
//     return c;
// }
// var g = add(a,b);
// alert(g)


//    =======> TASK 4

// function calc(num1,opera,num2){
//     if(opera === '+'){
//         alert(num1 + num1);
//     }
//     else if(opera === '-'){
//         alert(num1 - num2);
//     }
//     else if(opera === '*'){
//         alert(num1 * num2);
//     }
//     else if(opera === '/'){
//         alert(num1 / num2);
//     }
// }

// var result = calc(5 , '-', 7); 
// var result1 = calc(4, '*', 9);
// var result2 = calc(4, '+', 3);
// var result3 = calc(4, '/', 9);

//    =======> TASK 5


// var a = prompt('enter 1');
// function sqr(a){
//     var c = (a * a);
//     return c;
// }
// var g = sqr(a);
// alert(g)


//    =======> TASK 6


// var a = prompt('enter 1');
// function fac(a){
//     var c = (a / a);
//     return c;
// }
// var g = fac(a);
// alert(g)




//    =======> TASK 8

// var base = prompt('Enter Base of triangle');
// var per = prompt('Enter Perpendicular of a triangle');
// function calcHypotenus(base,  per) {
//     return Math.sqrt(base*base  + per*per);
// }

// document.write('The hypoteneous of your triangle is ' + calcHypotenus(base,  per));  



//    =======> TASK 9
// var width = prompt("Enter a whole number for the width of your rectangle.");
// var height = prompt("Enter a whole number for the heigth of your rectangle.");
// function area(width, height) {
//     return width * height;
// }

// document.write('The area of your rectangle is ' + area(width, height));         

//    =======> TASK 10

// var a = prompt('Enter 1st Number');
// var b = prompt('Enter 2nd Number');
// var c = prompt('Enter 3rd Number');
// var d = a * a;
// var e = b * b;
// var f =  
// function out(a,b,c){
//     var d =
//     function in(){

//     }
// }


//    =======> TASK 11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));


//    =======> TASK 12


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

 
//    =======> TASK 13


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('My name is Muhammad Salman', 'o'));


//    =======> TASK 14

// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("The circumfrence is " + y + "." + "<br>");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("The area is " + x + "." + "<br>");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);
  



// -------------------------------------------------------THE END----------------------------------------------------------------------------










