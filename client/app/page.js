import styles from './page.module.css'
import TextInput from './components/atoms/TextInput';

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello world</p>
      <TextInput variant="newPost" />
    </main>
  )
}
