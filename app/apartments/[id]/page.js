import ApartmentDetails from "@/components/apartments/details";
import ApartmentDetailsService from "@/services/apartmentDetails.service";
export default async function ApartmentPage({ params }) {
  const { id } = await params;
  const apartmentDetailsService = new ApartmentDetailsService();
  const apartmentDetails = await apartmentDetailsService.getApartmentDetails(
    id
  );
  return <ApartmentDetails apartment={apartmentDetails} />;
}
