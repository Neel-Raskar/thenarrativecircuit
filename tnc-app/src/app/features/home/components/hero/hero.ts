import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HERO_CONTENT } from '../../../../core/constants';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  brandName = HERO_CONTENT.brandName;
  brandNameFirst = HERO_CONTENT.brandNameFirst;
  brandNameSecond = HERO_CONTENT.brandNameSecond;
  tagline = HERO_CONTENT.tagline;
  subtitle = HERO_CONTENT.subtitle;
  badgeText = HERO_CONTENT.badgeText;
  ctas = HERO_CONTENT.ctas;
  stats = HERO_CONTENT.stats;
}
