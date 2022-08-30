import { refsForBusket } from './refs';


refsForBusket.goodsCards.addEventListener('click', addToLocalStorage);

refsForBusket.amountBusketRef.textContent = null;

function addToLocalStorage(e) {
  e.preventDefault();
  let busketIsActive = refsForBusket.busketContainerRef.classList.contains('disable');
  if (busketIsActive) {
    refsForBusket.busketContainerRef.classList.remove('disable')
  }
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  refsForBusket.amountBusketRef.textContent++;
};




