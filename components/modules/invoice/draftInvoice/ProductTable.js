import { Table, TableBody } from "@/components/ui/table";
import TableRows from "./TableRows";
import CreateTableHeader from "@/components/shared/invoiceShare/CreateTableHeader";

const ProductTable = ({ data }) => {
    const tableHeaders = [
        { text: "ID", width: "w-[17px] px-3" },
        { text: "Product", width: "w-[183px]" },
        { text: "Qty", width: "w-[23px]" },
        { text: "Price", width: "w-[33px]" },
        { text: "Bundled Unit", width: "w-[82px]" },
        { text: "Warehouse", width: "w-[71px] " },
        { text: "Bin", width: "w-[26px] " },
        { text: "Weight", width: "w-[44px] " },
        { text: "Tax", width: "w-[62px]" },
        { text: "Marketer", width: "w-[57px]" },
        { text: "Marketer Share", width: "w-[97px]" },
        { text: "Dis.", width: "w-[25px]" },
        { text: "Description", width: "w-[73px]" },
        { text: "Total", width: "w-[63px]" },
    ];

    return (
        <div className="w-full">
            <p className="mb-4 text-[14px] leading-[16.71px]">Product</p>
            <Table className="text-[13px] rounded border border-zinc-300 flex-col justify-start items-start w-full flex">
                <CreateTableHeader headers={tableHeaders} />
                <TableBody className="w-full">
                    {data?.map((item, index) => (
                        <TableRows key={index} id={index + 1} item={item} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductTable;
