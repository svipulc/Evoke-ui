import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";
import { Button } from "../Button";
import React, { useEffect, useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Controls the visibility of the modal.",
    },
    closeOnOutsideClick: {
      control: { type: "boolean" },
      description: "Close the modal when clicking outside of it.",
    },
    scrollBehaviour: {
      control: { type: "boolean" },
      description: "Determines whether the content inside the modal is scrollable.",
    },
    showCross: {
      control: { type: "boolean" },
      description: "Determines whether the cross button inside the modal should be present.",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "full"],
      description: "Size of the modal.",
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  args: {
    size: "md",
    scrollBehaviour: false,
    closeOnOutsideClick: true,
    showCross: true,
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
      <>
        {/* Modal Trigger */}
        <Button onClick={openModal}>Open Modal</Button>

        {/* Modal */}
        <Modal {...args} isOpen={isOpen} onClose={closeModal}>
          <Modal.Header>
            <h2 className="text-xl font-semibold dark:text-white text-gray-600">Delete User?</h2>
          </Modal.Header>

          <Modal.Content>
            <p className="dark:text-white text-gray-600">Are You sure to delete the user?</p>
          </Modal.Content>
          <Modal.Footer className="flex justify-between">
            <Button onClick={closeModal} className="w-25 justify-center" variant={"outline"}>
              Cancel
            </Button>
            <Button onClick={closeModal} className="w-25 justify-center" variant={"destructive"}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const clickoutsideModal: Story = {
  args: {
    closeOnOutsideClick: false,
    showCross: false,
    size: "md",
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
      <>
        {/* Modal Trigger */}
        <Button onClick={openModal}>Open Modal</Button>

        {/* Modal */}
        <Modal {...args} isOpen={isOpen} onClose={closeModal}>
          <Modal.Header>
            <h2 className="text-xl font-semibold dark:text-white text-gray-600">Delete User?</h2>
          </Modal.Header>

          <Modal.Content>
            <p className="dark:text-white text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi vitae
              voluptatibus, dicta quod nihil vero nesciunt sunt repudiandae dignissimos quam
              blanditiis dolore odit veniam itaque vel. Provident reprehenderit nesciunt expedita
              voluptas ullam nisi ex deserunt mollitia quam quaerat, numquam a nulla. Possimus
              debitis, reprehenderit voluptate quidem corrupti ad officia cum, alias optio inventore
              labore aspernatur asperiores vel. Culpa alias eum possimus repellendus dolorum id
            </p>
          </Modal.Content>
          <Modal.Footer className="flex justify-between">
            <Button
              onClick={closeModal}
              className="w-25 justify-center"
              variant={"outline"}
              aria-label="modal-close"
            >
              Cancel
            </Button>
            <Button
              onClick={closeModal}
              className="w-25 justify-center"
              variant={"destructive"}
              aria-label="modal-close"
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const ModalWithLoadingContent: Story = {
  args: {
    closeOnOutsideClick: false,
    scrollBehaviour: true,
    size: "lg",
  },

  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState<string | null>(null);
    const openModal = () => {
      setIsOpen(true);
      setIsLoading(true);
      setContent(null);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => {
          setIsLoading(false);
          setContent(
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi vitae
              voluptatibus, dicta quod nihil vero nesciunt sunt repudiandae dignissimos quam
              blanditiis dolore odit veniam itaque vel. Provident reprehenderit nesciunt expedita
              voluptas ullam nisi ex deserunt mollitia quam quaerat, numquam a nulla. Possimus
              debitis, reprehenderit voluptate quidem corrupti ad officia cum, alias optio inventore
              labore aspernatur asperiores vel. Culpa alias eum possimus repellendus dolorum id
              ducimus obcaecati. Esse voluptatibus laboriosam reprehenderit animi voluptas hic
              temporibus nisi iure quia quo alias officiis, aliquam earum corporis illo maiores
              beatae perspiciatis. Id, sequi. Nisi nulla quo atque pariatur, debitis voluptatibus
              est dolore quam veniam quasi, veritatis ad. Voluptas hic praesentium facere laboriosam
              officia ut magnam iste illum sed recusandae tempora ipsum, sint voluptatum, maiores
              deleniti vero enim aliquam earum distinctio quod velit. Quod, cupiditate nostrum vero
              quisquam labore laboriosam? Quia qui in voluptates quibusdam officiis quasi quo!
              Aliquam, id. Aut eius repudiandae veritatis blanditiis? Vitae tempore aliquam illo
              repudiandae quas rem vel facilis excepturi, optio, aliquid ratione quae maxime
              nostrum, minima beatae. Blanditiis accusamus est nam ullam aliquam assumenda molestiae
              enim nulla quibusdam ea a tenetur vel qui commodi, sunt cumque. Dolores alias enim
              doloremque, harum ipsa hic adipisci tempora velit et optio, fugit, reiciendis
              obcaecati quos numquam libero sequi dolore reprehenderit mollitia aspernatur minima
              accusantium laudantium molestias illo. Deserunt eos tempora beatae illum sequi,
              reiciendis nam commodi molestiae veritatis doloremque cum necessitatibus aperiam
              placeat? Natus mollitia amet quibusdam porro inventore quae expedita, magni quo.
              Inventore, nisi laboriosam facilis delectus fuga quis sunt dolores. Aperiam ex sequi
              vel eaque dolore beatae rerum mollitia adipisci rem deserunt quaerat numquam at, modi
              minima eos delectus earum eius totam non ut recusandae? Laboriosam quidem recusandae
              placeat quas dolores facere commodi eveniet maxime, obcaecati nihil voluptate quasi,
              expedita maiores, rem exercitationem itaque mollitia debitis beatae eligendi illo.`
          );
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    return (
      <>
        <Button onClick={openModal}>Open Modal</Button>

        <Modal {...args} isOpen={isOpen} onClose={closeModal}>
          <Modal.Header>
            <h2 className="text-xl font-semibold dark:text-white text-gray-600">
              Modal with Loading Content
            </h2>
          </Modal.Header>

          <Modal.Content className="text-justify px-2">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <p className="dark:text-white  text-gray-600">{content}</p>
            )}
          </Modal.Content>

          <Modal.Footer className="flex justify-end">
            <Button onClick={closeModal} className="w-25 justify-center" variant="outline">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
