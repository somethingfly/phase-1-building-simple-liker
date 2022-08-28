// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Instructions say "You might be tempted to look back at previous code, but don't.
// Use your knowledge and documentation from the internet (if needed), to build the application."
// using https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class

// how to get class contains https://stackoverflow.com/questions/31608928/event-target-classlist-doesnt-have-indexof-method


const hearts = Array.from(document.getElementsByClassName("like-glyph"));
const modal = document.getElementById("modal");
const modalParagraph = document.getElementById("modal-message");


hearts.forEach(heart => {
  heart.addEventListener("click", function () {
    if (heart.classList.contains("activated-heart")) {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    } else {
      mimicServerCall()
      .then(() =>{
        heart.classList.add("activated-heart")
        heart.innerText = FULL_HEART;
      })
      .catch((error) => {
        modal.classList.remove("hidden");
        modalParagraph.innerText = error;
        setTimeout(function(){ modal.classList.add("hidden") }, 3000);
      })
    }
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
