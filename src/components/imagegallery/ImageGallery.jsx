import { React } from 'react';
import styles from '../styles/styles.module.css';

export const ImageGallery = ({children}) => {
    return <ul className={styles.ImageGallery}>{children}</ul>;
  };
