import HomePage from './home/page'
import styles from './page.module.scss'

export const metadata = {
  title: 'Minh Phuong',
}

export default function Home() {
  return (
    <main className={styles.page}>
      <HomePage />
    </main>
  )
}
