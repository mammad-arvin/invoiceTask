import CreateTableHeader from "@/components/shared/invoiceShare/CreateTableHeader";
import { Table, TableBody } from "@/components/ui/table";
import TableRows from "../InProgress/TableRows";
import { useSelector } from "react-redux";

// headers

const tableHeaders = [
    { text: "ID", width: "w-[41px] px-3" },
    { text: "Product", width: "w-[148px] px-3" },
    { text: "Qty", width: "w-[47px] px-3" },
    { text: "Price", width: "w-[57px] px-3" },
    { text: "Bundled Unit", width: "w-[106px] px-3" },
    { text: "Warehouse", width: "w-[95px] px-3 text-center" },
    { text: "Bin", width: "w-[50px] px-3 " },
    { text: "Wieght", width: "w-[68px] px-3 text-center" },
    { text: "Tax", width: "w-[86px] px-3" },
    { text: "Description", width: "w-[97px] px-3" },
    { text: "Total", width: "w-[87px] px-3" },
];

const FinallTable = () => {
    const selectedProducts = useSelector((store) => store.selectedProducts);

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
