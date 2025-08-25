import { Component, JSX } from 'solid-js';

export interface BrandingProps {
  /** Variant of the branding display */
  variant?: 'default' | 'minimal' | 'full';
  /** Size of the branding */
  size?: 'small' | 'medium' | 'large';
  /** Custom CSS class name */
  className?: string;
  /** Custom CSS styles */
  style?: JSX.CSSProperties;
}

export const Branding: Component<BrandingProps> = (props) => {
  const variant = () => props.variant || 'default';
  const size = () => props.size || 'medium';
  const className = () => props.className || '';
  const style = () => props.style || {};

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

  const classes = () => [
    baseClasses,
    variantClasses[variant()],
    sizeClasses[size()],
    className(),
  ]
    .filter(Boolean)
    .join(' ');

  const renderContent = () => {
    switch (variant()) {
      case 'minimal':
        return <span>Made with Unlayer</span>;
      case 'full':
        return (
          <>
            <span>Made with</span>
            <strong> Unlayer</strong>
          </>
        );
      default:
        return (
          <>
            <span>Made with </span>
            <strong>Unlayer</strong>
          </>
        );
    }
  };

  return (
    <div class={classes()} style={style()}>
      {renderContent()}
    </div>
  );
};
