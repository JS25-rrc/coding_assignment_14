import React from 'react';
import './Nav.css';
import { Page } from '../App';

interface NavProps {
  current: Page;
  navigate: (p: Page) => void;
}

const links: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'resources', label: 'Resources' },
  { id: 'setup', label: 'Dev Setup' },
];

const Nav: React.FC<NavProps> = ({ current, navigate }) => {
  const go = (p: Page) => {
    navigate(p);
    window.scrollTo({ top: 0 });
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => go('home')}>
          JS
        </button>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <button
                className={`nav-link${current === l.id ? ' active' : ''}`}
                onClick={() => go(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
