'use client';

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from "@/data/ru/content.json";
import enContent from "@/data/en/content.json";

import '@/styles/components/home/hero.scss';

const Hero: React.FC = () => {
    const { language } = useLanguage();
    const contentData = language === 'ru' ? ruContent : enContent;
    const content = contentData.hero;

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                    <div className="shape shape-6"></div>
                </div>
                <div className="hero-lights">
                    <div className="light light-1"></div>
                    <div className="light light-2"></div>
                    <div className="light light-3"></div>
                </div>
                <div className="hero-grid"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text animate-fade-in-left">
                        <h1 className="hero-title">
                            {content.title}{" "}
                            <span className="gradient-text">SUPPORA</span>
                        </h1>
                        <p className="hero-subtitle">
                            {content.subtitle}
                        </p>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">{content.stats.clients}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">{content.stats.experience}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">40%</span>
                                <span className="stat-label">{content.stats.savings}</span>
                            </div>
                        </div>
                        <div className="hero-actions">
                            <button className="btn btn-primary" onClick={scrollToContact}>
                                {content.buttons.consultation}
                            </button>
                            <button className="btn btn-secondary">{content.buttons.presentation}</button>
                        </div>
                    </div>

                    <div className="hero-visual animate-fade-in-right">
                        <div className="hero-card">
                            <div className="card-header">
                                <div className="card-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h3>{content.dashboard.title}</h3>
                            </div>
                            <div className="card-content">
                                <div className="metric">
                                    <span className="metric-label">{content.dashboard.efficiency}</span>
                                    <span className="metric-value">+75%</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-label">{content.dashboard.savings}</span>
                                    <span className="metric-value">83%</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-label">{content.dashboard.processingTime}</span>
                                    <span className="metric-value">-65%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;