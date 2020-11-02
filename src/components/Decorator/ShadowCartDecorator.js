import React from 'react';
import './index.css';

export default function ShadowCartDecorator({ children }) {
  return <div className="dShadowCartDecorator">
    {children}
  </div>
}