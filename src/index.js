import "./styles.css";
import { LinkedList } from "./linkedList.js";

let linkList = new LinkedList();

linkList.append("dog");
linkList.append("cat");
linkList.append("parrot");
linkList.append("snake");
console.log(linkList.toString());
console.log(linkList.findIndex("squirrel"));
