import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';

function App() {
  const buttonVariants = [
    { code: '<Button />', props: {} },
    { code: '<Button variant="outline" />', props: { variant: 'outline' } },
    { code: '<Button variant="text" />', props: { variant: 'text' } },
    { code: '<Button disableShadow />', props: { disableShadow: true } }
  ];

  const disabledButtons = [
    { code: '<Button disabled />', props: { disabled: true } },
    { code: '<Button disabled variant="text" />', props: { disabled: true, variant: 'text' } }
  ];

  const buttonSizes = [
    { code: '<Button size="sm" />', props: { size: 'sm' } },
    { code: '<Button size="md" />', props: { size: 'md' } },
    { code: '<Button size="lg" />', props: { size: 'lg' } }
  ];

  const buttonColors = [
    { code: '<Button color="default" />', props: { color: 'default' } },
    { code: '<Button color="primary" />', props: { color: 'primary' } },
    { code: '<Button color="secondary" />', props: { color: 'secondary' } },
    { code: '<Button color="danger" />', props: { color: 'danger' } }
  ];

  const basicInputs = [
    { code: '<Input />', props: {} },
    { code: '<Input error />', props: { error: true } },
    { code: '<Input disabled />', props: { disabled: true } }
  ];

  const advancedInputs = [
    { code: '<Input helperText="Some interesting text" />', props: { helperText: 'Some interesting text' } },
    { code: '<Input helperText="Some interesting text" error />', props: { helperText: 'Some interesting text', error: true } },
    { code: '<Input startIcon />', props: { startIcon: true } },
    { code: '<Input endIcon />', props: { endIcon: true } }
  ];

  const inputValues = [
    { code: '<Input value="Text" />', props: { value: 'Text' } }
  ];

  const inputSizes = [
    { code: '<Input size="sm" />', props: { size: 'sm' } },
    { code: '<Input size="md" />', props: { size: 'md' } }
  ];

  const specialInputs = [
    { code: '<Input fullWidth />', props: { fullWidth: true } },
    { code: '<Input multiline row={4} />', props: { multiline: true, row: 4 } }
  ];

  const renderComponentGroup = (components, type) => (
    <div className={`${type}`}>
      {components.map((comp, index) => (
        <div key={index} className="component-card">
          <div className="code-container">
            <code>{comp.code}</code>
          </div>
          <div className="component-preview">
            {type === 'buttons' 
              ? <Button {...comp.props} /> 
              : <Input {...comp.props} />}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="wrap">
      <header className="header">
        <h1>UI Components Gallery</h1>
      </header>
      <h2 className="section-title">Buttons</h2>
      <section className="section">
        {renderComponentGroup(buttonVariants, 'buttons')}
        {renderComponentGroup(disabledButtons, 'buttons')}
        {renderComponentGroup(buttonSizes, 'buttons')}
        {renderComponentGroup(buttonColors, 'buttons')}
      </section>

      <h2 className="section-title">Inputs</h2>
      <section className="section">
        
        {renderComponentGroup(basicInputs, 'inputs', 'row1')}
        {renderComponentGroup(advancedInputs, 'inputs', 'row2')}
        {renderComponentGroup(inputValues, 'inputs', 'row1')}
        {renderComponentGroup(inputSizes, 'inputs', 'row2')}
        {renderComponentGroup(specialInputs, 'inputs', 'row1')}
      </section>
    </div>
  );
}

export default App;