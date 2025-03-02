import styles from './page.module.css';

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
      <h1 className="text-white text-5xl">E-Kartela</h1>
    </div>
  );
}
