const KEY = '33365973-1d77bed254b8fc4c88316f69d';
export async function GetPictures({ searchQuery = 'cat', page = 1 }) {
  try {
    const responce = await fetch(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (responce.ok) {
      const data = await responce.json();

      const result = {
        data: data.hits.map(({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        })),
        totalHits: data.totalHits,
      };

      return result;
    }
  } catch (error) {
    return new Promise.reject(
      `Ошибка получения информации по запросу ${searchQuery} страница ${page}`
    );
  }
}
