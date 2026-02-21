import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class HeroComponent implements OnInit {
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
