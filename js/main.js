$(document).ready(function () {
  /*----------------LOADER*/
  window.addEventListener("load", ()=> {
    $(".main").removeClass("hidden");
    $(".home-section").addClass("active");
    /*--------------page-loader*/
    $(".page-loader").addClass("fade-out");
    setTimeout(()=> {
    $(".page-loader").addClass("fade-out").css("display", "none");
  }, 1000);
});
       /*----------------NAVBAR*/
       const navToggler = $(".nav-toggler");
       navToggler.click(function () {
         hideSection();
         toggleNavbar();
        document.body.classList.toggle("hide-scrolling");
         
       });
       function hideSection() {
         $("section.active").addClass("fadeOut");
       }
       function toggleNavbar() {
     $(".header").toggleClass("active");
       }
       
       /*active section.......................*/
       document.addEventListener("click", (e) => {
         if (e.target.classList.contains("link-item") && e.target.hash !== "") {
           document.querySelector(".overlay").classList.add("active");
          
      
           if (e.target.classList.contains("nav-item")) {
             toggleNavbar();
           } else {
             hideSection();
             document.body.classList.add("hide-scrolling");
           }
           setTimeout(() => {
             document.querySelector("section.active").classList.remove("active","fadeOut");
             document.querySelector(e.target.hash).classList.add("active");
             window.scrollTo(0, 0);
             document.body.classList.remove("hide-scrolling");
             document.querySelector(".overlay").classList.remove("active");
           }, 500);
         } 
       } );
       
       /*----------------About me*/
        const edu = $("#edu");
        const exe = $("#exe");
        exe.click(function () {
            $("#experince").css("display", "block");
            $("#education").css("display", "none");
            exe.addClass("active");
            edu.removeClass("active");
         
        });
        edu.click(function () {
          $("#experince").css("display", "none");
            $("#education").css("display", "block");
             exe.removeClass("active");
            edu.addClass("active");
        });
         
       
   
  window.addEventListener("click", (e) => {

    if (e.target.classList.contains("view-project-btn")) {
      togglePortfolioPop();
      portfolioItemDetails(e.target.parentElement);
    }
  })
  function togglePortfolioPop() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
  }
  document.querySelector(".pp-close").addEventListener("click", togglePortfolioPop);

  /*-----------HIDE POPUP WHEN CLICKING OUTSIDE OF IT*/
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
      togglePortfolioPop();
    }
  });

  function portfolioItemDetails(portfolioItem) {
    console.log(portfolioItem.querySelector(".portfolio-item-title"));
    document.querySelector(".pp-thumbnail img").src =
      portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML =
      portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  
  
    document.querySelector(".pp-body").innerHTML =
      portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
      });