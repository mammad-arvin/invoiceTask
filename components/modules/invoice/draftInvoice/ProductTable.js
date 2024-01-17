import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// data
import productsData from "@/Data/producsData";

// utility function
import { minDescrip } from "@/utility/utilityFuction";

export const createHeader = (headers) => {
    return (
        <TableHeader className="w-full">
            <TableRow className="w-full flex justify-between ">
                {headers.map((item ,index) => (
                    <TableHead
                    key={index}
                        className={`text-left text-[#040714] text-[13px] leading-[15.51px] py-3 px-0 font-[510] ${item.width} `}
                    >
                        {item.text}
                    </TableHead>
                ))}
            </TableRow>
        </TableHeader>
    );
};

const ProductTable = () => {
    const cellStyle =
        "text-left text-[#040714] text-[13px] leading-[15.51px] py-3 px-0 font-[400]";

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
                {createHeader(tableHeaders)}
                <TableBody className="w-full">
                    {productsData.map((item) => (
                        <TableRow
                            key={item.id}
                            className={`${
                                item.id % 2 === 0 && "bg-[#F8F9F9]"
                            }  w-full flex justify-between`}
                        >
                            <TableCell className={`${cellStyle} w-[17px] px-3`}>
                                {item.id < 10 && "0"}
                                {item.id}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[183px]`}>
                                {item.product}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[23px]`}>
                                {item.qty}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[33px]`}>
                                {item.price}€
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[82px]`}>
                                {item.bundledUnit}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[71px]`}>
                                {item.warehouse}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[26px]`}>
                                {item.bin}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[44px]`}>
                                {item.weight}kg
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[62px]`}>
                                {item.tax || "-"}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[57px]`}>
                                {item.marketer}
                                {item.marketer ? "%" : "-"}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[97px]`}>
                                {item.marketerShare}
                                {item.marketerShare ? "%" : "-"}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[25px]`}>
                                {item.dis}
                                {item.dis ? "%" : "-"}
                            </TableCell>
                            <TableCell
                                className={`${cellStyle} w-[73px] normal-case`}
                            >
                                {minDescrip(item.description) || "-"}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[63px]`}>
                                {(item.qty * item.price).toLocaleString() + "€"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductTable;
