import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {LoginFormSchema} from "@/Schema/LoginValidationSchema";
import * as Form from "@radix-ui/react-form";
import {Flex} from "@/components/UI/Flex";
import {FormField} from "@/components/UI/FormField";
import {FormLabel} from "@/components/UI/FormLabel";
import {Input} from "@/components/UI/Input";
import {FormMessage} from "@/components/UI/FormMessage";
import {Cross2Icon} from "@radix-ui/react-icons";
import {Button} from "@/components/UI/Button";
import {FormRoot} from "@/components/UI/FormRoot";
import {AuthContext} from "@/contexts/AuthContext";
import {SwitchRoot} from "@/components/UI/SwitchRoot";
import {SwitchThumb} from "@/components/UI/SwitchThumb";
import {Label} from "@/components/UI/Label"
import {RouteLink} from "@/components/UI/RouteLink";

export default function LoginForm() {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const {signIn} = useContext(AuthContext)

    type LoginFormSchemaType = z.infer<typeof LoginFormSchema>

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormSchemaType>({
        resolver: zodResolver(LoginFormSchema),
        reValidateMode: "onChange"
    })

    async function onSubmit(data: LoginFormSchemaType) {
        await signIn(data)
    }

    return (
        <>
            <FormRoot onSubmit={handleSubmit(onSubmit)}>
                <Flex css={{gap: 10}}>
                    <FormField name="email">
                        <Flex css={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <FormLabel>Insira seu email</FormLabel>
                            <Form.Control asChild>
                                <Input type="text" {...register("email")}/>
                            </Form.Control>
                            {errors.email ?
                                <FormMessage>
                                    <Cross2Icon/>
                                    {errors.email?.message}
                                </FormMessage>
                                : null}
                        </Flex>
                    </FormField>
                    <FormField name="senha">
                        <Flex css={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <FormLabel>Insira sua senha</FormLabel>
                            <Form.Control asChild>
                                <Input type={visiblePassword ? "text" : "password"} {...register("password")} autoComplete={"off"}/>
                            </Form.Control>
                            {errors.password ?
                                <FormMessage>
                                    <Cross2Icon/>
                                    {errors.password?.message}
                                </FormMessage>
                                : null}
                        </Flex>
                        <Flex css={{flexDirection: 'row', alignItems: 'center', gap: 5, margin: '5px 0'}}>
                            <SwitchRoot id="visible-password" onClick={() => setVisiblePassword(!visiblePassword)}>
                                <SwitchThumb/>
                            </SwitchRoot>
                            <Label htmlFor="visible-password">
                                Senha visível
                            </Label>
                        </Flex>
                    </FormField>
                    <Form.Submit asChild>
                        <Button type="submit" variant="violet" css={{marginTop: 15}}>Login</Button>
                    </Form.Submit>
                    <RouteLink href="#">
                        Esqueceu a senha?
                    </RouteLink>
                </Flex>
            </FormRoot>

        </>
    )
}