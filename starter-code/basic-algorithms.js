//Names and imput 1-
//1-
var hacker1 = "Miguel";
//2-
console.log('My name is ' + hacker1);
//3-
var hacker2 = prompt("What navigator are you use?");
//4-
console.log("The navigator's name is " + hacker2);

//Conditionals 
//5-
var longestName;

if(hacker1.length < hacker2.length){
  longestName = hacker2.length;
  console.log('Yo, navigator got the longest name, it has ' + hacker2 + ' with ' + longestName + ' characters' );
}else if(hacker1.length > hacker2.length){
  longestName = hacker1.length;
  console.log('The driver has the longest name, it has ' +    hacker1 + ' with ' + longestName + ' characters.');
}else{
  longestName = hacker1.length;
  console.log('Wow, you both got equally long names, '+longestName+ ' characters' );
}

//Loops
//6-
var letterName = '';
for(var i = 0; i<= hacker1.length -1; i++){
letterName += ' ' + hacker1[i].toUpperCase() ;
}
console.log(letterName);

//7-
var letterNav = '';
for(var i = hacker2.length -1; i>=0; i--){
letterNav += hacker2[i];
}
console.log(letterNav);

//8-
var wordName = letterName.toLowerCase().replace(/\s/g, '');
  console.log(wordName);

var wordNav = letterNav.toLowerCase();
if(wordName > wordNav){
  console.log('The driver\'s name goes first ');
}else if(wordName < wordNav){
  console.log('Yo, the navigator goes first definitely');
}else{
  console.log('What?! You both got the same name');
}

//Bonus!
//9-
var text = prompt("Write a text to check if is palindrome").toLowerCase().replace(/\s/g, '');


var textFull = '';
for(var i = text.length -1; i>=0 ; i--){
  textFull += text[i];
}
console.log(text);
console.log(textFull);
if(text === textFull){
  console.log('They are palindromes');
}else{
  console.log('They aren\'t palindromes');
}


//10-

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper feugiat diam eu varius. Maecenas eget arcu quis risus sagittis tempus lacinia ac massa. Praesent pharetra nibh nunc, vel efficitur nisi rhoncus in. Sed vitae pretium turpis. Donec pulvinar ut enim vitae pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mauris risus, consectetur a consequat ut, auctor at metus. Donec urna dui, vulputate quis ultrices vitae, laoreet eu ex.Integer hendrerit sapien quis eros pretium, eget accumsan lacus elementum. Donec ullamcorper aliquet purus, non consequat risus. Aenean tempus ultricies ultricies. Phasellus aliquam molestie leo, ut viverra tellus vestibulum mollis. Etiam porta porttitor pharetra. Donec pellentesque congue venenatis. Proin malesuada eleifend porta. Sed at dui quis arcu bibendum efficitur vehicula et mi. Pellentesque bibendum ipsum sit amet quam varius vulputate. Nullam venenatis cursus ipsum id euismod. Fusce pretium enim massa, eu sodales nisl interdum at. Duis aliquet tellus lacinia magna pellentesque volutpat.Curabitur bibendum erat mollis posuere auctor. Proin id ligula nec mi sagittis lacinia. Vestibulum bibendum, turpis a iaculis commodo, tellus nunc consequat ipsum, eu vestibulum odio arcu eu enim. In hac habitasse platea dictumst. Pellentesque feugiat ipsum at tempus pretium. Duis eleifend tortor ut urna finibus tincidunt. Vestibulum leo justo, euismod eu auctor et, euismod eu ex. Nullam facilisis augue vitae tristique pharetra. Donec nec ultrices dui. Suspendisse potenti. Duis eget iaculis magna. Praesent sed augue non justo euismod tincidunt. Quisque nisl ipsum, consequat ac dignissim non, mollis ac nibh. Sed a et luctus augue."

var words = text.split(" ").length;
console.log("The text have " + words + " words");

var result = text.match(/et/g);

console.log("The word et appears " + result.length + " times");







