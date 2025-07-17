"use client";

import { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import styles from "./sidebar.module.css";

export default function Sidebar({ onClose }) {
    const router = useRouter();
    const sidebarRef = useRef(null);    

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose(); // Triggering close
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={sidebarRef} className={styles.sidebar}>
            <br></br>
            
            <h1 className={styles.header}>Kartex</h1>

            <br></br>
            <hr className={`border-3 opacity-75 ${styles.seperator}`}></hr>
            <br></br>

            <ul className={styles.list}>
                <li onClick={() => router.push('/desenlerPage')}>Desenler</li>
                <li onClick={() => router.push('/varyantlarPage')}>Varyantlar</li>
                <li onClick={() => router.push('/firmalarPage')}>Firmalar</li>
                <li onClick={() => router.push('/gonderalPage')}>Gönder/Al/Sil</li>
                <li onClick={() => router.push('/')}>Çıkış</li>
            </ul>
        </div>
    );
}
