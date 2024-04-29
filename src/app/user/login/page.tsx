"use client"
import {TabsRoot} from "@/components/UI/TabsRoot";
import {TabsList} from "@/components/UI/TabsList";
import {TabsTrigger} from "@/components/UI/TabsTrigger";
import {TabsContent} from "@/components/UI/TabsContent";
import {TitleText} from "@/components/UI/TitleText";
import LoginForm from "@/components/Forms/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm";
import {InitializePage} from "@/components/UI/InitializePage";

export default function Home() {
    return (
        <>
            <InitializePage css={{alignItems: "center", justifyContent: "center",}}>
                <TabsRoot defaultValue="tab1">
                    <TabsList aria-label="Interação com a conta, login ou criação">
                        <TabsTrigger value="tab1">Login</TabsTrigger>
                        <TabsTrigger value="tab2">Registro</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                        <TitleText>Acesse a plataforma</TitleText>
                        <LoginForm/>
                    </TabsContent>
                    <TabsContent value="tab2">
                        <TitleText>Faça seu registro</TitleText>
                        <RegisterForm/>
                    </TabsContent>
                </TabsRoot>
            </InitializePage>
        </>
    );
}
