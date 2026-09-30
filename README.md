# 🚀 Kevin Soria | Portfolio Personal & Profesional

Sitio web interactivo y portfolio técnico desarrollado con **Angular** y **TypeScript**. La aplicación implementa arquitectura orientada a componentes independientes (*Standalone Components*), reactividad basada en **Signals**, control de flujo nativo (`@for`, `@if`) y un diseño estilizado *developer dark mode* con efectos de *glassmorphism* y animaciones fluidas en CSS3.

---

## 👨‍💻 Perfil del Desarrollador

- **Desarrollador:** Kevin Soria Olivar
- **Rol:** Full-Stack Developer Junior (Foco en Backend y arquitecturas modulares)
- **Ubicación:** Torrejón de Ardoz, Madrid
- **LinkedIn:** [kevin-soria-dev](https://www.linkedin.com/in/kevin-soria-dev)
- **GitHub:** [kevinsoria1](https://github.com/kevinsoria1)

---

## 🛠️ Stack Tecnológico de la Aplicación

- **Framework:** Angular (Standalone Components, Signals reactivos, nuevo bloque de control de flujo).
- **Lenguaje:** TypeScript (Tipado estricto, interfaces para modelos de datos).
- **Diseño & Estilos:** CSS3 avanzado (Glassmorphism con `backdrop-filter`, efectos *ambient glow*, maquetación *fluid grid* sin cajas rígidas y tipografía técnica *Fira Code* / *Inter*).
- **Tooling:** Angular CLI, Node.js, Vitest.

---

## ✨ Características Técnicas del Portfolio

1. **Gestión de Estado Reactiva con Signals:**
   - Centralización de los datos de proyectos, habilidades y perfil en un servicio reutilizable (`PortfolioService`).
   - Uso de `signal()` y `computed()` para derivar estados sin necesidad de suscripciones manuales o fugas de memoria.

2. **Filtrado Dinámico en Tiempo Real:**
   - Sistema de filtrado por tecnologías mediante píldoras interactivas.
   - La lista de proyectos se actualiza de manera reactiva al pulsar sobre cualquier tecnología del stack.

3. **Arquitectura Standalone:**
   - Estructura limpia prescindiendo por completo de `NgModule`.
   - Carga modular directa y reducción del bundle final de producción.

4. **Experiencia de Usuario Fluida (Dark Aesthetic):**
   - Fondos dinámicos ambientales con orbes difuminados en constante movimiento suave (`keyframes`).
   - Tarjetas translúcidas con halos de luz interactivos al hacer *hover*.
   - Distribución responsive optimizada para pantallas panorámicas (27"+) y dispositivos móviles.

---

## 📂 Estructura del Código

```text
src/
├── app/
│   ├── components/
│   │   └── header/              # Barra de navegación flotante con efecto translúcido
│   ├── models/
│   │   └── portfolio.model.ts   # Interfaces TypeScript (Project, SkillCategory)
│   ├── services/
│   │   └── portfolio.service.ts # Servicio de datos con Signals reactivos
│   ├── app.ts                   # Lógica reactiva de filtros y estado del componente raíz
│   ├── app.html                 # Maquetación semántica y bloques de control (@if, @for)
│   └── app.css                  # Animaciones, variables y diseño visual Cyberpunk/Dark
├── public/                      # Recursos multimedia estáticos (imágenes y assets)
└── styles.css                   # Resets globales del lienzo y contenedor html/body
