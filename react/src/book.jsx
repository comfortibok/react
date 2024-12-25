import styles from "./books.module.css";
export default function Book({ item }) {
  return <li className={styles.list}>{item}</li>;
}
