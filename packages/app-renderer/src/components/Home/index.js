import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '@/constants/routes.json';
import icon from '@/assets/img/icon.png';
import styles from './style.css';

/** FIXME: make jest support this webpack alias in require.context */
const files = require.context('../../assets/img', false, /\.svg$/);
files.keys().forEach(files);

export default class Home extends Component {
  handleCrash = () => {
    console.log(icon);
    process.crash();
  };
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <div>
          <button onClick={this.handleCrash}>crash</button>
        </div>
      </div>
    );
  }
}