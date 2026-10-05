import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // Perfil del desarrollador
  // Perfil del desarrollador con redes añadidas
  private profileSignal = signal({
    name: 'Kevin Soria Olivar',
    title: 'Full-Stack Developer Junior',
    summary: 'Desarrollador Junior con foco en Backend y bases Full-Stack. Especializado en APIs REST con Node.js, TypeScript y NestJS, Java (Spring Boot), C# (.NET), bases de datos relacionales y despliegue contenerizado con Docker.',
    email: 'kevin.soria.olivar@gmail.com',
    github: 'https://github.com/kevinsoria1',
    linkedin: 'https://www.linkedin.com/in/kevin-soria-dev'
  });

  private projectsSignal = signal([
    {
      id: 'dltcode',
      title: 'DLTCode - Plataforma de Gamificación',
      role: 'Full-Stack Developer (Prácticas)',
      period: '2026',
      featured: true,
      description: 'Plataforma empresarial de gamificación corporativa para automatización y dinamización de procesos internos, desarrollada durante el periodo de prácticas profesionales.',
      highlights: [
        'Diseño e implementación de API REST modular con arquitectura en NestJS y TypeORM, inyección de dependencias y control de acceso RBAC.',
        'Autenticación de doble capa con JWT + Refresh Tokens y validación estricta con DTOs.',
        'Contenerización multi-servicio con Docker Compose (API + PostgreSQL) y documentación con Swagger UI.'
      ],
      tech: ['Node.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'Docker', 'REST API'],
      githubUrl: 'https://github.com/kevinsoria1/DLTCode'
    },
    {
      id: 'saluspet',
      title: 'SalusPet - App Veterinaria',
      role: 'Mobile & Backend Developer',
      period: '2026',
      featured: true,
      description: 'Aplicación móvil Android para digitalizar el cuidado de mascotas y centralizar historiales clínicos en la nube, sustituyendo la cartilla física de papel.',
      highlights: [
        'App nativa en Android con Kotlin y Jetpack Compose, conectada mediante Retrofit para gestión de perfiles y citas en tiempo real.',
        'API REST modular desarrollada con NestJS y MySQL para autenticación, gestión de datos médicos y persistencia en la nube.',
        'Módulo complementario de escritorio en Java para clínicas y protectoras con exportación de dossieres clínicos en PDF (iTextPDF).'
      ],
      tech: ['Android (Kotlin)', 'Jetpack Compose', 'NestJS', 'MySQL', 'Java', 'REST API'],
      githubUrl: 'https://github.com/kevinsoria1/Saluspet'
    },
    {
      id: 'api-facturacion',
      title: 'API Facturación e Inventario',
      role: 'Backend Developer (Java)',
      period: '2026',
      featured: false,
      description: 'API RESTful transaccional diseñada bajo arquitectura modular Package-by-Feature para el ciclo completo de ventas, facturación y stock.',
      highlights: [
        'Arquitectura modular inspirada en encapsulación de módulos de frameworks modernos (controladores y lógica de dominio desacoplados).',
        'Operaciones atómicas con @Transactional: validación de stock y reducción automática tras cobro.',
        'Persistencia relacional con Spring Data JPA / Hibernate y base de datos H2/PostgreSQL.'
      ],
      tech: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Hibernate', 'REST API', 'Maven'],
      githubUrl: 'https://github.com/kevinsoria1/api_facturacion'
    },
    {
      id: 'catalogo-videojuegos',
      title: 'GameStore Desktop Manager',
      role: 'Software Developer (C# / WinForms)',
      period: '2025',
      featured: false,
      description: 'Aplicación de escritorio para la administración, catálogo visual y compra de videojuegos con roles diferenciados (Cliente y Panel Admin).',
      highlights: [
        'Sistema de compra inteligente con validación condicional (Comprar/Jugar) y restricción SQL contra compras duplicadas.',
        'Seguridad con encriptación SHA-256 para contraseñas, control de sesiones y protección de SuperAdmin.',
        'Persistencia relacional en MySQL 8.0 con almacenamiento de carátulas en BLOB.'
      ],
      tech: ['C#', '.NET', 'Windows Forms', 'MySQL', 'SHA-256', 'CRUD'],
      githubUrl: 'https://github.com/kevinsoria1/catalogo_videojuegos'
    },
    {
      id: 'kanban-wpf',
      title: 'KanbanWPF Task Manager',
      role: 'Desktop Developer (C# / WPF)',
      period: '2025',
      featured: false,
      description: 'Herramienta de productividad de escritorio con tablero Kanban interactivo para el seguimiento de tareas por estados y prioridades.',
      highlights: [
        'Diseño visual en XAML con controles reutilizables, tablas DataGrid e informes gráficos de estado.',
        'Interacción Drag & Drop entre 4 estados (pendiente, en proceso, completado y bloqueado).',
        'Sincronización reactiva de UI mediante data binding con ObservableCollection e INotifyPropertyChanged.'
      ],
      tech: ['C#', '.NET 6', 'WPF', 'XAML', 'SQL Server', 'Data Binding'],
      githubUrl: 'https://github.com/kevinsoria1/kanbanWPF'
    }
  ]);

  private skillCategoriesSignal = signal([
    {
      category: 'Backend & APIs',
      skills: ['Java 17', 'Spring Boot 3', 'Node.js', 'NestJS', 'TypeScript', 'APIs REST', 'C# / .NET']
    },
    {
      category: 'Bases de Datos & Persistencia',
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Spring Data JPA', 'Hibernate', 'TypeORM']
    },
    {
      category: 'Frontend & Escritorio',
      skills: ['Angular', 'TypeScript', 'Signals', 'WPF (XAML)', 'WinForms', 'HTML5 / CSS3']
    },
    {
      category: 'DevOps & Herramientas',
      skills: ['Docker', 'Git / GitHub', 'Maven', 'Visual Studio', 'Postman', 'Vercel']
    }
  ]);

  // Getters públicos de sólo lectura
  readonly profile = this.profileSignal.asReadonly();
  readonly projects = this.projectsSignal.asReadonly();
  readonly skillCategories = this.skillCategoriesSignal.asReadonly();
}