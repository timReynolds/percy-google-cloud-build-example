import styled from "styled-components";
import {
  space,
  color,
  width,
  flex,
  order,
  alignSelf,
  fontSize,
  maxWidth
} from "styled-system";

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
  ${maxWidth}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
  ...maxWidth.propTypes
};

export default Box;
