import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Маркетинговое Агенство Розовый Слон</title>
        <meta name="description" content="Маркетинговое Агенство Розовый Слон" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Маркетинговое Агенство <br></br>Розовый Слон
        </h1>

        <p className={styles.description}>
          Самые быстрые и качественные маркетинговые работы
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Контент</h2>
            <p>Подготовка текста, изображений и видео материалов</p>
          </a>

          <a className={styles.card}>
            <h2>Таргетинг</h2>
            <p>Настройка таргетинга на любую аудиторию</p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Исследования</h2>
            <p>Проведем маркетинговое исследование вашего рынка</p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Рассылки</h2>
            <p>
              Настроим для вас эффективный емейл-маркетинг
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Украина, г.Киев, ул. Автозаводская 54\19, офис 64 <br></br>
        т. +380992918777 <br></br>
        Маркетинговое Агенство Розовый Слон <br></br>
      </footer>
    </div>
  )
}
