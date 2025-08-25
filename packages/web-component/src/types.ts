// Basic type definitions for Unlayer Web Component Elements
// These will be extended by the automation process

export interface BaseElementProps {
  id?: string;
  class?: string;
  style?: string;
}

export interface ElementConfig {
  type: string;
  props: Record<string, any>;
  children?: ElementConfig[];
}

// Placeholder for more specific types that will be generated
export type ButtonElementProps = BaseElementProps & {
  // Will be populated by automation
};

export type RowElementProps = BaseElementProps & {
  // Will be populated by automation
};

export type ColumnElementProps = BaseElementProps & {
  // Will be populated by automation
};
