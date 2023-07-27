import { React } from 'react';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ arrayOfImages, modalOpen }) => {
    return (
      <>
        {arrayOfImages.map(image => (
          <li onClick={modalOpen} key={image.id} className={styles.ImageGalleryItem}>
            <img
              className={styles.ImageGalleryItemImage}
              src={image.webformatURL}
              alt={image.tags}
            />
          </li>
        ))}
      </>
    );
  }
ImageGalleryItem.propTypes = {
  state: PropTypes.object,
  modalOpen: PropTypes.func,
};