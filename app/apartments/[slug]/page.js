import ApartmentDetails from "@/components/apartments/details";
import ApartmentDetailsService from "@/services/apartmentDetails.service";
export default async function ApartmentPage({ params }) {
  const id = params.slug;
  const apartmentDetailsService = new ApartmentDetailsService(id);
  const apartmentDetails = await apartmentDetailsService.getApartmentDetails(
    id
  );
  return <ApartmentDetails apartment={apartmentDetails} />;
}
