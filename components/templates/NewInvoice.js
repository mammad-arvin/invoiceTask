"use client";

import { useState } from "react";
import InvoiceBar from "../modules/invoice/InvoiceBar";
import InProgress from "../modules/invoice/InProgress/InProgress";

const NewInvoice = () => {
    const [page, setPage] = useState({
        page: <InProgress />,
        pageName: "InProgress",
    });

    return (
        <div className="div-container flex bg-white">
            <article className="w-full ">
                <main className="w-full flex flex-col gap-10 justify-start p-4">
                    <InvoiceBar
                        setPage={setPage}
                        status={
                            page.pageName === "InProgress"
                                ? "In Progress"
                                : "Drafted"
                        }
                    />
                    {page.page}
                </main>
            </article>
        </div>
    );
};

export default NewInvoice;
