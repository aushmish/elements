<template>
  <div :class="classes" :style="style">
    <span v-if="variant === 'minimal'">Made with Unlayer</span>
    <template v-else-if="variant === 'full'">
      <span>Made with</span>
      <strong> Unlayer</strong>
    </template>
    <template v-else>
      <span>Made with </span>
      <strong>Unlayer</strong>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

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

const props = withDefaults(defineProps<BrandingProps>(), {
  variant: 'default',
  size: 'medium',
  className: '',
  style: () => ({}),
});

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
</script>

<style scoped>
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
