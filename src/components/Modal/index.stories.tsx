import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { useModal } from "../../hooks/Modal";
import { Button } from "../Button";
import React, { useState } from "react";
import { Stack } from "../Stack";
import { ThemeProvider, css } from "@emotion/react";
import { lightTheme } from "../../evoke-theme-config";
import { Story } from "@storybook/blocks";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    show: {
      control: { type: "boolean" },
      description: "Controls the visibility of the modal.",
    },
    closeOnOverlayClick: {
      control: { type: "boolean" },
      description: "Close the modal when clicking outside of it.",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Determines whether the cross button inside the modal should be present.",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "full"],
      description: "Size of the modal.",
      defaultValue: "md",
    },
    css: {
      control: "text",
      description: "Apply custom css by emotion serialize style or css object",
    },
  },
  tags: ["autodocs"],
  decorators: [
    Story => {
      return (
        <ThemeProvider theme={lightTheme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  render: () => {
    const [isShowingModal, toggleModal] = useModal();

    return (
      <>
        {/* Modal Trigger */}
        <Button onClick={toggleModal} className="w-fit">
          Open
        </Button>
        {/* Modal */}
        <Modal show={isShowingModal} onClose={toggleModal} closeOnOverlayClick>
          <div className="p-4">This is Sample Modal</div>
        </Modal>
      </>
    );
  },
};

export const PopupModal: Story = {
  render: () => {
    const [isShowingModal, toggleModal] = useModal();
    return (
      <>
        {/* Modal Trigger */}
        <Button onClick={toggleModal} className="w-fit">
          Open
        </Button>
        {/* Modal */}
        <Modal show={isShowingModal} onClose={toggleModal} closeOnOverlayClick size="sm">
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={toggleModal}
            >
              No, cancel
            </button>
          </div>
        </Modal>
      </>
    );
  },
};

export const CustomStyleModal: Story = {
  render: () => {
    const [isShowingModal, toggleModal] = useModal();
    const customStyle = css`
      background-color: #cbd5e1;
    `;

    return (
      <>
        {/* Modal Trigger */}
        <Button onClick={toggleModal} className="w-fit">
          Open
        </Button>
        {/* Modal */}
        <Modal show={isShowingModal} onClose={toggleModal} closeOnOverlayClick>
          <Modal.Header css={customStyle}>
            <h1 className="text-xl font-semibold">Terms of Service</h1>
          </Modal.Header>
          <Modal.Content className="bg-light-modalColor dark:bg-modalColor p-2">
            <p>
              With less than a month to go before the European Union enacts new consumer privacy
              laws for its citizens, companies around the world are updating their terms of service
              agreements to comply. The European Unions General Data Protection Regulation
              (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data
              rights in the European Union. It requires organizations to notify users as soon as
              possible of high-risk data breaches that could personally affect them.
            </p>
            <p>
              The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on
              May 25 and is meant to ensure a common set of data rights in the European Union. It
              requires organizations to notify users as soon as possible of high-risk data breaches
              that could personally affect them.
            </p>
          </Modal.Content>
          <Modal.Footer>
            <Stack spacing="small" className="p-4 bg-slate-300 text-slate-200">
              <Button onClick={toggleModal} className="w-fit">
                Accept
              </Button>
              <Button variant="destructive" onClick={toggleModal} className="w-fit">
                Reject
              </Button>
            </Stack>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const Size: Story = {
  render: () => {
    type ModalSize = "sm" | "md" | "lg" | "full";

    const [isShowingModal, toggleModal] = useModal();
    const [size, setSize] = useState<ModalSize>("md");
    const handleModalClick = (modalSize: ModalSize) => {
      setSize(modalSize);
      toggleModal();
    };

    return (
      <>
        <Stack spacing="small">
          <Button className="w-fit" onClick={() => handleModalClick("md")}>
            Default
          </Button>
          <Button className="w-fit" onClick={() => handleModalClick("sm")}>
            Small
          </Button>
          <Button className="w-fit" onClick={() => handleModalClick("lg")}>
            Large
          </Button>
          <Button className="w-fit" onClick={() => handleModalClick("full")}>
            Full Screen
          </Button>
        </Stack>
        {/* Modal */}
        <Modal
          show={isShowingModal}
          onClose={toggleModal}
          size={size}
          showCloseButton={size !== "full"}
        >
          <Modal.Header>
            <h1 className="text-xl font-semibold">Terms of Service</h1>
          </Modal.Header>
          <Modal.Content>
            <div className="space-y-6 p-4 pt-0">
              <p>
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply. The European Unions General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data
                rights in the European Union. It requires organizations to notify users as soon as
                possible of high-risk data breaches that could personally affect them.
              </p>
              <p>
                The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
                It requires organizations to notify users as soon as possible of high-risk data
                breaches that could personally affect them.
              </p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Stack spacing="small" className="p-4 ">
              <Button onClick={toggleModal} className="w-fit">
                Accept
              </Button>
              <Button variant="destructive" onClick={toggleModal} className="w-fit">
                Reject
              </Button>
            </Stack>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
