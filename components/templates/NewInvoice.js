import { useState } from "react";
import InvoiceBar from "../modules/invoice/InvoiceBar";
import InProgress from "../modules/invoice/InProgress/InProgress";

const NewInvoice = () => {
    const [page, setPage] = useState(<InProgress />);

    return (
        <div className="div-container flex bg-white">
            <article className="w-full ">
                <main className="w-full flex flex-col gap-10 justify-start p-4">
                    <InvoiceBar
                        setPage={setPage}
                        status={
                            page.type.name === "InProgress"
                                ? "In Progress"
                                : "Drafted"
                        }
                    />
                    {page}
                </main>
            </article>
        </div>
    );
};

export default NewInvoice;
