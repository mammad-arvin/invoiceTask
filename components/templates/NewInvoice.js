import { useState } from "react";
import InvoiceBar from "../modules/invoice/InvoiceBar";
import DraftInvoice from "../modules/invoice/draftInvoice/DraftInvoice";

const NewInvoice = () => {
    const [page, setPage] = useState(<DraftInvoice />);
    return (
        <div className="div-container flex bg-white">
            <article className="w-full ">
                <main className="w-full flex flex-col gap-10 justify-start p-4">
                    <InvoiceBar setPage={setPage} />
                    {page}
                </main>
            </article>
        </div>
    );
};

export default NewInvoice;
