import React, { createContext, useState } from "react";

import html from "../src/imgs/tec/html-5.png"
import css from "../src/imgs/tec/css.png"
import js from "../src/imgs/tec/javaScript.png"
import react from "../src/imgs/tec/reactJs.png"
import figma from "../src/imgs/tec/figma.png"
import Figma from "../src/imgs/tec/figma.png"
import git from "../src/imgs/tec/git-colored.png"

import register from './imgs/projects/sigles/register-react_img.png'
import build from './imgs/projects/building-project.jpg'

export const Context = createContext()

export const Contexto = ({children}) =>{

    const [tecs, setTecs] = useState([{
            name: "HTML",
            img: html,
            info: "HTML é uma tecnologia cricial para a estrutura de um site e para o SEO."
        },
        {
            name: "CSS",
            img: css,
            info: "Capaz de criar dsigns e animações de forma fluida. O sulficiente para um bom UX."
        },
        {
            name: "JavaScript",
            img:js,
            info: "No quesito cominucação entre cliente e servidor é o elemento chave. Além de permitir interações do usuario com a pagina em si."
        },
        {
            name: "React",
            img: react,
            info: 'Um FrameWork que facilita e expande as posibilidades de desenvolvimente usando o JavaScript. Expande para conceitos como: contexto, estados e otimização de performance.'
        },
        {
            name: "Figma",
            img: Figma,
            info: "Uma ferramenta muito usada para a criação de Wireframes e Mockups."
        },
        {
            name: "Git",
            img: git,
            info: "Essensial para o desenvolvimento em equipe e/ou versionamento."
        }
    ])

    const [projects, setProjects] = useState([
        {
            img: register,
            info: "Um projeto feito para demonstrar as habilidades de frmulario. Foi ultilizado a tecnologias React.",
            link: "https://ferreirointz.github.io/Register_React",
            able: true
        },
        {
            img: build,
            info: "...",
            link: "",
            able: false
        },
        {
            img: build,
            info: "...",
            link: "",
            able: false
        }
    ])

    return(
        <Context.Provider value={{tecs, projects}}>
            {children}
        </Context.Provider>
    )
}