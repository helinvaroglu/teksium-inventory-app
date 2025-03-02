"use client";
import { useEffect } from "react";

export default function BootstrapClient() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js"); // Dynamically load Bootstrap JS
    }, []);

    return null; // No UI, just loads Bootstrap JS
}
