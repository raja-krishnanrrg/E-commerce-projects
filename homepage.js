

    let mainBtn = document.querySelector(".main-btn");
    let leftMenu = document.querySelector(".left-menu");
    let rightMenu = document.querySelector(".right-menu");
    let leftItems = document.querySelectorAll(".left-item");
    let subBoxes = document.querySelectorAll(".sub-box"); 
    mainBtn.addEventListener("mouseenter", () => {
        leftMenu.style.display = "block";
    });
    // When hover left menu
    leftMenu.addEventListener("mouseenter", () => {
        leftMenu.style.display = "block";
    });
    // Hide menus when mouse leaves both menus
    leftMenu.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!rightMenu.matches(":hover")) {
                leftMenu.style.display = "none";
                rightMenu.style.display = "none";
            }
        }, 100);
    });

    rightMenu.addEventListener("mouseleave", () => {
        leftMenu.style.display = "none";
        rightMenu.style.display = "none";
    });

    // Left item hover → show right content
    leftItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const target = item.getAttribute("data-target");
            rightMenu.style.display = "block";
            subBoxes.forEach(box => box.style.display = "none");
            document.getElementById(target).style.display = "block";
        });
    });

    // mobile navbar

     function openMenu() {
    document.getElementById("mobileMenu").classList.add("active");
     document.getElementById("categoryMenu").style.display = "none";
  }

  function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("active");
    closeSubMenu(); // reset submenu
  }

  function openSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("categoryMenu").style.display = "block";
  }

  function closeSubMenu() {
    document.getElementById("mainMenu").style.display = "block";
    document.getElementById("categoryMenu").style.display = "none";
  }

  //whatspp chats

   let topBtn = document.getElementById("topBtn");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }
    };

    topBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
