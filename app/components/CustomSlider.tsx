import { Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface CustomSliderProps {
      label: string;
      currentValue: number;
      onChange: (value: number) => void;
      min?: number;
      max?: number;
      step?: number;
      defaultValue?: number;
      tooltipLabel?: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
      label,
      onChange,
      currentValue,
      min = 0,
      max = 100,
      step = 1,
      defaultValue = 1,
      tooltipLabel,
}) => (
      <>
            <div className="mb-2 flex justify-between" aria-label={label}>
                  <div>
                        {label}
                        {tooltipLabel && (
                              <Tooltip label={tooltipLabel} fontSize="md">
                                    <span>
                                          <FontAwesomeIcon className="ml-2" icon={faCircleInfo} />
                                    </span>
                              </Tooltip>
                        )}
                  </div>
                  <input
                        className="w-16 pl-2 text-right bg-transparent outline-none"
                        type="number"
                        value={currentValue}
                        onChange={(e) => {
                              const value = Number(e.target.value);
                              if (value < min) {
                                    onChange(min);
                              } else if (value > max) {
                                    onChange(max);
                              } else {
                                    onChange(value);
                              }
                        }}
                        min={min}
                        max={max}
                  />
            </div>
            <Slider
                  defaultValue={defaultValue}
                  min={min}
                  max={max}
                  step={step}
                  value={currentValue}
                  onChange={onChange}
                  colorScheme="blackAlpha"
            >
                  <SliderTrack h={2}>
                        <SliderFilledTrack
                              sx={{
                                    bg: "#afcc54",
                              }}
                        />
                  </SliderTrack>
                  <SliderThumb
                        sx={{
                              bg: "#27252b",
                        }}
                  />
            </Slider>
      </>
);

export default CustomSlider;
