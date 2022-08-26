import { refsForBusket } from './refs';


refsForBusket.goodsCards.addEventListener('click', addToLocalStorage);

function addToLocalStorage(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  let goodsName = e.currentTarget
  console.log(e.currentTarget.childNodes);
};

