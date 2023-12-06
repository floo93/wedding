simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 11, // required
  day: 23, // required
  hours: 8, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "minute", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

const offcanvasToggle = document.getElementById("offcanvasToggle");

function disableOffcanvas() {
  offcanvasToggle.disabled = true;
}

function enableOffcanvas() {
  offcanvasToggle.disabled = false;
}

window.addEventListener("load", disableOffcanvas);

const rootElement = document.querySelector(":root");

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem("open", "true");

  const alertSound = document.getElementById("alert-sound");
  alertSound.play();

  window.onscroll = null;
}

if (!localStorage.getItem("open")) {
  disableScroll();
}

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;

    Swal.fire({
      title: "Konfirmasi Kehadiran Berhasil",
      icon: "success",
    });

    fetch(action, {
      method: "POST",
      body: data,
    });
  });
});
