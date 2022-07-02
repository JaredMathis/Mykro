import axios from 'axios';    
export async function web_search(query) {
    let result = await axios.get('https://duckduckgo.com/?q=' + query);
    console.log(result.data);
}