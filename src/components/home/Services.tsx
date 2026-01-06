'use client';

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from "@/data/ru/content.json";
import enContent from "@/data/en/content.json";
import esContent from "@/data/es/content.json";

import '@/styles/components/home/services.scss';
import { PhoneLogo, ChartBarLogo } from "@/components/icons";

// Маппинг иконок
const iconMap: Record<string, React.ComponentType<{ color: string; size: number }>> = {
    '📞': PhoneLogo,
    '📊': ChartBarLogo,
};

const Services: React.FC = () => {
    const { language } = useLanguage();
    const contentData = language === 'ru' ? ruContent : language === 'en' ? enContent : esContent;
    const content = contentData.services;
    const services = content.items;
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

    const toggleCard = (index: number) => {
        setExpandedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title animate-fade-in-up">
                    <h2>{content.title}</h2>
                    <p>{content.subtitle}</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
                        const isExpanded = expandedCards.has(index);
                        return (
                            <div
                                key={index}
                                className={`service-card animate-fade-in-up ${isExpanded ? 'expanded' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="service-icon">
                                    {IconComponent ? (
                                        <IconComponent color="currentColor" size={48} />
                                    ) : (
                                        <span className="icon-emoji">{service.icon}</span>
                                    )}
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <ul className="service-features">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>{feature}</li>
                                        ))}
                                    </ul>
                                    {isExpanded && service.expandedContent && (
                                        <div className="service-expanded-content">
                                            <p>{service.expandedContent}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="service-footer">
                                    <button 
                                        className="btn btn-secondary"
                                        onClick={() => toggleCard(index)}
                                    >
                                        {isExpanded ? (content.buttonCollapse || 'Show Less') : content.button}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
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