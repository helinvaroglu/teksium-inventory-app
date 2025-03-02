import styles from './page.module.css';

export default function Home() {
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
      </div>
    </div>
  );
}
