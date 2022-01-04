'use strict';
let h1;
function init() {
  console.log('initialized...');
  h1 = document.querySelector('h1');
  console.log(h1);
}
document.addEventListener('DOMContentLoaded', init);
