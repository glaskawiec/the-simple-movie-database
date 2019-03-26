import React, { useState, useContext } from 'react';
import ToggleThumb from './ToggleThumb';
import ToggleTrackX from './ToggleTrackX';
import Toggle from './Toggle';
import ToggleTrack from './ToggleTrack';
import ToggleTrackCheck from './ToggleTrackCheck';
import { appContext } from '../../App';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { setTheme } = useContext(appContext);

  const onChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Toggle
      onClick={onChange}
    >
      <ToggleTrack>
        <ToggleTrackCheck
          isChecked={isChecked}
        >
          <MoonIcon />
        </ToggleTrackCheck>
        <ToggleTrackX
          isChecked={isChecked}
        >
          <SunIcon />
        </ToggleTrackX>
      </ToggleTrack>
      <ToggleThumb
        isChecked={isChecked}
      />
    </Toggle>
  );
};

export default ThemeToggle;
