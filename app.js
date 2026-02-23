let input_message = document.getElementById("message"),
  input_subject = document.querySelector(".input-subject"),
  input_email = document.querySelector(".input-email"),
  click_send = document.querySelector(".send-email");

const my_email = "bindemacvette@gmail.com";
class Handle_send_email {
  constructor(email, subject, text_message) {
    this.email = email;
    this.subject = subject;
    this.text_message = text_message;
  }
  send_me_email() {}
}

const showTextBox = () => {
  input_message.value = "you are hired";
};

const handel_send_click = () => {
  const email = input_email.value;
  const subject = input_subject.value;
  const send_text = input_message.value;

  if (email === "" || subject === "" || send_text === "") {
    alert("please fill all the fields");
    return;
  }

  input_message.value = "";
  input_email.value = "";
  input_subject.value = "";
  document.querySelector(".email-sent").innerHTML = "message sent succefully";
  setTimeout(() => {
    document.querySelector(".email-sent").innerHTML = "";
  }, 4000);
};

// HANDLE NAV LINK

const scrollDownARR = document.querySelector(".arrow-down");
scrollDownARR.addEventListener("click", () => {});

// nav click to transform down
const nav_icons = document.querySelectorAll(".nav-bar .nav-items a img");

const sections = document.querySelectorAll("section");
const nav_link = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  nav_link.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

click_send.addEventListener("click", handel_send_click);
// contact form
const contactForm = document.querySelector(".contact-form");
const text_m = document.querySelector(".text-m");

const sr = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 2000,
  reset: true,
});
/* -- HOME -- */
sr.reveal(".about-items", {});
sr.reveal(".", { delay: 100 });
sr.reveal(".profile-name", { delay: 200 });

/* -- PROJECT BOX -- */
sr.reveal(".about", { interval: 200 });
/* -- HEADINGS -- */
sr.reveal(".home-wrapper", {});

sr.reveal(".porforlio-items", { delay: 100 });
sr.reveal(".text-m", { delay: 200 });
sr.reveal(".education-wrapper", { delay: 100 });
// skills and internship

sr.reveal(".skills-wrapper", { delay: 100 });
sr.reveal(".internship-wrapper", { delay: 100 });

// typing effect
var typingEffect = new Typed(".job-post", {
  strings: [
    "I'm a Software Engineer",
    "I'm an Expert in Machine Learning",
    "I'm  a Full-stack Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".contact-info", { delay: 100 });
srLeft.reveal(".contact-items", { delay: 100 });

/* -- A & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".contact-input", { delay: 100 });
srRight.reveal(".feedback-items", { delay: 100 });
