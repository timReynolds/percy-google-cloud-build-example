import styled from "styled-components";

import {
  space,
  color,
  fontWeight,
  borders,
  borderColor,
  borderRadius
} from "styled-system";

const Button = styled.button`
  ${space}
  ${color}
  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}
  text-decoration: none;
  display: inline-block;
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
  color: "black",
  bg: "#EB975F",
  border: 0,
  borderRadius: 4
};

export default Button;
