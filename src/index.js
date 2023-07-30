import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createSelectMarkup } from './js/markup';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds();

refs.select.addEventListener('change', e => fetchCatByBreed(e.target.value));

export function addClassIsHidden(elem) {
  elem.classList.add('is-hidden');
}

export function removeClassIsHidden(elem) {
  elem.firstElementChild.addEventListener('load', () => {
    refs.catInfo.classList.remove('is-hidden');
    Loading.remove();
  });
}
