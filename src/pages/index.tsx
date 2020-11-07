import { Heading, HStack, Stack } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { path } from 'ramda';
import React from 'react';

import { ArrowUpRightIcon } from '../components/icons';
import { Layout } from '../components/Layout';
import Section from '../components/Section';

const MotionHStack = motion.custom(HStack);

const bigData = {
  homepage: {
    title: 'hello world!!',
  },
};

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Section paddingTop={32} textAlign="center" alignItems="center">
        <Stack spacing={8}>
          <Heading color="green.500" size="xl">
            {path(['homepage', 'title'], bigData)}
          </Heading>
          <MotionHStack
            borderRadius="sm"
            boxSize="40px"
            bg="red.300"
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpRightIcon />
          </MotionHStack>
        </Stack>
      </Section>
    </Layout>
  );
}
