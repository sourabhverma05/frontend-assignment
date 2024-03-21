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
    const [hide, setHide] = useState("externalBtn")

    function handleBtnsDetail(val) {
        setHide(val)
    }

    return (
        <div className='w-full'>
            <TooltipProvider>
                <div className='flex flex-col sm:flex-col'>
                    <img src={GroupImage} className='m-auto sm:m-auto rotate-90 sm:rotate-90 flex justify-center sm:justify-center items-center sm:items-center w-[10rem] sm:w-[10rem] sm:h-[560px] h-[560px]' alt="#" />
                    <div className="flex flex-row sm:flex-row mt-[-215px] sm:mt-[-215px] gap-[14px] sm:gap-[14px]">

                        <div className={`flex sm:flex-col flex-col items-center w-[300px]`}>
                            <p className='sm:w-[110px] w-[110px] text-xs sm:text-xs  bg-[#3552aa] hover:text-white tracking-wide text-center py-3 px-3 font-medium rounded-sm'>Research</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='sm:hidden w-[200px] h-[70px]' alt="#" />
                                <img src={Arrow} className='h-full sm:h-full' alt="#" />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col items-center w-[300px]'>
                            <p className='sm:w-[110px] w-[110px] sm:text-xs text-xs text-center bg-[#82B3E8] hover:text-white tracking-wide py-3 px-3 font-medium rounded-sm'>Planning</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='sm:hidden w-[200px] h-[70px]' alt="#" />
                                <img src={Arrow} className='sm:h-full h-full' alt="#" />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col items-center w-[300px]'>
                            <p className='sm:w-[110px] sm:text-xs w-[110px] text-xs bg-[#E96343] hover:text-white tracking-wide py-3 px-3 font-medium text-center rounded-sm'>Desiging</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='sm:hidden w-[200px] h-[70px]' alt="#" />
                                <img src={Arrow} className='sm:h-full' alt="#" />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col items-center w-[300px]'>
                            <p className='sm:w-[110px] sm:text-xs w-[110px] text-xs bg-[#E8919D] hover:text-white text-center tracking-wide py-3 px-3 font-medium rounded-sm'>Manufacturing</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='sm:hidden w-[200px] h-[70px]' alt="#" />
                                <img src={Arrow} className='sm:h-full' alt="#" />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-col items-center w-[300px]'>
                            <p className='sm:w-[110px] sm:text-xs w-[110px] text-xs  bg-[#A684EB] hover:text-white tracking-wide py-3 px-3 font-medium text-center rounded-sm'>Salse/Marketing</p>
                            <div className='flex items-center'>
                                <img src={ThreeArrow} className='sm:hidden w-[200px] h-[70px]' alt="#" />
                                <img src={Arrow} className='sm:h-full' alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-[20px] sm:justify-center gap-y-[20px]'>
                        <div className="sm:flex sm:flex-col sm:gap-3">
                            <div className='flex sm:flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("externalBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#3552aa] hover:bg-[#4768cd] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[150px]'>
                                    External
                                </Button>
                                {hide === "externalBtn" && <div className={`absolute sm:top-[30px] sm:left-[40px] top-[30px] left-[40px] `}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-40px] mt-[-10px] ms-[-40px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("internalBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#3552aa] hover:bg-[#4768cd] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                    Internal
                                </Button>
                                {hide === "internalBtn" && <div className={`absolute sm:top-[30px] sm:left-[40px] left-[145px] top-[-13px]`}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-40px] mt-[-10px] ms-[-40px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="sm:flex sm:flex-col sm:gap-3">
                            <div className="relative">
                                <div className='flex items-center'>
                                    <Button onClick={() => handleBtnsDetail("PRDBtn")}
                                        className='text-black sm:w-[110px] focus:text-white bg-[#82B3E8] hover:bg-[#91c1f6]  hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                        PRD
                                    </Button>
                                    {hide === "PRDBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px]  top-[30px] left-[40px]`}>
                                        <div className='flex items-center'>
                                            <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                            <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                        </div>
                                        <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px]'>
                                            <B2CItems />
                                            <B2CItems />
                                        </div>
                                    </div>}
                                </div>
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("specsBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#82B3E8] hover:bg-[#91c1f6]  hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                    Specs
                                </Button>
                                {hide === "specsBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px]  top-[30px] left-[40px] `}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="sm:flex sm:flex-col sm:gap-3">
                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("hardwareBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#E96343] hover:bg-[#f3704f] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                    Hardware
                                </Button>
                                {hide === "hardwareBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px]  top-[30px] left-[40px] `}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("softwareBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#E96343] hover:bg-[#f3704f] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                    Software
                                </Button>
                                {hide === "softwareBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px] top-[30px] left-[40px] `}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="sm:flex sm:flex-col sm:gap-3">
                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("materialBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#E8919D] hover:bg-[#eb9aa4] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                    Material
                                </Button>
                                {hide === "materialBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px]  top-[30px] left-[40px] `}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("productionBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#E8919D] hover:bg-[#eb9aa4] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                    Production
                                </Button>
                                {hide === "productionBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px] top-[30px] left-[40px] `}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="sm:flex sm:flex-col sm:gap-3">
                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("onlineBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#A684EB] hover:bg-[#ae8eed] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                    Online
                                </Button>
                                {hide === "onlineBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px] top-[30px] left-[40px] `}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px]'>
                                        <B2CItems />
                                        <B2CItems />
                                    </div>
                                </div>}
                            </div>

                            <div className='flex items-center relative'>
                                <Button onClick={() => handleBtnsDetail("dealearshipBtn")}
                                    className='text-black sm:w-[110px] focus:text-white bg-[#A684EB] hover:bg-[#ae8eed] hover:text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>
                                    Dealearship
                                </Button>
                                {hide === "dealearshipBtn" && <div className={`absolute sm:top-[35px] sm:left-[50px]  top-[30px] left-[40px] `}>
                                    <div className='flex items-center'>
                                        <img src={ThreeArrow} className={`sm:hidden w-[150px] h-[65px]`} alt="#" />
                                        <img src={Arrow} className='sm:h-[100px]' alt="#" />
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-[20%] sm:mt-[-10px] sm:ms-[-50px] mt-[-10px] ms-[-40px]'>
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