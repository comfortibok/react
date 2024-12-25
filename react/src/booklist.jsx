import Book from "./book";

export default function Booklist() {
  const favBooks = [
    "Think and Grow Rich",
    "Things fall apart",
    "Gifted hands",
    "Think Big",
    "Half of a yellow sun",
    "Educated",
  ];
  return (
    <ul>
      {favBooks.map((item) => (
        <Book key={item} item={item}/>
      ))}
    </ul>
  );
}
