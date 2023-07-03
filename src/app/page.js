import styles from './page.module.css';
import Navbar from './components/Navbar/Navbar';
import DepartmentCards from './components/DepartmentCards/DepartmentCards';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex-row">
        <Navbar></Navbar>
        <DepartmentCards/>
      </div>
    </main>
  )
}
