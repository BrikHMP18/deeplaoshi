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
    <>
      {/* Fixed elements */}
      <div className="logo">DeepLaoshi</div>
      <button className="login-button">Login</button>

      {/* Main content */}
      <div className="deep-laoshi-homepage">
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
                <h3>62%</h3>
                <p>de estudiantes abandona el idioma por falta de práctica real</p>
              </motion.div>
              <motion.div 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>9,200+</h3>
                <p>profesionales con mandarín requeridos para 2026 en logística</p>
              </motion.div>
              <motion.div 
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3>35%</h3>
                <p>prima salarial en industrias clave para dominio del chino</p>
              </motion.div>
            </div>
            <motion.p 
              className="stats-highlight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              "El Puerto de Chancay será el hub logístico sino-sudamericano más importante, atrayendo 120 empresas chinas para 2025"
            </motion.p>
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
                  <li>Feedback instantáneo de pronunciación, gramática y entonación</li>
                  <li>Escenarios de negociación y reuniones</li>
                  <li>Adaptación dinámica a tu nivel (desde HSK-1 hasta HSK-5)</li>
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
                <p>Sistema SM-15 modificado con enfoque en radicales semánticos para un 30% menos de memorización</p>
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
                <p>Contenido oficial HSK1-6 optimizado para hispanohablantes con énfasis en tonos</p>
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
                <p>Vocabulario técnico verificado por la Cámara de Comercio Sino-Peruana</p>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="step-number">1</div>
                <div className="step-content">Regístrate y obtén tu diagnóstico de nivel</div>
              </motion.div>
              <motion.div
                className="step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="step-number">2</div>
                <div className="step-content">Elige tu industria o carrera de interés</div>
              </motion.div>
              <motion.div
                className="step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="step-number">3</div>
                <div className="step-content">Conversa y genera tus quizzes personalizados</div>
              </motion.div>
            </div>
            <motion.div
              className="final-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>Aprende Mandarín. Acelera tu Carrera.</h3>
              <button className="cta-button">
                ¡Crea tu cuenta y empieza a conversar con DeepLaoshi!
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Quiz Section */}
        <section className="quiz-section">
          <motion.div
            className="quiz-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Quizzes Personalizados</h2>
            <div className="quiz-features-grid">
              <motion.div 
                className="quiz-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>Basados en tus Conversaciones</h3>
                <p>Ejercicios generados a partir de tus interacciones con el AI Tutor</p>
              </motion.div>
              <motion.div 
                className="quiz-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3>Simulaciones Interculturales</h3>
                <p>Enfocadas en logística, minería y comercio exterior</p>
              </motion.div>
              <motion.div 
                className="quiz-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                    <path d="M17 6h6v6"/>
                  </svg>
                </div>
                <h3>Autoevaluación con IA</h3>
                <p>Reduce en 40% tu tiempo de aprendizaje</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Assessment Section */}
        <section className="assessment-section">
          <motion.div
            className="assessment-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Conoce tu Nivel Real</h2>
            <div className="assessment-features">
              <motion.div 
                className="assessment-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3>Pruebas Adaptativas</h3>
                <p>Evaluaciones orales y escritas que se ajustan a tu nivel</p>
              </motion.div>
              <motion.div 
                className="assessment-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>Análisis Predictivo</h3>
                <p>Incluye comprensión auditiva y lectura de caracteres</p>
              </motion.div>
              <motion.div 
                className="assessment-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3>Certificación HSK</h3>
                <p>Alineada a exámenes oficiales</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Why Section */}
        <section className="why-section">
          <motion.div
            className="why-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>¿Por Qué DeepLaoshi?</h2>
            <div className="why-features">
              <motion.div 
                className="why-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3>IA Conversacional</h3>
                <p>Análisis de voz y emociones con WER de 11.2% para acentos latinos</p>
              </motion.div>
              <motion.div 
                className="why-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>Enfoque Sectorial</h3>
                <p>Contenido especializado en minería, logística y comercio exterior</p>
              </motion.div>
              <motion.div 
                className="why-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3>Método Probado</h3>
                <p>85% práctica oral con retroalimentación instantánea</p>
              </motion.div>
            </div>
            <motion.div 
              className="testimonial"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              "Más de 300 empresas chinas ya operan en Perú, y al 2025 se prevé la llegada de 120 adicionales al Puerto de Chancay. DeepLaoshi te acerca a esas oportunidades."
            </motion.div>
          </motion.div>
        </section>

        {/* Future Section */}
        <section className="future-section">
          <motion.div
            className="future-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Prepárate para el Futuro</h2>
            <div className="future-stats">
              <motion.div 
                className="future-stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3>40%</h3>
                <p>del comercio sino-sudamericano pasará por el Puerto de Chancay</p>
              </motion.div>
              <motion.div 
                className="future-stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>120+</h3>
                <p>nuevas empresas chinas estableciéndose para 2025</p>
              </motion.div>
              <motion.div 
                className="future-stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3>30%</h3>
                <p>menos tiempo de aprendizaje vs métodos tradicionales</p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default HomePage;

