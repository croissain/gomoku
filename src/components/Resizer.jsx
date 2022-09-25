const Resizer = ({
  min,
  max,
  width,
  height,
  onWidthChange,
  onHeightChange,
}) => {
  return (
    <div className="size-field">
      <p>Board Size </p>
      <div className="slider">
        <label className="slider-label">W</label>
        <input
          className="slider-input"
          type="range"
          min={min}
          max={max}
          value={width}
          onChange={onWidthChange}
        />
      </div>
      <div className="slider">
        <label className="slider-label">H</label>
        <input
          className="slider-input"
          type="range"
          min={min}
          max={max}
          value={height}
          onChange={onHeightChange}
        />
      </div>
    </div>
  );
};

export default Resizer;
