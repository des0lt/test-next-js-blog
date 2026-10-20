import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src="/images/tesla.jpeg" width={200} height={150} alt="Tesla" />
      <h1>My Blog</h1>

      <Link href="/">Homepage</Link>
      <Link href="/posts/first-post">1-st Post</Link>
    </div>
  );
}
