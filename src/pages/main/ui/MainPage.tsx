import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Header } from "./Header";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../app/store";

export const MainPage = () => {
    const navigate = useNavigate();
    const { isAuth } = useAppSelector((state) => state.authSlice);
    return (
        <>
            <Header />
            <Flex height={"100vh"} alignItems={"center"} paddingInline={10}>
                <Box>
                    <Heading
                        as={"h1"}
                        size={"6xl"}
                        width={"100%"}
                        maxWidth={"900px"}
                    >
                        Зарегистрируйтесь или войдите в систему
                    </Heading>
                    {!isAuth ? (
                        <Flex gap={5} marginTop={10}>
                            <Button
                                size={"xl"}
                                variant={"solid"}
                                colorPalette={"pink"}
                                onClick={() => navigate("/login")}
                            >
                                Вход
                            </Button>
                            <Button
                                size={"xl"}
                                variant={"surface"}
                                colorPalette={"red"}
                                onClick={() => navigate("/registration")}
                            >
                                Регистрация
                            </Button>
                        </Flex>
                    ) : (
                        <Button
                            size={"xl"}
                            variant={"solid"}
                            colorPalette={"pink"}
                            onClick={() => navigate("/login")}
                            mt={10}
                        >
                            Войти в профиль
                        </Button>
                    )}
                </Box>
            </Flex>
        </>
    );
};
