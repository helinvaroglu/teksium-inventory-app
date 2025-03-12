"use client";

import { useState } from "react";
import Link from 'next/link';
import SidebarIcon from "../../../public/Sidebar.svg";
import BarcodeIcon from "../../../public/Barcode.svg";
import Sidebar from "../sidebar/Sidebar";
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css'; 

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className={styles.navbar}>
            <button onClick={toggleSidebar} className={styles.sidebarButton}>
                <img src="/Sidebar.svg" alt="SidebarIcon" width={35} height={35} />
            </button>

            <h2>Page Name</h2>

            <button className={styles.barcodeButton}>
                <img src="/Barcode.svg" alt="BarcodeIcon" width={35} height={35} />
            </button>

            {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
        </nav>
    );
}
