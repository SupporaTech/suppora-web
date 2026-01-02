'use client';

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from '@/data/ru/content.json';
import enContent from '@/data/en/content.json';
import esContent from '@/data/es/content.json';

import '@/styles/components/home/about.scss';
import { CheckCircleLogo, LightningLogo, StarLogo } from "@/components/icons";

const About: React.FC = () => {
    const { language } = useLanguage();
    const contentData = language === 'ru' ? ruContent : language === 'en' ? enContent : esContent;
    const { about } = contentData;

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title animate-fade-in-up">
                    <h2>{about.title}</h2>
                    <p>{about.subtitle}</p>
                </div>

                <div className="about-content">
                    <div className="about-text animate-fade-in-left">
                        <div className="about-features">
                            {about.features.map((feature, index) => (
                                <div key={index} className="feature">
                                    <div className="feature-icon">
                                        {index === 0 && (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="feature-content">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-visual animate-fade-in-right">
                        <div className="about-card">
                            <div className="card-header">
                                <h3>{about.mission.title}</h3>
                            </div>
                            <div className="card-content">
                                <p>{about.mission.description}</p>
                                <div className="mission-stats">
                                    {about.mission.stats.map((stat, index) => (
                                        <div key={index} className="mission-stat">
                                            <span className="stat-number">{stat.number}</span>
                                            <span className="stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="values-wrapper">
                <div className="values animate-fade-in-up">
                    <div className="values-content">
                        <h4>{about.values.title}</h4>
                        <ul>
                            {about.values.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;