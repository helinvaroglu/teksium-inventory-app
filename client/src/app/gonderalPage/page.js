"use client";
import styles from './page.module.css';
import { useRouter, usePathname } from 'next/navigation';
import Navbar from "../../components/navbar/Navbar";
import Searchbar from '../../components/searchbar/Searchbar';

export default function GonderAlPage() {
    return (
        <div className={`background ${styles.background}`}>
            <Navbar />
            <Searchbar />

        </div>
    );
}