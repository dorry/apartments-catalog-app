"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Input,
  Pagination,
} from "@nextui-org/react";
import { useEffect } from "react";
import { useApartmentStore } from "@/lib/store/apartments.store";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

export default function ApartmentsList() {
  const { apartments, loading, error, fetchApartments } = useApartmentStore();

  useEffect(() => {
    fetchApartments();
  }, [fetchApartments]);

  const handleSearchChange = useDebouncedCallback((e) => {
    const { name, value } = e.target;
    fetchApartments(value);
  }, 300);
  // const [currentPage, setCurrentPage] = useState(1);
  // const ITEMS_PER_PAGE = 8;
  // const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const endIndex = startIndex + ITEMS_PER_PAGE;
  // const currentItems = items.slice(startIndex, endIndex);

  const renderPage = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {apartments.map((apartment) => (
          <Link key={apartment.id} href={`/apartments/${apartment.id}`}>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl w-full"
                  src={apartment.images[0]}
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <h4 className="font-bold text-large">{apartment.name}</h4>
                <small className="text-default-500">{apartment.project}</small>
                <p className="text-default-700 w-full text-right font-bold text-lg">
                  {apartment.price} EGP
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Input
        className="p-4 w-96"
        label="Search"
        onChange={handleSearchChange}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {renderPage()}

      <div className="flex justify-center mt-4">
        {/* <Pagination
          total={totalPages}
          initialPage={1}
          page={currentPage}
          onChange={setCurrentPage}
        /> */}
      </div>
    </div>
  );
}
