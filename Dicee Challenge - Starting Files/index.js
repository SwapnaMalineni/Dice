var ran1=Math.random();
ran_num1=Math.floor(ran1*6)+1;
var ran_image="dice"+ran_num1+".png";//dice1.png
var ran_image_src1="images/"+ran_image; //images/dice1.png;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",ran_image_src1);

var ran2=Math.random();
ran_num2=Math.floor(ran2*6)+1;
var ran_image="dice"+ran_num2+".png";//dice1.png
var ran_image_src2="images/"+ran_image;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",ran_image_src2);

if (ran_num1===ran_num2){
    document.querySelector("h1").innerHTML="Draw!";
}else if(ran_num1>ran_num2){
    document.querySelector("h1").innerHTML="Player1 won!";
}else{
    document.querySelector("h1").innerHTML="Player2 won!";
}



