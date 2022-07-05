import {tree_traverse} from './tree_traverse.mjs';
import axios from "axios";
import {parse} from "node-html-parser";
import {tree_traverse} from "./tree_traverse.mjs";
export async function web_search(query) {
  let get = await axios.get("https://duckduckgo.com/?q=" + query);
  let parsed = parse(get.data);
  let result = [];
  await tree_traverse(parsed, node => node.childNodes, node => {
    if (node.rawTagName === "a") {
      result.push(node.toString());
    }
  });
  return parsed.toString();
}
