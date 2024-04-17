"use client"
import Link from "next/link";
import {Eye, EyeOff} from "lucide-react";
import React, {SetStateAction, useState} from "react";

export default function Home() {
    const [visiblePassword, setVisiblePassword] = useState(true)

    return (
        <>
            <main className="h-screen w-screen bg-black bg-LoginPage flex justify-center items-center">
                <section
                    className="h-auto w-10/12 py-10 px-8 backdrop-blur-sm bg-white/10 rounded-2xl ring-1 ring-white/50 md:w-7/12 lg:w-5/12 xl:w-3/12">
                    <h1 className="text-white font-bold text-xl mb-7">Faça seu cadastro</h1>
                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="flex flex-col gap-2">
                                <fieldset className="text-white font-medium text-base">Nome completo</fieldset>
                                <input
                                    className="w-full h-7 rounded bg-white/20 ring-1 ring-white/50 px-3 text-white font-light placeholder:text-white/40"
                                    placeholder="Insira seu nome completo"
                                    type="text"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="flex flex-col gap-2">
                                <fieldset className="text-white font-medium text-base">Nome de usuário</fieldset>
                                <input
                                    className="w-full h-7 rounded bg-white/20 ring-1 ring-white/50 px-3 text-white font-light placeholder:text-white/40"
                                    placeholder="Insira seu nome de usuário"
                                    type="text"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="flex flex-col gap-2">
                                <fieldset className="text-white font-medium text-base">Email</fieldset>
                                <input
                                    className="w-full h-7 rounded bg-white/20 ring-1 ring-white/50 px-3 text-white font-light placeholder:text-white/40"
                                    placeholder="Insira seu email"
                                    type="text"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="flex flex-col gap-2">
                                <fieldset className="text-white font-medium text-base">Senha</fieldset>
                                <span className="relative">
                                    <input
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

                        <label className="flex flex-row gap-3 w-full text-white font-thin">
                            <input className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-sky-500"
                                   type="checkbox"/>
                            Aceito os termos de responsabilidade e privacidade
                        </label>
                        
                        <div className="flex justify-end gap-5 cursor-pointe mt-5">
                            <div>
                                <button
                                    className="h-fit w-fit px-3 py-2 bg-sky-600 text-white text-sm font-medium rounded-md hover:bg-sky-700"
                                    type="submit">Registre-se
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
