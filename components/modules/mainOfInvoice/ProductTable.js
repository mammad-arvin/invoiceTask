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

const ProductTable = () => {
    const headerStyle =
        "text-left text-[#040714] leading-[15.51px] p-3 font-[510]";
    const cellStyle =
        "text-left text-[#040714] leading-[15.51px] p-3 font-[400]";

    return (
        <div className="w-full">
            <p className="mb-4 text-[14px] leading-[16.71px]">Product</p>
            <Table className="text-[13px] rounded border border-zinc-300 flex-col justify-start items-start w-full flex">
                <TableHeader>
                    <TableRow>
                        <TableHead className={`${headerStyle} w-[41px]`}>
                            ID
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[207px]`}>
                            Product
                        </TableHead>
                        <TableHead
                            className={`${headerStyle} w-[47px] text-center`}
                        >
                            Qty
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[57px]`}>
                            Price
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[106px]`}>
                            Bundled Unit
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[95px]`}>
                            Warehouse
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[50px]`}>
                            Bin
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[68px]`}>
                            Weight
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[86px]`}>
                            Tax
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[81px]`}>
                            Marketer
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[121px]`}>
                            Marketer Share
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[49px]`}>
                            Dis.
                        </TableHead>
                        <TableHead className={`${headerStyle} w-[115px]`}>
                            Description
                        </TableHead>
                        <TableHead
                            className={`${headerStyle}  w-[95px] text-center`}
                        >
                            Total
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {productsData.map((item) => (
                        <TableRow
                            key={item.id}
                            className={item.id % 2 === 0 && "bg-[#F8F9F9]"}
                        >
                            <TableCell className={`${cellStyle} w-[41px]`}>
                                {item.id < 10 && "0"}
                                {item.id}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[207px]`}>
                                {item.product}
                            </TableCell>
                            <TableCell
                                className={`${cellStyle} w-[47px] text-center `}
                            >
                                {item.qty}
                            </TableCell>
                            <TableCell
                                className={`${cellStyle} w-[57px] text-center`}
                            >
                                {item.price}€
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[106px]`}>
                                {item.bundledUnit}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[95px]`}>
                                {item.warehouse}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[50px]`}>
                                {item.bin}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[68px]`}>
                                {item.weight}kg
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[86px]`}>
                                {item.tax || "-"}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[81px]`}>
                                {item.marketer}
                                {item.marketer ? "%" : "-"}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[121px]`}>
                                {item.marketerShare}
                                {item.marketerShare ? "%" : "-"}
                            </TableCell>
                            <TableCell className={`${cellStyle} w-[49px]`}>
                                {item.dis}
                                {item.dis ? "%" : "-"}
                            </TableCell>
                            <TableCell
                                className={`${cellStyle} w-[115px] normal-case`}
                            >
                                {minDescrip(item.description) || "-"}
                            </TableCell>
                            <TableCell
                                className={`${cellStyle} w-[95px] text-center`}
                            >
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
