import React from 'react';

export interface Feature {
    title: string;
    description: string;
    icon: React.ComponentType<any>;
}

export interface TechLayer {
    step: number;
    title: string;
    description: string;
}

export interface Metric {
    label: string;
    value: string;
    subtext: string;
}