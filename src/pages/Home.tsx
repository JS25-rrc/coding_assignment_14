import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import Button from '../components/Button/Button';
import Text from '../components/Text/Text';
import { personalInfo } from '../data/portfolio';
import { Page } from '../App';
import './Home.css';
import jasDhaliwal from "../assets/IMG_1345.png"

interface Props {
  navigate: (p: Page) => void;
}

const Home: React.FC<Props> = ({ navigate }) => (
  <div className="page">
    <HeroImage
      src={jasDhaliwal}
      title={personalInfo.name}
      subtitle={personalInfo.title}
      height="360px"
      overlayColor="rgba(0,0,0,0.65)"
    />

    <div className="home-bio">
      <Text
        content={personalInfo.bio}
        color="#aaaaaa"
        fontSize="1rem"
      />
      <div className="home-meta">
        <Text content={personalInfo.school} color="#666666" fontSize="0.9rem" />
        <Text content={personalInfo.location} color="#666666" fontSize="0.9rem" />
      </div>
      <div className="home-actions">
        <Button label="View Work" onClick={() => navigate('work')} backgroundColor="#4f9eff" />
        <Button
          label="GitHub"
          onClick={() => window.open(personalInfo.github, '_blank')}
          backgroundColor="#2a2a2a"
        />
      </div>
    </div>

    <div className="divider" />

    <div className="home-quick">
      {(['work', 'skills', 'resources', 'setup'] as Page[]).map((p) => (
        <div key={p} className="home-quick-item" onClick={() => navigate(p)}>
          <Text
            content={p === 'setup' ? 'Dev Setup' : p.charAt(0).toUpperCase() + p.slice(1)}
            fontWeight="500"
            color="#eeeeee"
          />
          <Text content="→" color="#666666" />
        </div>
      ))}
    </div>
  </div>
);

export default Home;
