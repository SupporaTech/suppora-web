'use client';

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from "@/data/ru/content.json";
import enContent from "@/data/en/content.json";

import '@/styles/components/layout/navbar.scss';

const Header: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

    const contentData = language === 'ru' ? ruContent : enContent;
    const content = contentData.nav;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.language-selector')) {
                setIsLanguageMenuOpen(false);
            }
        };

        if (isLanguageMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLanguageMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <span className="logo-text">SUPPORA</span>
                        <span className="logo-dot"></span>
                    </div>

                    <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
                        <ul className="nav-list">
                            <li>
                                <a href="#home" onClick={() => scrollToSection("home")}>
                                    {content.home}
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={() => scrollToSection("about")}>
                                    {content.about}
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={() => scrollToSection("services")}>
                                    {content.services}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#advantages"
                                    onClick={() => scrollToSection("advantages")}
                                >
                                    {content.advantages}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    onClick={() => scrollToSection("testimonials")}
                                >
                                    {content.testimonials}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => scrollToSection("contact")}>
                                    {content.contact}
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <div className="language-selector">
                            <button
                                className="language-toggle"
                                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                                aria-label="Select language"
                            >
                                {language.toUpperCase()}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            {isLanguageMenuOpen && (
                                <div className="language-menu">
                                    <button
                                        className={`language-option ${language === 'ru' ? 'active' : ''}`}
                                        onClick={() => {
                                            setLanguage('ru');
                                            setIsLanguageMenuOpen(false);
                                        }}
                                    >
                                        RU
                                    </button>
                                    <button
                                        className={`language-option ${language === 'en' ? 'active' : ''}`}
                                        onClick={() => {
                                            setLanguage('en');
                                            setIsLanguageMenuOpen(false);
                                        }}
                                    >
                                        EN
                                    </button>
                                    <button
                                        className={`language-option ${language === 'es' ? 'active' : ''}`}
                                        onClick={() => {
                                            setLanguage('es');
                                            setIsLanguageMenuOpen(false);
                                        }}
                                    >
                                        ES
                                    </button>
                                </div>
                            )}
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection("contact")}
                        >
                            {content.consultation}
                        </button>

                        <button
                            className="mobile-menu-toggle"
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
        </header>
    );
};

export default Header;