import { Table, TableBody } from "@/components/ui/table";
import TableRows from "./TableRows";
import CreateTableHeader from "@/components/shared/invoiceShare/CreateTableHeader";

const ProductTable = ({ data }) => {
    const tableHeaders = [
        { text: "ID", width: "lg:w-[17px] lg:px-3 md:px-1" },
        { text: "Product", width: "lg:w-[183px] md:w-[103px]" },
        { text: "Qty", width: "lg:w-[23px]" },
        { text: "Price", width: "lg:w-[33px]" },
        { text: "Bundled Unit", width: "lg:w-[82px]" },
        { text: "Warehouse", width: "lg:w-[71px] " },
        { text: "Bin", width: "lg:w-[26px] " },
        { text: "Weight", width: "lg:w-[44px] " },
        { text: "Tax", width: "lg:w-[62px]" },
        { text: "Marketer", width: "lg:w-[57px]" },
        { text: "Marketer Share", width: "lg:w-[97px]" },
        { text: "Dis.", width: "lg:w-[25px] " },
        { text: "Description", width: "lg:w-[73px] md:hidden lg:flex" },
        { text: "Total", width: "lg:w-[63px] md:mr-1 lg:mr-0" },
    ];

    return (
        <div className="w-full">
            <p className="mb-4 text-[14px] leading-[16.71px]">Product</p>
            <Table className="text-[13px] rounded border border-zinc-300 flex-col justify-start items-start w-full flex">
                <CreateTableHeader headers={tableHeaders} draftPage={true} />
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
