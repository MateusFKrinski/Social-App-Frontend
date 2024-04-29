import React, {useState} from "react";
import * as Form from "@radix-ui/react-form"
import {FormRoot} from "@/components/UI/FormRoot";
import {Flex} from "@/components/UI/Flex";
import {FormField} from "@/components/UI/FormField";
import {FormLabel} from "@/components/UI/FormLabel";
import {Input} from "@/components/UI/Input";
import {FormMessage} from "@/components/UI/FormMessage";
import {Cross2Icon} from "@radix-ui/react-icons";
import {SwitchRoot} from "@/components/UI/SwitchRoot";
import {SwitchThumb} from "@/components/UI/SwitchThumb";
import {Label} from "@/components/UI/Label";
import {Button} from "@/components/UI/Button";

export default function RegisterForm() {
    const [visiblePassword, setVisiblePassword] = useState(false)

    const errors = false
    return (
        <>
            <FormRoot>
                <Flex css={{gap: 10}}>
                    <FormField name="nome_completo">
                        <Flex css={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <FormLabel>Nome completo</FormLabel>
                            <Form.Control asChild>
                                <Input type="text"/>
                            </Form.Control>
                            {errors ?
                                <FormMessage>
                                    <Cross2Icon/>
                                </FormMessage>
                                : null
                            }
                        </Flex>
                    </FormField>
                    <FormField name="nome_usuario">
                        <Flex css={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <FormLabel>Username</FormLabel>
                            <Form.Control asChild>
                                <Input type="text"/>
                            </Form.Control>
                            {errors ?
                                <FormMessage>
                                    <Cross2Icon/>
                                </FormMessage>
                                : null
                            }
                        </Flex>
                    </FormField>
                    <FormField name="email">
                        <Flex css={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <FormLabel>Email</FormLabel>
                            <Form.Control asChild>
                                <Input type="text"/>
                            </Form.Control>
                            {errors ?
                                <FormMessage>
                                    <Cross2Icon/>
                                </FormMessage>
                                : null
                            }
                        </Flex>
                    </FormField>
                    <FormField name="senha">
                        <Flex css={{alignItems: 'baseline', justifyContent: 'space-between'}}>
                            <FormLabel>Senha</FormLabel>
                            <Form.Control asChild>
                                <Input type={visiblePassword ? "text" : "password"}/>
                            </Form.Control>
                            {errors ?
                                <FormMessage>
                                    <Cross2Icon/>
                                </FormMessage>
                                : null
                            }
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
                        <Button type="submit" variant="violet" css={{marginTop: 15}}>Registre-se</Button>
                    </Form.Submit>
                </Flex>
            </FormRoot>
        </>
    )
}