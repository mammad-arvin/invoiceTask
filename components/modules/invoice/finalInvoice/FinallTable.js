import CreateTableHeader from "@/components/shared/invoiceShare/CreateTableHeader";
import { Table, TableBody } from "@/components/ui/table";
import TableRows from "../InProgress/TableRows";
import { useSelector } from "react-redux";
import { selectSelectedProduct } from "@/Redux/features/sectedProducts/inProgressSlice";

// headers

const tableHeaders = [
    { text: "ID", width: "xl:w-[41px] xl:px-3 md:px-1" },
    { text: "Product", width: "xl:w-[148px] md:col-span-2 xl:px-3 md:px-1" },
    { text: "Qty", width: "xl:w-[47px] xl:px-3 md:px-1" },
    { text: "Price", width: "xl:w-[57px] xl:px-3 md:px-1" },
    { text: "Bundled Unit", width: "xl:w-[106px] xl:px-3 md:px-1" },
    { text: "Warehouse", width: "xl:w-[95px] xl:px-3 t md:px-1ext-center" },
    { text: "Bin", width: "xl:w-[50px] xl:px-3 md:px-1" },
    { text: "Wieght", width: "xl:w-[68px] xl:px-3 md:px-1" },
    { text: "Tax", width: "xl:w-[86px] xl:px-3 md:px-1" },
    { text: "Description", width: "xl:w-[97px] xl:px-3 md:px-1" },
    {
        text: "Total",
        width: "xl:w-[87px] xl:px-3 md:px-1 lg:text-left md:text-center",
    },
];

const FinallTable = () => {
    const selectedProducts = useSelector(selectSelectedProduct);

    return (
        <div>
            <Table className="text-[13px]  border-b border-t border-zinc-300 flex-col justify-start items-start w-full flex">
                <CreateTableHeader headers={tableHeaders} />
                <TableBody className="w-full border-none">
                    {selectedProducts?.map((item, index) => (
                        <TableRows
                            key={index}
                            id={index + 1}
                            item={item}
                            final={true}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default FinallTable;
