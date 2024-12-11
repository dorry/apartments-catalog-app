import ApartmentDetails from "@/components/apartments/details";

export default function ApartmentPage() {
  const apartment = {
    id: "123",
    name: "Luxury Downtown Apartment",
    number: "A101",
    size: 100,
    price: 250000,
    project: "City Center Residences",
    description: "A beautiful apartment in the heart of the city...",
    address: "123 Main St, Cityville, State 12345",
    images: [
      "https://nextui.org/images/card-example-1.jpeg",
      "https://nextui.org/images/card-example-2.jpeg",
      "https://nextui.org/images/card-example-3.jpeg",
      "https://nextui.org/images/card-example-4.jpeg",
    ],
  };
  return <ApartmentDetails apartment={apartment} />;
}
