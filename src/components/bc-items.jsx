import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu.jsx';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip.jsx';
import ProgressDetailsBox from './progress-details.jsx';



const B2CItems = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <p className={`relative sm:relative w-[110px]  sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm`}>B2C</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`sm:absolute absolute flex flex-col ms-[110px] sm:ms-[110px] -mt-[45px]`}>
                    <DropdownMenuSeparator />
                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuItem>
                                <p className='w-[110px] sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm'>Online</p>
                            </DropdownMenuItem>
                        </TooltipTrigger>
                        <TooltipContent>
                            <ProgressDetailsBox />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuItem>
                                <p className='sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>Interview</p>
                            </DropdownMenuItem>
                        </TooltipTrigger>
                        <TooltipContent>
                            <ProgressDetailsBox />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuItem>
                                <p className='sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>Public Data</p>
                            </DropdownMenuItem>
                        </TooltipTrigger>
                        <TooltipContent>
                            <ProgressDetailsBox />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenuItem>
                                <p className='sm:w-[110px] bg-[#3552AA] text-white tracking-wide py-3 px-3 text-sm font-medium rounded-sm w-[110px]'>Health</p>
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