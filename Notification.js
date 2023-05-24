// Accordian Start 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}
// Accordian end 


// myButton.addEventListener("click", function () {
// 	myPopup.classList.add("show");
// });
// closePopup.addEventListener("click", function () {
// 	myPopup.classList.remove("show");
// });
// window.addEventListener("click", function (event) {
// 	if (event.target == myPopup) {
// 		myPopup.classList.remove("show");
// 	}
// });


// ripple effect start

// const btn = document.querySelector(".interior_1");

// Listen for click event
// btn.onclick = function (e) {

// Create span element
// let ripple = document.createElement("span_1");

// Add ripple class to span
// ripple.classList.add("ripple");

// Add span to the button
// this.appendChild(ripple);

// Get position of X
// let x = e.clientX - e.target.offsetLeft;

// Get position of Y
// let y = e.clientY - e.target.offsetTop;

// Position the span element
// ripple.style.left = `${x}px`;
// ripple.style.top = `${y}px`;

// Remove span after 0.3s
// setTimeout(() => {
// ripple.remove();
// }, 300);

// };

// ripple effect end 


// function start for timing 
// function myFunction_right() {
// 	var x = document.getElementById("Notification_right");
// 	x.className = "show";
// 	setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
// }

// function myFunction_left() {
// 	var x = document.getElementById("Notification_left");
// 	x.className = "show";
// 	setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
// }

// function myFunction_top() {
// 	var x = document.getElementById("Notification_top");
// 	x.className = "show";
// 	setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
// }

// function myFunction_bottom() {
// 	var x = document.getElementById("Notification_bottom");
// 	x.className = "show";
// 	setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
// }


// function end for timing 

// carousel start 
// const slides = document.getElementsByClassName("slide");
// const slides = document.querySelectorAll(".slide");

// var counter = 0;

// slides.forEach((slide, index) => {
// 	slide.style.left = ` ${index * 100}% `
	
// });


// const next=()=>{
// 	counter++;
// 	slideimage()
// }
// const pre=()=>{
// 	counter--;
// 	slideimage()
// }

// const slideimage = () => {
// 	slides.forEach((slide)=>{
// 		slide.style.transform = `translateX(-${counter*100}%)`
// 	})
// } 


// carousel end 

const slides_img = document.querySelectorAll(".slide_2");

var counter = 0;

slides_img.forEach((slide_2, index) => {
	slide_2.style.left = ` ${index * 100}% `
	
});


const next=()=>{
	// counter++;
	// slideimage()
	if (counter == slides_img.length - 1) {
        counter = 0;
        slideimage();
    } else {
        counter++;
        slideimage();
    }
}
const pre=()=>{
	// counter--;
	// slideimage()
	if (counter == 0) {
        counter = slides_img.length - 1;
        slideimage();
    } else {
        counter--;
        slideimage();
    }
}

const slideimage = () => {
	slides_img.forEach((slide_2)=>{
		slide_2.style.transform = `translateX(-${counter*100}%)`
	})
} 
