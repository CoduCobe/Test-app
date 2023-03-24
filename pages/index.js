import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whopper Website</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.youtube.com/watch?v=2vM_F0XCYgg">Whopper Website!</a>
        </h1>
        

        <p className={styles.description}>
         <code></code>
        </p>
<img className={styles.title} src="https://bk-emea-prd.s3.amazonaws.com/sites/burgerking.no/files/BB_DOUBLEWHOPPERWCHEESE-v1_detail.png"></img>
        
        <div className={styles.grid}>
          <a href="/video" className={styles.card}>
            <h3>Free whopper roll &rarr;</h3>
            <p>Find in-depth information about Whoppers.</p>
          </a>


          <a
           href="/wikipedia" className={styles.card}>
            <h3>The history of the Whopper &rarr;</h3>
            <p>Learn about the history of the fabolous whopper!</p>
          </a>
          <a

            href="/login"
            className={styles.card}
          >
            <h3>Credits list &rarr;</h3>
            <p>People who helped make this Website</p>
          </a>

          <a
            href="/Deploy"
            className={styles.card}
          > 
            <h3>Deploy whopper &rarr;</h3>
            <p>
              Instantly deploy the battle bus with 5 beautiful free whoppers.
            </p>
          </a>
        </div>
      </main>

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