function clickLogo(event) {
  event.preventDefault();
  event.target.innerHTML = `<img
        src="/image/logo.png"
        alt="logo"
        style="width: 100px"
        id="logo"
        />`;
}

let logoHover = document.querySelector(".navbar-brand");
logoHover.addEventListener("mouseenter", clickLogo);
