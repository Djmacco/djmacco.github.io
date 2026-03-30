// skill bars — animate on scroll
const skillFills = document.querySelectorAll(".skill-fill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + "%";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

skillFills.forEach((fill) => observer.observe(fill));

// contact form elements
const input_message = document.getElementById("message");
const input_subject = document.querySelector(".input-subject");
const input_email = document.querySelector(".input-email");
const click_send = document.querySelector(".send-email");
const input_name = document.querySelector(".input-name");

// fill message when hire-me is clicked
const showTextBox = () => {
  if (input_message) input_message.value = "You are hired!";
};

// send email via emailjs
const handel_send_click = () => {
  const email = input_email.value.trim();
  const subject = input_subject.value.trim();
  const msg = input_message.value.trim();
  const name = input_name.value.trim();

  if (!email || !subject || !msg || !name) {
    alert("Please fill in all fields.");
    return;
  }

  emailjs.send("service_7h3xpxs", "template_hr0r00k", {
    email,
    subject,
    message: msg,
    name,
  });

  input_message.value = "";
  input_email.value = "";
  input_subject.value = "";
  input_name.value = "";

  const sent = document.querySelector(".email-sent");
  sent.textContent = "Message sent successfully!";
  setTimeout(() => (sent.textContent = ""), 4000);
};

if (click_send) click_send.addEventListener("click", handel_send_click);

// mobile nav
const close_nav = document.getElementById("close-nav-bar");
const open_nav = document.getElementById("open-nav-bar");
const nav_items = document.querySelector(".nav-bar .nav-items");

const closeSideBar = () => {
  nav_items.classList.remove("open-nav");
  document.body.classList.remove("no-scroll");
};

if (close_nav) close_nav.addEventListener("click", closeSideBar);

if (open_nav) {
  open_nav.addEventListener("click", () => {
    nav_items.classList.add("open-nav");
    document.body.classList.add("no-scroll");
  });
}

// active nav link on scroll
const sections = document.querySelectorAll("section");
const nav_links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  nav_links.forEach((link) => {
    link.classList.remove("active");
    closeSideBar();
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// scroll reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1800,
  reset: true,
});

sr.reveal(".home-wrapper", {});
sr.reveal(".about", { interval: 200 });
sr.reveal(".about-items", {});
sr.reveal(".text-m", { delay: 200 });
sr.reveal(".porforlio-items", { delay: 100, interval: 80 });
sr.reveal(".education-wrapper", { delay: 100 });
sr.reveal(".skills-wrapper", { delay: 100 });
sr.reveal(".internship-wrapper", { delay: 100 });

const srLeft = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 1800,
  reset: true,
});
const srRight = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 1800,
  reset: true,
});

srLeft.reveal(".contact-info", { delay: 100 });
srLeft.reveal(".contact-items", { delay: 100 });
srRight.reveal(".contact-input", { delay: 100 });
srRight.reveal(".feedback-items", { delay: 100 });

// typed.js effect
new Typed(".job-post", {
  strings: [
    "I'm a Software Engineer",
    "I'm an Expert in Machine Learning",
    "I'm a Full-Stack Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
