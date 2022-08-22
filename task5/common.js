function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
};

function displayResult(apiData) {
  let cards = '';

  apiData.forEach(item => {
    const cardBlock = `
      <div class="image__card"><img src="${item.download_url}" class="card__image"/>
       <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });

  windowResult.innerHTML = cards;
}

const windowResult = document.querySelector('.image__result');
const btnGetNumbers = document.querySelector('.image__get-image');

btnGetNumbers.addEventListener('click', () => {
  const valuePage = document.querySelector('.page__input').value;
  const valueLimit = document.querySelector('.limit__input').value;


  if ((valuePage < 1 || valuePage > 10) && (valueLimit < 1 || valueLimit > 10)) {
    windowResult.innerHTML = `
   <div class="card"><p style="color:#FF0000">Номер страницы и лимит вне диапазона от 1 до 10!</p></div>
   `;
  } else if (valuePage < 1 || valuePage > 10) {
    windowResult.innerHTML = `
   <div class="card"><p style="color:#FF0000">Номер страницы вне диапазона от 1 до 10.</p></div>
   `;
  } else if (valueLimit < 1 || valueLimit > 10) {
    windowResult.innerHTML = `
   <div class="card"><p style="color:#FF0000">Лимит вне диапазона от 1 до 10.</p></div>
   `;
  } else {
    let requestLink = `https://picsum.photos/v2/list?page=${valuePage}&limit=${valueLimit}`;
    useRequest(requestLink, displayResult);
  }
})