import { defineComponent, PropType, computed, h } from 'vue';

export interface BrandingProps {
  /** Variant of the branding display */
  variant?: 'default' | 'minimal' | 'full';
  /** Size of the branding */
  size?: 'small' | 'medium' | 'large';
  /** Custom CSS class name */
  className?: string;
  /** Custom CSS styles */
  style?: Record<string, string>;
}

export const Branding = defineComponent({
  name: 'Branding',
  props: {
    variant: {
      type: String as PropType<'default' | 'minimal' | 'full'>,
      default: 'default',
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    className: {
      type: String,
      default: '',
    },
    style: {
      type: Object as PropType<Record<string, string>>,
      default: () => ({}),
    },
  },
  setup(props) {
    const classes = computed(() => {
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
        variantClasses[props.variant],
        sizeClasses[props.size],
        props.className,
      ]
        .filter(Boolean)
        .join(' ');
    });

    const renderContent = () => {
      switch (props.variant) {
        case 'minimal':
          return h('span', 'Made with Unlayer');
        case 'full':
          return [
            h('span', 'Made with'),
            h('strong', ' Unlayer'),
          ];
        default:
          return [
            h('span', 'Made with '),
            h('strong', 'Unlayer'),
          ];
      }
    };

    return () =>
      h('div', {
        class: classes.value,
        style: props.style,
      }, renderContent());
  },
});

export default Branding;
