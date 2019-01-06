import styled from "styled-components";
import {
  fontFamily,
  fontWeight,
  fontSize,
  textAlign,
  lineHeight,
  letterSpacing
} from "styled-system";

const Heading = styled.h2`
  ${fontFamily}
  ${fontWeight}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
`;

Heading.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...fontSize.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes
};

export default Heading;
