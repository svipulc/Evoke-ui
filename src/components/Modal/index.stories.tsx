import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./index";
import { Button } from "../Button";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <>
        {/* Modal Trigger */}
        <Button onClick={openModal}>Open Modal</Button>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={closeModal}>
          <Modal.Body>
            <Modal.Header>
              <h2 className="text-xl font-semibold dark:text-white text-gray-600">Modal Title</h2>
            </Modal.Header>

            <Modal.Content>
              <p className="dark:text-white text-gray-600">This is the body of the modal.</p>
            </Modal.Content>
            <Modal.Footer>
              <Button onClick={closeModal} className="w-1/3 justify-center">
                Close
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </>
    );
  },
};

export const clickousideModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <>
        {/* Modal Trigger */}
        <Button onClick={openModal}>Open Modal</Button>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={closeModal} closeOnOutsideClick={false}>
          <Modal.Body>
            <Modal.Header>
              <h2 className="text-xl font-semibold dark:text-white text-gray-600">Modal Title</h2>
            </Modal.Header>

            <Modal.Content>
              <p className="dark:text-white text-gray-600">This is the body of the modal.</p>
            </Modal.Content>
            <Modal.Footer>
              <Button onClick={closeModal} className="w-1/3 justify-center">
                Close
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </>
    );
  },
};
