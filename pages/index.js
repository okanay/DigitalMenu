import {useEffect, useState} from "react";

export default function Home() {

    return (
        <div className={`mx-auto max-w-screen-tablet mx-auto flex flex-col justify-start px-4`}>

            <div className={`flex flex-col justify-start w-full p-4 gap-2 pb-12 bg-skin-theme-body-50`}>
                <h1 className={'text-3xl text-skin-theme-400 font-bold text-start'}>Color Theme</h1>
                <p className={'text-sm text-skin-theme-font-50 font-semibold'}>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. A accusantium dolor dolorem doloremque
                    explicabo praesentium veritatis! Eos et ex exercitationem illo nam perspiciatis quia, quos ratione
                    soluta? Repellendus tempore, ut.</p>
                <div className={'flex flex-row justify-end gap-3 mt-4'}>
                    <button
                        className={'bg-skin-theme-body-50 w-28 h-12 text-lg rounded border border-skin-theme-body-900 text-skin-theme-font-50 font-semibold'}>Android
                    </button>
                    <button
                        className={'bg-skin-theme-400 w-28 h-12 text-lg rounded border-[1px] border-skin-theme-400/40 text-skin-theme-font-900 font-semibold'}>App
                        Store
                    </button>
                </div>
            </div>
            <div className={'grid grid-cols-1 grid-rows-1 tablet:grid-cols-2 tablet:gap-8 gap-4 pt-4 py-6'}>
                <div
                    className={'bg-skin-theme-body-100 border border-skin-theme-body-900 rounded-sm text-skin-theme-font-50 mx-auto'}>
                    <div className={'flex flex-col justify-start gap-4 px-4 py-4 max-w-screen-smPhone'}>
                        <h2 className={'text-2xl text-skin-theme-400 font-semibold text-center'}>Starter</h2>
                        <h3 className={'text-lg text-center mx-auto w-3/4'}>Best option for
                            personal use & for your next project.</h3>
                        <h1 className={'text-4xl text-skin-theme-400 font-bold text-center mb-2'}>$29<span
                            className={'text-lg text-skin-theme-font-50'}> / month</span></h1>

                        <div className={'flex flex-col gap-2 text-sm text-start pl-4'}>
                            <p>Individual configuration</p>
                            <p>No setup, or hidden fees</p>
                            <p>Team size: <span>1 developer</span></p>
                            <p>Premium support: <span>6 months</span></p>
                            <p>Free updates: <span>6 months</span></p>
                        </div>

                        <div className={'w-full flex flex-row justify-center items-center'}>
                            <button
                                className={'bg-skin-theme-400 w-48 h-12 text-lg rounded border-[1px] border-skin-theme-400/40 text-skin-theme-font-900 font-semibold'}>Get
                                Started
                            </button>
                        </div>

                    </div>
                </div>

                <div
                    className={'bg-skin-theme-body-100 border border-skin-theme-body-900 rounded-sm text-skin-theme-font-50 mx-auto'}>
                    <div className={'flex flex-col justify-start gap-4 px-4 py-4 max-w-screen-smPhone'}>
                        <h2 className={'text-2xl text-skin-theme-400 font-semibold text-center'}>Enterprise</h2>
                        <h3 className={'text-lg text-center mx-auto w-3/4'}>Best for large scale uses and extended redistribution rights.</h3>
                        <h1 className={'text-4xl text-skin-theme-400 font-bold text-center mb-2'}>$249<span
                            className={'text-lg text-skin-theme-font-50'}> / month</span></h1>

                        <div className={'flex flex-col gap-2 text-sm text-start pl-4'}>
                            <p>Individual configuration</p>
                            <p>No setup, or hidden fees</p>
                            <p>Team size: <span>1 developer</span></p>
                            <p>Premium support: <span>6 months</span></p>
                            <p>Free updates: <span>6 months</span></p>
                        </div>

                        <div className={'w-full flex flex-row justify-center items-center'}>
                            <button
                                className={'bg-skin-theme-400 w-48 h-12 text-lg rounded border-[1px] border-skin-theme-400/40 text-skin-theme-font-900 font-semibold'}>Get
                                Started
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

