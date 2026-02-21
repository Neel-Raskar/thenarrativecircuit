import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BASE_HREF } from '../../../../core/constants';

interface PortfolioItem {
  image: string;
  title?: string;
}

interface ClientLogo {
  logo: string;
  name?: string;
}

interface Manifest {
  images: PortfolioItem[];
  logos: ClientLogo[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {
  portfolioItems: PortfolioItem[] = [];
  clientLogos: ClientLogo[] = [];
  selectedItem: PortfolioItem | null = null;
  loading = true;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadManifest();
  }

  private loadManifest(): void {
    console.log('Loading manifest...');
    this.http.get<Manifest>(BASE_HREF + 'assets/portfolio/manifest.json').subscribe({
      next: (data) => {
        console.log('Manifest loaded:', data);
        this.portfolioItems = (data.images || []).map(item => ({
          ...item,
          image: BASE_HREF + item.image
        }));
        this.clientLogos = (data.logos || []).map(logo => ({
          ...logo,
          logo: BASE_HREF + logo.logo
        }));
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Failed to load manifest:', err);
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  openLightbox(item: PortfolioItem): void {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedItem = null;
    document.body.style.overflow = '';
  }

  trackByIndex(index: number): number {
    return index;
  }
}
