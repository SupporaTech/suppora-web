'use client';

import React, { useState } from "react";
import { ClockClockwiseLogo, LightningLogo, UsersLogo, StarLogo, UserLogo } from "@/components/icons";

import '@/styles/components/home/testimonials.scss';

const Testimonials: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Александр Петров",
            position: "CEO, TechCorp",
            company: "Технологическая компания",
            avatar: <UserLogo size={48} color="#E7E7E7" />,
            rating: 5,
            text: "SUPPORA помогла нам снизить операционные расходы на 35% и значительно повысить качество клиентского сервиса. Профессиональная команда и отличные результаты.",
            results: [
                "-60% времени на HR",
                "+40% эффективность",
                "100% соответствие стандартам",
            ],
        },
        {
            name: "Мария Сидорова",
            position: "Директор по развитию, RetailPlus",
            company: "Розничная сеть",
            avatar: <UserLogo size={48} color="#E7E7E7" />,
            rating: 5,
            text: "Благодаря аутсорсингу HR-процессов мы смогли сосредоточиться на стратегическом развитии. SUPPORA обеспечивает высокое качество и надежность.",
            results: [
                "-60% времени на HR",
                "+40% эффективность",
                "100% соответствие стандартам",
            ],
        },
        {
            name: "Дмитрий Козлов",
            position: "Финансовый директор, FinanceGroup",
            company: "Финансовая группа",
            avatar: <UserLogo size={48} color="#E7E7E7" />,
            rating: 5,
            text: "Отличная работа с финансовыми процессами. Автоматизация и оптимизация помогли нам сократить время обработки документов в 3 раза.",
            results: [
                "-70% время обработки",
                "+90% точность",
                "Полная автоматизация",
            ],
        },
    ];

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
                    <h2>Отзывы наших клиентов</h2>
                    <p>
                        Более 500 компаний доверяют нам оптимизацию своих бизнес-процессов
                    </p>
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
                                <h4>Достигнутые результаты:</h4>
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
                            aria-label="Previous testimonial"
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
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            className="control-btn next"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
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
                        <div className="stat-item">
                            <div className="stat-icon"><StarLogo size={48} color="#6532ff" /></div>
                            <div className="stat-content">
                                <div className="stat-value">82%</div>
                                <div className="stat-label">Оценка удовлетворенности</div>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon"><UsersLogo size={48} color="#6532ff"/></div>
                            <div className="stat-content">
                                <div className="stat-value">10+</div>
                                <div className="stat-label">Довольных клиентов</div>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon"><ClockClockwiseLogo size={48} color="#6532ff" /></div>
                            <div className="stat-content">
                                <div className="stat-value">5 min</div>
                                <div className="stat-label">Среднее время ответа</div>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon"><LightningLogo size={48} color="#6532ff" /></div>
                            <div className="stat-content">
                                <div className="stat-value">91%</div>
                                <div className="stat-label">Соответсвие SLA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;