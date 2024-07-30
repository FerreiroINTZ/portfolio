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
            img: html
        },
        {
            name: "CSS",
            img: css
        },
        {
            name: "JavaScript",
            img:js
        },
        {
            name: "React",
            img: react
        },
        {
            name: "Figma",
            img: Figma
        },
        {
            name: "Git",
            img: git
        }
    ])

    const [projects, setProjects] = useState([
        {
            img: register,
            info: "Um projeto feito para demonstrar as habilidades de frmulario. Foi ultilisado a tecnologias React.",
            link: "https://ferreirointz.github.io/Register_React",
            able: true
        },{
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