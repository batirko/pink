import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

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
        <Image src="/image.webp" height={300} width={300} />
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
        <div className={styles.end}>
          <Image src="/image2.webp" height={1001 * 0.4} width={1083 * 0.4} objectFit="contain" />
          <p>
            Украина, г.Киев, ул. Автозаводская 54\19, офис 64 <br></br>
        т. +380992918777 <br></br>
        Маркетинговое Агенство Розовый Слон <br></br>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2021 Маркетинговое Агенство Розовый Слон, All Rights Reserved
      </footer>
    </div>
  )
}
