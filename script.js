const changeImg = document.querySelector("img").src="https://raw.githubusercontent.com/Ahecha/perfum/main/image-product-mobile.jpg";


function myFunction(x) {
  if (x.matches) { // If media query matches
    return changeImg;
  }
}

let x = window.matchMedia("(max-width: 375px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)


// https://raw.githubusercontent.com/Ahecha/perfum/main/image-product-mobile.jpg