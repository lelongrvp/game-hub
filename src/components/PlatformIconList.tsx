import { HStack, Icon } from "@chakra-ui/react" 
import { Platform } from "../hooks/useGames"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { BsNintendoSwitch,  BsGlobe } from "react-icons/bs"
import { MdPhoneIphone } from "react-icons/md"
import { IconType } from "react-icons/lib/esm/iconBase"

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({platforms} : Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid
  }

  return (
    <HStack marginY="10px">
      {platforms.map(platform => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>
      ))}
    </HStack>
  )
}

export default PlatformIconList
