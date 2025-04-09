import {
    Box,
    Button,
    Field,
    Flex,
    Heading,
    Input
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { login } from "../../../features/auth";
import { useEffect } from "react";

interface Inputs {
    login: string;
    password: string;
}

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const dispatch = useAppDispatch();

    const { isAuth } = useAppSelector((state) => state.authSlice);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(
            login({
                password: data.password,
                login: data.login,
            })
        );
    
    };
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate("/profile");
        }
    }, [isAuth, navigate]);

    return (
        <Flex
            height={"100vh"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingInline={5}
        >
            <Box
                bg={"blackAlpha.200"}
                maxWidth={"500px"}
                padding={10}
                width={"100%"}
            >
                <Heading size={"3xl"} mb={5}>
                    Вход
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field.Root mb={5} invalid={errors.login ? true : false}>
                        <Field.Label>Введите ваш логин</Field.Label>
                        <Input
                            bg={"white"}
                            placeholder="Введите ваш логин"
                            {...register("login", { required: true })}
                        />
                        <Field.ErrorText>
                            Введите пароль
                        </Field.ErrorText>
                    </Field.Root>
                    <Field.Root mb={5} invalid={errors.password ? true : false}>
                        <Field.Label>Введите пароль</Field.Label>
                        <Input
                            bg={"white"}
                            placeholder="Пароль"
                            type="password"
                            {...register("password", { required: true })}
                        />
                        <Field.ErrorText>
                            Введите логин
                        </Field.ErrorText>
                    </Field.Root>
                    <Button
                        type="submit"
                        width={"100%"}
                        colorPalette={"red"}
                        variant={"surface"}
                        marginTop={5}
                    >
                        Вход
                    </Button>
                </form>
                <Flex gap={5} marginTop={5}>
                    <Button
                        width={"48%"}
                        variant={"outline"}
                        colorPalette={"red"}
                        onClick={() => navigate("/")}
                    >
                        На главную
                    </Button>
                    <Button
                        width={"48%"}
                        colorPalette={"pink"}
                        variant={"ghost"}
                        onClick={() => navigate("/registration")}
                    >
                        Регистрация
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};
