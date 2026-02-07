'use client';

import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { EnvelopeSimple, PhoneLogo, TelegramLogo, CheckCircleLogo } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from "@/data/ru/content.json";
import enContent from "@/data/en/content.json";
import esContent from "@/data/es/content.json";

import '@/styles/components/home/contact.scss';

const FORMSPREE_ENDPOINT = "mlgwennn";

interface ContactFormProps {
    content: typeof enContent.contact;
    onSuccess: () => void;
}

const LOG_PREFIX = "[ContactForm]";

const ContactForm: React.FC<ContactFormProps> = ({ content, onSuccess }) => {
    const [state, handleSubmit] = useForm(FORMSPREE_ENDPOINT);

    useEffect(() => {
        console.log(`${LOG_PREFIX} Mount/remount — endpoint: ${FORMSPREE_ENDPOINT}`);
    }, []);

    useEffect(() => {
        console.log(`${LOG_PREFIX} State changed:`, {
            submitting: state.submitting,
            succeeded: state.succeeded,
            errors: state.errors,
        });
        if (state.errors) {
            console.error(`${LOG_PREFIX} Formspree errors:`, state.errors);
        }
    }, [state.submitting, state.succeeded, state.errors]);

    useEffect(() => {
        if (state.succeeded) {
            console.log(`${LOG_PREFIX} Success — scheduling reset in 3s`);
            const timer = setTimeout(() => {
                console.log(`${LOG_PREFIX} Calling onSuccess (remount)`);
                onSuccess();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded, onSuccess]);

    const wrappedHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(`${LOG_PREFIX} Submit triggered`);
        handleSubmit(e);
    };

    if (state.succeeded) {
        return (
            <div className="form-success">
                <div className="success-icon">
                    <CheckCircleLogo size={48} color="currentColor" />
                </div>
                <h4>{content.form.success.title}</h4>
                <p>{content.form.success.message}</p>
            </div>
        );
    }

    return (
        <form onSubmit={wrappedHandleSubmit} className="contact-form">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name">{content.form.name}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
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
                        required
                        placeholder={content.form.emailPlaceholder}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="company">{content.form.company}</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder={content.form.companyPlaceholder}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">{content.form.phone}</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={content.form.phonePlaceholder}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message">{content.form.message}</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={content.form.messagePlaceholder}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" />
            </div>

            <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={state.submitting}
            >
                {state.submitting ? content.form.submitting : content.form.submit}
            </button>
        </form>
    );
};

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const contentData = language === 'ru' ? ruContent : language === 'en' ? enContent : esContent;
    const content = contentData.contact;

    const [formKey, setFormKey] = useState(0);

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
                                        {info.icon}
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

                            <ContactForm
                                key={formKey}
                                content={content}
                                onSuccess={() => setFormKey((k) => k + 1)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;