import React from 'react';
import { Table, TableHeader, TableRow, TableCell } from '../components/Table/Table';
import Text from '../components/Text/Text';
import Label from '../components/Label/Label';
import { devSetup } from '../data/portfolio';
import './DevSetup.css';

const DevSetup: React.FC = () => (
  <div className="page">
    <Text content="Developer Setup" as="h1" fontSize="1.8rem" fontWeight="700" color="#eeeeee" />
    <div className="setup-sub">
      <Text content="My local development environment and tools." color="#888888" />
    </div>

    <div className="setup-sections">
      <div className="setup-section">
        <Text
          content="VS Code Extensions"
          as="h2"
          fontSize="1rem"
          fontWeight="600"
          color="#4f9eff"
        />
        <div className="setup-table-wrap">
          <Table backgroundColor="#1a1a1a" color="#eeeeee">
            <TableHeader backgroundColor="#1e2a3a" color="#4f9eff">
              <TableRow>
                <TableCell isHeader>Extension</TableCell>
                <TableCell isHeader>Purpose</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              {devSetup.vscode.map((ext) => (
                <TableRow key={ext.name}>
                  <TableCell>
                    <Text content={ext.name} fontWeight="500" color="#eeeeee" />
                  </TableCell>
                  <TableCell>
                    <Text content={ext.description} color="#888888" />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="setup-section">
        <Text content="Terminal" as="h2" fontSize="1rem" fontWeight="600" color="#4f9eff" />
        <div className="setup-card">
          <Text content={devSetup.terminal} color="#aaaaaa" />
        </div>
      </div>

      <div className="setup-section">
        <Text content="Preferred Font" as="h2" fontSize="1rem" fontWeight="600" color="#4f9eff" />
        <div className="setup-card">
          <Label
            text={devSetup.font}
            backgroundColor="rgba(79,158,255,0.1)"
            color="#4f9eff"
            fontSize="1.1rem"
          />
          <div className="setup-font-preview">
            <Text
              content="const greet = (name: string) => `Hello, ${name}`"
              color="#4f9eff"
              fontSize="0.85rem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DevSetup;
