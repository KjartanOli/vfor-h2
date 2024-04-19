import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          efficitur eget diam sit amet molestie. Curabitur et ligula at quam
          tempor suscipit at ac diam. Vivamus sollicitudin, nunc at convallis
          hendrerit, mauris mi interdum urna, et aliquet libero massa non risus.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="https://source.unsplash.com/random/800x600" // First random image from Unsplash
            alt="Random Unsplash Image"
            layout="responsive"
            width={800}
            height={600}
          />
          <Image
            src="https://source.unsplash.com/random/800x601" // Second random image from Unsplash, changed dimensions to ensure a new image
            alt="Another Random Unsplash Image"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
      </div>
    </main>
  );
}
