import { Button } from '@/components/ui/Button';
import React, { useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';

interface ImageCropperProps {
  image: string;
  onCropDone: (e: any) => void;
  onCropCancel: (e: any) => void;
}
const ImageCropper: React.FC<ImageCropperProps> = ({
  image,
  onCropDone,
  onCropCancel,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);

  const onCropComplete = (
    croppedAreaPercentage: Area,
    croppedAreaPixels: Area,
  ) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (event: React.FormEvent<HTMLDivElement>) => {
    setAspectRatio((event.target as any).value);
  };

  return (
    <div className="h-full w-full  flex-1 flex-col  gap-10 ">
      <div className="w-full h-1/2 relative">
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: '100%',
              height: '100%',
              backgroundColor: '#fff',
            },
          }}
        />
      </div>

      <div className="pt-5">
        <div
          className="flex gap-10"
          onChange={onAspectRatioChange}
        >
          <div className="flex gap-3">
            <input
              type="radio"
              value={1 / 1}
              name="ratio"
            />{' '}
            1:1
          </div>
          <div className="flex gap-3">
            <input
              type="radio"
              value={5 / 4}
              name="ratio"
            />{' '}
            5:4
          </div>
          <div className="flex gap-3">
            <input
              type="radio"
              value={4 / 3}
              name="ratio"
            />{' '}
            4:3
          </div>
          <div className="flex gap-3">
            <input
              type="radio"
              value={3 / 2}
              name="ratio"
            />{' '}
            3:2
          </div>
          <div className="flex gap-3">
            <input
              type="radio"
              value={5 / 3}
              name="ratio"
            />{' '}
            5:3
          </div>
          <div className="flex gap-3">
            <input
              type="radio"
              value={16 / 9}
              name="ratio"
            />{' '}
            16:9
          </div>
          <div className="flex gap-3">
            <input
              type="radio"
              value={3 / 1}
              name="ratio"
            />{' '}
            3:1
          </div>
        </div>

        <div className="w-full justify-center flex gap-10 pt-5">
          <Button onClick={onCropCancel}>Cancel</Button>

          <Button
            onClick={() => {
              onCropDone(croppedArea);
            }}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
