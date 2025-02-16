// HomePage.js
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./HomePage.css";
import Chart from "chart.js/auto";

const HomePage = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstanceRef.current = new Chart(ctx, {
        type: "radar",
        data: {
          labels: ["Pronunciación", "Gramática", "Vocabulario", "Fluidez"],
          datasets: [
            {
              label: "Nivel de Chino",
              data: [82, 75, 68, 50],
              backgroundColor: "rgba(236, 182, 98, 0.15)",
              borderColor: "#ECB662",
              pointBackgroundColor: "#C41E3A",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "#C41E3A",
            },
          ],
        },
        options: {
          scales: {
            r: {
              angleLines: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              pointLabels: {
                color: "#EDC967",
                font: {
                  size: 14,
                  family: "Inter",
                },
              },
              ticks: {
                color: "#EDC967",
                backdropColor: "transparent",
                stepSize: 20,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="deep-laoshi-homepage">
      {/* Header */}
      <header className="header-nav">
        <div className="logo">DeepLaoshi</div>
        <button className="login-button">Iniciar Sesión</button>
      </header>

      {/* Quick Stats Section */}
      <section className="quick-stats">
        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>La Realidad del Chino en Perú</h2>
          <div className="stat-cards">
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>78%</h3>
              <p>de los estudiantes abandona el idioma antes del 3er año</p>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>15,000</h3>
              <p>profesionales bilingües requeridos para el 2026</p>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>+40%</h3>
              <p>menos tiempo para dominar el idioma con IA</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* AI Tutor Section */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="tutor-container">
            <div className="tutor-info">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Practica con tu AI Tutor Personal
              </motion.h2>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Conversaciones reales en chino sobre negocios y cultura
              </motion.p>
              <motion.ul 
                className="feature-list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li>Feedback instantáneo de pronunciación y gramática</li>
                <li>Escenarios de negociación y reuniones</li>
                <li>Adaptación dinámica a tu nivel</li>
              </motion.ul>
              <motion.button 
                className="start-conversation-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Iniciar Conversación
                <span className="arrow">→</span>
              </motion.button>
            </div>
            <motion.div 
              className="tutor-avatar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="avatar-placeholder">AI Tutor</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Learning Tools Section */}
      <section className="features-section">
        <motion.div
          className="features-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Herramientas de Aprendizaje
          </motion.h2>
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="18" rx="2"/>
                  <path d="M7 7h10"/>
                  <path d="M7 12h10"/>
                  <path d="M7 17h4"/>
                </svg>
              </div>
              <h3>Flashcards Inteligentes</h3>
              <p>Sistema SM-15 con enfoque en radicales semánticos</p>
            </motion.div>
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                  <path d="M8 7h8"/>
                  <path d="M8 11h8"/>
                  <path d="M8 15h5"/>
                </svg>
              </div>
              <h3>Vocabulario HSK</h3>
              <p>Contenido oficial HSK1-6 optimizado para hispanohablantes</p>
            </motion.div>
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2v4"/>
                  <path d="M12 18v4"/>
                  <path d="m4.93 4.93 2.83 2.83"/>
                  <path d="m16.24 16.24 2.83 2.83"/>
                  <path d="M2 12h4"/>
                  <path d="M18 12h4"/>
                </svg>
              </div>
              <h3>Práctica Específica</h3>
              <p>Vocabulario técnico verificado por expertos</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <motion.div
          className="steps-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Comienza Hoy
          </motion.h2>
          <div className="steps">
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              1. Regístrate y obtén tu diagnóstico
            </motion.div>
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              2. Elige tu industria de interés
            </motion.div>
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              3. Comienza a practicar
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;

