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
                <div className="flex flex-col gap-2 w-full flex-wrap p-2">

                    <div className="flex flex-row gap-2 justify-between w-full flex-wrap flex-wrap-reverse text-xs">

                        {/* ROOT _ SECOND _ THIRD */}
                        <div className="flex flex-row gap-2">
                            <button
                                onClick={() => {
                                    handleColorMode('root')
                                }}
                                className={`${darkMode === "-light" ? "root-light" : "root-dark"} hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                Root
                            </button>

                            <button
                                onClick={() => {
                                    handleColorMode('second')
                                }}
                                className={`${darkMode === "-light" ? "second-light" : "second-dark"}  hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                Second
                            </button>

                            <button
                                onClick={() => {
                                    handleColorMode('third')
                                }}
                                className={`${darkMode === "-light" ? "third-light" : "third-dark"} hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                Third
                            </button>
                        </div>


                        {/* LIGHT _ DARK _ MODE */}
                        <div className="flex flex-row gap-2">
                            <button
                                onClick={() => {
                                    handleDarkMode('-light')
                                }}
                                className={'-light px-4 py-2 rounded text-skin-theme-font-50 bg-skin-theme-body-50 hover:bg-skin-theme-body-100/80 border border-skin-theme-body-900'}>
                                Light
                            </button>

                            <button
                                onClick={() => {
                                    handleDarkMode('-dark')
                                }}
                                className={'-dark px-4 py-2 rounded text-skin-theme-font-50 bg-skin-theme-body-50 hover:bg-skin-theme-body-100/80 border border-skin-theme-body-900'}>
                                Dark
                            </button>
                        </div>

                    </div>

                    {/* FOURTH _ FIFTH _ SIXTH */}
                    <div className="flex flex-row gap-2 justify-between w-full flex-wrap flex-wrap text-xs">

                        <div className="flex flex-row gap-2">
                            <button
                                onClick={() => {
                                    handleColorMode('fourth')
                                }}
                                className={`${darkMode === "-light" ? "fourth-light" : "fourth-dark"} hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                Fourth
                            </button>

                            <button
                                onClick={() => {
                                    handleColorMode('fifth')
                                }}
                                className={`${darkMode === "-light" ? "fifth-light" : "fifth-dark"}  hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                Fifth
                            </button>

                            <button
                                onClick={() => {
                                    handleColorMode('sixth')
                                }}
                                className={`${darkMode === "-light" ? "sixth-light" : "sixth-dark"}  hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                Sixth
                            </button>

                        </div>

                    </div>
            </div>
                 {children}
            </div>
        </div>)
}

export default Theme