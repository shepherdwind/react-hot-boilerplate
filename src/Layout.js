import React from 'react';

import { main } from './b.css';
export default function Layout({ children }) {
  return (
    <div className={main}>
      <h1>Hello , world foo!</h1>
      {children}
    </div>
  );
}
