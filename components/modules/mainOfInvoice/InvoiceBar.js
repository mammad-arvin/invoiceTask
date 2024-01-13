import Download from "@/components/icons/Download";
import Edit from "@/components/icons/Edit";
import Envelope from "@/components/icons/Envelope";
import Group from "@/components/icons/Group";
import Print from "@/components/icons/Print";
import Trash from "@/components/icons/Trash";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const InvoiceBar = () => {
    const infoAnswerStyel = "text-gray-950 text-[13px] font-[510]";
    const btnStyle = "py-2 px-3";

    return (
        <div className=" h-[49px] grid grid-cols-12 p-2 rounded border border-gray-200 justify-start items-center gap-4">
            <div className="invoice-info col-span-8 font-[400] leading-[15.51px] text-[13px] h-4 justify-start items-center gap-6 flex">
                <div className="justify-start items-center gap-2 flex">
                    <p className="text-neutral-400 text-[13px]">Invoice Code</p>
                    <p className={infoAnswerStyel}>F23/1231123</p>
                </div>
                <div className="justify-start items-center gap-2 flex">
                    <div className="text-neutral-400 text-[13px] ">Creator</div>
                    <div className={infoAnswerStyel}>Cohn</div>
                </div>
                <div className="justify-start items-center gap-2 flex">
                    <div className="text-neutral-400 text-[13px] ">Date</div>
                    <div className={infoAnswerStyel}>23-9-2023</div>
                </div>
                <Badge
                    variant="secondary"
                    className="bg-[#E578291A] hover:bg-[#E578291A] text-[#E57829] text-[11px] rounded px-1"
                >
                    Drafted
                </Badge>
            </div>

            <div className="col-span-4 flex gap-x-1 text-xs leading-[14.32px] ">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className={btnStyle}>
                            <Group />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Barcode List Of Products</p>
                            <TooltipArrow />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className={btnStyle}>
                            <Download />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Download</p>
                            <TooltipArrow />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className={btnStyle}>
                            <Print />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Print</p>
                            <TooltipArrow />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className={btnStyle}>
                            <Trash />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Delete</p>
                            <TooltipArrow />
                        </TooltipContent>
                    </Tooltip>

                    <div className="flex items-center">
                        <div className="w-px h-6 bg-gray-200 rounded-sm absolute" />
                    </div>
                    <Tooltip>
                        <TooltipTrigger className={btnStyle}>
                            <Edit />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Edit</p>
                            <TooltipArrow />
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger className={btnStyle}>
                            <Envelope />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Send Invoice By SMS</p>
                            <TooltipArrow />
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <Button className="h-[33px] w-[116px] bg-[#2E5BFF] hover:bg-blue-500">
                    Set As Issued
                </Button>
            </div>
        </div>
    );
};
export default InvoiceBar;
