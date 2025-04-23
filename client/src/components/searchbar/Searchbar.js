"use client";

import styles from './searchbar.module.css'; 


export default function Searchbar() {
    // TODO: searchbar functionality ekle

    return (
       <div className={styles.searchbar}>
            <div className={styles.textinput}>
                <img className={styles.image} src="/Search.svg" alt="SearchIcon" width={25} height={25} />
                <input className={styles.input} type="text" placeholder="Ara..." /> 
            </div>
       </div>
    );
}