const windowResult = document.querySelector('.image__result');
const btnGetNumber = document.querySelector('.image__get-image');

btnGetNumber.addEventListener('click', () => {
  const valueWidth = document.querySelector('.width__input').value;
  const valueHeight = document.querySelector('.height__input').value;

  if (valueHeight < 100 || valueHeight > 300 || valueWidth < 100 || valueWidth > 300) {
    windowResult.innerHTML = `
   <div class="image__card"><p style="color:#FF0000">Одно из чисел вне диапазона от 100 до 300!</p></div>
   `;
  } else {
    fetch(`https://picsum.photos/${valueWidth}/${valueHeight}`)
      .then((response) => {
        const cards = `
           <div class="image__card"><img src="${response.url}" class="card__image"/></div>
           `;
        windowResult.innerHTML = cards;
      })
      .catch(() => {
        console.log('error');
      });
  }
});