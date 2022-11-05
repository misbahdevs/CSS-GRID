const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const toggle = select(".toggle");
const ul = select("ul");
toggle.addEventListener("click", function () {
  if (ul.classList.contains("slide")) {
    toggle.innerHTML = `<i class="uil uil-list-ui-alt"></i>`;
  } else {
    toggle.innerHTML = `<i class="uil uil-times"></i>`;
  }
  ul.classList.toggle("slide");
});
