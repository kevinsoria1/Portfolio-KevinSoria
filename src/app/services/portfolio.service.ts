import { Injectable, signal } from '@angular/core';
import { Project, SkillCategory } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // Datos personales y de contacto
  readonly profile = signal({
    name: 'Kevin Soria Olivar',
    title: 'Full-Stack Developer Junior',
    location: 'Torrejón de Ardoz, Madrid',
    email: 'k.soria.olivar@gmail.com',
    github: 'https://github.com/kevinsoria1',
    linkedin: 'https://www.linkedin.com/in/kevin-soria-dev',
    summary:
      'Desarrollador Junior con foco en Backend y bases Full-Stack. Especializado en APIs REST con Node.js, TypeScript y NestJS, bases de datos relacionales y despliegue contenerizado con Docker.'
  });

  // Habilidades agrupadas por categoría
  readonly skillCategories = signal<SkillCategory[]>([
    {
      category: 'Backend & Lenguajes',
      skills: ['TypeScript', 'Node.js', 'NestJS', 'Java (Spring Boot)', 'C# (.NET)', 'Python']
    },
    {
      category: 'Bases de Datos & DevOps',
      skills: ['PostgreSQL', 'MySQL', 'TypeORM', 'Docker', 'Docker Compose', 'Git/GitHub']
    },
    {
      category: 'Frontend & Mobile',
      skills: ['Angular', 'HTML5 & CSS3', 'JavaScript', 'Kotlin (Android Studio)']
    },
    {
      category: 'Herramientas & Metodologías',
      skills: ['Swagger UI', 'Postman', 'Figma (UI/UX)', 'Scrum']
    }
  ]);

  // Experiencia y proyectos clave
  readonly projects = signal<Project[]>([
    {
      id: 'dltcode-gamification',
      title: 'Plataforma de Gamificación Corporativa',
      role: 'Backend Developer (FCT en DLTCode)',
      period: 'Mar 2026 - Jun 2026',
      description:
        'Diseño e implementación de API REST modular con arquitectura en NestJS y TypeORM, inyección de dependencias y control de acceso RBAC.',
      highlights: [
        'Autenticación de doble capa con JWT + Refresh Tokens y validación con DTOs.',
        'Contenerización multi-servicio con Docker Compose (API + PostgreSQL).',
        'Documentación completa con Swagger UI y prototipado interactivo en Figma.'
      ],
      tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Docker', 'Swagger', 'Figma'],
      githubUrl: 'https://github.com/kevinsoria1'
    },
    {
      id: 'vet-health-app',
      title: 'App de Gestión de Salud Veterinaria',
      role: 'Desarrollador Móvil (Proyecto Final DAM)',
      period: '2026',
      description:
        'Aplicación nativa en Android para la gestión de mascotas, citas veterinarias y comunicación en tiempo real con soporte offline.',
      highlights: [
        'Arquitectura nativa en Kotlin sobre Android Studio.',
        'Sincronización y caché local para historiales clínicos y recetas sin conexión.'
      ],
      tech: ['Kotlin', 'Android Studio', 'XML', 'SQLite / Room'],
      githubUrl: 'https://github.com/kevinsoria1'
    }
  ]);
}