import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import React, { ElementRef, useRef } from 'react';

interface ImageInputProps {
  setImage: (value: any) => void;
  onImageSelected: (value: any) => void;
}
const ImageInput: React.FC<ImageInputProps> = ({ onImageSelected }) => {
  const inputRef = useRef<ElementRef<'input'>>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: 'none' }}
      />

      <Button onClick={onChooseImg}>Choose Image</Button>
    </>
  );
};

export default ImageInput;
