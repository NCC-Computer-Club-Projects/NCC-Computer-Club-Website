import React from 'react';
import cow from '@images/sample/cow.jpg';
import './sample.css';

function SampleComponent() {
  return (
    <img src={cow} width={400} height={400} className="test-style"/>
  );
}

function HelloWorld() {
  return <h1>Hello World!</h1>;
}

export default SampleComponent;
export { HelloWorld };