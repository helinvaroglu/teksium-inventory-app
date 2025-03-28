"use client";

import { useEffect, useRef } from "react";
import styles from "./sidebar.module.css";

export default function Sidebar({ onClose }) {

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
                <li><a href="/desenler">Desenler</a></li>
                <li><a href="/varyantlar">Varyantlar</a></li>
                <li><a href="/firmalar">Firmalar</a></li>
                <li><a href="/gonderal">Gönder/Al/Sil</a></li>
                <li><a href="/cikis">Çıkış</a></li>
            </ul>
        </div>
    );
}
