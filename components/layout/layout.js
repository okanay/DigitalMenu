import Theme from "./theme";

const Layout = ({children, i18n, t}) => {

    return (
        <div className={'max-w-screen-tablet w-full mx-auto text-sm'}>
            <Theme t={t} i18n={i18n}>
                {children}
            </Theme>
        </div>
    )
}

export default Layout
