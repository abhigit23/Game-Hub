import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack padding={{ base: 2, md: 5 }}>
      <Link to="/">
        <Image
          src={logo}
          width={{ base: "125px", md: "70px" }}
          objectFit="cover"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
