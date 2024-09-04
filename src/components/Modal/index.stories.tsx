import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";
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
          <Modal.Header>
            <h2 className="text-xl font-semibold dark:text-white text-gray-600">Delete User?</h2>
          </Modal.Header>

          <Modal.Content>
            <p className="dark:text-white text-gray-600">Are You sure to delete the user?</p>
          </Modal.Content>
          <Modal.Footer className="flex justify-between">
            <Button onClick={closeModal} className="w-1/3 justify-center" variant={"ghost"}>
              Cancel
            </Button>
            <Button onClick={closeModal} className="w-1/3 justify-center" variant={"destructive"}>
              Delete
            </Button>
          </Modal.Footer>
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
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          closeOnOutsideClick={false}
          className="bg-yellow-500"
        >
          <Modal.Header showCross={false}>
            <h2 className="text-xl font-semibold dark:text-white text-gray-600">Delete User?</h2>
          </Modal.Header>

          <Modal.Content>
            <p className="dark:text-white text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eos cumque, quo, aliquid
              ratione odit deleniti, doloribus dolores illo culpa magni id consequatur numquam
            </p>
          </Modal.Content>
          <Modal.Footer className="flex justify-between">
            <Button onClick={closeModal} className="w-1/3 justify-center" variant={"ghost"}>
              Cancel
            </Button>
            <Button onClick={closeModal} className="w-1/3 justify-center" variant={"destructive"}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
