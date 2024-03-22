import React, { useState } from 'react'
import {
    TooltipProvider,
} from "@/components/ui/tooltip.jsx"
import GroupImage from "../public/images/arrows-group.png"
import B2CItems from '@/components/bc-items.jsx';
import ThreeArrow from "../public/images/three-arrows-group.png";
import Arrow from "../public/images/arrow.png";
import { Button } from './components/ui/button';

const HomePage = () => {
    const [hide, setHide] = useState("")

    function handleBtnsDetail(val) {
        setHide(val)
    }

    return (
        <div className='w-screen 2xl:h-full 2xl:w-full 2xl:mx-auto 2xl:my-[5%]'>
            <TooltipProvider>
                <div className='flex flex-col sm:flex-col 2xl:flex-row'>
                    <img
                        src={GroupImage}
                        className='rotate-90 w-[160px] h-[520px] mx-[210px] sm:m-auto sm:rotate-90 flex sm:justify-center sm:items-center sm:w-[10rem] sm:h-[560px] md:h-[660px] md:w-[11rem] lg:h-[930px] lg:w-[15rem] xl:w-[18rem] xl:h-[1100px] 2xl:h-[500px] 2xl:w-[10rem] 2xl:rotate-0 2xl:m-0 2xl:my-auto'
                        alt="#"
                    />
                    <div className="flex flex-row gap-[10px] justify-center items-center mx-[295px] sm:flex-row mt-[-190px] sm:mt-[-215px] sm:gap-[14px] md:gap-0 md:mt-[-260px] lg:gap-[45px] lg:mt-[-370px] xl:w-[300px]  xl:gap-[70px] xl:mt-[-440px] xl:ms-[63px] 2xl:my-auto 2xl:ms-0 2xl:flex-col 2xl:justify-center 2xl:gap-[38px] 2xl:text-lg 2xl:mx-0">

                        <div className={`flex sm:flex-col flex-col items-center w-[300px] md:w-[300px] 2xl:flex-row`}>

                            <p className='sm:w-[110px] w-[110px] text-xs sm:text-xs bg-[#3552aa] hover:text-white tracking-wide text-center py-3 px-3 font-medium rounded-sm lg:w-[150px] lg:text-sm xl:w-[180px] xl:text-lg 2xl:py-2 2xl:w-[350px]'>Research</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='hidden sm:hidden w-[200px] h-[70px] 2xl:block 2xl:py-2 2xl:w-[300px] 2xl:h-20' alt="#" />
                                <img src={Arrow} className='h-full sm:h-full 2xl:hidden' alt="#" />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col items-center w-[300px] 2xl:flex-row'>
                            <p className='sm:w-[110px] w-[110px] sm:text-xs text-xs text-center bg-[#82B3E8] hover:text-white tracking-wide py-3 px-3 font-medium rounded-sm lg:w-[150px] lg:text-sm xl:w-[180px] xl:text-lg 2xl:py-2 2xl:w-[350px]'>Planning</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='hidden sm:hidden w-[200px] h-[70px] 2xl:block 2xl:py-2 2xl:w-[300px] 2xl:h-20' alt="#" />
                                <img src={Arrow} className='sm:h-full h-full 2xl:hidden' alt="#" />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col items-center w-[300px] 2xl:flex-row'>
                            <p className='sm:w-[110px] sm:text-xs w-[110px] text-xs bg-[#E96343] hover:text-white tracking-wide py-3 px-3 font-medium text-center rounded-sm lg:w-[150px] lg:text-sm xl:w-[180px] xl:text-lg 2xl:py-2 2xl:w-[350px]'>Desiging</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='hidden sm:hidden w-[200px] h-[70px] 2xl:block 2xl:py-2 2xl:w-[300px] 2xl:h-20' alt="#" />
                                <img src={Arrow} className='sm:h-full 2xl:hidden' alt="#" />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col items-center w-[300px] 2xl:flex-row'>
                            <p className='sm:w-[110px] sm:text-xs w-[110px] text-xs bg-[#E8919D] hover:text-white text-center tracking-wide py-3 px-3 font-medium rounded-sm lg:w-[150px] lg:text-sm xl:w-[180px] xl:text-lg 2xl:py-2 2xl:w-[350px]'>Manufacturing</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='hidden sm:hidden w-[200px] h-[70px] 2xl:block 2xl:py-2 2xl:w-[300px] 2xl:h-20' alt="#" />
                                <img src={Arrow} className='sm:h-full 2xl:hidden' alt="#" />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col items-center w-[300px] 2xl:flex-row   '>
                            <p className='sm:w-[110px] sm:text-xs w-[110px] text-xs bg-[#a684eb] hover:text-white tracking-wide py-3 px-3 font-medium text-center rounded-sm lg:w-[150px] lg:text-sm xl:w-[180px] xl:text-lg 2xl:py-2 2xl:w-[350px]'>Salse/Marketing</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='hidden sm:hidden w-[200px] h-[70px] 2xl:block 2xl:py-2 2xl:w-[300px] 2xl:h-20' alt="#" />
                                <img src={Arrow} className='sm:h-full 2xl:hidden' alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[10px] mx-[1px] sm:flex-row sm:gap-[20px] sm:justify-center md:gap-[45px] lg:gap-[65px] xl:gap-[70px] xl:ms-[30px] 2xl:gap-6 2xl:ms-0 2xl:flex-col 2xl:justify-center 2xl:my-auto'>
                        <div className="flex flex-col gap-4 sm:flex sm:flex-col sm:gap-3 2xl:gap-[12px]">
                            <div className='flex sm:flex items-center relative '>
                                <Button onClick={() => handleBtnsDetail("externalBtn")}
                                    className='bg-[#3552aa] hover:bg-[#4768cd] hover:text-white text-black focus:text-white w-[110px] tracking-wide py-3 px-3 text-sm font-medium rounded-sm sm:w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                    External
                                </Button>
                                {hide === "externalBtn" && <div className={`absolute sm:top-[30px] sm:left-[40px] top-[30px] left-[40px] xl:ms-[12px] 2xl:ms-[8.4rem] 2xl:mt-[-3.4rem] 2xl:flex`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] lg:ms-[25px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 mt-[-10px] ms-[-40px] sm:mt-[-10px] sm:ms-[-40px] xl:ms-[-52px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("internalBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#3552aa] hover:bg-[#4768cd] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'
                                >
                                    Internal
                                </Button>
                                {hide === "internalBtn" && <div className={`absolute ms-[-105px] sm:top-[30px] sm:left-[40px] left-[145px] top-[-13px] xl:ms-[37px] 2xl:mt-[-3.4rem] 2xl:flex 2xl:ms-[8.4rem]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] mt-[43px] sm:h-[100px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-2 ms-[-40px] mt-[-10px] sm:mt-[-10px] sm:ms-[-40px] xl:ms-[-78px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex sm:flex-col sm:gap-3 2xl:gap-[12px]">
                            <div className="relative">
                                <div className='flex items-center'>
                                    <Button onClick={() => handleBtnsDetail("PRDBtn")}
                                        className='text-black sm:w-[110px] focus:text-white bg-[#82B3E8] hover:bg-[#91c1f6] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                        PRD
                                    </Button>
                                    {hide === "PRDBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px] top-[30px] left-[40px] xl:ms-[27px] 2xl:mt-[-3.4rem] 2xl:flex 2xl:ms-[7.8rem]`}>
                                        <div className='flex items-center'>
                                            <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                            <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] 2xl:hidden' alt="#" />
                                        </div>
                                        <div className='flex flex-col gap-2 mt-[-10px] sm:mt-[-10px] sm:ms-[-50px] ms-[-39px] xl:ms-[-77px] 2xl:ms-[0.1rem]'>
                                            <B2CItems />
                                            <B2CItems />
                                        </div>
                                    </div>}
                                </div>
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("specsBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#82B3E8] hover:bg-[#91c1f6]  hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                    Specs
                                </Button>
                                {hide === "specsBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px] top-[30px] left-[40px] xl:ms-[27px] 2xl:mt-[-3.6rem] 2xl:flex 2xl:ms-[7.8rem]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 ms-[-39px] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] xl:ms-[-78px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex sm:flex-col sm:gap-3 2xl:gap-[12px]">
                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("hardwareBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#E96343] hover:bg-[#f3704f] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                    Hardware
                                </Button>
                                {hide === "hardwareBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px]  top-[30px] left-[40px] xl:ms-[29px] 2xl:mt-[-3.6rem] 2xl:flex 2xl:ms-[7.8rem]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 ms-[-40px] mt-[-10px] sm:mt-[-10px] sm:ms-[-50px]  xl:ms-[-80px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("softwareBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#E96343] hover:bg-[#f3704f] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                    Software
                                </Button>
                                {hide === "softwareBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px] top-[30px] left-[40px] xl:ms-[29px] 2xl:mt-[-3.6rem] 2xl:flex 2xl:ms-[7.8rem]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px] xl:ms-[-80px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex sm:flex-col sm:gap-3 2xl:gap-[12px]">
                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("materialBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#E8919D] hover:bg-[#eb9aa4] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                    Material
                                </Button>
                                {hide === "materialBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px]  top-[30px] left-[40px] xl:ms-[28px] 2xl:mt-[-3.6rem] 2xl:flex 2xl:ms-[7.8rem]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px] lg:text-lg xl:ms-[-79px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("productionBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#E8919D] hover:bg-[#eb9aa4] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                    Production
                                </Button>
                                {hide === "productionBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px] top-[30px] left-[40px] xl:ms-[28px] 2xl:mt-[-3.6rem] 2xl:flex 2xl:ms-[7.8rem]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px] xl:ms-[-79px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex sm:flex-col sm:gap-3 2xl:gap-[12px]">
                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("onlineBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#A684EB] hover:bg-[#ae8eed] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                    Online
                                </Button>
                                {hide === "onlineBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px] top-[30px] left-[40px] xl:ms-[28px] 2xl:mt-[-3.6rem] 2xl:flex 2xl:ms-[7.8rem]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px] xl:ms-[-79px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("dealearshipBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#A684EB] hover:bg-[#ae8eed] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[180px] xl:text-lg 2xl:py-2'>
                                    Dealearship
                                </Button>
                                {hide === "dealearshipBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px]  top-[30px] left-[40px] xl:ms-[28px] 2xl:mt-[-3.6rem] 2xl:flex 2xl:ms-[7.8rem]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`hidden sm:hidden w-[150px] h-[65px] 2xl:block`} alt="#" />
                                        <img src={Arrow} className='h-[100px] ms-[5px] sm:h-[100px] 2xl:hidden' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 mt-[-10px] ms-[-41px] sm:mt-[-10px] sm:ms-[-50px] xl:ms-[-79px] 2xl:ms-[0.1rem]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </TooltipProvider >

        </div >
    )
}

export default HomePage