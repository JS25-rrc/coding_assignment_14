import React from 'react';
import Card from '../components/Card/Card';
import Label from '../components/Label/Label';
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import { workProjects } from '../data/portfolio';
import './Work.css';

const Work: React.FC = () => (
  <div className="page">
    <Text content="Work" as="h1" fontSize="1.8rem" fontWeight="700" color="#eeeeee" />
    <div className="work-sub">
      <Text
        content="Projects from the Full Stack Web Development program at RRC Polytech."
        color="#888888"
      />
    </div>

    <div className="work-list">
      {workProjects.map((p) => (
        <div key={p.id} className="work-item">
          <Card
            title={p.title}
            description={p.description}
            imageSrc={p.image || 'https://placehold.co/340x180/1a1a2e/4f9eff?text=Project'}
            imageAlt={p.title}
            footerText={`View on GitHub →`}
            backgroundColor="#1a1a1a"
            color="#eeeeee"
          />
          <div className="work-item-detail">
            <Text content={p.title} as="h2" fontSize="1.2rem" fontWeight="600" color="#eeeeee" />
            <Text content={p.description} color="#888888" />
            <div className="work-tags">
              {p.tech.map((t) => (
                <Label
                  key={t}
                  text={t}
                  backgroundColor="rgba(79,158,255,0.1)"
                  color="#4f9eff"
                  fontSize="0.8rem"
                />
              ))}
            </div>
            <Button
              label="View on GitHub"
              onClick={() => window.open(p.link, '_blank')}
              backgroundColor="#2a2a2a"
              size="small"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Work;
