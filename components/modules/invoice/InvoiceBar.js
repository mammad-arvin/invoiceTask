import React from "react";
import Download from "@/components/icons/Download";
import Edit from "@/components/icons/Edit";
import Envelope from "@/components/icons/Envelope";
import Group from "@/components/icons/Group";
import Print from "@/components/icons/Print";
import Trash from "@/components/icons/Trash";
import { Badge } from "@/components/ui/badge";
import { TooltipProvider } from "@/components/ui/tooltip";
import IconButton from "./draftInvoice/IconButton";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const InvoiceBar = ({ status }) => {
    const textDivStyel = "flex justify-start items-center gap-2";
    const LableStyle = "text-[#A3A3A3] text-[13px]";
    const infoTextStyel = "text-gray-950 text-[13px] font-[510]";

    const InProgressBtnsStyle =
        "px-4 py-2 text-[#2E5BFF] hover:bg-slate-100 hover:text-none";

    const btns = [
        { icon: <Group />, text: "Barcode List Of Products" },
        { icon: <Download />, text: "Download" },
        { icon: <Print />, text: "Print" },
        { icon: <Trash />, text: "Delete" },
        { icon: <Edit />, text: "Edit" },
        { icon: <Envelope />, text: "Send Invoice By SMS" },
    ];

    return (
        <div className="h-[49px] flex p-2 rounded border border-gray-200 justify-between items-center gap-4">
            <div className="invoice-info font-[400] leading-[15.51px] text-[13px] h-4 justify-start items-center gap-6 flex">
                <div className={textDivStyel}>
                    <Label htmlFor="Invoice Code" className={LableStyle}>
                        Invoice Code
                    </Label>
                    <p className={infoTextStyel}>F23/1231123</p>
                </div>
                <div className={textDivStyel}>
                    <Label htmlFor="Creator" className={LableStyle}>
                        Creator
                    </Label>
                    <div className={infoTextStyel}>Cohn</div>
                </div>
                <div className={textDivStyel}>
                    <Label htmlFor="Date" className={LableStyle}>
                        Date
                    </Label>
                    <div className={infoTextStyel}>23-9-2023</div>
                </div>
                <Badge
                    variant="secondary"
                    className={`${
                        status === "Drafted"
                            ? "bg-[#E578291A] hover:bg-[#E578291A] text-[#E57829]"
                            : "bg-[#EAEFFF] hover:bg-[#EAEFFF] text-[#2E5BFF]"
                    } text-[11px] leading-[13.13px] font-[400] rounded px-1`}
                >
                    {status}
                </Badge>
            </div>

            <div className="flex gap-x-1 text-xs leading-[14.32px]">
                {status === "Drafted" ? (
                    <>
                        <TooltipProvider>
                            {btns.map((btn, index) => (
                                <React.Fragment key={index}>
                                    {index === 3 && (
                                        <div className="flex items-center">
                                            <div className="w-px h-6 bg-gray-200 rounded-sm absolute" />
                                        </div>
                                    )}
                                    <IconButton {...btn} />
                                </React.Fragment>
                            ))}
                        </TooltipProvider>

                        <Button className="h-[33px] w-[116px] bg-[#2E5BFF] hover:bg-blue-500 text-sm font-[510]">
                            Set As Issued
                        </Button>
                    </>
                ) : (
                    <div className="flex gap-4">
                        <Button variant="ghost" className={InProgressBtnsStyle}>
                            Cancel
                        </Button>
                        <Button variant="ghost" className={InProgressBtnsStyle}>
                            Save As Draft
                        </Button>
                        <Button variant="ghost" className={InProgressBtnsStyle}>
                            Set As Issued
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default InvoiceBar;