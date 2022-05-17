export default function header() { 
    return (
        <div className={`w-full mx-auto my-0`}>
            <div className={`flex bg-white items-center justify-between my-0 px-5 py-3`}>
                <div className={`flex-auto w-[36px] text-[#796E65]`}>
                    <img src="/r+Logo.svg" className={`w-[36px] h-[50px] fill-current text-[#796E65]`}/>
                </div>
                <div className={`flex-1`}>
                    <div className={`flex items-center justify-end`}>
                        <h2 className={`text-[#545454] font-light text-sm mr-5`}>Member Points</h2>
                        <h1 className={`text-[#B1843B] font-light text-[32px]`}>6,400</h1>                                      
                    </div>              
                </div>
            </div>
        </div>
    )
}