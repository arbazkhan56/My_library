// Accordian Start 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
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