import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Organism/Navbar'
import Sidebar from './Components/Organism/Sidebar'
import InputSection from './Components/Organism/InputSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Sidebar />
      <InputSection />
    </main>
  )
}
