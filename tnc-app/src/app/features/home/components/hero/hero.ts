import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HERO_CONTENT, ROUTES, BASE_HREF } from '../../../../core/constants';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

interface ClientLogo {
  logo: string;
  name?: string;
}

interface Manifest {
  logos: ClientLogo[];
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideo', { static: true }) heroVideo!: ElementRef<HTMLVideoElement>;
  
  brandName = HERO_CONTENT.brandName;
  brandNameFirst = HERO_CONTENT.brandNameFirst;
  brandNameSecond = HERO_CONTENT.brandNameSecond;
  tagline = HERO_CONTENT.tagline;
  subtitle = HERO_CONTENT.subtitle;
  badgeText = HERO_CONTENT.badgeText;
  ctas = HERO_CONTENT.ctas;
  stats = HERO_CONTENT.stats;
  clientLogos: ClientLogo[] = [];

  constructor(private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadClientLogos();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.forcePlayVideo(), 100);
    setTimeout(() => this.forcePlayVideo(), 500);
    setTimeout(() => this.forcePlayVideo(), 1000);
    setTimeout(() => this.forcePlayVideo(), 2000);
    setTimeout(() => this.initMagneticButtons(), 100);
  }

  ngOnDestroy(): void {}

  private initMagneticButtons(): void {
    const magneticButtons = document.querySelectorAll('.magnetic');
    magneticButtons.forEach((btn) => {
      const element = btn as HTMLElement;
      this.setupMagneticEffect(element);
    });
  }

  private setupMagneticEffect(element: HTMLElement): void {
    const strength = 0.3;
    let boundingRect: DOMRect;

    const mouseEnter = () => {
      boundingRect = element.getBoundingClientRect();
      element.style.willChange = 'transform';
    };

    const mouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
      setTimeout(() => {
        element.style.willChange = 'auto';
      }, 300);
    };

    const mouseMove = (e: MouseEvent) => {
      if (!boundingRect) return;
      
      const x = e.clientX - boundingRect.left - boundingRect.width / 2;
      const y = e.clientY - boundingRect.top - boundingRect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        const pullX = x * strength;
        const pullY = y * strength;
        element.style.transform = `translate(${pullX}px, ${pullY}px)`;
      }
    };

    element.addEventListener('mouseenter', mouseEnter);
    element.addEventListener('mouseleave', mouseLeave);
    element.addEventListener('mousemove', mouseMove);
  }

  private forcePlayVideo(): void {
    const video = this.heroVideo?.nativeElement;
    if (video && video.paused) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }

  private loadClientLogos(): void {
    this.http.get<Manifest>(BASE_HREF + 'assets/portfolio/manifest.json').subscribe({
      next: (data) => {
        this.clientLogos = (data.logos || []).map(logo => ({
          ...logo,
          logo: BASE_HREF + logo.logo
        }));
        this.cdr.markForCheck();
      },
      error: () => {
        this.cdr.markForCheck();
      }
    });
  }

  handleCta(action: string): void {
    if (action === 'services') {
      this.router.navigate([ROUTES.SERVICES]);
    } else if (action === 'contact') {
      this.router.navigate([ROUTES.CONTACT]);
    }
  }
}
