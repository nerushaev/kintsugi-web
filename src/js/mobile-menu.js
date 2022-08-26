import { refsForMobileMenu } from './refs'

refsForMobileMenu.menuButton.addEventListener('click', () => {
  const expanded = refsForMobileMenu.menuButton.getAttribute("aria-expanded") === true || false;
  refsForMobileMenu.mobileMenu.classList.toggle("is-active");
  refsForMobileMenu.mobileMenu.setAttribute("aria-expanded", !expanded);
  refsForMobileMenu.mobileMenu.classList.toggle("is-open");
})