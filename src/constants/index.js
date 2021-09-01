const base_url = "https://api.jikan.moe/v3/";
const anime_top = "top/anime/1";
const anime_search = "search/anime?q=";

export const animeTop = () => `${base_url}${anime_top}`;

export const animeSearch = (q) => `${base_url}${anime_search}${q}`;
