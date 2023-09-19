const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";

export const YOUTUBE_VIDEOS_SEARCH_RESULTS =
  " https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  API_KEY +
  "&q=";

export const OFFSET_STRING_LEN = 25;
