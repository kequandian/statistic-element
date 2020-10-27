import React from 'react';
import './index.css';

export default function ShadowCartDecorator({ children }) {
  return <span className="d-ShadowCartDecorator">
    {children}
  </span>
}