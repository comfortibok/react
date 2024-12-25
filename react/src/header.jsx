import styles from "./books.module.css";
export default function Header({ title }) {
  return (
    <header className={styles.title}>
      <h1>{title}</h1>
    </header>
  );
}
