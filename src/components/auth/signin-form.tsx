"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";

export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPassworField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    }

    return (
        <>
            <input
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={e => setEmailField(e.target.value)}
            />
            <input
                type="password"
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={e => setPassworField(e.target.value)}
            />

            <button onClick={handleEnterButton}>Entrar</button>
        </>
    );
}