//Init function
burgerClickEvent()
sliderNavContainer()
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

//Subpage 
function sliderNavContainer(){
  //Check if the nav exist
  checkItem(document.querySelector(".slider-nav-container"))
  

  sliderNav = document.querySelector(".slider-nav-container")
  sliderNavItems = [...sliderNav.querySelectorAll("li")]
  sliderMediaItems = document.querySelectorAll("#hero-section .content .slider-media-container .media")
  sliderTextItems = document.querySelectorAll("#hero-section .content .slider-text-container .slider-text")
  sliderNavItems.forEach((item,index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      if(item.classList.value.includes("current")) return

      for(let i = 0; i < sliderNavItems.length; i++){
        sliderNavItems[i].classList.remove("current")
        sliderMediaItems[i].classList.remove("current")
        sliderTextItems[i].classList.remove("current")
      }

      item.classList.add("current")
      sliderMediaItems[index].classList.add("current")
      sliderTextItems[index].classList.add("current")
    })
  })
}