"use client";
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const goToDesenlerPage = () => {
    router.push('/desenlerPage'); 
  };

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
      <h1 className={styles.mainHeader}>Kartex</h1>

      <div className={ styles.inputGroup }>
        <div className="input-group mb-3">
          <input type="text" className={`form-control ${styles.formControl}`} placeholder="Kullanıcı Adı" aria-label="Username"/>
        </div>

        <div className="input-group mb-3">
          <input type="text" className={`form-control ${styles.formControl}`} placeholder="Şifre" aria-label="Password" />
        </div>

        <div>
          <button className={`btn ${styles.submitButton}`} type="submit">Giriş</button>
        </div>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className={`btn ${styles.settingsButton}`}>Settings</button>
          <button type="button" className={`btn ${styles.demoButton}`} onClick={goToDesenlerPage}>Demo</button>
        </div>

      </div>
    </div>
  );
}
