"use client";

// ui
import { Table, TableBody } from "@/components/ui/table";
import CreateTableHeader from "@/components/shared/invoiceShare/CreateTableHeader";
import TableRows from "./TableRows";
import SelectRow from "./SelectRow";

import { useSelector } from "react-redux";
import Calculations from "./Calculations";
import CreateProductModal from "./CreateProductModal";
import { useState } from "react";
import { selectSelectedProduct } from "@/Redux/features/sectedProducts/inProgressSlice";

const SelectProductTable = () => {
    const tableHeaders = [
        { text: "ID", width: "xl:w-[41px] xl:px-3 md:px-1" },
        { text: "Product", width: "xl:w-[408px] col-span-2 xl:px-3 md:px-1" },
        { text: "Qty", width: "xl:w-[47px] xl:px-3 md:px-1" },
        { text: "Price", width: "xl:w-[57px] xl:px-3 md:px-1" },
        { text: "Bundled Unit", width: "xl:w-[106px] xl:px-3 md:px-1" },
        {
            text: "Warehouse",
            width: "xl:w-[109px] xl:px-3 md:px-1 text-center",
        },
        {
            text: "Bin",
            width: "xl:w-[66px] xl:px-3 md:px-1 md:text-center lg:text-left",
        },
        { text: "Tax", width: "xl:w-[86px] xl:px-3 md:px-1" },
        { text: "Description", width: "xl:w-[97px] xl:px-3 md:px-1" },
        {
            text: "Total",
            width: "xl:w-[87px] xl:px-3 md:px-1 md:text-center lg:text-left",
        },
        { text: "Actions", width: "xl:w-[88px] xl:px-3 md:px-1 text-center" },
    ];

    // when a product create so component get new data
    const [addedNew, setAddedNew] = useState(false);

    const selectedProducts = useSelector(selectSelectedProduct);

    return (
        <div className="w-full">
            <div className="flex justify-between">
                <p className="mb-4 text-[14px] leading-[16.71px]">Product</p>
                <CreateProductModal
                    setAddedNew={setAddedNew}
                    addedNew={addedNew}
                />
            </div>
            <Table className="text-[13px] h-500 rounded rounded-br-none border border-zinc-300 flex-col justify-start items-start w-full flex ">
                <CreateTableHeader headers={tableHeaders} />

                <TableBody className="w-full to-lowercase">
                    {selectedProducts.map((item, index) => (
                        <TableRows key={index} item={item} id={index + 1} />
                    ))}

                    <SelectRow headers={tableHeaders} />
                </TableBody>
            </Table>
            {selectedProducts.length > 0 && <Calculations />}
        </div>
    );
};

export default SelectProductTable;
