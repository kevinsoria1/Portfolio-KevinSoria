import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  private portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
}