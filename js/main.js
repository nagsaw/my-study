'use strict';

let view;

class View {
  constructor() {
    this._parentElement = document.querySelector('.js-view');
  }
  render() {
    this._parentElement.insertAdjacentHTML('beforeend', '<p>test</p>');
  }
  update(data) {
    // this._data = data;
    const newMarkup = `
    <div>
    <p>text1</p>
    <p class="dfdf">text2</p>
    <p>text3</p>
    </div>`;
    const range = document
      .createRange()
      .createContextualFragment(newMarkup)
      .querySelectorAll('*');
    console.log(range);

    // const newDOM = document.createRange().createContextualFragment(newMarkup);
    // const newElements = Array.from(newDOM.querySelectorAll('*'));
    // const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // console.log(newElements);
    // console.log(curElements);

    // newElements.forEach((newEl, i) => {
    //   const curEl = curElements[i];
    //   // console.log(curEl, newEl.isEqualNode(curEl));

    //   // Updates changed TEXT
    //   if (
    //     !newEl.isEqualNode(curEl) &&
    //     newEl.firstChild?.nodeValue.trim() !== ''
    //   ) {
    //     // console.log('💥', newEl.firstChild.nodeValue.trim());
    //     curEl.textContent = newEl.textContent;
    //   }

    //   // Updates changed ATTRIBUES
    //   if (!newEl.isEqualNode(curEl))
    //     Array.from(newEl.attributes).forEach(attr =>
    //       curEl.setAttribute(attr.name, attr.value)
    //     );
    // });
  }
}

function init() {
  console.log('initialized...');
  view = new View();
  console.log(view);
  view.render();
  view.update();
}
document.addEventListener('DOMContentLoaded', init);
