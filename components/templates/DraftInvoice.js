import BasicInfo from "../modules/invoice/draftInvoice/BasicInfo";
import ProductTable from "../modules/invoice/draftInvoice/ProductTable";
import OtherInfo from "../shared/invoiceShare/OtherInfo";
import InvoiceBar from "../modules/invoice/InvoiceBar";

// redux
import { useSelector } from "react-redux";
import { selectSelectedProduct } from "@/Redux/features/sectedProducts/inProgressSlice";

const DraftInvoice = () => {
    const selectedProducts = useSelector(selectSelectedProduct);

    return (
        <div className="div-container flex bg-white">
            <article className="w-full ">
                <main className="w-full flex flex-col gap-10 justify-start p-4">
                    <InvoiceBar status={"Drafted"} />

                    <BasicInfo />
                    <ProductTable data={selectedProducts} />
                    <OtherInfo draft={true} />
                </main>
            </article>
        </div>
    );
};

export default DraftInvoice;
