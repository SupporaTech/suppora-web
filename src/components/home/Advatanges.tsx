'use client';

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from '@/data/ru/content.json';
import enContent from '@/data/en/content.json';
import esContent from '@/data/es/content.json';
import '@/styles/components/home/advantages.scss';

const Advantages: React.FC = () => {
    const { language } = useLanguage();
    const contentData = language === 'ru' ? ruContent : language === 'en' ? enContent : esContent;
    const { advantages: advantagesData } = contentData;
    const advantages = advantagesData.items;
    const stats = advantagesData.stats;

    return (
        <section id="advantages" className="advantages">
            <div className="container">
                <div className="section-title animate-fade-in-up">
                    <h2>{advantagesData.title}</h2>
                    <p>{advantagesData.subtitle}</p>
                </div>

                <div className="advantages-content">
                    <div className="advantages-grid">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className={`advantage-card animate-fade-in-up`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="advantage-number">{advantage.number}</div>
                                <div className="advantage-icon">
                                    <span className="icon-emoji">{advantage.icon}</span>
                                </div>
                                <div className="advantage-content">
                                    <h3>{advantage.title}</h3>
                                    <p>{advantage.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="advantages-stats animate-fade-in-up">
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="advantages-cta animate-fade-in-up">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h3>{advantagesData.cta.title}</h3>
                            <p>{advantagesData.cta.description}</p>
                            <div className="cta-actions">
                                <button className="btn btn-primary">
                                    {advantagesData.cta.primaryButton}
                                </button>
                                <button className="btn btn-secondary">{advantagesData.cta.secondaryButton}</button>
                            </div>
                        </div>
                        <div className="cta-visual">
                            <div className="chart-container">
                                <div className="chart-bar" style={{ height: "60%" }}>
                                    <span className="chart-label">{advantagesData.cta.chartLabels.before}</span>
                                </div>
                                <div className="chart-bar active" style={{ height: "40%" }}>
                                    <span className="chart-label">{advantagesData.cta.chartLabels.after}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;