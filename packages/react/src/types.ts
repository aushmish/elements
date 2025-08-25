// Basic type definitions for Unlayer React Elements
// These will be extended by the automation process

export interface BaseElementProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ElementConfig {
  type: string;
  props: Record<string, any>;
  children?: ElementConfig[];
}

// Placeholder for more specific types that will be generated
export type ButtonProps = BaseElementProps & {
  // Will be populated by automation
};

export type RowProps = BaseElementProps & {
  // Will be populated by automation
};

export type ColumnProps = BaseElementProps & {
  // Will be populated by automation
};
