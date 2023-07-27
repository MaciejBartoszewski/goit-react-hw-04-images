import { useState } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imagegallery/ImageGallery';
import { ImageGalleryItem } from './imagegalleryitem/ImageGalleryItem';
import { Button } from './button/Button';
import { Loader } from './loader/Loader';
import { Modal } from './modal/Modal';
import { fetchData } from './Api';

export const App = () => {
  const [arrayOfImages, setArrayOfImages] = useState([]);
  const [page] = useState(1);
  let [quantityElements, setQuantityElements] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValuee, setInputValuee] = useState('');
  const [open, setOpen] = useState(false);
  const [imageSrcToModal, setImageSrcToModal] = useState('');
  const [tagsImageToModal, setTagsImageToModal] = useState('');
  // componentDidMount() {
  //   document.addEventListener('keydown', e => {
  //     if (e.key === 'Escape') {
  //       this.setState({ open: false });
  //     }
  //   });
  // }
  const settingInputValue = e => {
    setInputValuee(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target[1].value;
    // let page = this.state.page;
    // let quantityElements = this.state.quantityElements;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    fetchData(inputValue, page, quantityElements).then(resp => {
      if (inputValue === '') {
        return null;
      }
      setArrayOfImages([...resp.data.hits]);
    });
  };
  const handlePagination = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    let inputValue = inputValuee;
    // let page = this.state.page;
    // let quantityElements = this.state.quantityElements;
    setQuantityElements((quantityElements += 12));
    // this.setState(prevState => {
    //   quantityElements = prevState.quantityElements;
    fetchData(inputValue, page, quantityElements).then(resp => {
      setArrayOfImages([...resp.data.hits]);
    });
  };

  const modalOpen = e => {
    setImageSrcToModal(e.target.src);
    setTagsImageToModal(e.target.alt);
    setOpen(true);
  };
  const modalClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar
        submit={handleSubmit}
        inputValue={settingInputValue} />
      <ImageGallery>
        <ImageGalleryItem arrayOfImages={arrayOfImages} modalOpen={modalOpen} />
      </ImageGallery>
      {arrayOfImages.length === 0 ? null : (
        <Button pagination={handlePagination} />
      )}
      <Loader isLoading={isLoading} />
      {!open ? null : (
        <Modal 
        imageSrcToModal={imageSrcToModal} 
        tagsImageToModal={tagsImageToModal} 
        modalClose={modalClose} />
      )}
    </div>
  );
};