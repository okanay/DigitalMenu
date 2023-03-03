import {useEffect, useState} from "react";

const Theme = ({children, t, i18n}) => {

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
    const handleLanguage = (lan) => {
        i18n.changeLanguage(lan)
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
                                {t('common:theme.root')}
                            </button>

                            <button
                                onClick={() => {
                                    handleColorMode('second')
                                }}
                                className={`${darkMode === "-light" ? "second-light" : "second-dark"}  hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                {t('common:theme.second')}
                            </button>

                            <button
                                onClick={() => {
                                    handleColorMode('third')
                                }}
                                className={`${darkMode === "-light" ? "third-light" : "third-dark"} hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                {t('common:theme.third')}
                            </button>
                        </div>


                        {/* LIGHT _ DARK _ MODE */}
                        <div className="flex flex-row gap-2">
                            <button
                                onClick={() => {
                                    handleDarkMode('-light')
                                }}
                                className={'-light px-4 py-2 rounded text-skin-theme-font-50 bg-skin-theme-body-50 hover:bg-skin-theme-body-100/80 border border-skin-theme-body-900'}>
                                {t('common:mode.light')}
                            </button>

                            <button
                                onClick={() => {
                                    handleDarkMode('-dark')
                                }}
                                className={'-dark px-4 py-2 rounded text-skin-theme-font-50 bg-skin-theme-body-50 hover:bg-skin-theme-body-100/80 border border-skin-theme-body-900'}>
                                {t('common:mode.dark')}
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
                                {t('common:theme.fourth')}
                            </button>

                            <button
                                onClick={() => {
                                    handleColorMode('fifth')
                                }}
                                className={`${darkMode === "-light" ? "fifth-light" : "fifth-dark"}  hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                {t('common:theme.fifth')}
                            </button>

                            <button
                                onClick={() => {
                                    handleColorMode('sixth')
                                }}
                                className={`${darkMode === "-light" ? "sixth-light" : "sixth-dark"}  hover:bg-skin-theme-body-100/80 px-4 py-2 rounded text-skin-theme-500 bg-skin-theme-body-50 border border-skin-theme-500`}>
                                {t('common:theme.sixth')}
                            </button>

                        </div>

                        {/* LANGUAGES */}
                        <div className="flex flex-row gap-2">
                            <button
                                onClick={() => {
                                    handleLanguage('tr')
                                }}
                                className={`px-4 py-2 rounded ${i18n.resolvedLanguage === 'tr' ? "text-skin-theme-font-900 bg-skin-theme-500 border-skin-theme-400/60 hover:bg-skin-theme-500/80" : "text-skin-theme-font-50 bg-skin-theme-body-50 border-skin-theme-body-900 hover:bg-skin-theme-body-200/80"}  border`}>
                            TR
                            </button>

                            <button
                                onClick={() => {
                                    handleLanguage('en')
                                }}
                                className={`px-4 py-2 rounded ${i18n.resolvedLanguage === 'en' ? "text-skin-theme-font-900 bg-skin-theme-500 border-skin-theme-400/60 hover:bg-skin-theme-500/80" : "text-skin-theme-font-50 bg-skin-theme-body-50 border-skin-theme-body-900 hover:bg-skin-theme-body-200/80 "} border`}>
                                ENG
                            </button>
                        </div>
                    </div>
            </div>
                 {children}
            </div>
        </div>)
}

export default Theme