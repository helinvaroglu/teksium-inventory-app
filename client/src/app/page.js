import styles from './page.module.css';

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
      <h1 className={styles.mainHeader}>Kartex</h1>
    </div>
  );
}
