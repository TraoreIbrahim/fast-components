import "./switchs.css";
import cx from "classnames";
import PropTypes from "prop-types";

export const SwitchButton = ({
  checked = false,
  onChange,
  uncheckedBg = "#ccc",
  checkedBg = "#185ADB",
  disabled = false,
  rounded = false,
}) => {
  const sliderCx = cx("switch-slider", {
    "switch-rounded": rounded,
  });
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
        disabled={disabled}
      />
      <span
        className={sliderCx}
        style={{
          backgroundColor: checked ? checkedBg : uncheckedBg,
          cursor: disabled ? "default" : "pointer",
        }}
      />
    </label>
  );
};

SwitchButton.prototype = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  onChange: PropTypes.func,
  uncheckedBg: PropTypes.string,
  checkedBg: PropTypes.string,
};
