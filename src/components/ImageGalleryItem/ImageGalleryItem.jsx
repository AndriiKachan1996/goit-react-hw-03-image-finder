// import { ImageGalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemImage,
  ImageGalleryListItem,
} from './ImegeGalleryItem.styled';
// import { ImageGalleryListItem } from './ImegeGalleryItem.styled';

const ImageGalleryItem = ({ picture, onPictureClick }) => {
  return (
    <ImageGalleryListItem onClick={onPictureClick}>
      <ImageGalleryItemImage
        className="ImageGalleryItem-image"
        src={picture.webformatURL}
        alt=""
      />
    </ImageGalleryListItem>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({ webformatURL: PropTypes.string.isRequired }),
  onPictureClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
