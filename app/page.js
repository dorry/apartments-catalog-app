import ApartmentsList from "@/components/apartments/list";
import ApartmentsService from "@/services/apartments.service";

export default async function Home() {
  const apartmentsService = new ApartmentsService();
  const apartments = await apartmentsService.getApartments();
  return (
    <div>
      <ApartmentsList />
    </div>
  );
}
