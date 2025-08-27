export interface BrandingProps {
  /** Variant of the branding display */
  variant?: 'default' | 'minimal' | 'full';
  /** Size of the branding */
  size?: 'small' | 'medium' | 'large';
  /** Custom CSS class name */
  className?: string;
  /** Custom CSS styles */
  style?: string;
}

export class Branding extends HTMLElement {
  private _variant: BrandingProps['variant'] = 'default';
  private _size: BrandingProps['size'] = 'medium';
  private _className = '';
  private _style = '';

  static get observedAttributes() {
    return ['variant', 'size', 'class', 'style'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      switch (name) {
        case 'variant':
          this._variant = newValue as BrandingProps['variant'];
          break;
        case 'size':
          this._size = newValue as BrandingProps['size'];
          break;
        case 'class':
          this._className = newValue;
          break;
        case 'style':
          this._style = newValue;
          break;
      }
      this.render();
    }
  }

  get variant() {
    return this._variant;
  }

  set variant(value: BrandingProps['variant']) {
    this._variant = value;
    this.setAttribute('variant', value || 'default');
  }

  get size() {
    return this._size;
  }

  set size(value: BrandingProps['size']) {
    this._size = value;
    this.setAttribute('size', value || 'medium');
  }

  get className() {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
    this.setAttribute('class', value);
  }

  get inlineStyle() {
    return this._style;
  }

  set inlineStyle(value: string) {
    this._style = value;
    this.setAttribute('style', value);
  }

  private getClasses(): string {
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
      variantClasses[this._variant || 'default'],
      sizeClasses[this._size || 'medium'],
      this._className,
    ]
      .filter(Boolean)
      .join(' ');
  }

  private renderContent(): string {
    switch (this._variant) {
      case 'minimal':
        return '<span>Made with Unlayer</span>';
      case 'full':
        return '<span>Made with</span><strong> Unlayer</strong>';
      default:
        return '<span>Made with </span><strong>Unlayer</strong>';
    }
  }

  private render() {
    if (!this.shadowRoot) return;

    const classes = this.getClasses();
    const content = this.renderContent();
    const customStyle = this._style ? ` style="${this._style}"` : '';

    this.shadowRoot.innerHTML = `
      <style>
        .unlayer-branding {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .unlayer-branding--small {
          font-size: 0.875rem;
        }

        .unlayer-branding--medium {
          font-size: 1rem;
        }

        .unlayer-branding--large {
          font-size: 1.125rem;
        }

        .unlayer-branding strong {
          font-weight: 600;
        }
      </style>
      <div class="${classes}"${customStyle}>
        ${content}
      </div>
    `;
  }
}

// Register the custom element
customElements.define('unlayer-branding', Branding);
