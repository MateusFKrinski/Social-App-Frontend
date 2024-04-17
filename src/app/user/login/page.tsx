"use client"
import Link from "next/link";
import {Eye, EyeOff} from "lucide-react";
import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {AuthContext} from "@/contexts/AuthContext";

export default function Home() {
    const {signIn} = useContext(AuthContext)
    const [visiblePassword, setVisiblePassword] = useState(false)

    const LoginFormSchema = z.object({
        email: z.string().email("Email inválido").min(6, "Email curto").max(70, "Email longo"),
        password: z.string().min(8, "Senha curta").max(40, "Senha longa")
    })

    type LoginFormSchemaType = z.infer<typeof LoginFormSchema>

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormSchemaType>({
        resolver: zodResolver(LoginFormSchema),
        reValidateMode: "onBlur"
    })

    async function onSubmit(data: LoginFormSchemaType) {
        await signIn(data)
    }

    return (
        <>
            {errors?.password ? console.log(errors.password?.message) : null}
            {errors?.email ? console.log(errors.email?.message) : null}
            <main className="h-screen w-screen bg-black bg-LoginPage flex justify-center items-center">
                <section
                    className="h-auto w-10/12 py-10 px-8 backdrop-blur-sm bg-white/10 rounded-2xl ring-1 ring-white/50 md:w-7/12 lg:w-5/12 xl:w-3/12">
                    <h1 className="text-white font-bold text-xl mb-7">Faça seu login</h1>
                    <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="flex flex-col gap-2" htmlFor="email">
                                <fieldset className="text-white font-medium text-base">Email</fieldset>
                                <input
                                    {...register("email")}
                                    className="w-full h-7 rounded bg-white/20 ring-1 ring-white/50 px-3 text-white font-light placeholder:text-white/40"
                                    placeholder="Insira seu email"
                                    type="text"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="flex flex-col gap-2" htmlFor="password">
                                <div className="flex justify-between">
                                    <fieldset className="text-white font-medium text-base">Senha</fieldset>
                                    <fieldset className="text-sky-600 hover:text-sky-400"><Link href="">Esqueceu a
                                        senha?</Link>
                                    </fieldset>
                                </div>

                                <span className="relative">
                                    <input
                                        {...register("password")}
                                        className="w-full h-7 rounded bg-white/20 ring-1 ring-white/50 px-3 text-white font-light placeholder:text-white/40"
                                        placeholder="Insira sua senha"
                                        type={visiblePassword ? "text" : "password"}
                                    />

                                    <span className="absolute right-3 cursor-pointer top-1">
                                        {visiblePassword ? <EyeOff onClick={() => {
                                                setVisiblePassword(!visiblePassword)
                                            }} size={20} className="text-white"/> :
                                            <Eye onClick={() => {
                                                setVisiblePassword(!visiblePassword)
                                            }} size={20} className="text-white"/>}
                                    </span>
                                </span>
                            </label>
                        </div>

                        <div className="flex justify-end gap-5 cursor-pointer">
                            <div
                                className="h-fit w-fit px-3 py-2 bg-sky-900 text-sky-200 text-sm font-medium rounded-md hover:bg-sky-950">
                                <Link href="/user/register/user">Crie sua conta</Link>
                            </div>

                            <div>
                                <button
                                    className="h-fit w-fit px-3 py-2 bg-sky-600 text-white text-sm font-medium rounded-md hover:bg-sky-700"
                                    type="submit">
                                    Entre
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
