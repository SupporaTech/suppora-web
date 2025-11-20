'use client';

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from "@/data/ru/content.json";
import enContent from "@/data/en/content.json";

import '@/styles/components/home/services.scss';

const Services: React.FC = () => {
    const { language } = useLanguage();
    const contentData = language === 'ru' ? ruContent : enContent;
    const content = contentData.services;
    const services = content.items;

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title animate-fade-in-up">
                    <h2>{content.title}</h2>
                    <p>{content.subtitle}</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card animate-fade-in-up`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon">
                                <span className="icon-emoji">{service.icon}</span>
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="service-footer">
                                <button className="btn btn-secondary">{content.button}</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-cta animate-fade-in-up">
                    <div className="cta-content">
                        <h3>{content.cta.title}</h3>
                        <p>{content.cta.description}</p>
                        <button className="btn btn-primary">{content.cta.button}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;