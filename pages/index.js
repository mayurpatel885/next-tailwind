import Head from 'next/head'
import Image from 'next/image'
import styles1 from '../styles/variables.module.scss'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
  

    <div className={`bg-hero-pattern bg-cover bg-center`}>
        <div className={`mob:backdrop-blur mob:backdrop-brightness-90 `}>
            <div className={`pt-[60px] 5xl:pb-[10px] 7xl:pb-[18px] 4xl:max-w-[2000px] 4xl:px-[100px] 6xl:max-w-[900px] 6xl:px-[52px] 7xl:max-w-[550px] 7xl:px-[36px] 8xl:max-w-[500px] 9xl:max-w-full 5xl:max-w-[1200px] 5xl:px-[100px] 3xl:max-w-[1600px] 3xl:px-[100px]  w-full mx-auto my-0 `}>
               <div className={`8xl:max-w-[500px] 8xl:px-[30px] 7xl:px-0 9xl:max-w-[360px] 9xl:px-[24px]  7xl:max-w-full w-full mx-auto my-0 text-white`}>
                    <img src="/r+Logo.svg" alt="" className={`w-[58px] h-[80px] fill-current text-white`}/>          
               </div>
            </div>

            <div className={`flex w-full justify-center items-center flex-col`} >
                <div className={`pt-8 pb-[18px] 9xl:px-7 7xl:px-5 7xl:max-w-[332px] 5xl:max-w-[496px] w-full backdrop-blur backdrop-brightness-90 rounded-lg`}>
                    <h1 className={`font-light text-4xl tracking-normal leading-none text-white mb-14`} >Create account</h1>
                    <form action="#" className={`text-white`} >
                        <div className={`w-full flex pt-5 mb-3`} >
                            <select name="gender" className={`bg-transparent border-b-[1px] custom-border-color w-16 mr-4 focus:outline-none`} > 
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                            </select>
                            <div className={`relative w-full`}>
                                <input type="text" name="firstname" placeholder=" "  className={`appearance-none focus:outline-none bg-transparent border-b-[1px] custom-border-color flex-1 w-full`}/>                                
                                <label for="firstname" className={`absolute top-0 -z-1 duration-300 origin-0 left-0`}>First name*</label>
                            </div>

                            
                        </div>
                        
                        <div className={`pt-5 mb-3`}>
                            <div className={`relative w-full`}>
                                <input type="text" name="lastname" placeholder=" "  className={`appearance-none focus:outline-none bg-transparent border-b-[1px] custom-border-color flex-1 w-full`}/>                                
                                <label for="lastname" className={`absolute top-0 -z-1 duration-300 origin-0 left-0`}>Last name*</label>
                            </div>

                            {/* <input type="text" placeholder="First name*" className={`focus:outline-none bg-transparent border-b-[1px] custom-border-color w-full`} />   */}

                        </div>
                       

                        <div className={`pt-5 mb-3`}>                           
                            <div className={`relative w-full`}>
                                <input type="email" name="emailaddress" placeholder=" "  className={`appearance-none focus:outline-none bg-transparent border-b-[1px] custom-border-color flex-1 w-full`}/>                                
                                <label for="emailaddress" className={`absolute top-0 -z-1 duration-300 origin-0 left-0`}>email address*</label>
                            </div>
                        </div>

                       
                        <div className={`w-full pt-5 border-b-[1px] custom-border-color flex mb-3`} >
                            <div className={`relative w-full`}>
                                <input type="password" name="password" placeholder=" "  className={`appearance-none focus:outline-none bg-transparent flex-1 w-full`}/>                                
                                <label for="password" className={`absolute top-0 -z-1 duration-300 origin-0 left-0`}>Password*</label>
                            </div>
                           
                            <img src="/show_password.svg" alt="" className={`w-6 cursor-pointer opacity-50`} />             
                        </div>
                        <div className={`w-full pt-5 border-b-[1px] custom-border-color flex`} >
                            <div className={`relative w-full`}>
                                <input type="password" name="confirmpassword" placeholder=" "  className={`appearance-none focus:outline-none bg-transparent flex-1 w-full`}/>                                
                                <label for="confirmpassword" className={`absolute top-0 -z-1 duration-300 origin-0 left-0`}>Confirm password*</label>
                            </div>
                           
                            <img src="/show_password.svg" alt="" className={`w-6 cursor-pointer opacity-50`} />             
                        </div>

                        <div className={``}>
                            <p className={`text-[12px] font-bold leading-5 tracking-wide py-8`}>* required info</p>
                        </div>

                        <div className={`max-w-[350px] mx-auto my-0 w-full`}>
                            <p className={`font-light text-center`}>By signing up, you have read and agreed with our <a href="#" className={`font-bold`}>Terms of Services</a> and <a href="#" className={`font-bold`}>Privacy Policy</a></p>
                        </div>
                        <div className={`text-center my-8`}>
                            <input type="submit" value="Create Account" className={`cursor-pointer text-[#796E65] text-xl bg-[#939E8C] py-3 max-w-[300px] w-full rounded-lg`} />
                        </div>
                    </form>
    
                    <div className={`text-center text-white`}>
                        <p className={`font-light`}>Already have an account? <a href="#" className={`font-bold`}>Log In</a></p>
                    </div>
                </div>   
            </div>

            <div className={`flex justify-start 5xl:items-start flex-col text-xs leading-9 text-white 4xl:max-w-[2000px] 4xl:px-[100px] 6xl:max-w-[900px] 6xl:px-[52px] 7xl:max-w-[550px] 7xl:px-[36px] 8xl:max-w-[500px] 9xl:max-w-full 5xl:max-w-[1200px] 5xl:px-[100px] 3xl:max-w-[1600px] 3xl:px-[100px] w-full mx-auto mt-8 mb-6 9xl:item-center 9xl:max-w-full`} >
                  <p>Copyright © 2021 R+ Pte Ltd. All rights reserved.</p>
            </div>
        </div>    
    </div>
    </>
  )


}
