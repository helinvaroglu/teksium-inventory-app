"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { useRouter, usePathname } from 'next/navigation';
import Navbar from "../../components/navbar/Navbar";
import Searchbar from '../../components/searchbar/Searchbar';

export default function DesenlerPage() {

    const [desenler, setDesenler] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/desenler') // TODO: Change with real API
            .then(res => res.json())
            .then(data => {
                setDesenler(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className={`background ${styles.background}`}>
            <Navbar />
            <Searchbar />

            {loading ? (
                <p>Yükleniyor...</p>
            ) : (
                <div >
                    {desenler.map(desen => (
                        <div key={desen.id} className={styles.productframe}>
                            <h2 className={styles.productheader}>{desen.name}</h2>
                            <p className={styles.productcode}>Kod: {desen.code}</p>
                            <p className={styles.productprice}>{desen.price}</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}