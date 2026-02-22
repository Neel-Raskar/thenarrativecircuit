import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BASE_HREF } from '../../../../core/constants';

interface PortfolioItem {
  image: string;
  title?: string;
  category?: string;
}

interface ClientLogo {
  logo: string;
  name?: string;
}

interface Manifest {
  images: PortfolioItem[];
  logos: ClientLogo[];
}

interface FloatingImage {
  visible: boolean;
  x: number;
  y: number;
  image: string;
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
  
  floatingImage: FloatingImage = {
    visible: false,
    x: 0,
    y: 0,
    image: ''
  };

  isMobile = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkMobile();
    this.loadManifest();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }

  private loadManifest(): void {
    this.http.get<Manifest>(BASE_HREF + 'assets/portfolio/manifest.json').subscribe({
      next: (data) => {
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
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  showFloatingImage(item: PortfolioItem, event: MouseEvent): void {
    if (this.isMobile) return;
    
    this.floatingImage = {
      visible: true,
      x: event.clientX,
      y: event.clientY,
      image: item.image
    };
    this.cdr.markForCheck();
  }

  updateFloatingPosition(event: MouseEvent): void {
    if (!this.floatingImage.visible || this.isMobile) return;
    
    this.floatingImage.x = event.clientX;
    this.floatingImage.y = event.clientY;
    this.cdr.markForCheck();
  }

  hideFloatingImage(): void {
    this.floatingImage.visible = false;
    this.cdr.markForCheck();
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
