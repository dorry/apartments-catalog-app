"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Pagination,
} from "@nextui-org/react";
import { useState } from "react";
// import { useAsyncList } from "@react-stately/data";
// import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";

export default function ApartmentsList() {
  const items = [
    {
      id: 1,
      title: "Scenic Landscape",
      subtitle: "Nature's Beauty",
      imageUrl: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      id: 2,
      title: "City Skyline",
      subtitle: "Urban Wonders",
      imageUrl: "https://nextui.org/images/card-example-3.jpeg",
    },
    {
      id: 3,
      title: "Serene Beach",
      subtitle: "Coastal Retreat",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 4,
      title: "Scenic Landscape",
      subtitle: "Nature's Beauty",
      imageUrl: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      id: 5,
      title: "City Skyline",
      subtitle: "Urban Wonders",
      imageUrl: "https://nextui.org/images/card-example-3.jpeg",
    },
    {
      id: 6,
      title: "Serene Beach",
      subtitle: "Coastal Retreat",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    {
      id: 7,
      title: "Scenic Landscape",
      subtitle: "Nature's Beauty",
      imageUrl: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      id: 8,
      title: "City Skyline",
      subtitle: "Urban Wonders",
      imageUrl: "https://nextui.org/images/card-example-3.jpeg",
    },
    {
      id: 9,
      title: "Serene Beach",
      subtitle: "Coastal Retreat",
      imageUrl: "https://nextui.org/images/card-example-2.jpeg",
    },
    // Add more items as needed
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentItems.map((item) => (
          <Card key={item.id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{item.title}</h4>
              <small className="text-default-500">{item.subtitle}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={item.imageUrl}
                width={270}
                height={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          total={totalPages}
          initialPage={1}
          page={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
