import React, { useRef, useMemo } from "react";
import "./input.css";
import useHover from "../../hooks/useHover";
import useFocus from "../../hooks/useFocus";

const Input = ({
  error = false,
  disabled = false,
  helperText,
  startIcon = false,
  endIcon = false,
  value,
  size,
  fullWidth = false,
  multiline = false,
  row = 1
}) => {
  const ref = useRef();
  const isHovering = useHover(ref);
  const isFocusing = useFocus(ref);

  // Определяем классы для инпута
  const inputClasses = useMemo(() => {
    const classes = [
      error ? 'error' : '',
      startIcon ? 'input__img_start' : endIcon ? 'input__img_end' : ''
    ].filter(Boolean);
    
    return [...classes, 'input'].join(' ');
  }, [error, startIcon, endIcon]);

  // Определяем стили для инпута
  const inputStyles = useMemo(() => {
    const styles = {};
    
    if (size === 'sm') styles.height = '20px';
    else if (size === 'md') styles.height = '60px';
    
    if (fullWidth) styles.width = '100%';
    
    return styles;
  }, [size, fullWidth]);

  // Определяем цвет текста для label и helperText
  const textColor = useMemo(() => {
    if (isHovering && error && !isFocusing) return '#000';
    if (error && isFocusing) return '#D32F2F';
    if (!isHovering && error && !isFocusing) return '#D32F2F';
    if (!error && isFocusing) return '#5A72FE';
    return '#000';
  }, [error, isHovering, isFocusing]);

  return (
    <div className="input__content">
      {helperText && (
        <p className="label" style={{ color: textColor }}>
          {helperText}
        </p>
      )}

      {multiline ? (
        <textarea
          ref={ref}
          name="postContent"
          rows={row}
          style={inputStyles}
          className={inputClasses}
          placeholder="Placeholder"
          disabled={disabled}
          value={value}
        />
      ) : (
        <input
          ref={ref}
          type="text"
          style={inputStyles}
          className={inputClasses}
          placeholder="Placeholder"
          disabled={disabled}
          value={value}
        />
      )}

      <label className="label" style={{ color: textColor }}>
        Label
      </label>
    </div>
  );
};

export default Input;