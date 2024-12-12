import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function ApartmentDetails({ apartment }) {
  return (
    <div className="m-6">
      <h2 className="text-2xl font-bold mb-4">{apartment.name}</h2>
      <div className="flex flex-col min-h-96 w-full">
        <div className="grid grid-cols-1 align-middle md:grid-cols-2 xl:grid-cols-4 gap-1 w-full mb-6">
          {apartment.images.map((image) => (
            <Image
              src={image}
              key={image}
              alt={`Image`}
              width="100%"
              className="object-cover rounded-lg h-48"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
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
      </div>
    </div>
  );
}
