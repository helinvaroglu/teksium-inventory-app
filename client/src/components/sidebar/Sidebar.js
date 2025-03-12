"use client";

import styles from "./sidebar.module.css";

export default function Sidebar({ onClose }) {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/productPage">Product</a></li>
            </ul>
        </div>
    );
}
