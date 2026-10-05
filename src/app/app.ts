import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private portfolioService = inject(PortfolioService);

  profile = this.portfolioService.profile;
  allProjects = this.portfolioService.projects;
  skillCategories = this.portfolioService.skillCategories;
  certifications = this.portfolioService.certifications;

  // Filtro interactivo de tecnologías
  selectedTech = signal<string>('TODOS');

  // Lista única de tecnologías para los botones de filtro
  techFilters = computed(() => {
    const list = new Set<string>();
    this.allProjects().forEach(p => p.tech.forEach(t => list.add(t)));
    return ['TODOS', ...Array.from(list)];
  });

  // Proyectos filtrados de forma reactiva
  filteredProjects = computed(() => {
    const filter = this.selectedTech();
    if (filter === 'TODOS') return this.allProjects();
    return this.allProjects().filter(p => p.tech.includes(filter));
  });

  setFilter(tech: string) {
    this.selectedTech.set(tech);
  }
}