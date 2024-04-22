import { Button, VStack } from "@chakra-ui/react";
import { FaCoffee, FaHome, FaSmoking, FaToilet, FaHandSparkles } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (buttonName) => {
    setClicked(buttonName);
    setTimeout(() => {
      setClicked(null);
    }, 500);
  };

  return (
    <VStack spacing={4}>
      <Button leftIcon={<FaHandSparkles />} colorScheme={clicked === "encourage" ? "purple" : "teal"} onClick={() => handleClick("encourage")}>
        はげましボタン
      </Button>
      <Button leftIcon={<FaCoffee />} colorScheme={clicked === "boss" ? "red" : "orange"} onClick={() => handleClick("boss")}>
        ボスボタン
      </Button>
      <Button leftIcon={<FaHome />} colorScheme={clicked === "home" ? "pink" : "green"} onClick={() => handleClick("home")}>
        帰宅ボタン
      </Button>
      <Button leftIcon={<FaSmoking />} colorScheme={clicked === "smoke" ? "gray" : "yellow"} onClick={() => handleClick("smoke")}>
        たばこボタン
      </Button>
      <Button leftIcon={<FaToilet />} colorScheme={clicked === "toilet" ? "blue" : "cyan"} onClick={() => handleClick("toilet")}>
        トイレボタン
      </Button>
    </VStack>
  );
};

export default Index;
