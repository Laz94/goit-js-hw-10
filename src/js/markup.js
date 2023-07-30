import { refs } from '../index.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

export function createSelectMarkup(data) {
  const markup = data
    .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
    .join('');

  refs.select.insertAdjacentHTML('beforeend', markup);

  new SlimSelect({
    select: '#single',
  });
}

export function createCatInfoMarkup(data) {
  const { breeds, url, height, width } = data[0];

  const targetHeight = 360;
  const targetWidth = (width / height) * targetHeight;

  const { name, description, temperament } = breeds[0];

  refs.catInfo.innerHTML = `
        <img src="${url}" alt="" class="breed-img" height="${targetHeight}" width="${targetWidth}"/>
        <div class="desc-wrapper">
            <h1 class="breed-name">${name}</h1>
            <p class="breed-description">${description}</p>
            <p class="breed-temperament"><span>Temperament: </span>${temperament}</p>
        </div>
    `;
}
