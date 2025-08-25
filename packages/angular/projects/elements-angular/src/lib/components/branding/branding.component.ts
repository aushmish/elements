import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BrandingVariant = 'default' | 'minimal' | 'full';
export type BrandingSize = 'small' | 'medium' | 'large';

export interface BrandingProps {
  /** Variant of the branding display */
  variant?: BrandingVariant;
  /** Size of the branding */
  size?: BrandingSize;
  /** Custom CSS class name */
  className?: string;
}

@Component({
  selector: 'unlayer-branding',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span *ngIf="variant === 'minimal'">Made with Unlayer</span>
    <ng-container *ngIf="variant === 'full'">
      <span>Made with</span>
      <strong> Unlayer</strong>
    </ng-container>
    <ng-container *ngIf="variant === 'default'">
      <span>Made with </span>
      <strong>Unlayer</strong>
    </ng-container>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    :host.unlayer-branding--small {
      font-size: 0.875rem;
    }

    :host.unlayer-branding--medium {
      font-size: 1rem;
    }

    :host.unlayer-branding--large {
      font-size: 1.125rem;
    }

    :host strong {
      font-weight: 600;
    }
  `],
})
export class BrandingComponent {
  @Input() variant: BrandingVariant = 'default';
  @Input() size: BrandingSize = 'medium';
  @Input() className = '';

  @HostBinding('class')
  get classes(): string {
    const baseClasses = 'unlayer-branding';
    const variantClasses = {
      default: 'unlayer-branding--default',
      minimal: 'unlayer-branding--minimal',
      full: 'unlayer-branding--full',
    };
    const sizeClasses = {
      small: 'unlayer-branding--small',
      medium: 'unlayer-branding--medium',
      large: 'unlayer-branding--large',
    };

    return [
      baseClasses,
      variantClasses[this.variant],
      sizeClasses[this.size],
      this.className,
    ]
      .filter(Boolean)
      .join(' ');
  }
}
