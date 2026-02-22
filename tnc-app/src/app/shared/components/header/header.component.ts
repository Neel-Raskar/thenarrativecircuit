import { Component, ChangeDetectionStrategy, ChangeDetectorRef, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS, ROUTES, HERO_CONTENT } from '../../../core/constants';

export interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  navLinks = NAV_LINKS;
  contactPath = ROUTES.CONTACT;
  brandNameFirst = HERO_CONTENT.brandNameFirst;
  brandNameSecond = HERO_CONTENT.brandNameSecond;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.cdr.markForCheck();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.initMagneticButtons(), 100);
  }

  private initMagneticButtons(): void {
    const magneticButtons = document.querySelectorAll('.header .magnetic');
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

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.cdr.markForCheck();
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.cdr.markForCheck();
  }
}
