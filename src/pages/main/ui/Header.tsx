import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { logout } from "../../../features/auth";

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector((state) => state.authSlice.isAuth);
    return (
        <Box as={"header"} bg={"blackAlpha.200"} padding={5}>
            <Flex justifyContent={"space-between"}>
                <Heading size={"3xl"}>Сайт</Heading>
                {isAuth ? (
                    <Flex gap={5}>
                        <Button
                            onClick={() => navigate("/profile")}
                            variant={"solid"}
                            colorPalette={"pink"}
                        >
                            Профиль
                        </Button>
                        <Button onClick={() => dispatch(logout())}>
                            Выйти
                        </Button>
                    </Flex>
                ) : (
                    <Flex gap={5}>
                        {" "}
                        <Button
                            onClick={() => navigate("/login")}
                            variant={"solid"}
                            colorPalette={"pink"}
                        >
                            Вход
                        </Button>
                        <Button
                            onClick={() => navigate("/registration")}
                            variant={"surface"}
                            colorPalette={"red"}
                        >
                            Регистрация
                        </Button>
                    </Flex>
                )}
            </Flex>
        </Box>
    );
};
