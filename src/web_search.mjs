import axios from 'axios';
import { parse } from 'node-html-parser';
export async function web_search(query) {
    let get = await axios.get('https://duckduckgo.com/?q=' + query);
    let parsed = parse(get.data);

    let result = [];
    tree_traverse(parsed, node => node.childNodes, node => {
        if (node.rawTagName === 'a') {
            result.push(node.toString());
        }
    })

    return result;
}