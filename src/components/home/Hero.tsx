"use client";

import React from "react";

import styles from "@/styles/components/home/hero.module.scss";

export default function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.heroBackground}>
                <div className={styles.heroGradient}></div>
                <div className={styles.heroParticles}>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                </div>
                <div className={styles.heroShapes}>
                    <div className={`${styles.shape} ${styles.shape1}`}></div>
                    <div className={`${styles.shape} ${styles.shape2}`}></div>
                    <div className={`${styles.shape} ${styles.shape3}`}></div>
                    <div className={`${styles.shape} ${styles.shape4}`}></div>
                    <div className={`${styles.shape} ${styles.shape5}`}></div>
                    <div className={`${styles.shape} ${styles.shape6}`}></div>
                </div>
                <div className={styles.heroLights}>
                    <div className={`${styles.light} ${styles.light1}`}></div>
                    <div className={`${styles.light} ${styles.light2}`}></div>
                    <div className={`${styles.light} ${styles.light3}`}></div>
                </div>
                <div className={styles.heroGrid}></div>
            </div>

            <div className="container">
                <div className={styles.heroContent}>
                    <div className={`${styles.heroText} animateFadeInLeft`}>
                        <h1 className={styles.heroText}>
                            Оптимизируйте бизнес-процессы с{" "}
                            <span className={styles.gradientText}>SUPPORA</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Профессиональные BPO-решения для повышения эффективности вашего
                            бизнеса. Снижаем операционные расходы до 30% и ускоряем развитие.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>500+</span>
                                <span className={styles.statLabel}>Довольных клиентов</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>Лет опыта</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>30%</span>
                                <span className={styles.statLabel}>Экономия затрат</span>
                            </div>
                        </div>
                        <div className={styles.heroActions}>
                            <button className="btn btnPrimary" onClick={() => scrollToContact}>
                                Получить консультацию
                            </button>
                            <button className="btn btnSecondary">Скачать презентацию</button>
                        </div>
                    </div>

                    <div className={`${styles.heroVisual} animateFadeInRight`}>
                        <div className={styles.heroCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardDots}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h3>SUPPORA Dashboard</h3>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.metric}>
                                    <span className={styles.metricLabel}>Эффективность</span>
                                    <span className={styles.metricValue}>+45%</span>
                                </div>
                                <div className={styles.metric}>
                                    <span className={styles.metricLabel}>Экономия</span>
                                    <span className={styles.metricValue}>$2.5M</span>
                                </div>
                                <div className={styles.metric}>
                                    <span className={styles.metricLabel}>Время обработки</span>
                                    <span className={styles.metricValue}>-60%</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};