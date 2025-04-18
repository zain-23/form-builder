'use client';
import { useState, useRef, useEffect } from 'react';
import { Input } from '../ui'; // Assuming this is your custom Input component

const EditableInput = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('EditableInput');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
  };
  return (
    <div className='h-9'>
      {!isEditing ? (
        <span
          className='hover:bg-accent h-full inline-flex items-center px-3 text-sm'
          onClick={() => setIsEditing(true)}
        >
          {value}
        </span>
      ) : (
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          className='h-full'
        />
      )}
    </div>
  );
};

export { EditableInput };
