import React from 'react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from '../components/Table/Table';
import Label from '../components/Label/Label';
import Text from '../components/Text/Text';
import { skills } from '../data/portfolio';
import './Skills.css';

const Skills: React.FC = () => (
  <div className="page">
    <Text content="Skills" as="h1" fontSize="1.8rem" fontWeight="700" color="#eeeeee" />
    <div className="skills-sub">
      <Text
        content="Technologies I have worked with through coursework and personal projects."
        color="#888888"
      />
    </div>

    <div className="skills-table-wrap">
      <Table backgroundColor="#1a1a1a" color="#eeeeee">
        <TableHeader backgroundColor="#1e2a3a" color="#4f9eff">
          <TableRow>
            <TableCell isHeader>Category</TableCell>
            <TableCell isHeader>Technologies</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>
              <Text content="Languages" fontWeight="600" color="#eeeeee" />
            </TableCell>
            <TableCell>
              <div className="skills-labels">
                {skills.languages.map((s) => (
                  <Label
                    key={s}
                    text={s}
                    backgroundColor="rgba(79,158,255,0.1)"
                    color="#4f9eff"
                    fontSize="0.85rem"
                  />
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text content="Frameworks" fontWeight="600" color="#eeeeee" />
            </TableCell>
            <TableCell>
              <div className="skills-labels">
                {skills.frameworks.map((s) => (
                  <Label
                    key={s}
                    text={s}
                    backgroundColor="rgba(79,158,255,0.1)"
                    color="#4f9eff"
                    fontSize="0.85rem"
                  />
                ))}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text content="Tools" fontWeight="600" color="#eeeeee" />
            </TableCell>
            <TableCell>
              <div className="skills-labels">
                {skills.tools.map((s) => (
                  <Label
                    key={s}
                    text={s}
                    backgroundColor="rgba(79,158,255,0.1)"
                    color="#4f9eff"
                    fontSize="0.85rem"
                  />
                ))}
              </div>
            </TableCell>
          </TableRow>
        </tbody>
        <TableFooter backgroundColor="#111111" color="#666666">
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>
              {skills.languages.length + skills.frameworks.length + skills.tools.length}{' '}
              technologies
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </div>
);

export default Skills;
