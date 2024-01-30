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
import Link from "next/link";
import { currentDate } from "@/utility/utilityFuction";

const InvoiceBar = ({ status }) => {
    const textDivStyel = "flex justify-start items-center gap-2";
    const LableStyle =
        "text-[#A3A3A3] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px]";
    const infoTextStyel = "text-gray-950 font-[510]";

    const InProgressBtnsStyle =
        "md:px-1 xl:px-4 py-2 md:text-[11px] lg:text-[12px] xl:text-sm 2xl:text-[16px] text-[#2E5BFF] hover:bg-slate-100 hover:text-none";

    const btns = [
        { icon: <Group />, text: "Barcode List Of Products" },
        { icon: <Download />, text: "Download" },
        { icon: <Print />, text: "Print" },
        { icon: <Trash />, text: "Delete" },
        { icon: <Edit />, text: "Edit" },
        { icon: <Envelope />, text: "Send Invoice By SMS" },
    ];

    return (
        <div className="h-[49px] 2xl:h-[56px] flex p-2 rounded border border-gray-200 justify-between items-center md:gap-2 xl:gap-4">
            <div className="invoice-info font-[400] leading-[15.51px] md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] h-4 justify-start items-center md:gap-3 lg:gap-5 xl:gap-6 flex">
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
                    <div className={infoTextStyel}>{currentDate()}</div>
                </div>
                <Badge
                    variant="secondary"
                    className={`${
                        status === "Drafted"
                            ? "bg-[#E578291A] hover:bg-[#E578291A] text-[#E57829]"
                            : "bg-[#EAEFFF] hover:bg-[#EAEFFF] text-[#2E5BFF]"
                    } md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[14px] leading-[13.13px] font-[400] rounded px-1`}
                >
                    {status}
                </Badge>
            </div>

            <div className="flex gap-1 text-xs leading-[14.32px]">
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

                        <Button className="h-[33px] 2xl:h-[40px] md:w-[90px] lg:w-[116px] 2xl:w-[132px] bg-[#2E5BFF] hover:bg-blue-500 md:text-[12px] lg:text-[12px] xl:text-sm 2xl:text-[16px] font-[510]">
                            <Link
                                className="py-1 md:px-3 xl:px-4"
                                href="/invoice/choose-a-template/configuration/new-invoice-page/finalInvoice"
                            >
                                Set As Issued
                            </Link>
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

                        <Button
                            variant="ghost"
                            className={`${InProgressBtnsStyle} px-0`}
                        >
                            <Link
                                className="py-1 md:px-3 xl:px-4 "
                                href="/invoice/choose-a-template/configuration/new-invoice-page/draft-page"
                            >
                                Set As Issued
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default InvoiceBar;
