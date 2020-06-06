<!--Chapter 1-->
<!--Task 1-->
alert("Wellcome to website");
<!--Task 2-->
alert("Error! Enter a Valid Password");
<!--Task 3-->
alert("Wellcome to JS land...\n Happy Coding");
<!--Task 4-->
function myfunction(){
	alert("Wellcome to JS land");
	alert("Happy Coding");
	}
<!--Task 5-->
console.log(alert('Hello... I can run code through javascript on console'))
<!--Chapter 2-->
<!--Task 1-->
var username="";
<!--Task 2-->
var myname="Wahaj Hussain Shaikh";
<!--Task 3-->
var student_name="John Doe";
var student_age="15 years old";
var student_profession="Certified Mobile Application Development";
<!--Task 4-->
var student_name="John Doe";
var student_age="15 years old";
var student_profession="Certified Mobile Application Development";
function myfunction2(){
	alert(student_name);
	alert(student_age);
	alert(student_profession);
	}

<!--Task 5-->
var piz="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(piz)
<!--Task 6-->
var email="example@example.com";
alert('My Email is: '+ email);
<!--Task 7-->
var book="A smarter way to learn JavaScript";
alert("I am trying trying to learn the from the Book "+ book);
<!--Task 8-->
document.write("Yah! I can write HTML content through JavaScript");
<!--Task 9-->
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
<!--Chapter 3-->
<!--Task 1-->
var age=21;
alert("I am "+age+"years old");
<!--Task 2-->
var n=14;
alert("You have visited this site "+n+"times");
<!--Task 3-->
var birthYear=1999;
document.write("My Birth Year is " +1999 + "<br> Datatype of my declared variable is number");
<!--Task 4-->
var Visitors_name="John Doe";
var Product_Title="T-Shirts";
var Quantity=5;
document.write(Visitors_name + " ordered " +" " + Quantity + " "+Product_Title + " (s) on XYZ Clothing Store");
<!--Chapter 4-->
<!--Task 1-->
var carname="City", carmodel=2008, price=10000;
<!--Task 2-->
var Volvo="";
var Volvo_car="";
var $Volvo="";
var Volvo1="";
var Volvocar="";
<!--5 Illegal Variable-->
/*var Volvo-model="";
var alert="";
var var="";
var prompt="";
var const="";*/
<!--Task 3-->
document.write("<h2>Rules for naming JS variable</h2>");
document.write("<p>Variable names can only contain Letters, numbers, $ and _.<br>For example: $my_1stVariable </p>");
document.write("<p>Variables must begin with a letter, $ or _ <br>For example $name, _name or name </p>");
document.write("<p> Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS keyword</p>");
<!--Chapter 5-->
<!--Task 1-->
var x=3;
var y=5;
var z=x+y;
document.write("Sum of "+ x +" and " + y + " is " + z);
<!--Task 2-->
var x=3;
var y=5;
var z=x-y;
document.write("<br>Subtraction of "+ x +" and " + y + " is " + z);
var x=3;
var y=5;
var z=x*y;
document.write("<br>Multiplication of "+ x +" and " + y + " is " + z);
var x=3;
var y=5;
var z=x/y;
document.write("<br>Division of "+ x +" and " + y + " is " + z);
var x=3;
var y=5;
var z=x%y;
document.write("<br>Modulus of "+ x +" and " + y + " is " + z);
<!--Task 3-->
var num=0;
document.write("<br>Value after variable declaration is: " + num);
var num=5;
document.write("<br>Initial value is: "+ num);
num++;
document.write("<br>Value after increment is: "+ num);
num=num+7;
document.write("<br>Value after addition is: "+ num);
num--;
document.write("<br>Value after decrement is: "+ num);
num=num%3;
document.write("<br>The remainder is: "+ num);
<!--Task 4-->
var cost_of_tkt=600;
var total=5*cost_of_tkt;
document.write("<br>Total cost of 5 ticket of a movie is: "+ total+" PKR");
<!--Task 5-->
var mynum=4;
var mystring="";
for(i=1;i<=10;i++){
mystring += mynum+ " x " +i+ " = " +(i*mynum)+ "<br/>";
}
document.write(mystring);
<!--Task 6-->
var C=25;
var CtoF=(C*9/5)+32;
document.write(C+"C" +" is "+ CtoF +"F");
var F=70;
var FtoC=(F-32)*5/9;
document.write(F+"F" +" is "+ FtoC +"C");
<!--Task 7-->
var price1=650;
document.write("Price of item1 is: "+ price1);
var qty1=3;
document.write("<br>Quantity of item1 is: "+ qty1);
var price2=100;
document.write("<br>Price of item2 is: "+ price2);
var qty2=7;
document.write("<br>Quantity of item2 is: "+ price1);
var shpchrg=100;
document.write("<br>Shipping charges: "+ shpchrg);
var totalcost=price1*qty1+price2*qty2+shpchrg;
document.write("<br>The total cost is: "+ totalcost);
<!--Task 8-->
var totalmarks=980;
document.write("<br>Total Marks: "+ totalmarks);
var marksobt=804;
document.write("<br>Marks Obtained: " +marksobt);
var per=marksobt*100/totalmarks;
document.write("<br>Percentage:" +per+ "%");
<!--Task 9-->
var US=104,Riyal=28,currency=10*US+25*Riyal;
document.write("<br>Total currency is: "+currency);
<!--Task 10-->
var num1=5,num1=num1+5,num1=num1*10,num1=num1/2;
document.write("<br>"+num1);
<!--Task 11-->
var curryear=2020;
document.write("<br>"+curryear);
var birthyear=1999;
document.write("<br>"+birthyear);
var age1=curryear-birthyear;
document.write("<br>"+"Your age is : "+ age1);
<!--Task 12-->
var rad=20;
document.write("<br>Radius of Circle is: "+rad);
var circumference=2*3.14*rad;
document.write("<br>Circumference of Circle is: "+circumference);
var area=3.14*rad*rad;
document.write("<br>"+"Area of circle : "+ area);
<!--Task 13-->
var favsnack="chocolate chips";
document.write("<br>Favourite Snack : "+ favsnack);
var age1=20;
document.write("<br>Current Age : "+ age1);
var maxage=65;
document.write("<br>Maximum Age : "+ maxage);
var estsnk=3;
document.write("<br>Estimated Snacks per day : "+ estsnk);
var nd=45*estsnk;
document.write("<br>You will need "+ nd +" chocolate chip to last you until the ripe old age of " + maxage);
<!--Chapter 6 to 9-->
<!--Task 1-->
var a=10;
document.write("<br>The value of a is: "+a);
a=++a;
document.write("<br>The value of ++a is: "+a);
document.write("<br>Now, The value of a is: "+a);
document.write("<br>The value of a++ is: "+a++);
document.write("<br>Now, The value of a is: "+a);
document.write("<br>The value of --a is: "+--a);
document.write("<br>The value of a is: "+a);
document.write("<br>The value of --a is: "+a--);
document.write("<br>The value of a is: "+a);
<!--Task 2-->
var a=2,b=1;
document.write("<br>a is: "+a);
document.write("<br>b is: "+b);
d1=--a - --b;
document.write("<br>--a - --b is : "+d1);
var a=2,b=1;
d2=--a - --b + ++b;
document.write("<br>--a - --b + ++b is : "+d2);
var a=2,b=1;
d3=--a - --b + ++b + b--;
document.write("<br>--a - --b + ++b + b-- is : "+d3);
var a=2,b=1;
var result=--a - --b + ++b + b--;
document.write("<br>result is : "+result);
<!--Task 3-->
var spec=prompt("Enter your name");
alert("Wellcome "+ spec);
<!--Task 4-->
var spec1=prompt("Enter Number: ","5")
var mystring="";
for(i=1;i<=10;i++){
mystring += spec1+ " x " +i+ " = " +(i*spec1)+ "\n";
}
alert(mystring);
<!--Task 5-->
var spec2=prompt("Enter Subject name1: ");
var spec3=prompt("Enter Subject name2: ");
var spec4=prompt("Enter Subject name3: ");
var total_marks=100;
var obt_mrks1=prompt("Enter marks of subject 1: ");
var obt_mrks2=prompt("Enter marks of subject 2: ");
var obt_mrks3=prompt("Enter marks of subject 3: ");
<!--Chapter 9 to 11-->
<!--Task 1-->
var city=prompt("Enter Name of City");
if (city=="karachi"){
	alert("Wellcome to City Of Lights");
}
<!--Task 2-->
var gender=prompt("Enter your Gender");
if (gender=="male"){
	alert("Good Morning : Sir ");
}else if(gender=="female"){
	alert("Good Morning : Ma'am ");
	}
<!--Task 3-->
var color=prompt("Enter Color of road traffic signal");
if (color=="red"){
	alert("Must Stop ");
}else if(color=="yellow"){
	alert("Ready to move ");
	}else if(color=="green"){
	alert("move now ");
	}
<!--Task 4-->
var fuel=prompt("Enter remaining fuel in litre: ");
if (fuel<=0.25){
	alert("Please refill the fuel in your car ");
}
<!--Task 5-->
 var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
 
 
 var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
 
var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 
 
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
if (true){ alert("True"); } if (false){ alert("False"); } 
 
if("car" < "cat"){ alert("car is smaller than cat");
}
/*Yes Alert message is appeared*/
<!--Task 6-->
var x=prompt("Enter your Maths marks","0");
var obtmarks1= parseInt(x);
var x1=prompt("Enter Total marks","0");
var totmarks1= parseInt(x1);
var y=prompt("Enter your Chemistry marks","0");
var obtmarks2= parseInt(y);
var y1=prompt("Enter Total marks","0");
var totmarks2= parseInt(y1);
var z=prompt("Enter your Physics marks","0");
var obtmarks3= parseInt(z);
var z1=prompt("Enter Total marks","0");
var totmarks3= parseInt(z1);
var total_marks=totmarks1+totmarks2+totmarks3;
document.write("<br>Total Marks: "+total_marks);
var obtain_marks=obtmarks1+obtmarks2+obtmarks3;
document.write("<br>Obtained Marks: "+obtain_marks); 
var per1=(obtain_marks*100)/total_marks;
document.write("<br>Percentage: "+per1+"%");
if (per1>=80){
	document.write("<br>Grade: "+ "A-one");
	document.write("<br>Remarks: "+ "Excellent");
}else if (per1>=70){
	document.write("<br>Grade: "+ "A");
	document.write("<br>Remarks: "+ "Good");
}else if (per1>=60){
	document.write("<br>Grade: "+ "B");
	document.write("<br>Remarks: "+ "You need to Improve");
}else if (per1<60){
	document.write("<br>Grade: "+ "Fail");
	document.write("<br>Remarks: "+ "Sorry");
}
<!--Task 7-->
var scrt_num=5;
var z2=prompt("Guess The Number: ","0");
var scrt_num1= parseInt(z2);
if (scrt_num1 == scrt_num){
	alert("Bingo! Correct Answer");
	}else if(scrt_num+1==scrt_num1){
	alert("Close Enough to correct answer");	
}
<!--Task 8-->
var num2=6;
if (num2%3==0){
	alert("The number is divisible by 3");
}
<!--Task 9-->
var x2=prompt("Enter number to check");
inp=parseInt(x2);
if (inp%2==0){
	alert("Number is even");
}else{
	alert("Number is odd");
}
<!--Task 10-->
var x3=prompt("Enter Temperature");
temp=parseInt(x3);
if(temp>40){
	alert("It is too hot outside");
}else if(temp>30){
	alert("The weather today is normal");
}else if(temp>20){
	alert("Today weather is cool");
}else if(temp>10){
	alert("OMG! Today’s weather is so Cool");
}
<!--Task 11-->
var x4=prompt("Enter First Number","0");
fnum=parseInt(x4);
var x5=prompt("Enter Second Number","0");
snum=parseInt(x5);
var oper=prompt("Enter operator");
if (oper=="+"){
	var addition=fnum+snum;
	alert(addition);
}else if(oper=="-"){
	var subt=fnum-snum;
	alert(subt);
}
else if(oper=="*"){
	var mul=fnum*snum;
	alert(mul);
}
else if(oper=="/"){
	var div=fnum/snum;
	alert(div);
}
else if(oper=="%"){
	var mod=fnum%snum;
	alert(mod);
}
<!--Chapter 12 & 13-->
<!--Task 1-->
var ch=prompt("Enter");
if (ch>=65 && ch<=90){
	alert("Character is a capital letter");
}else if (ch>=97 && ch<=122){
	alert("Character is a small letter");
}else if (ch>=48 && ch<=57){
	alert("Character is a number");
}
<!--Task 2-->
var n1=prompt("Enter number 1");
n1=parseInt(n1);
var n2=prompt("Enter number 1");
n2=parseInt(n2);
if (n1>n2){
	alert("Number 1 is greater number 2");
} else if(n1<n2){
	alert("Number 2 is greater than number 1");
} else if(n1==n2){
	alert("Both are equal");
}
<!--Task 3-->
var numb1=prompt("Enter number 1");
numb1=parseInt(numb1);
if (numb1>0){
	alert("Number is Positive");
} else if(numb1<0){
	alert("Number is Negative");
} else if(numb1==0){
	alert("Number is Zero");
}
<!--Task 4-->
var str=prompt("Enter Character");
str=str.toLowerCase();
if (str=="a" || str=="e" || str=="i" || str=="o" || str=="u"){
	alert("True");
}else{
	alert("False");
}
<!--Task 5-->
var crtpswd="wahaja";
var pswd=prompt("Enter you Password: ");
if (pswd==""){
	alert("Please enter your Password");
}else if(pswd==crtpswd){
	alert("Correct! The password you entered matches the original password");
}else{
	alert("Incorrect password!");
}
<!--Task 6-->
var greeting;
var hour = 19;
if (hour < 18) { 
	greeting = "Good day"; 
	alert(greeting);
}else{
	 greeting = "Good evening";
	 alert(greeting); 
}
<!--Task 7-->
var time=prompt("Enter Time in 24hour format");
time=parseInt(time);
if (time>=0000 && time<1200){
	document.write("Good morning");
}else if (time>=1200 && time<1700){
	document.write("Good afternoon");
}else if(time>=1700 && time<2100){
	document.write("Good evening");
}else if(time>=2100 && time<=2359){
	document.write("Good night");
}
<!--Chapter 14 to 16-->
<!--Task 1-->
var arr1={student_name1:"",student_name2:"",student_name3:""};
<!--Task 2-->
var arr2={student_name1:"",
		  student_name2:"",
		  student_name3:""
		  };
<!--Task 3-->
var arr3=["volvo","hummer","range rover","Prado","Vigo"];
<!--Task 4-->
var arr4=[1,2,3,4,5,6,7,8,9];
<!--Task 5-->
var arr5=[true,false];
<!--Task 6-->
var arr6=[1,"volvo",true];
<!--Task 7-->
var arr7=["SSC","HSC","BCS","SSC","BS","BCOM","MS","M.Phil","PhD"];
document.write("<br>"+arr7[0]);
document.write("<br>"+arr7[1]);
document.write("<br>"+arr7[2]);
document.write("<br>"+arr7[3]);
document.write("<br>"+arr7[4]);
document.write("<br>"+arr7[5]);
document.write("<br>"+arr7[6]);
document.write("<br>"+arr7[7]);
document.write("<br>"+arr7[8]);
<!--Task 8-->
var stdnames=["Ali", "Ahmed", "Waqas"];
var stdmarks=[320,230,480];
var per1=stdmarks[0]*100/500;
var per3=stdmarks[1]*100/500;
var per2=stdmarks[2]*100/500;
document.write("<br>Score of " + stdnames[0] +" is " + stdmarks[0] + ". Percentage: " + per1);
document.write("<br>Score of " + stdnames[1] +" is " + stdmarks[1] + ". Percentage: " + per2);
document.write("<br>Score of " + stdnames[2] +" is " + stdmarks[2] + ". Percentage: " + per3);
<!--Task 9-->
var colors=["red", "yellow", "green", "blue"];
document.write("<br>"+colors);
var clr1=prompt("Enter name of color you want to add: ");
colors.unshift(clr1);
document.write("<br>"+colors);
var clr2=prompt("Enter name of color you want to add: ");
colors.push(clr2);
document.write("<br>"+colors);
var clr3=prompt("Enter name of color you want to add: ");
var clr4=prompt("Enter name of color you want to add: ");
colors.unshift(clr3,clr4);
document.write("<br>"+colors);
colors.shift()
document.write("<br>"+colors);
colors.pop()
document.write("<br>"+colors);
clr5=prompt("Enter the index number you want to add: ");
clr5=parseInt(clr5);
colors[clr5]="grey";
document.write("<br>"+colors);
<!--Task 10-->
var score=[320,230,480,120];
document.write("<br>Score is "+ score);
document.write("<br>Ordered Score is "+ score.sort());
<!--Task 11-->
var cities=["karachi", "lahore", "islamabad", "quetta", "peshawar"];
document.write(cities);
var selcities=cities.slice(2,3);
document.write(selcities);
<!--Task 12-->
var arr8 = ["This", "is", "my", "Cat"];
var joined = arr8.join(" ");
document.write("<br>"+joined);
<!--Task 13-->
var arr12=[];
arr12.unshift("keyboard");
arr12.unshift("mouse");
arr12.unshift("printer");
arr12.unshift("monitor");
document.write(arr12+" ,");
arr12.pop();
document.write(arr12+" ,");
arr12.pop();
document.write(arr12+" ,");
arr12.pop();
document.write(arr12+" ,");
arr12.pop();
document.write(arr12+" ,");

<!--Task 14-->
var arr13=[];
arr13.unshift("keyboard");
arr13.unshift("mouse");
arr13.unshift("printer");
arr13.unshift("monitor");
document.write(arr13+" ,");
arr12.shift();
document.write(arr13+" ,");
arr12.shift();
document.write(arr13+" ,");
arr12.shift();
document.write(arr13+" ,");
arr12.shift();
document.write(arr13+" ,");
<!--Chapter 14 to 16-->
<!--Task 1-->
var arr9=[["ABC", 123],["DEF",456],["GHI",789]];
var arr10=[[1234],[1012],[2021]];
document.write("<br>"+arr10[0]);
document.write("<br>"+arr10[1]);
document.write("<br>"+arr10[2]);
<!--Task 2-->
for (i=1;i<=10;i++){
	document.write("<br>"+i);
}

<!--Task 3-->
var num=prompt("Enter the number to show it's multiplication table");
num=parseInt(num);
var lennum=prompt("Enter the length of multiplication table");
lennum=parseInt(lennum); 
var mystring="";
for(i=1;i<=lennum;i++){
mystring += num+ " x " +i+ " = " +(i*num)+ "<br/>";
}
document.write(mystring);
<!--Task 5-->
fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (i=0;i<fruits.length;i++){
	document.write("<br>"+fruits[i]);
} 
for (i=0;i<fruits.length;i++){
	document.write("<br>"+"Element at index "+i+" is " +fruits[i]);
}
<!--Task 6-->
for (i=1;i<=15;i++){
	document.write(i+",");
}
for (i=10;i>=1;i--){
	document.write(i+",");
}
for (i=0;i<=20;i+=2){
	document.write(i+",");
}
for (i=1;i<=20;i+=2){
	document.write(i+",");
}
for (i=2;i<=20;i+=2){
	document.write(i+"k ,");
}
<!--Task 7-->

<!--Task 8-->
var lgnumbers=[24,53,91,78,12];
lgnumbers=Math.max.apply({}, lgnumbers);
document.write(lgnumbers);
<!--Task 9-->
var smnumbers=[24,53,91,78,12];
smnumbers=Math.min.apply({}, smnumbers);
document.write(smnumbers);
<!--Task 10-->
for (i=5;i<=100;i+=5){
	document.write(i+" ,");
}