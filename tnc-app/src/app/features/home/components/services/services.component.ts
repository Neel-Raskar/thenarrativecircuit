import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_CONTENT } from '../../../../core/constants';
import { Service } from '../../../../core/models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services: Service[] = SERVICES_CONTENT;

  trackByTitle(index: number, service: Service): string {
    return service.title;
  }
}
