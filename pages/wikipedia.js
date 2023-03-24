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
          Welcome to the whopper pedia
        </h1>
        

        <p className={styles.description}>
         <code></code>
        </p>
<img className={styles.title} src="https://bk-emea-prd.s3.amazonaws.com/sites/burgerking.no/files/BB_DOUBLEWHOPPERWCHEESE-v1_detail.png"></img>
        <div className={styles.grid
}>
          <a className={styles.card2}>
            <h3>History of the Whopper &rarr;</h3>
            <p>The Whopper was created in 1957 by Burger King co-founder James McLamore and originally sold for 37 US cents[1][2][3][4] (equivalent to US$3.57 in 2021).[5] McLamore created the burger after he noticed that a rival restaurant in Gainesville, Florida was succeeding by selling a larger burger.[6] Believing that the success of the rival product was its size, he devised the Whopper, naming it so because he thought it conveyed "imagery of something big".[7] Major fast food chains did not release a similar product, until the McDonald's Quarter Pounder and the Burger Chef Big Shef in the early 1970s.[7][8][9]

Initially, the sandwich was made with a plain bun; however, that changed when the company switched to a sesame-seeded bun around 1970.[10] In 1985, the weight of the Whopper was increased to 4.2 oz (120 g), while the bun was replaced by a Kaiser roll.[11] This was part of a program to improve the product and was accompanied by a US$30 million[4] (US$76 million in 2021)[5] advertising campaign featuring various celebrities such as Mr. T and Loretta Swit.[12] The goal of the program was to help differentiate the company and its products from those of its competitors.[13] The Whopper reverted to its previous size in 1987 when a new management team took over the company and reverted many of the changes initiated prior to 1985.[14] In 1994, the Whopper sandwich's Kaiser roll reverted to a sesame seed bun, eliminating the last trace of the sandwich's 1985 reconfiguration.

The packaging has undergone many changes since its inception. Unlike McDonald's, the company never used the clamshell style box made of Styrofoam, so when the environmental concerns over Styrofoam came to a head in the late-1980s, the company was able to tout its use of paperboard boxes for its sandwiches.[15] To cut back on the amount of paper that the company used, the paperboard box was fully eliminated in 1991 and was replaced with waxed paper.[16] For a short time in 2002, the company used a gold-toned, aluminum foil wrapping for the sandwich as part of the 45th anniversary of the sandwich.[17] The packaging was changed again in 2012 when the company moved to half wrapped sandwich packaged in a paperboard box, marking a return to the paperboard box for its packaging since 1991.[18]

The Whopper Jr. was created, by accident, in 1963 by Luis Arenas-Pérez (a.k.a. Luis Arenas), the only Latino in the Burger King Hall of Fame and president and CEO of Burger King in Puerto Rico.[19] Upon the opening of the first Burger King restaurant in Carolina, Puerto Rico, the molds for the (standard) Whopper buns had not yet arrived to Puerto Rico from the United States mainland and thus there were no buns to make and sell the company's flagship Whopper offering. Arenas opted for honoring the advertised opening date but using the much smaller regular hamburger buns locally available. The result was such a success that Burger King adopted it worldwide and called it the Whopper Jr.[19]

In 2020, as part of a global advertising campaign showing the company's commitment to dropping all artificial preservatives, Burger King ran the "Moldy Whopper" ad showing a Whopper decomposing and rotting over a period of 34 days. The Moldy Whopper campaign reached a level of awareness 50 percent higher than Burger King's ad in the 2019 Super Bowl.</p>
          </a>
        </div>
      </main>

      <a href="/" className={styles.return}>
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