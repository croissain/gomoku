const Resizer = ({
  min,
  max,
  width,
  height,
  onWidthChange,
  onHeightChange,
  isPlaying,
}) => {
  return (
    <>
      <p>
        Board Size: {width} x {height}
      </p>
      <div className={`size-field ${isPlaying ? "hide" : ""}`}>
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
    </>
  );
};

export default Resizer;
