function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let x=(getRandomInt(27));
let y=(getRandomInt(27));
let z=(getRandomInt(27));


let letter = "";

const element = document.getElementById("x");
let text = element.textContent;
text = text.replace("00", x);
element.textContent = text;

const element2 = document.getElementById("y");
let text2 = element2.textContent;
text2 = text2.replace("00", y);
element2.textContent = text2;

const element3 = document.getElementById("z");
let text3 = element3.textContent;
text3 = text3.replace("00", z);
element3.textContent = text3;

let winner = Math.max(z,y,z);
const results = document.getElementById("results");
let text4 = results.textContent;
text4 = text4.replace("00",winner );
results.textContent = text4;

switch(x){
  case 0:
    letter = "A";
	break;
  case 1:
    letter = "A";
	break;
case 2:
    letter = "B";
	break;
case 3:
    letter = "C";
	break;
case 4:
    letter = "D";
	break;
case 5:
    letter = "E";
	break;
case 6:
    letter = "F";
	break;
case 7:
    letter = "G";
	break;
case 8:
    letter = "H";
	break;
case 9:
    letter = "I";
	break;
case 10:
    letter = "J";
	break;
case 11:
    letter = "K";
	break;
case 12:
    letter = "L";
	break;
case 13:
    letter = "M";
	break;
case 14:
    letter = "N";
	break;
case 15:
    letter = "O";
	break;
case 16:
    letter = "P";
	break;
case 17:
    letter = "Q";
	break;
case 18:
    letter = "R";
	break;
case 19:
    letter = "S";
	break;
case 20:
    letter = "T";
	break;
case 21:
    letter = "U";
	break;
case 22:
    letter = "V";
	break;
case 23:
    letter = "W";
	break;
case 24:
    letter = "X";
	break;
case 25:
    letter = "Y";
	break;
case 26:
    letter = "Z";
	break;

}
const NR = document.getElementById("NR");
let text5 = NR.textContent;
text5 = text5.replace("0",letter );
NR.textContent = text5;

function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
}

const m = y * z;
const { hours, minutes } = toHoursAndMinutes(m);

const Time = document.getElementById("Time");
const text6 = Time.textContent.replace("0", `${hours} hours, ${minutes} minutes`);
Time.textContent = text6;