import { React } from 'react';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ modalClose, imageSrcToModal, tagsImagetoModal }) => {
    return (
      <div onClick={modalClose} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={imageSrcToModal} alt={tagsImagetoModal} />
        </div>
      </div>
    );
  }
Modal.propTypes = {
  state: PropTypes.object,
  modalClose: PropTypes.func,
};