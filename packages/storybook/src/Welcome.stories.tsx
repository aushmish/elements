import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const Welcome = () => (
  <div style={{ 
    padding: '3rem 2rem', 
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  }}>
    <h1 style={{ 
      fontSize: '2.5rem', 
      marginBottom: '1.5rem',
      color: '#2c3e50',
      fontWeight: '700'
    }}>
      🎨 Unlayer Elements
    </h1>
    
    <p style={{ 
      fontSize: '1.2rem', 
      marginBottom: '1rem',
      color: '#34495e',
      lineHeight: '1.6'
    }}>
      Welcome to the unified Storybook hub for all elements packages.
    </p>
    
    <p style={{ 
      fontSize: '1.1rem', 
      marginBottom: '2rem',
      color: '#7f8c8d',
      lineHeight: '1.5'
    }}>
      Browse the sidebar to explore elements from different frameworks:
    </p>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      marginTop: '2rem'
    }}>
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Angular</h3>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>Angular Elements</p>
      </div>
      
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚛️</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>React</h3>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>React Elements</p>
      </div>
      
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🟢</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Vue</h3>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>Vue Elements</p>
      </div>
      
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔮</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Preact</h3>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>Preact Elements</p>
      </div>
      
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔷</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Solid</h3>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>Solid Elements</p>
      </div>
      
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Svelte</h3>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>Svelte Elements</p>
      </div>
      
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>Web Component</h3>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>Web Component Elements</p>
      </div>
    </div>
    
    <div style={{
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: '#e8f5e8',
      borderRadius: '8px',
      border: '1px solid #c3e6c3'
    }}>
      <h3 style={{ margin: '0 0 1rem 0', color: '#2d5a2d' }}>🚀 Getting Started</h3>
      <p style={{ margin: '0 0 1rem 0', color: '#2d5a2d', lineHeight: '1.5' }}>
        Each package contains its own set of stories showcasing the Unlayer Elements integration.
        Use the sidebar navigation to explore components from different frameworks.
      </p>
      <p style={{ margin: 0, color: '#2d5a2d', lineHeight: '1.5' }}>
        This hub provides a unified interface to browse and compare elements across all supported frameworks.
      </p>
    </div>
  </div>
);

const meta: Meta<typeof Welcome> = {
  title: 'Welcome',
  component: Welcome,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
