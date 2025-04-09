import { Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const ProfilePage = () => {
    const navigate = useNavigate();
    return (
        <Flex
            flexDirection={"column"}
            height={"100vh"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
        >
            <Image src={"/src/shared/assets/cat.png"} />
            <Button
                size={"2xl"}
                variant={"solid"}
                onClick={() => navigate("/")}
                colorPalette={"red"}
            >
                На главную
            </Button>
        </Flex>
    );
};
