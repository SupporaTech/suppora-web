'use client';

import React, { useState } from "react";
import { EnvelopeSimple, PhoneLogo, TelegramLogo } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from "@/data/ru/content.json";
import enContent from "@/data/en/content.json";

import '@/styles/components/home/contact.scss';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const contentData = language === 'ru' ? ruContent : enContent;
    const content = contentData.contact;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: "",
            });
        }, 3000);
    };

    const contactInfo = content.methods.map((method, index) => {
        const icons = [
            <EnvelopeSimple key="envelope" size={32} color="#E7E7E7" />,
            <PhoneLogo key="phone" size={32} color="#E7E7E7" />,
            <TelegramLogo key="telegram" size={32} color="#E7E7E7" />
        ];
        return {
            ...method,
            icon: icons[index],
        };
    });

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title animate-fade-in-up">
                    <h2>{content.title}</h2>
                    <p>{content.subtitle}</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info animate-fade-in-left">
                        <h3>{content.info.title}</h3>
                        <p>{content.info.description}</p>

                        <div className="contact-methods">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-method">
                                    <div className="method-icon">
                                        <span className="icon-emoji">{info.icon}</span>
                                    </div>
                                    <div className="method-content">
                                        <h4>{info.title}</h4>
                                        <p className="method-value">{info.value}</p>
                                        <p className="method-description">{info.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-container animate-fade-in-right">
                        <div className="contact-form-card">
                            <div className="form-header">
                                <h3>{content.form.title}</h3>
                                <p>{content.form.subtitle}</p>
                            </div>

                            {isSubmitted ? (
                                <div className="form-success">
                                    <div className="success-icon">✓</div>
                                    <h4>{content.form.success.title}</h4>
                                    <p>{content.form.success.message}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">{content.form.name}</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder={content.form.namePlaceholder}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">{content.form.email}</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder={content.form.emailPlaceholder}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="company">{content.form.company}</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder={content.form.companyPlaceholder}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">{content.form.phone}</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder={content.form.phonePlaceholder}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">{content.form.message}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            placeholder={content.form.messagePlaceholder}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary form-submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? content.form.submitting : content.form.submit}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;