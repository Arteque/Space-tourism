//Init function
burgerClickEvent()

// Navigation and Burger Menu behavior on Click for mobile
// Functions
function checkItem(item){
    if(!item) return
}

function burgerClickEvent(){
    //check if burger menu is loaded
    checkItem(document.querySelector(".burger-container"))

    const burgerContainer = document.querySelector(".burger-container"),
          mainNavContainer = document.querySelector("#main-nav-container")

          burgerContainer.addEventListener("click", (e) => {
            //just in case the click event behave is inexpected -> prevent the default
            e.preventDefault()

            burgerContainer.classList.toggle("show")
            mainNavContainer.classList.toggle("show")
          })
}