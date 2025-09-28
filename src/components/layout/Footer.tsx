"use client";

import React from "react";

import {
    TelegramLogo,
    WhatsAppLogo,
    LinkedInLogo,
    EnvelopeSimple
} from "@/components/icons";

import styles from "@/styles/components/layout/footer.module.scss";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: "О компании", href: "#about" },
            { name: "Услуги", href: "#services" },
            { name: "Преимущества", href: "#advantages" },
            { name: "Отзывы", href: "#testimonials" },
        ],
        services: [
            { name: "Клиентская поддержка", href: "#" },
            { name: "Обработка данных", href: "#" },
            { name: "Финансовые услуги", href: "#" },
            { name: "HR процессы", href: "#" },
        ],
        support: [
            { name: "Контакты", href: "#contact" },
            { name: "Техподдержка", href: "#" },
            { name: "Документация", href: "#" },
            { name: "FAQ", href: "#" },
        ],
    };

    const socialLinks = [
        {
            name: "Telegram",
            icon: <TelegramLogo size={32} color="#E7E7E7" />,
            href: "#",
        },
        {
            name: "WhatsApp",
            icon: <WhatsAppLogo size={32} color="#E7E7E7" />,
            href: "#",
        },
        {
            name: "LinkedIn",
            icon: <LinkedInLogo size={32} color="#E7E7E7" />,
            href: "#",
        },
        {
            name: "Email",
            icon: <EnvelopeSimple size={32} color="#E7E7E7" />,
            href: "mailto:info@suppora.com",
        },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogo}>
                            <span className={styles.logoText}>SUPPORA</span>
                            <span className={styles.logoDot}></span>
                        </div>
                        <p className={styles.footerDescription}>
                            Ваш надежный партнер в сфере BPO-услуг. Оптимизируем
                            бизнес-процессы для повышения эффективности и снижения затрат.
                        </p>
                        <div className={styles.footerSocial}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className={styles.socialLink}
                                    aria-label={social.name}
                                >
                                    <span className={styles.socialIcon}>{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.footerLinks}>
                        <div className={styles.linkGroup}>
                            <h4>Компания</h4>
                            <ul>
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(link.href.replace("#", ""));
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4>Услуги</h4>
                            <ul>
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4>Поддержка</h4>
                            <ul>
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => {
                                                if (link.href.startsWith("#")) {
                                                    e.preventDefault();
                                                    scrollToSection(link.href.replace("#", ""));
                                                }
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.linkGroup}>
                        <h4>Контакты</h4>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📧</span>
                                <span>info@suppora.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📞</span>
                                <span>+7 (495) 123-45-67</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📍</span>
                                <span>Москва, ул. Примерная, 123</span>
                            </div>
                        </div>

                        <div className={styles.footerCta}>
                            <button
                                className="btn btnPrimary"
                                onClick={() => scrollToSection("contact")}
                            >
                                Получить консультацию
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomContent}>
                        <p className={styles.copyright}>
                            © {currentYear} SUPPORA. Все права защищены.
                        </p>
                        <div className={styles.footerLegal}>
                            <a href="#">Политика конфиденциальности</a>
                            <a href="#">Условия использования</a>
                            <a href="#">Пользовательское соглашение</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;