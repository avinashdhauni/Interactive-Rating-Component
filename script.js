const ratingSelected = document.querySelector(".selected");
const ratingContainer = document.querySelector(".ratingContainer");
const thankYouContainer = document.querySelector(".thankYouContainer");
const rating = document.querySelectorAll(".rating");
const button = document.getElementById("submitButton");
const otherRatings = document.querySelector(".rating");

var selectedRating = "no rating";

rating.forEach((e) => {

    e.addEventListener("click", (event) => {
        selectedRating = event.target.textContent;

        rating.forEach((e) =>{
          if(e.classList.contains("active")){
            e.classList.remove("active");
          }
        })

       if(e.textContent === selectedRating) {
          e.classList.add("active")
        }
    })
})

button.addEventListener("click", () => {
    ratingContainer.classList.add("hide");
    thankYouContainer.classList.remove("hide");
    ratingSelected.innerHTML = "You selected " +selectedRating +" out of 5";
    console.log("You selected " +selectedRating +" out of 5");
})
