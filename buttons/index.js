import "./buttons.css";
import PropTypes from "prop-types";

const variant = {
  default: {
    bg: "#F7F7F7",
    border: "#EEEEEE",
    text: "#EEEEEE",
  },
  primary: {
    bg: "#185ADB",
    border: "#1248b5",
    text: "#FFF",
  },
  secondary: {
    bg: "#D1D1D1",
    border: "#C8C6C6",
    text: "#FFF",
  },
  success: {
    bg: "#2EB872",
    border: "#269b61",
    text: "#FFF",
  },
  warning: {
    bg: "#FFD93D",
    border: "#d3b22e",
    text: "#000",
  },
  danger: {
    bg: "#FD5D5D",
    border: "#ce4949",
    text: "#fff",
  },
  info: {
    bg: "#6FB2D2",
    border: "#4687a5",
    text: "#000",
  },
  dark: {
    bg: "#171717",
    border: "#171717",
    text: "#0c0c0c",
  },
};

const radiusVal = {
  small: 2,
  medium: 4,
  full: 32,
};

const sizes = {
  small: {
    padding: ".4rem 1rem",
    fontSize: 14,
  },
  medium: {
    padding: ".6rem 1.4rem",
    fontSize: 16,
  },
  strong: {
    padding: ".7rem 1.8rem",
    fontSize: 17,
  },
};
export const Button = ({
  label,
  type,
  border,
  radius = 0,
  size = "small",
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      style={{
        border: border
          ? `2px solid ${variant[type ? type : "default"]?.border}`
          : undefined,
        borderRadius: radiusVal[radius],
        ...sizes[size],
        cursor: disabled ? "inherit" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
      className={`buttons buttons-${type}`}
    >
      {label}
    </button>
  );
};

Button.prototype = {
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  radius: PropTypes.number,
  onClick: PropTypes.func,
  label: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};
