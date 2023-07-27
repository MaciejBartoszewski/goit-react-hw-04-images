import { React } from 'react';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';

export const Button = ({pagination}) => { 
    return (
      <button className={styles.Button} onClick={pagination}>
        Load More
      </button>
    );
  };

Button.propTypes = {
  pagination: PropTypes.func,
};