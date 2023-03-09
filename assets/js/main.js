/*==================== MENU SHOW Y HIDDEN ====================*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        inputs = document.querySelectorAll('.inputForm');
        inputsDark = document.querySelectorAll(".contact__content");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const   skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener("click", toggleSkills);
    }) 

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => { 
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')


        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i);
    })
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});

/*==================== coursers ====================*/
let swiperCoursers = new Swiper(".coursers__container", {
  cssMode: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});



/*==================== Contact me form ====================*/
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");
    const menuLink = document.querySelector(
      '.nav__menu a[href*="' + sectionId + '"]'
    );
    if (menuLink !== null) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        menuLink.classList.add("active-link");
      } else {
        menuLink.classList.remove("active-link");
      }
    }

    // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //   document
    //     .querySelector(".nav__menu a[href*=" + sectionId + "]")
    //     .classList.add("active-link");
    // } else {
    //   document
    //     .querySelector('.nav__menu a[href*="' + sectionId + '"]')
    //     .classList.remove("active-link");
    // }
  });
}
window.addEventListener("scroll", scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

 
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    if(document.body.classList.contains(darkTheme)){
      inputsDark.forEach((eachInput) => {
        eachInput.classList.add("dark-input");
      })
    }else{
      inputsDark.forEach((eachInput) => {
        eachInput.classList.remove("dark-input");
      });
    }
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Form

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validityForm(input.target);
  });
});

function validityForm(input){
  const typeOfInput = input.dataset.type;
  if(input.validity.valid){
    input.parentElement.classList.add("input__container--valid");
    input.parentElement.classList.remove("input__container--invalid");
    input.parentElement.classList.remove(".input-message-error");
  }else{
    input.parentElement.classList.remove("input__container--valid");
    input.parentElement.classList.add("input__container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = showMessage(typeOfInput, input);

  };
};

const typeOfError = [
  "valueMissing",
  "typeMismatch"
];
const messageOfError = {
  name: {
    valueMissing: "The field name cannot be empty",
  },
  email: {
    valueMissing: "The field email cannot be empty",
    typeMismatch: "The email is not valid",
  },
  message: {
    valueMissing: "The field message cannot be empty",
  },
}; 

function showMessage(typeOfInput, input) {
  let message = "";
  typeOfError.forEach((error) => {
    if(input.validity[error]) {
      console.log(typeOfInput, error);
      console.log(input.validity[error]);
      console.log(messageOfError[typeOfInput][error]);
      message = messageOfError[typeOfInput][error];
    }
  });
  return message;
}