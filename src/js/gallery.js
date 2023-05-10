//  https://medium.com/@ryanfinni/the-intersection-observer-api-practical-examples-7844dfa429e9

// DOCS: https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API

class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #page;
  #searchQuery;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: 'black',
    orientation: 'portrait',
  });

  constructor() {
    this.#page = 1;
    this.#searchQuery = '';
  }

  async getImages() {
    const response = await fetch(
      `${this.#BASE_URL}?query=${this.#searchQuery}&page=${this.#page}&${
        this.#searchParams
      }`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  set searchQuery(newQuery) {
    this.#searchQuery = newQuery;
  }

  get searchQuery() {
    return this.#searchQuery;
  }
}

const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-gallery'),
  loadMoreBlock: document.querySelector('.more'),
};

const { form, list, loadMoreBlock } = refs;

const unsplashApi = new UnsplashAPI();

const observer = new IntersectionObserver(callback);

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreItems();
    }
  });
}

let totalPages = 0;

function createGalleryCards(images) {
  return images
    .map(
      ({ urls, alt_description }) => `<li class="gallery__item">
        <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
    </li>`
    )
    .join('');
}

async function loadMoreItems() {
  unsplashApi.page += 1;

  if (unsplashApi.page > totalPages){
    loadMoreBlock.classList.remove('is-visible');
    observer.unobserve(loadMoreBlock);
    return;
  };

  const response = await unsplashApi.getImages();

  const markup = createGalleryCards(response.results);
  list.insertAdjacentHTML('beforeend', markup);
}

async function handleSubmit(e) {
  e.preventDefault();
  const query = e.currentTarget.elements.query.value.trim();

  if (!query) return;

  unsplashApi.searchQuery = query;
  unsplashApi.page = 1;
  list.innerHTML = '';

  const response = await unsplashApi.getImages();

  if (!response.results.length) return;

  totalPages = response.total_pages;
  const markup = createGalleryCards(response.results);
  list.insertAdjacentHTML('beforeend', markup);

  loadMoreBlock.classList.add('is-visible');
  observer.unobserve(loadMoreBlock);
  observer.observe(loadMoreBlock);
}

form.addEventListener('submit', handleSubmit);

