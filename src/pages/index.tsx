import { Button, Heading, Stack, useDisclosure } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { path } from 'ramda';
import React from 'react';

import { ArrowUpRightIcon } from '../components/icons';
import { Layout } from '../components/Layout';
import Modal from '../components/Modal';
import Section from '../components/Section';

const MotionButton = motion.custom(Button);

const bigData = {
  homepage: {
    title: 'hello world!',
  },
};

export default function IndexPage(): JSX.Element {
  const { onOpen, ...modalProps } = useDisclosure();
  return (
    <Layout>
      <Modal {...modalProps} />
      <Section paddingTop={32} textAlign="center" alignItems="center">
        <Stack spacing={8}>
          <Heading>{path(['homepage', 'title'], bigData)}</Heading>
          <MotionButton
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            onClick={onOpen}
            color="black"
            borderColor="black"
            border="1px"
            variantColor="lime"
          >
            OPEN!
            <ArrowUpRightIcon />
          </MotionButton>
        </Stack>
      </Section>
    </Layout>
  );
}
