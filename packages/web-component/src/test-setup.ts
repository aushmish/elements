import '@testing-library/jest-dom';
import { Branding } from './components/Branding';

// Ensure the custom element is registered for testing
if (!customElements.get('unlayer-branding')) {
  customElements.define('unlayer-branding', Branding);
}

// Test setup for Web Component Elements
// Global test utilities can be added here
// This file will be extended by the automation process
