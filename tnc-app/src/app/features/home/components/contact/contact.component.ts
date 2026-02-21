import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactCard {
  id: string;
  type: 'instagram' | 'facebook' | 'email' | 'phone';
  label: string;
  value: string;
  url?: string;
  icon?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  cards: ContactCard[] = [
    {
      id: 'instagram',
      type: 'instagram',
      label: 'Instagram',
      value: '@thenarrativecircuit',
      url: 'https://instagram.com/thenarrativecircuit',
      icon: 'instagram'
    },
    {
      id: 'facebook',
      type: 'facebook',
      label: 'Facebook',
      value: 'The Narrative Circuit',
      url: 'https://www.facebook.com/share/17zWgGoY8R/?mibextid=wwXIfr',
      icon: 'facebook'
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      value: 'thenarrativecircuit@gmail.com',
      url: 'mailto:thenarrativecircuit@gmail.com'
    },
    {
      id: 'phone',
      type: 'phone',
      label: 'Phone',
      value: '+91 91729 98274',
      url: 'tel:+91 91729 98274'
    }
  ];

  copiedId: string | null = null;

  copyToClipboard(event: Event, card: ContactCard): void {
    event.preventDefault();
    if (card.type === 'email' || card.type === 'phone') {
      const textToCopy = card.type === 'email' ? card.value : card.value.replace(/\D/g, '');
      navigator.clipboard.writeText(textToCopy).then(() => {
        this.copiedId = card.id;
        setTimeout(() => this.copiedId = null, 2000);
      });
    }
  }

  trackById(index: number, card: ContactCard): string {
    return card.id;
  }
}
