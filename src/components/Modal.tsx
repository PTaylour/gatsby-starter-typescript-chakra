import {
  Button,
  Heading,
  IModal,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/core';
import * as React from 'react';

const ModalCovidHelp = ({ onClose, ...rest }: Omit<IModal, 'children'>) => (
  <Modal size="lg" onClose={onClose} {...rest}>
    <ModalOverlay />
    <ModalContent alignItems="center" px={[12, 12, 16]} py={[8, 8, 12]}>
      <ModalHeader>
        <Heading size="lg">It is a modal!</Heading>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text size="md" mb={4}>
          Some blurb explaining big ideas
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={onClose}
          color="black"
          borderColor="black"
          border="1px"
          variantColor="lime"
        >
          Got it!
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ModalCovidHelp;
