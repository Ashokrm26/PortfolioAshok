document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Smooth scrolling for navigation links
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active navigation link on scroll
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            if (
                section.offsetTop - 100 <= scrollPosition && 
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                const id = section.getAttribute("id");
                links.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(id)) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
//
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        let nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            nav.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
            nav.classList.remove("scrolled");
        }
    });
});














// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll("nav ul li a");
    
//     links.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             const targetElement = document.getElementById(targetId);
            
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 50,
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });

//     // Toggle active class for navigation links
//     window.addEventListener("scroll", function() {
//         let scrollPosition = window.scrollY;
        
//         links.forEach(link => {
//             let section = document.querySelector(link.getAttribute("href"));
//             if (
//                 section.offsetTop - 100 <= scrollPosition && 
//                 section.offsetTop + section.offsetHeight > scrollPosition
//             ) {
//                 links.forEach(l => l.classList.remove("active"));
//                 link.classList.add("active");
//             }
//         });
//     });

//     // Scroll to top button
//     const scrollTopBtn = document.createElement("button");
//     scrollTopBtn.innerText = "↑";
//     scrollTopBtn.classList.add("scroll-top");
//     document.body.appendChild(scrollTopBtn);
    
//     scrollTopBtn.addEventListener("click", () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     });
    
//     window.addEventListener("scroll", () => {
//         if (window.scrollY > 300) {
//             scrollTopBtn.style.display = "block";
//         } else {
//             scrollTopBtn.style.display = "none";
//         }
//     });
// });