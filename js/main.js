//TODO : Go Up :

const goUp = document.querySelector(".go-up");
goUp.onclick = () => {
  window.scrollTo(0, 0);
};

//! Elements Containing The "bottom" Element :
const nav = document.querySelector("nav"),
  navBorder = document.querySelector("nav .bottom");
const services = document.querySelector(".services"),
  servBorder = document.querySelector(".services .bottom");
const portfolio = document.querySelector(".portfolio"),
  portBorder = document.querySelector(".portfolio .bottom");
const about = document.querySelector(".about"),
  aboutBorder = document.querySelector(".about .bottom");
const hosting = document.querySelector(".hosting"),
  hostBorder = document.querySelector(".hosting .bottom");
const clients = document.querySelector(".clients");
const price = document.querySelector(".price");
const contact = document.querySelector(".contact");

//TODO : Add & Remove "Active" class (Item List) :

const navList = document.querySelectorAll("nav .navbar-nav a");
addActive(navList);

//TODO : Photo Filter :

const list = document.querySelectorAll(".portfolio ul li"),
  imgs = document.querySelectorAll(".portfolio .box .image img");

addActive(list);
list.forEach((e) => {
  e.addEventListener("click", () => {
    imgs.forEach((el) => {
      if (!el.classList.contains(e.textContent.toLowerCase())) {
        el.parentElement.parentElement.parentElement.style.display = "none";
      } else {
        el.parentElement.parentElement.parentElement.style.display = "block";
      }
    });
  });
});

//TODO : Show Image Info :

const oInfo = document.querySelectorAll(".portfolio .row .image"),
  info = document.querySelectorAll(".portfolio .info"),
  close = document.querySelectorAll(".portfolio .info .text .close");

oInfo.forEach((e) => {
  e.onclick = () => {
    info.forEach((el) => {
      if (!el.classList.contains(e.dataset.link)) {
        el.classList.remove("show");
      } else {
        el.classList.add("show");
        if (window.scrollY < 1400 || window.scrollY > 1400) {
          window.scrollTo(0, portfolio.offsetTop + 200);
        }
      }
    });
  };
});

close[0].onclick = () => console.log(`hello`);

console.log(close[0]);
close.forEach((e) => {
  e.onclick = function () {
    info.forEach((e) => {
      if (e.classList.contains("show")) e.classList.remove("show");
    });
  };
});

list.forEach((el) => {
  el.addEventListener("click", () => {
    info.forEach((e) => {
      e.classList.remove("show");
    });
  });
});

//TODO : Add Filling Effect To Progress :

const progBox = document.querySelector(".prog"),
  prog = document.querySelectorAll(".progress .progress-bar");

function newWidth() {
  prog.forEach((e) => {
    e.style.width = e.dataset.width;
    e.style.opacity = `1`;
  });
}

//! Global Events :

//* Window On Scroll :

window.onscroll = function () {
  //TODO : Show "Go-Up" Button :

  if (this.scrollY > 400) {
    goUp.style.opacity = `1`;
  } else {
    goUp.style.opacity = "0";
  }

  //TODO : Add & Remove "hide" Class To "bottom" Element On Scroll:

  if (nav.offsetTop >= 50) {
    navBorder.classList.add("hide");
  } else {
    navBorder.classList.remove("hide");
  }
  hideBottom(services, servBorder);
  hideBottom(portfolio, portBorder);
  hideBottom(about, aboutBorder);
  hideBottom(hosting, hostBorder);

  //TODO : Add & Remove "Active" Class To The Elements On Scroll :

  acriveScroll(services);
  acriveScroll(portfolio);
  acriveScroll(about);
  acriveScroll(clients);
  acriveScroll(price);
  acriveScroll(contact);

  //TODO : Add Width To Progress Bar :
 
  if (this.scrollY >= about.offsetTop + progBox.offsetTop - 700) {
    newWidth();
  }
};

//! Global Functions :

//TODO : Hide "Bottom" Element On Scroll :

function hideBottom(ele, eleB) {
  if (
    this.scrollY >= ele.clientHeight + ele.offsetTop - 35 ||
    this.scrollY <= ele.offsetTop + ele.clientHeight - window.innerHeight + 15
  ) {
    eleB.classList.add("hide");
  } else {
    eleB.classList.remove("hide");
  }
}

//TODO : Add & Remove "Active" Class To The Elements On Scroll :

function acriveScroll(ele) {
  navList.forEach((el) => {
    if (this.scrollY >= ele.offsetTop - 67) {
      //! "67" is height of header;
      if (el.classList.contains("active")) el.classList.remove("active");
      if (
        el.textContent.toLowerCase() == ele.classList[0] &&
        !el.classList.contains("active")
      ) {
        el.classList.add("active");
      }
    } else if (
      el.textContent.toLowerCase() == ele.classList[0] &&
      el.classList.contains("active")
    ) {
      el.classList.remove("active");
    } else if (this.scrollY < 400) {
      if (el.classList.contains("active")) el.classList.remove("active");
      if (!navList[0].classList.contains("active"))
        navList[0].classList.add("active");
    }
  });
}

//TODO : Add & Remove "Active" Class To The Elements :

function addActive(eles) {
  eles.forEach((e) => {
    e.addEventListener("click", () => {
      eles.forEach((el) => {
        el.classList.remove("active");
        e.classList.add("active");
      });
    });
  });
}
