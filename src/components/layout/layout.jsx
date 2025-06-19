import styles from "./layout.module.css";
import { ProgressBar } from "../progress-bar/progress-bar.jsx";

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <ProgressBar />
      <header className={styles.header}>APP HEADER</header>
      <main>{children}</main>
      <footer className={styles.footer}>APP FOOTER</footer>
    </div>
  );
};
