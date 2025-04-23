"use client";
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Navbar from "../../components/navbar/Navbar";
import Searchbar from '../../components/searchbar/Searchbar';

export default function DesenlerPage() {
    return (
        <div className={`background ${styles.background}`}>
            <Navbar />
            <Searchbar />

        </div>
    );
}