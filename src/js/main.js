//READMORE

let text = document.querySelector(".content__container__text");
let moreButton = document.querySelector(".content__container__button");
let moreButtonText = moreButton.querySelector("span");
let moreButtonArrows = moreButton.querySelector(".arrows");
let degs = 0;
moreButton.addEventListener("click", () => {
  moreButtonArrows.style.transform = `rotate(${(degs += 180)}deg)`;

  if (text.style.maxHeight == "550px") {
    text.style.maxHeight = "";
    moreButtonText.textContent = "Читать далее";
  } else {
    text.style.maxHeight = "550px";
    moreButtonText.textContent = "Скрыть";
  }
});

//КАТЕГОРИИ

let categories = document.querySelector(".categories");
let categoriesItems = categories.querySelectorAll(".categories__item");

categoriesItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.children[0].classList.contains("active")) {
      active = categories.querySelector(".active");
      active.classList.remove("active");
      item.children[0].classList.add("active");
    }
  });
});

//СЛАЙДЕР;

let sliders;
let swiperContainer = document.querySelector(".swiper");
function createSlider() {
  if (window.innerWidth < 768) {
    if (!swiperContainer.classList.contains("swiper-initialized")) {
      sliders = new Swiper(".swiper", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        breakpoints: {
          480: {
            slidesPerView: 1.4,
          },
          640: {
            slidesPerView: 1.8,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else {
    if (swiperContainer.classList.contains("swiper-initialized") && !sliders[0].destroyed) {
      for (let slider of sliders) {
        slider.destroy();
      }
    }
  }
}

createSlider();

window.addEventListener("resize", () => {
  createSlider();
});

// КНОПКИ
let brands_container = document.querySelector(".brands");
let brands_button = document.querySelector("#brands_button");
let brands_arrow = brands_button.querySelector(".arrows");
let brands_text = brands_button.querySelector("span");
let brands_degs = 0;
brands_button.addEventListener("click", () => {
  brands_container.classList.toggle("opened");
  let text = brands_container.classList.contains("opened") ? "Скрыть" : "Показать все";
  brands_text.textContent = text;
  brands_arrow.style.transform = `rotate(${(brands_degs += 180)}deg)`;
});

let equipment_container = document.querySelector(".equipment");
let equipment_button = document.querySelector("#equipment_button");
let equipment_arrow = equipment_button.querySelector(".arrows");
let equipment_text = equipment_button.querySelector("span");
let equipment_degs = 0;
equipment_button.addEventListener("click", () => {
  equipment_container.classList.toggle("opened");
  let text = equipment_container.classList.contains("opened") ? "Скрыть" : "Показать все";
  equipment_text.textContent = text;
  equipment_arrow.style.transform = `rotate(${(equipment_degs += 180)}deg)`;
});

const blur = document.querySelector(".blur");
let burger_button = document.querySelector(".button.burger-logo");
let chat_buttons = document.querySelectorAll(".button.chat-logo");
let phone_buttons = document.querySelectorAll(".button.phone-logo");
let close_menu_button = document.querySelector("#menu-close");
let close_feedback_button = document.querySelector("#feedback-close");
let close_phone_button = document.querySelector("#call-close");
let menu = document.querySelector(".left-menu");
let feedback = document.querySelector("#feedback1");
let phone = document.querySelector("#call");

burger_button.addEventListener("click", () => {
  openMenu();
});

for (let chat of chat_buttons) {
  chat.addEventListener("click", () => {
    openFeedback();
    closeMenu();
  });
}
for (let phone_button of phone_buttons) {
  phone_button.addEventListener("click", () => {
    openPhone();
    closeMenu();
  });
}

close_menu_button.addEventListener("click", () => {
  closeMenu(true);
});

close_feedback_button.addEventListener("click", () => {
  closeFeedback(true);
});

close_phone_button.addEventListener("click", () => {
  closePhone(true);
});

blur.addEventListener("click", () => {
  if (menu.style.left == "0px") {
    closeMenu(true);
  } else if (feedback.style.right == "0px") {
    closeFeedback(true);
  }else if (phone.style.right == "0px") {
    closePhone(true);
  }
});

function closeMenu(_blur = false) {
  if (window.innerHeight < 1120) {
    menu.style.left = "";
    menu.style.top = "";
    if (_blur) blur.style.display = "none";
  }
}

function closeFeedback(_blur = false) {
  feedback.style.right = "";
  feedback.style.top = "";
  if (_blur) blur.style.display = "none";
  blur.style.zIndex = "";
}

function openMenu() {
  if (window.innerWidth >= 768) {
    menu.style.left = "0";
    blur.style.display = "block";
  } else {
    menu.style.top = "0";
  }
}

function openFeedback() {
  if (window.innerWidth >= 768) {
    feedback.style.right = "0px";
    blur.style.display = "block";
    blur.style.zIndex = "14";
  } else {
    feedback.style.top = "0";
  }
}

function openPhone() {
  if (window.innerWidth >= 768) {
    phone.style.right = "0px";
    // phone.children[0].focus()
    console.log(phone.children[0])
    console.log("TRUEE EEDED")
    blur.style.display = "block";
    blur.style.zIndex = "14";
  } else {
    phone.style.top = "0";
  }
}

function closePhone(_blur = false) {
  phone.style.right = "";
  phone.style.top = "";
  if (_blur) blur.style.display = "none";
  blur.style.zIndex = "";
}
