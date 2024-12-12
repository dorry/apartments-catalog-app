import ApartmentsList from "@/components/apartments/list";
import ApartmentsService from "@/services/apartments.service";

export default function Home() {
  const apartmentsService = new ApartmentsService();
  const apartments = apartmentsService.getApartments();
  return (
    <div>
      <ApartmentsList />
    </div>
  );
}
