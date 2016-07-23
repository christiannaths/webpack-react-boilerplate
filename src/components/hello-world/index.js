import React from 'react';
import styles from './index.scss';

export default class HelloWorld extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='hello-world'>
        <p>Hello world!</p>
      </div>
    );
  }
}
