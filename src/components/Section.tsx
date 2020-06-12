import { Flex, FlexProps } from '@chakra-ui/core';
import * as React from 'react';

const Section = React.forwardRef(
  (props: FlexProps, ref): JSX.Element => (
    <Flex
      ref={ref}
      as="section"
      direction="column"
      m="0 auto"
      maxW={1350}
      py={0}
      px={[2, 4, 8, 8]}
      {...props}
    />
  ),
);

export default Section;
