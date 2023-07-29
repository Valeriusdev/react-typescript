import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const HW4 = () => {

  const [currentText, setCurrentText] = useState('');
  const [texts, setTexts] = useState<string[]>([

  ]);

  const handleSave = () => {
    setTexts([currentText, ...texts]);
    setCurrentText('');
  };

  return (
    <div id={'hw04'}>

    </div>
  );
};

