import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import DevSetup from './pages/DevSetup';

export type Page = 'home' | 'work' | 'skills' | 'resources' | 'setup';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  const render = () => {
    switch (page) {
      case 'home': return <Home navigate={setPage} />;
      case 'work': return <Work />;
      case 'skills': return <Skills />;
      case 'resources': return <Resources />;
      case 'setup': return <DevSetup />;
    }
  };

  return (
    <>
      <Nav current={page} navigate={setPage} />
      <div style={{ paddingTop: 56 }}>{render()}</div>
    </>
  );
};

export default App;
