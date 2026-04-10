import React from 'react';
import Card from '../components/Card/Card';
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import { resources } from '../data/portfolio';
import './Resources.css';

const Resources: React.FC = () => (
  <div className="page">
    <Text content="Resources" as="h1" fontSize="1.8rem" fontWeight="700" color="#eeeeee" />
    <div className="resources-sub">
      <Text
        content="References and tools I recommend for full stack development."
        color="#888888"
      />
    </div>

    <div className="resources-grid">
      {resources.map((r) => (
        <div key={r.title} className="resource-item">
          <Card
            title={`${r.icon}  ${r.title}`}
            description={r.summary}
            imageSrc={`https://placehold.co/340x120/1a1a2e/4f9eff?text=${encodeURIComponent(r.title)}`}
            imageAlt={r.title}
            footerText={r.link.replace('https://', '')}
            backgroundColor="#1a1a1a"
            color="#eeeeee"
          />
          <div className="resource-btn">
            <Button
              label="Visit →"
              size="small"
              backgroundColor="#4f9eff"
              onClick={() => window.open(r.link, '_blank')}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Resources;
