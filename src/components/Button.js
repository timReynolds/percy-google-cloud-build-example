import styled from "styled-components";

import {
  space,
  color,
  fontWeight,
  borders,
  borderColor,
  borderRadius
} from "styled-system";

const Button = styled.a`
  ${space}
  ${color}
  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}
  text-decoration: none;
`;

Button.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...borders.propTypes,
  ...borderRadius.propTypes,
  ...borderColor.propTypes
};

Button.defaultProps = {
  fontSize: "inherit",
  fontWeight: "bold",
  m: 0,
  px: 5,
  py: 3,
  color: "white",
  bg: "blue",
  border: 0,
  borderRadius: 4
};

export default Button;
