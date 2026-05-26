import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Увага',
      message: 'Введіть пошуковий запит',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        title: 'Нічого не знайдено',
        message: 'Спробуйте інший запит',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    iziToast.success({
      title: 'Готово',
      message: `Знайдено ${data.hits.length} зображень`,
      position: 'topRight',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }

  form.reset();
}
