// responsive navigation with slide animation
(function(){ 
    const nav = document.querySelector(".primaryNavigation");
    const navToggle = document.querySelector(".toggle");
    const aboutLink = document.querySelector(".aboutLink");
    const skillsLink = document.querySelector(".skillsLink");
    const projectsLink = document.querySelector(".projectsLink");
    const contactLink = document.querySelector(".contactLink");


    navToggle.addEventListener("click", (ev) => {
        const visibility = nav.getAttribute("dataVisible");
    
        if (visibility === "false") {
            nav.setAttribute("dataVisible", true);
            navToggle.setAttribute("expanded", true);
        } else if (visibility === "true") {    
            nav.setAttribute("dataVisible", false);
            navToggle.setAttribute("expanded", false); 
        }
    })

    // click away from navigation to auto-close panel
    document.addEventListener("click", (event) => {
        // clicking anywhere but the nav
        if (nav !== event.target && navToggle !== event.target &&!nav.contains(event.target)) {
            nav.setAttribute("dataVisible", false);
            navToggle.setAttribute("expanded", false);     
        } 
        // clicking on a link in nav
        else if (aboutLink === event.target || skillsLink === event.target || projectsLink === event.target || contactLink === event.target) {
            nav.setAttribute("dataVisible", false);
            navToggle.setAttribute("expanded", false);  
        }
    })

})();

// showing nav bar on scroll up, hide on scroll down
(function(){
    var doc = document.documentElement;
    var win = window;

    var curScroll = prevScroll = win.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    var header = document.getElementById("header");
    var threshold = 100;
    var toggled;

    var checkScroll = function() {
        curScroll = win.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        } else {
            // scrolled up
            curDirection = 1;
        }

        if (curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        if (toggled) {
            prevDirection = curDirection;
        }
        
        prevScroll = curScroll;
    }

    var toggleHeader = function() {
        toggled = true;
        if (curDirection === 2 && curScroll > threshold) {
            header.classList.add("hide");
        } else if (curDirection === 1) {
            header.classList.remove("hide");
        } else {
            toggled = false;
        }
        return toggled;
    }

    window.addEventListener("scroll", checkScroll);

})();