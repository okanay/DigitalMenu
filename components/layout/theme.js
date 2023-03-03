import {useEffect, useState} from "react";

const Theme = ({children}) => {


    const [colorMode, setColorMode] = useState('root')
    const [darkMode, setDarkMode] = useState('-light')
    const [theme, setTheme] = useState({color: `${colorMode + darkMode}`, mode: `${darkMode}`})

    const handleColorMode = (color) => {
        const value = color
        setColorMode(value)
    }
    const handleDarkMode = (mode) => {
        const value = mode
        setDarkMode(value)
    }

    useEffect(() => {

        const copyTheme = {...theme}
        copyTheme.color = `${colorMode + darkMode}`
        copyTheme.mode = `${darkMode}`
        setTheme(copyTheme)

    }, [colorMode, darkMode])

    return (
        <div className={`${theme.mode} ${theme.color}`}>
            <div className={'bg-skin-theme-body-50'}>
               <div className={'flex flex-col px-4 justify-between gap-2 py-2 tablet:flex-row'}>

                <div className="flex flex-row gap-2">

                    <button
                        onClick={() => {
                            handleColorMode('root')
                        }}
                        className={`${darkMode === "-light" ? "root-light" : "root-dark"} hover:bg-skin-theme-body-100/80 text-sm px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                        Root
                    </button>


                    <button
                        onClick={() => {
                            handleColorMode('second')
                        }}
                        className={`${darkMode === "-light" ? "second-light" : "second-dark"}  hover:bg-skin-theme-body-100/80 text-sm px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                        Second
                    </button>

                    <button
                        onClick={() => {
                            handleColorMode('third')
                        }}
                        className={`${darkMode === "-light" ? "third-light" : "third-dark"} hover:bg-skin-theme-body-100/80 text-sm px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                        Third
                    </button>

                    <button
                        onClick={() => {
                            handleColorMode('fourth')
                        }}
                        className={`${darkMode === "-light" ? "fourth-light" : "fourth-dark"} hover:bg-skin-theme-body-100/80 text-sm px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                        Fourth
                    </button>

                    <button
                        onClick={() => {
                            handleColorMode('fifth')
                        }}
                        className={`${darkMode === "-light" ? "fifth-light" : "fifth-dark"}  hover:bg-skin-theme-body-100/80 text-sm px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                        Fifth
                    </button>



                </div>
                <div className="flex flex-row gap-2">
                    <button
                        onClick={() => {
                            handleDarkMode('-light')
                        }}
                        className={'-light text-sm px-4 py-2 rounded text-skin-theme-font-50 bg-skin-theme-body-50 hover:bg-skin-theme-body-100/80 border border-skin-theme-body-900'}>
                        Light
                    </button>

                    <button
                        onClick={() => {
                            handleDarkMode('-dark')
                        }}
                        className={'-dark text-sm px-4 py-2 rounded text-skin-theme-font-50 bg-skin-theme-body-50 hover:bg-skin-theme-body-100/80 border border-skin-theme-body-900'}>
                        Dark
                    </button>
                </div>

            </div>
                 {children}
            </div>
        </div>)
}

export default Theme