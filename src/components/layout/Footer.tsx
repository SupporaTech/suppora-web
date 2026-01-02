'use client';

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from "@/data/ru/content.json";
import enContent from "@/data/en/content.json";
import esContent from "@/data/es/content.json";

import {
    EnvelopeSimple,
    LinkedInLogo,
    TelegramLogo,
    WhatsAppLogo,
} from "@/components/icons";

import '@/styles/components/layout/footer.scss';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const contentData = language === 'ru' ? ruContent : language === 'en' ? enContent : esContent;
    const content = contentData.footer;
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: content.companyLinks,
        services: content.serviceLinks,
        support: content.supportLinks,
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
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">SUPPORA</span>
                            <span className="logo-dot"></span>
                        </div>
                        <p className="footer-description">
                            {content.description}
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="social-link"
                                    aria-label={social.name}
                                >
                                    <span className="social-icon">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>{content.links.company}</h4>
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

                        <div className="link-group">
                            <h4>{content.links.services}</h4>
                            <ul>
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4>{content.links.support}</h4>
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

                    <div className="footer-contact">
                        <h4>{content.contact.title}</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <span>info@suppora.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span>+7 (495) 123-45-67</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>Москва, ул. Примерная, 123</span>
                            </div>
                        </div>

                        <div className="footer-cta">
                            <button
                                className="btn btn-primary"
                                onClick={() => scrollToSection("contact")}
                            >
                                {content.contact.consultation}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} SUPPORA. {content.copyright}
                        </p>
                        <div className="footer-legal">
                            <a href="#">{content.legal.privacy}</a>
                            <a href="#">{content.legal.terms}</a>
                            <a href="#">{content.legal.agreement}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;