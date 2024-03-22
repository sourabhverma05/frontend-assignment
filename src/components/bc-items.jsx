import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu.jsx';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip.jsx';
import ProgressDetailsBox from './progress-details.jsx';



const B2CItems = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <p className={`relative sm:relative w-[110px] sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm lg:w-[150px] lg:text-lg xl:w-[130px] xl:text-sm 2xl:py-2 2xl:w-[130px]`}>B2C</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`flex flex-col`}>
                    <DropdownMenuSeparator />
                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuItem>
                                <p className='w-[110px] sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm lg:w-[130px] lg:text-lg xl:w-[130px] xl:text-sm 2xl:py-2 2xl:w-[130px]'>Online</p>
                            </DropdownMenuItem>
                        </TooltipTrigger>
                        <TooltipContent>
                            <ProgressDetailsBox />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuItem>
                                <p className='sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[130px] xl:text-sm 2xl:py-2 2xl:w-[130px]'>Interview</p>
                            </DropdownMenuItem>
                        </TooltipTrigger>
                        <TooltipContent>
                            <ProgressDetailsBox />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuItem>
                                <p className='sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[130px] xl:text-sm 2xl:py-2 2xl:w-[130px]'>Public Data</p>
                            </DropdownMenuItem>
                        </TooltipTrigger>
                        <TooltipContent>
                            <ProgressDetailsBox />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuItem>
                                <p className='sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px] lg:w-[150px] lg:text-lg xl:w-[130px] xl:text-sm 2xl:py-2 2xl:w-[130px]'>Health</p>
                            </DropdownMenuItem>
                        </TooltipTrigger>
                        <TooltipContent>
                            <ProgressDetailsBox />
                        </TooltipContent>
                    </Tooltip>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default B2CItems