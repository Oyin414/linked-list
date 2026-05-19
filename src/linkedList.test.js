import { LinkedList } from "./linkedList";

const linkList = new LinkedList();

test("append method to add a node to end of the list", () => {
  linkList.append("dog");
  expect(linkList.contains("dog")).toBe(true);
  expect(linkList.findIndex("dog")).toBe(0);
});

test("append method by adding multiple node items and making sure nodes are added to the end", () => {
  linkList.append("cat");
  linkList.append("parrot");
  linkList.append("snake");
  expect(linkList.contains("snake")).toBe(true);
  expect(linkList.findIndex("snake")).toBe(3);
});

test("pop method by removing head node from list and it's value should be returned", () => {
  expect(linkList.pop()).toBe("dog");
  expect(linkList.contains("dog")).toBe(false);
});

test("prepend method by adding a new head node to the list", () => {
  linkList.prepend("dog");
  expect(linkList.findIndex("dog")).toBe(0);
  expect(linkList.contains("dog")).toBe(true);
});

test("toString method to make sure the format returned is correct", () => {
  console.log(linkList.toString());
  expect(linkList.toString()).toBe(
    "( dog ) -> ( cat ) -> ( parrot ) -> ( snake ) ->  null ",
  );
});

test("findIndex value returns -1 if value doesn't exist", () => {
  expect(linkList.findIndex("dogs")).toBe(-1);
  expect(linkList.contains("dogs")).toBe(false);
});
