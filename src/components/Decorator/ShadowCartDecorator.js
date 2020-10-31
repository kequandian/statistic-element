import React from 'react';
import styles from './index.css';

export default function ShadowCartDecorator({ children }) {
  return <div className={styles.dShadowCartDecorator}>
    {children}
  </div>
}