'use client';
import About from '@/components/About';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
import { LangContext } from '@/src/context/LangContext';
import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('en');
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Works />
        <Projects />
      </main>
    </LangContext.Provider>
  );
}
