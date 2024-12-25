import Booklist from "./booklist";
import Header from "./header";
import styles from "./books.module.css";

export default function Books() {

  return (
    <>
      <main className={styles.main}>
        <Header title="My favorite books."/>
        <section>
          <Booklist />
        </section>
      </main>
    </>
  );
}


