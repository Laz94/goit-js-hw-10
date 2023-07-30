import { createSelectMarkup, createCatInfoMarkup } from './markup';
import { refs, addClassIsHidden, removeClassIsHidden } from '../index.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API = 'https://api.thecatapi.com/v1/';
const KEY =
  'live_uFFs4pDeKw1fr23cQXFOt0YeXhDOqj8OLr32nPeS6UBtNQuGfIHTtqyMRPYZP7VL';

const notiflixLoadSettings = {
  backgroundColor: 'transparent',
  svgColor: '#8aa6bf',
  messageColor: '#0d0d0d',
  fontFamily: 'Roboto',
};

export function fetchBreeds() {
  Loading.dots('Loading data, please wait...', notiflixLoadSettings);

  return fetch(`${API}breeds`)
    .then(response => response.json())
    .then(data => {
      createSelectMarkup(data);
      refs.select.classList.remove('is-hidden');
      Loading.remove();
    })
    .catch(() =>
      Notify.failure('Oops!, Something went wrong! Try reloading the page!')
    );
}

export function fetchCatByBreed(breedId) {
  addClassIsHidden(refs.catInfo);

  Loading.dots('Loading data, please wait...', notiflixLoadSettings);

  return fetch(`${API}images/search?api_key=${KEY}&breed_ids=${breedId}`)
    .then(response => response.json())
    .then(data => {
      createCatInfoMarkup(data);
      removeClassIsHidden(refs.catInfo);
    })
    .catch(() => {
      Loading.remove();
      Notify.failure('Oops!, Something went wrong! Try reloading the page!');
    });
}
