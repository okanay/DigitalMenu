export default function Home() {
    return (
        <div className={`flex flex-col justify-center w-full max-w-screen-tablet mx-auto`}>

            {/* Color Theme, Download*/}
            <div className={'px-4 py-2'}>
                <div className={`flex flex-col justify-start w-full gap-2 pb-4 bg-skin-theme-body-50`}>
                    <h1 className={'text-3xl text-skin-theme-500 font-bold text-start'}>Color Theme</h1>
                    <p className={'text-sm text-skin-theme-font-50 font-semibold'}>Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit. A accusantium dolor dolorem doloremque
                        explicabo praesentium veritatis! Eos et ex exercitationem illo nam perspiciatis quia, quos
                        ratione
                        soluta? Repellendus tempore, ut.</p>
                    <div className={'flex flex-row justify-end gap-3 mt-4'}>
                        <button
                            className={'bg-skin-theme-body-50 w-28 h-12 text-lg rounded border border-skin-theme-body-900 text-skin-theme-font-50 font-semibold'}>Android
                        </button>
                        <button
                            className={'bg-gradient-to-br from-skin-theme-500 via-skin-theme-500 to-skin-theme-500/80 w-28 h-12 text-lg rounded border-[1px] border-skin-theme-500/40 text-skin-theme-font-900 font-semibold'}>App
                            Store
                        </button>
                    </div>
                </div>
            </div>

            {/* Color Test*/}
            <div
                className={` gap-2 flex flex-col w-full px-4 py-6`}>
                <div className={'flex flex-col h-full justify-center text-skin-theme-font-1000'}>
                    <div className={'bg-gradient-to-br from-skin-theme-500 via-skin-theme-500 to-skin-theme-500/80 rounded-sm px-4 py-2 w-fit mb-2'}>
                        <h2 className={'text-lg font-semibold text-start w-full uppercase '}>Whats
                            All About?</h2>
                    </div>
                    <div className={'bg-skin-theme-50/10 rounded px-4 py-2 w-fit mb-2 text-skin-theme-font-100'}>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit rerum sapiente ullam velit
                            vero? Ad
                            cupiditate deserunt doloribus ex natus officia, totam. Accusamus aliquam amet, excepturi
                            incidunt
                            laboriosam non odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit rerum
                            sapiente
                            ullam velit vero? Ad
                            cupiditate deserunt doloribus ex natus officia, totam. Accusamus aliquam amet, excepturi
                            incidunt
                            laboriosam non odio.
                        </p>
                    </div>
                </div>
            </div>


            {/* Price Tag */}
            <div className={'grid grid-cols-1 grid-rows-1 tablet:grid-cols-2 tablet:gap-8 gap-4 py-6 px-4'}>
                <div
                    className={'bg-skin-theme-body-100/40 border border-skin-theme-body-600/40 rounded-sm text-skin-theme-font-50'}>
                    <div className={'flex flex-col justify-center gap-3 px-1 py-4 max-w-screen-smPhone'}>
                        <h2 className={'text-2xl text-skin-theme-500 font-semibold text-center w-full px-12'}>Starter</h2>
                        <h3 className={'text-lg text-center w-full px-12'}>Best for large scale uses and extended
                            redistribution rights.</h3>
                        <h1 className={'text-4xl text-skin-theme-500 font-bold text-center mb-1'}>Free<span
                            className={'text-base text-skin-theme-font-300'}> / week</span></h1>

                        <div className={'flex flex-col gap-2 text-sm text-start pl-4'}>
                            <p> - Individual configuration</p>
                            <p> - No setup, or hidden fees</p>
                            <p> - Team size: <span>1 developer</span></p>
                            <p> - Premium support: <span>6 months</span></p>
                            <p> - Free updates: <span>6 months</span></p>
                        </div>

                        <div className={'mt-4 w-full flex flex-row justify-center items-center'}>
                            <button
                                className={'bg-skin-theme-body-100/40 w-48 h-12 text-lg rounded border border-skin-theme-body-900 text-skin-theme-500 font-semibold'}>Get
                                Started
                            </button>
                        </div>

                    </div>
                </div>

                <div
                    className={'bg-skin-theme-body-100/40 border border-skin-theme-body-600/40 rounded-sm text-skin-theme-font-50'}>
                    <div className={'flex flex-col justify-center gap-3 px-1 py-4 max-w-screen-smPhone'}>
                        <h2 className={'text-2xl text-skin-theme-500 font-semibold text-center w-full px-12'}>Enterprise</h2>
                        <h3 className={'text-lg text-center w-full px-12'}>Best for large scale uses and extended
                            redistribution rights.</h3>
                        <h1 className={'text-4xl text-skin-theme-500 font-bold text-center mb-1'}>$249<span
                            className={'text-base text-skin-theme-font-300'}> / month</span></h1>

                        <div className={'flex flex-col gap-2 text-sm text-start pl-4'}>
                            <p> - Individual configuration</p>
                            <p> - No setup, or hidden fees</p>
                            <p> - Team size: <span>1 developer</span></p>
                            <p> - Premium support: <span>6 months</span></p>
                            <p> - Free updates: <span>6 months</span></p>
                        </div>

                        <div className={'mt-4 w-full flex flex-row justify-center items-center'}>
                            <button
                                className={'bg-skin-theme-body-100/40 w-48 h-12 text-lg rounded border border-skin-theme-body-900 text-skin-theme-500 font-semibold'}>Get
                                Started
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/*White Test*/}
            <div
                className={'gap-2 flex flex-col w-full bg-gradient-to-br from-skin-body-800/95 via-skin-body-800/90 to-skin-body-800/80 px-4 py-2 text-skin-body-font-50 font-sans text-sm h-48'}></div>

        </div>
    )
}



