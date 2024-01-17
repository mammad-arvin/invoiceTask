import OtherInfo from "@/components/shared/invoiceShare/OtherInfo";
import BasicInfo from "./BasicInfo";
import ProductTable from "./ProductTable";

const DraftInvoice = () => {
    return (
        <>
            <BasicInfo />
            <ProductTable />
            <OtherInfo draft={true} />
        </>
    );
};

export default DraftInvoice;
