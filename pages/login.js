import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to the whopper pedi ㅤㅤㅤㅤCREDITSㅤㅤSalah:20%ㅤㅤJakob:17%
        </h1>
        

        <p className={styles.description}>
         <code></code>
        </p>
      </main>

      <a href="/" className={styles.return}>
            <h3>Back to Start Menu &rarr;</h3>
            <p>Returns any activators of this button to the original Start Menu</p>
          </a>

     
</div>
  )
}