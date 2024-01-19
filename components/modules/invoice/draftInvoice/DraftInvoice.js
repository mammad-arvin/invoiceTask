import OtherInfo from "@/components/shared/invoiceShare/OtherInfo";
import BasicInfo from "./BasicInfo";
import ProductTable from "./ProductTable";
import { useSelector } from "react-redux";

const DraftInvoice = () => {
    const selectedProducts = useSelector((store) => store.selectedProducts);

    return (
        <>
            <BasicInfo />
            <ProductTable data={selectedProducts} />
            <OtherInfo draft={true} />
        </>
    );
};

export default DraftInvoice;
