const courses = [
	"Intro to Computer Science I & II", 
	"Program Structure", 
	"Discrete Mathematics",
	"Algorithms",
	"Database Systems",
	"Programming Language Theory",
	"Software Engineering I & II",
	"Operating Systems",
	"Security and Trust",
	"Digital Forensics",
	"Intro to Programming for the Web",
	"Machine Learning Fundamentals",
	"Logic Design and Microprocessors",
	"Data Networks"
]

function populateListA(item, index) {
	document.getElementById("coursework-list-a").innerHTML += "<li>" + item + "</li>"
}

function populateListB(item, index) {
	document.getElementById("coursework-list-b").innerHTML += "<li>" + item + "</li>"
}

const length = courses.length;
let halfLength = Math.ceil(length/2);

let leftSide = courses.slice(0, halfLength);
let rightSide = courses.slice(halfLength, length);

console.log(rightSide)

leftSide.forEach(populateListA);
rightSide.forEach(populateListB);