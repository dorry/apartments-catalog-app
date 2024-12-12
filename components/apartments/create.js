"use client";
import React, { use, useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Form,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import ApartmentsService from "@/services/apartments.service";
import { useApartmentStore } from "@/lib/store/apartments.store";

export default function CreateModal({ isOpen, onOpenChange }) {
  const { postApartment, error, setError } = useApartmentStore();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    onOpenChange(false);
    await postApartment(formData);
  };

  const resetState = () => {
    setFormData({
      name: "",
      number: "",
      size: "",
      price: "",
      project: "",
      description: "",
      address: "",
      images: [],
    });

    setError();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <Form
              onSubmit={handleSubmit}
              validationBehavior="native"
              className="space-y-4"
            >
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody className="grid grid-cols-2 gap-4 w-full">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  isRequired
                />
                <Input
                  label="Unit Number"
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
                <Input
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  isRequired
                />
                <Textarea
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  isRequired
                  className="col-span-2"
                />
                <Input
                  type="file"
                  label="Images"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  isRequired
                  className="col-span-2"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  Submit
                </Button>
                <Button type="button" onPress={resetState}>
                  Reset
                </Button>
              </ModalFooter>
            </Form>
            {error ? <div className="text-red-500">{error}</div> : null}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
