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

Heading.defaultProps = {
  fontSize: 6
}

export default Heading;
