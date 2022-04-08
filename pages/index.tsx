import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cyberpunk Battleship</title>
        <meta name="Cyberpunk Battleship" content="Cyberpunk Battleship Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.primaryHeader}>BATTLESHIP</h1>
          <h2 className={styles.secondaryHeader}>Cyberpunk Edition</h2>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>1 Player</button>
          <button className={styles.button}>2 Player</button>
          <button className={styles.button}>Online</button>
        </div>
      </main>
    </div>
  )
}