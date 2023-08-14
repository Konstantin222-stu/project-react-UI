import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';

function App(outline) {
  const [disabled, setDisabled] = useState(true)
  return (
    <div className="App wrap">
      <h1>Button</h1>

      <div className='buttons row2'>
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
              &:hove, &:focus
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
              &:hove, &:focus
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
              &:hove, &:focus
            </code>
          </p>
          <Button variant="text" />
        </div>
      </div>

    <div className='buttons row1'>
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

    <div>
      <p>
        <code>
          &:hove, &:focus
        </code>
      </p>
      <Button color='default' />
    </div>

    <div>
      <p>
        <code>
          &:hove, &:focus
        </code>
      </p>
      <Button color='primary' />
    </div>

    <div>
      <p>
        <code>
          &:hove, &:focus
        </code>
      </p>
      <Button color='secondary' />
    </div>

    <div>
      <p>
        <code>
          &:hove, &:focus
        </code>
      </p>
      <Button color='danger' />
    </div>

    </div>

    

    

      
      
    </div>
  );
}

export default App;
