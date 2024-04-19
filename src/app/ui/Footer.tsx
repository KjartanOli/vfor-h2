import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.name}>© 2024 Kjartan Óli Ágústsson & Svana Björg Birgisdóttir.</p>
      </div>
    </footer>
  );
}
