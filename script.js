window.addEventListener("scroll", () => {
  const rightText = document.querySelector(".right");
  const triggerPoint = window.innerHeight / 2;

  console.log("Scroll position:", window.scrollY);

  if (window.scrollY > triggerPoint) {
    console.log("Adding 'fixed' class!");
    rightText.classList.add("fixed");
  } else {
    console.log("Removing 'fixed' class!");
    rightText.classList.remove("fixed");
  }
});

document.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let navItems = document.querySelectorAll(".nav-item");

  sections.forEach((section) => {
    let top = section.getBoundingClientRect().top;
    let id = section.getAttribute("id");

    if (top >= 0 && top < window.innerHeight / 2) {
      navItems.forEach((item) => {
        item.classList.remove("active"); // Remove active class from all
        if (item.dataset.section === id) {
          item.classList.add("active"); // Add active class to the current section
        }
      });
    }
  });
});
