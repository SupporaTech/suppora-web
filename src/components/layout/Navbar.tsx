"use client";

import React, { useState, useEffect } from "react";

import styles from "@/styles/components/layout/navbar.module.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className="container">
                <div className={styles.navbarContent}>
                    <div className={styles.logo}>
                        <span className={styles.logoText}>SUPPORA</span>
                        <span className={styles.logoDot}></span>
                    </div>

                    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
                        <ul className={styles.navList}>
                            <li>
                                <Link href="#home" onClick={() => scrollToSection("home")}>
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <a href="#about" onClick={() => scrollToSection("about")}>
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={() => scrollToSection("services")}>
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#advantages"
                                    onClick={() => scrollToSection("advantages")}
                                >
                                    Преимущества
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    onClick={() => scrollToSection("testimonials")}
                                >
                                    Отзывы
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => scrollToSection("contact")}>
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.navbarActions}>
                        <button
                            className="btn btnPrimary"
                            onClick={() => scrollToSection("contact")}
                        >
                            Получить консультацию
                        </button>

                        <button
                            className={styles.mobileMenuToggle}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;