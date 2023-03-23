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
          Welcome to <a href="https://www.youtube.com/watch?v=2vM_F0XCYgg">Whopper website!</a>
        </h1>
        

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
<img className={styles.title} src="https://bk-emea-prd.s3.amazonaws.com/sites/burgerking.no/files/BB_DOUBLEWHOPPERWCHEESE-v1_detail.png"></img>
        <div className={styles.grid}>
          <a href="https://www.youtube.com/watch?v=9cPxh2DikIA" className={styles.card}>
            <h3>Free whopper roll &rarr;</h3>
            <p>Find in-depth information about Whoppers.</p>
          </a>

          <a href="https://en.wikipedia.org/wiki/Whopper" className={styles.card}>
            <h3>Learn about whopper &rarr;</h3>
            <p>Learn about the new faboulous whopper in town!</p>
          </a>
          <a
            href="https://www.burgerking.no/"
            className={styles.card}
          >
            <h3>Examples of whopper &rarr;</h3>
            <p>Discover new types of whoppers here</p>
          </a>

          <a
            href="https://twitter.com/TobyWBlack/status/1621317803079864320"
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