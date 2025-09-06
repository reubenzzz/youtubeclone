import axios from 'axios'


// Simple wrapper around YouTube Data API v3 (or a proxy). Replace with your API key.
// NOTE: YouTube Data API has quota limits — consider using RapidAPI or a server proxy for heavy usage.


const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const API_KEY = import.meta.env.VITE_YT_API_KEY || ''


export default async function fetchFromAPI(endpoint, params = {}){
const url = `${BASE_URL}/${endpoint}`
const res = await axios.get(url, {
params: { key: API_KEY, part: 'snippet', maxResults: 12, ...params }
})
return res.data
}
