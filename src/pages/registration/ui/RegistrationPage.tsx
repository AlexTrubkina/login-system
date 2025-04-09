import { Box, Button, Field, Flex, Heading, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../app/store";
import { registerUser } from "../../../features/auth";

interface Inputs {
    name: string;
    login: string;
    password: string;
    passwordRepeat: string;
}

export const RegistrationPage = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = () => {
        dispatch(registerUser());
        navigate("/profile");
    };
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
                    Регистрация
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field.Root mb={5} invalid={errors.name ? true : false}>
                        <Field.Label>Введите ваше имя</Field.Label>
                        <Input
                            bg={"white"}
                            placeholder="Введите ваше имя"
                            {...register("name", { required: true })}
                        />
                        <Field.ErrorText>Вы не ввели имя</Field.ErrorText>
                    </Field.Root>
                    <Field.Root mb={10} invalid={errors.login ? true : false}>
                        <Field.Label>Введите ваш логин</Field.Label>
                        <Input
                            bg={"white"}
                            placeholder="Введите ваш логин"
                            {...register("login", { required: true })}
                        />
                        <Field.ErrorText>Вы не ввели логин</Field.ErrorText>
                    </Field.Root>
                    <Field.Root mb={5} invalid={errors.password ? true : false}>
                        <Field.Label>Придумайте пароль</Field.Label>
                        <Input
                            bg={"white"}
                            type="password"
                            placeholder="Пароль"
                            {...register("password", { required: true })}
                        />
                        <Field.ErrorText>Пароли не совпадают</Field.ErrorText>
                    </Field.Root>
                    <Field.Root
                        mb={5}
                        invalid={errors.passwordRepeat ? true : false}
                    >
                        <Field.Label>Повторите пароль</Field.Label>
                        <Input
                            type={"password"}
                            bg={"white"}
                            placeholder="Пароль еще раз"
                            {...register("passwordRepeat", {
                                required: true,
                                validate: (value) =>
                                    value === watch("password"),
                            })}
                        />
                        <Field.ErrorText>Пароли не совпадают</Field.ErrorText>
                    </Field.Root>
                    <Button
                        type="submit"
                        width={"100%"}
                        colorPalette={"red"}
                        variant={"surface"}
                        marginTop={5}
                    >
                        Регистрация
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
                        onClick={() => navigate("/login")}
                    >
                        Вход
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};
