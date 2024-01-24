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

    const onButtonClick = useCallback(() => {
        if (invoiceRef.current === null) {
            return;
        }

        toPng(invoiceRef.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "my-image-name.png";
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
                className="w-[903px] justify-start items-center gap-6 "
            >
                <InvoiceHeader />

                <div className="flex flex-col py-4 gap-4 border rounded-bl-lg rounded-br-lg">
                    <div className="px-4">
                        <BasicInfo />
                    </div>

                    <FinalTable />

                    <div className="px-4">
                        <OtherInfo sign="w-[367px]" signtureUrl={url} />
                    </div>
                </div>
            </div>
            {/* btns */}
            <div className="w-full flex justify-between items- py-6 px-5">
                <Button
                    variant="outline"
                    className="w-[439px] h-[49px] flex justify-center items-center gap-2 text-[14px] font-[510]  text-[#2E5BFF]  border-[#2E5BFF] rounded-[8px] "
                    onClick={onButtonClick}
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
