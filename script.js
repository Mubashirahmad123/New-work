function showCake() {
  document.getElementById("cake").style.display = "block";
  document.getElementById("card").style.display = "none";
  document.getElementById("message").style.display = "none";
}

function showCard() {
  document.getElementById("cake").style.display = "none";
  document.getElementById("card").style.display = "block";
  document.getElementById("message").style.display = "none";
}

function showMessage() {
  document.getElementById("cake").style.display = "none";
  document.getElementById("card").style.display = "none";
  document.getElementById("message").style.display = "block";
}

function cutCake() {
  // Change cake image source
  var cakeImage = document.getElementById("cake").querySelector("img");
  if (cakeImage) {
      cakeImage.src = "images/cake-cut.jpg";  // Change image source to cut cake image

      // Start flower petals animation
      createFlowerPetals();

      // Play Happy Birthday song
      var happyBirthdaySong = document.getElementById("happyBirthdaySong");
      happyBirthdaySong.play();

      alert("Yay! The cake is cut. Now make a wish!");
  } else {
      alert('No Image Found');
      console.error("Could not find image element in the cake section");
  }
}

function createFlowerPetals() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(petal);

  // Remove petal after animation ends
  petal.addEventListener("animationend", () => {
      petal.remove();
  });
}

// Continuous spawning of flower petals
setInterval(createFlowerPetals, 100); // Adjust the interval as needed for the desired density of petals




document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var flowerBouquet = document.getElementById("flower-bouquet");
      flowerBouquet.style.opacity = "1";
  }, 3000); // Adjust the delay as needed
});
