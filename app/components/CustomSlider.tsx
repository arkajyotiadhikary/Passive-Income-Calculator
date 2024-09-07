import { Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


interface CustomSliderProps {
  label: string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  tooltipLabel?: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ label, onChange, min = 0, max = 100, step = 1, defaultValue = 1, tooltipLabel }) => (
  <>
    <div className="mb-2" aria-label={label}>{label}{tooltipLabel &&
      (
        <Tooltip label={tooltipLabel} fontSize='md'>
          <span>
            <FontAwesomeIcon className="ml-2" icon={faCircleInfo} />
          </span>
        </Tooltip>)}
    </div>
    <Slider defaultValue={defaultValue} min={min} max={max} step={step} onChange={onChange} colorScheme="blackAlpha" >
      <SliderTrack h={2}>
        <SliderFilledTrack sx={
          {
            bg: "#afcc54"
          }
        } />
      </SliderTrack>
      <SliderThumb sx={
        {
          bg: "#27252b",
        }
      } />
    </Slider>
  </>
);

export default CustomSlider;
