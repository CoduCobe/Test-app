import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to the whopper pedia
        </h1>
        
        
      

        <p className={styles.description}>
         <code></code>
        </p>
      </main>

      <a href="/" className={styles.card}>
            <h3>Back to Start Menu &rarr;</h3>
            <p>Returns any activators of this button to the original Start Menu</p>
          </a>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
</div>
  )
}