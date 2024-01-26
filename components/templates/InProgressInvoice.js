import InvoiceBar from "../modules/invoice/InvoiceBar";
import BasicInfo from "../modules/invoice/InProgress/BasicInfo";
import SelectProductTable from "../modules/invoice/InProgress/SelectProductTable";
import OtherInfo from "../shared/invoiceShare/OtherInfo";

const InProgressInvoice = () => {
    return (
        <div className="div-container flex bg-white">
            <article className="w-full ">
                <main className="w-full flex flex-col gap-10 justify-start p-4">
                    <InvoiceBar status={"In Progress"} />

                    <BasicInfo />
                    <SelectProductTable />
                    <OtherInfo />
                </main>
            </article>
        </div>
    );
};

export default InProgressInvoice;
