import OtherInfo from "@/components/shared/invoiceShare/OtherInfo";
import BasicInfo from "./BasicInfo";
import ProductTable from "./ProductTable";
import { useSelector } from "react-redux";
import { selectSelectedProduct } from "@/Redux/features/sectedProducts/selectedProductsSlice";

const DraftInvoice = () => {
    const selectedProducts = useSelector(selectSelectedProduct);

    return (
        <>
            <BasicInfo />
            <ProductTable data={selectedProducts} />
            <OtherInfo draft={true} />
        </>
    );
};

export default DraftInvoice;
