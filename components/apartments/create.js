"use client";
import React, { use, useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
  Form,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

export default function CreateModal({ isOpen, onOpenChange }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    size: "",
    price: "",
    project: "",
    description: "",
    address: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    onOpenChange(false);
    console.log(formData);
    // Handle form submission here
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <Card>
                <CardBody>
                  <Form
                    onSubmit={handleSubmit}
                    validationBehavior="native"
                    className="space-y-4"
                  >
                    <Input
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      isRequired
                    />
                    <Input
                      label="Number"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      isRequired
                    />
                    <Input
                      label="Size"
                      name="size"
                      type="number"
                      value={formData.size}
                      onChange={handleInputChange}
                      isRequired
                    />
                    <Input
                      label="Price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleInputChange}
                      isRequired
                    />
                    <Input
                      label="Project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      isRequired
                    />
                    <Textarea
                      label="Description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      isRequired
                    />
                    <Input
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      isRequired
                    />
                    <Input
                      type="file"
                      label="Images"
                      name="images"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      isRequired
                    />
                  </Form>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={handleSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
