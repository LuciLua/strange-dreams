'use client'

import { FormEvent, MutableRefObject, useRef } from "react"
import styles from "../styles/RootPage.module.scss"
import { Farsan } from "next/font/google"

const farsan = Farsan({ weight: ["400"], subsets: ["latin", "vietnamese", "gujarati"] })

export default function RootPage() {

    const sonho: MutableRefObject<HTMLTextAreaElement> = useRef(null)
    const btnSend: MutableRefObject<HTMLButtonElement> = useRef(null)

    function erro(e: FormEvent) {
        e.preventDefault()
        alert('mínimo 5 caracteres')
    }

    function successful() {
        btnSend.current.style.pointerEvents = 'none'
        btnSend.current.style.userSelect = 'none'
        btnSend.current.style.background = '#383838'

        sonho.current.style.pointerEvents = 'none'
        sonho.current.style.userSelect = 'none'
        sonho.current.style.background = '#383838'
        sonho.current.style.color = '#fff'
        btnSend.current.textContent = 'Sonho Enviado'
    }

    function send(e: FormEvent) {
        sonho.current.value.length < 5 ? erro(e) : successful()
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 style={{ textAlign: 'center' }}>Você anda tendo</h2>
                <h1 style={{ textAlign: 'center', fontSize: '50px', marginBottom: '20px' }}>Sonhos Estranhos?</h1>
                <p>O Vale dos Sonhos <i>Wegotad</i> está investigando a manifestação de sonhos bizarros e inexplicáveis acontecendo em todo o mundo. Se você tem experimentado qualquer atividade estranha nos seus sonhos, você pode nos ajudar descrevendo seu sonho aqui.</p>
                <form target="iframe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5YtZbYt4Aoz97peWQWPuDdKdCiiQOgVOb3uYfua9_L58nPQ/formResponse" method="POST" name="formdream" id="formdream">
                    <textarea name="entry.448259901" id="sonho" ref={sonho} required></textarea>
                    <button title="enviar sonho" name="enviar sonho" ref={btnSend} type="submit" onClick={send}>enviar meu sonho</button>
                </form>
                <iframe name="iframe" src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5YtZbYt4Aoz97peWQWPuDdKdCiiQOgVOb3uYfua9_L58nPQ/formResponse" style={{ display: 'none' }}></iframe>
            </div>
        </div>
    )
}