import OtherInfo from "@/components/shared/invoiceShare/OtherInfo";
import BasicInfo from "./BasicInfo";
import SelectProductTable from "./SelectProductTable";
import { useSelector } from "react-redux";

const InProgress = () => {
    const selectedProducts = useSelector((store) => store.selectedProducts);

    const base = selectedProducts?.reduce(
        (sum, item) => (sum += item.total),
        0
    );
    const discount = 13;

    const invoiceProfit = ((base / 100) * discount).toFixed(2);
    const taxes = 50;

    return (
        <>
            <BasicInfo />
            <SelectProductTable base={base} />
            <OtherInfo
                base={base}
                invoiceProfit={invoiceProfit}
                discount={discount}
                taxes={taxes}
            />
        </>
    );
};

export default InProgress;
