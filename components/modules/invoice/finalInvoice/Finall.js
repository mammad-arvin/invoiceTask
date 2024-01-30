import BasicInfo from "../draftInvoice/BasicInfo";
import OtherInfo from "@/components/shared/invoiceShare/OtherInfo";
import FinalTable from "./FinallTable";
import { Button } from "@/components/ui/button";
import PenSvg from "@/components/icons/PenSvg";
import DownloadInvoiceSvg from "@/components/icons/DownloadInvoiceSvg";

import { toPng } from "html-to-image";

// for download invoice
import { useRef, useCallback, useState } from "react";
import SignturePad from "./SignturePad";
import InvoiceHeader from "./InvoiceHeader";

const Finall = () => {
    const invoiceRef = useRef(null);

    // for get url of signture
    const [url, setUrl] = useState();

    // download Hoandler
    const downloadHandler = useCallback(() => {
        if (invoiceRef.current === null) {
            return;
        }

        toPng(invoiceRef.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "invoice.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [invoiceRef]);

    return (
        <div className="flex flex-col h-full justify-center items-center p-[204px] ">
            <div
                ref={invoiceRef}
                className="md:w-[753px] lg:w-[903px] 2xl:w-[1080px]  bg-white justify-start items-center gap-6 "
            >
                <InvoiceHeader />

                <div className="flex flex-col py-4 gap-4 border rounded-bl-lg rounded-br-lg">
                    <div className="px-4">
                        <BasicInfo />
                    </div>

                    <FinalTable />

                    <div className="px-4">
                        <OtherInfo finallSign={true} signtureUrl={url} />
                    </div>
                </div>
            </div>

            {/* btns */}
            <div className="md:w-[753px] lg:w-[903px] 2xl:w-[1080px] flex justify-between items-center py-6 ">
                <Button
                    variant="outline"
                    className="w-[48%] h-[49px] flex justify-center items-center gap-2 text-[14px] 2xl:text-[16px] font-[510]  text-[#2E5BFF]  border-[#2E5BFF] rounded-[8px] "
                    onClick={downloadHandler}
                >
                    <DownloadInvoiceSvg /> Download
                </Button>

                <SignturePad setUrl={setUrl}>
                    <PenSvg /> Sign
                </SignturePad>
            </div>
        </div>
    );
};

export default Finall;
