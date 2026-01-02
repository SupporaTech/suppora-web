'use client';

import React, { useState } from "react";
import { ClockClockwiseLogo, LightingLogo, UsersLogo, StarLogo, UserLogo } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import ruContent from '@/data/ru/content.json';
import enContent from '@/data/en/content.json';

import '@/styles/components/home/testimonials.scss';

const Testimonials: React.FC = () => {
    const { language } = useLanguage();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const contentData = language === 'ru' ? ruContent : enContent;
    const { testimonials: testimonialsData } = contentData;

    const testimonials = testimonialsData.items.map((item) => ({
        ...item,
        avatar: <UserLogo size={48} color="#E7E7E7" />,
    }));

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-title animate-fade-in-up">
                    <h2>{testimonialsData.title}</h2>
                    <p>{testimonialsData.subtitle}</p>
                </div>

                <div className="testimonials-content">
                    <div className="testimonial-card animate-fade-in-up">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">
                <span className="avatar-emoji">
                  {testimonials[currentTestimonial].avatar}
                </span>
                            </div>
                            <div className="testimonial-info">
                                <h3>{testimonials[currentTestimonial].name}</h3>
                                <p className="position">
                                    {testimonials[currentTestimonial].position}
                                </p>
                                <p className="company">
                                    {testimonials[currentTestimonial].company}
                                </p>
                                <div className="rating">
                                    {[...Array(testimonials[currentTestimonial].rating)].map(
                                        (_, i) => (
                                            <span key={i} className="star">
                        <StarLogo size={24} color="#E7E7E7" />
                      </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-content">
                            <blockquote>&#34;{testimonials[currentTestimonial].text}&#34;</blockquote>

                            <div className="testimonial-results">
                                <h4>{testimonialsData.resultsTitle}</h4>
                                <div className="results-grid">
                                    {testimonials[currentTestimonial].results.map(
                                        (result, index) => (
                                            <div key={index} className="result-item">
                                                <span className="result-icon">✓</span>
                                                <span className="result-text">{result}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-controls">
                        <button
                            className="control-btn prev"
                            onClick={prevTestimonial}
                            aria-label={testimonialsData.ariaLabels.previous}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M15 18L9 12L15 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${
                                        index === currentTestimonial ? "active" : ""
                                    }`}
                                    onClick={() => setCurrentTestimonial(index)}
                                    aria-label={`${testimonialsData.ariaLabels.goTo} ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            className="control-btn next"
                            onClick={nextTestimonial}
                            aria-label={testimonialsData.ariaLabels.next}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="testimonials-stats animate-fade-in-up">
                    <div className="stats-grid">
                        {testimonialsData.stats.map((stat, index) => {
                            const icons = [
                                <StarLogo key="star" size={48} color="#6532ff" />,
                                <UsersLogo key="users" size={48} color="#6532ff" />,
                                <ClockClockwiseLogo key="clock" size={48} color="#6532ff" />,
                                <LightingLogo key="lighting" size={48} color="#6532ff" />

                            ];
                            return (
                                <div key={index} className="stat-item">
                                    <div className="stat-icon">{icons[index]}</div>
                                    <div className="stat-content">
                                        <div className="stat-value">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;