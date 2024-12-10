import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
export default function MainHeader() {
  const showModal = () => {
    console.log("show modal test");
  };

  return (
    <Navbar maxWidth="full" shouldHideOnScroll>
      <NavbarBrand>
        <Image src="/globe.svg" alt="logomark" width={20} height={20} />
        <p className="font-bold text-inherit">Apartments Catalog</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button onPress={showModal()} color="primary" variant="flat">
            Add
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
