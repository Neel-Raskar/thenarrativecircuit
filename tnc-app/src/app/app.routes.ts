import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    title: 'The Narrative Circuit | Nightlife Events & Artist Management',
    loadComponent: () => import('./features/home/components/hero/hero').then(m => m.HeroComponent) 
  },
  { 
    path: 'services', 
    title: 'Services | The Narrative Circuit',
    loadComponent: () => import('./features/home/components/services/services.component').then(m => m.ServicesComponent) 
  },
  { 
    path: 'portfolio', 
    title: 'Gallery | The Narrative Circuit',
    loadComponent: () => import('./features/home/components/portfolio/portfolio.component').then(m => m.PortfolioComponent) 
  },
  { 
    path: 'contact', 
    title: 'Contact | The Narrative Circuit',
    loadComponent: () => import('./features/home/components/contact/contact.component').then(m => m.ContactComponent) 
  },
  { 
    path: '**', 
    title: '404 - Page Not Found | The Narrative Circuit',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
