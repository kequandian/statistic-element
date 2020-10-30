import React from 'react';
import styles from './index.css';

export default function ShadowCartDecorator({ children }) {
  return <span className={styles.dShadowCartDecorator}>
    {children}
  </span>
}