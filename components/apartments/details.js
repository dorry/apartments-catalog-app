"use client";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function ApartmentDetails({ apartment }) {
  return (
    <div>
      <Card className="shadow-lg max-h-full">
        <CardHeader>
          <h2 className="text-2xl font-bold mb-4">{apartment.name}</h2>
        </CardHeader>
        <CardBody className="flex flex-col min-h-96">
          <div className="grid grid-cols-1 align-middle md:grid-cols-4 gap-1 w-full mb-6">
            {apartment.images.map((image) => (
              <Image
                src={image}
                key={image}
                alt={`Image`}
                width={270}
                height={270}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p>
                <strong>ID:</strong> {apartment.id}
              </p>
              <p>
                <strong>Number:</strong> {apartment.number}
              </p>
              <p>
                <strong>Size:</strong> {apartment.size} sqm
              </p>
              <p>
                <strong>Price:</strong> ${apartment.price}
              </p>
              <p>
                <strong>Project:</strong> {apartment.project}
              </p>
              <p>
                <strong>Address:</strong> {apartment.address}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p>{apartment.description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
