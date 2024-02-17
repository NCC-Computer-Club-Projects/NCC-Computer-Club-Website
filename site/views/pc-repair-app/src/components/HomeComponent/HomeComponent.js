import React from 'react';
import SampleComponent, { HelloWorld } from '../Sample/Sample';

export default function HomeComponent() {
  return (
    <div id="HomeComponent">
      <HelloWorld/>
      <SampleComponent/>
    </div>
  );
}