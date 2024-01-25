import OtherInfo from "@/components/shared/invoiceShare/OtherInfo";
import BasicInfo from "./BasicInfo";
import SelectProductTable from "./SelectProductTable";

const InProgress = () => {
    return (
        <>
            <BasicInfo />
            <SelectProductTable />
            <OtherInfo />
        </>
    );
};

export default InProgress;
