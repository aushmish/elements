import React from 'react';

export interface BrandingProps {
  /** Variant of the branding display */
  variant?: 'default' | 'minimal' | 'full';
  /** Size of the branding */
  size?: 'small' | 'medium' | 'large';
  /** Custom CSS class name */
  className?: string;
  /** Custom CSS styles */
  style?: React.CSSProperties;
}

export const Branding: React.FC<BrandingProps> = ({
  variant = 'default',
  size = 'medium',
  className = '',
  style = {},
}) => {
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

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderContent = () => {
    switch (variant) {
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
    <div className={classes} style={style}>
      {renderContent()}
    </div>
  );
};

export default Branding;
