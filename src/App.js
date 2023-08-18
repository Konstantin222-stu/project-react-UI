import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';

function App(outline) {
  const [disabled, setDisabled] = useState(true)
  const [disableShadow, setDisableShadow] = useState(true)
  const [error, setError] = useState(true)
  const [isStartIcon, setIsStartIcon] = useState(true)
  const [isEndIcon, setIsEndIcon] = useState(true)
  const [isFullWidth, setIsFullWidthn] = useState(true)
  return (
    <div className="App wrap">
      <h1>Button</h1>

      <div className='buttons row1'>
        <div>
          <p>
            <code>
              {'<' +'Button />'}
            </code>
          </p>
          <Button  />
        </div>
        <div>
          <p>
            <code>
              {'<' +'Button variant="outline" />'}
            </code>
          </p>
          <Button variant="outline" />
        </div>
        <div>
          <p>
            <code>
              {'<' +'Button variant="text" />'}
            </code>
          </p>
          <Button variant="text" />
        </div>
        <div>
        <p>
          <code>
            {'<' +'Button disableShadow />'}
          </code>
        </p>
        <Button disableShadow />
      </div>
    </div>

    <div className='buttons row2'>
      <div>
        <p>
          <code>
            {'<' +'Button disabled />'}
          </code>
        </p>
        <Button disabled />
      </div>

      <div>
        <p>
          <code>
          {'<' +'Button disabled variant="text" />'}
          </code>
        </p>
        <Button disabled variant="text" />
      </div>
    </div>
      

    <div className='buttons row3'>
      <div>
        <p>
          <code>
            {'<' +'Button size="sm" />'}
          </code>
        </p>
        <Button size='sm' />
      </div>

      <div>
        <p>
          <code>
            {'<' +'Button size="md" />'}
          </code>
        </p>
        <Button size='md' />
      </div>

      <div>
        <p>
          <code>
            {'<' +'Button size="lg" />'}
          </code>
        </p>
        <Button size='lg' />
      </div>
    </div>
      
    <div className='buttons row4'>
      <div>
        <p>
          <code>
            {'<' +'Button color="default" />'}
          </code>
        </p>
        <Button color='default' />
      </div>

      <div>
        <p>
          <code>
            {'<' +'Button color="primary" />'}
          </code>
        </p>
        <Button color='primary' />
      </div>

      <div>
        <p>
          <code>
            {'<' +'Button color="secondary" />'}
          </code>
        </p>
        <Button color='secondary' />
      </div>

      <div>
      <p>
        <code>
          {'<' +'Button color="danger" />'}
        </code>
      </p>
      <Button color='danger' />
    </div>
  </div>

    <hr/>

    <div className='inputs row1'>
      <div>
        <p>
          <code>
            {'<' +'Input />'}
          </code>
        </p>
          <Input />
      </div>

      <div>
        <p>
          <code>
            {'<' +'Input error />'}
          </code>
        </p>
          <Input error />
      </div>

      <div>
        <p>
          <code>
            {'<' +'Input disabled />'}
          </code>
        </p>
          <Input disabled />
      </div>

    </div>

    <div className='inputs row2'>
      <div>
        <p>
          <code>
            {'<' +'Input helperText="Some interesting text" />'}
          </code>
        </p>
          <Input helperText="Some interesting text" />
      </div>

      <div>
        <p>
          <code>
            {'<' +'Input helperText="Some interesting text" error />'}
          </code>
        </p>
          <Input helperText="Some interesting text" error />
      </div>

      <div>
        <p>
          <code>
            {'<' +'Input startIcon/>'}
          </code>
        </p>
          <Input startIcon/>
      </div>

      <div>
        <p>
          <code>
            {'<' +'Input endIcon/>'}
          </code>
        </p>
          <Input endIcon/>
      </div>

    </div>

    <div className='inputs row1'>
      <div>
        <p>
          <code>
            {'<' +'Input value="Text"/>'}
          </code>
        </p>
          <Input value="Text"/>
      </div>
    </div>

    <div className='inputs row2'>
      <div>
        <p>
          <code>
            {'<' +'Input size="sm"/>'}
          </code>
        </p>
          <Input size="sm"/>
      </div>
      <div>
        <p>
          <code>
            {'<' +'Input size="md"/>'}
          </code>
        </p>
          <Input size="md"/>
      </div>
    </div>
    <div>
        <p>
          <code>
            {'<' +'Input fullWidth />'}
          </code>
        </p>
          <Input fullWidth />
      </div>
      <div>
        <p>
          <code>
            {'<' +'Input multiline row={4} />'}
          </code>
        </p>
          <Input multiline row={4} />
      </div>
    
    
    </div>
  );
}

export default App;
