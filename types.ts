
import React from 'react';

// Use a flexible component type for icons so consumers can pass className/size/style props
export type IconComponent = React.ComponentType<any>;

export interface NavLink {
  id: string;
  title: string;
}

export interface Highlight {
  icon: IconComponent;
  title: string;
  text: string;
}

export interface CoreValue {
  icon: IconComponent;
  title: string;
}

export interface Service {
  icon: IconComponent;
  title: string;
}

export interface SocialLink {
  icon: IconComponent;
  url: string;
}
