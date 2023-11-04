'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btsOpenModal = document.querySelectorAll('.show-modal'); // there are three btn where this class is used so on logging that we get a array like structure which we loop using for loop
const openModal = function () {
  modal.classList.remove('hidden'); // classList is the method we use to add remove classes and to do many more thing
  overlay.classList.remove('hidden');
  // now the good practice is to define/declare this function somewhere else so that we can use it again and again
};
const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let i = 0; i < btsOpenModal.length; i++) {
  btsOpenModal[i].addEventListener('click', openModal); // here we define / declare the openModal we don't call the openModal() like this here coz it will execute the code immediately
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//now we want that on clicking esc button it will close down the modal so for doing this we have to use addEventListener on document(it will cover the whole page so pressing the esc wherever it will close the modal)

document.addEventListener('keydown', function (e) {
  console.log(e);
  //now we want on clicking esc modal should be closed if it was opened before.
  if (e.key === 'Escape' && !modal.classList.remove('hidden')) {
    closeModal();
  }
});
//document.addEventListener, you are attaching an event listener to the entire document. This means the event listener will respond to events that occur anywhere within the document.
