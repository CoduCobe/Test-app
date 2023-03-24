import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.youtube.com/watch?v=2vM_F0XCYgg">the Whopper roll!</a>
        </h1>
        <iframe width="800" height="400" src="https://www.youtube.com/embed/9cPxh2DikIA?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <a href="/" className={styles.return}>
            <h3>Back to Start Menu &rarr;</h3>
            <p>Returns any activators of this button to the original Start Menu</p>
          </a>
          
        
        

</div>
  )
}