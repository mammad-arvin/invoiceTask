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

const SelectProductTable = () => {
    const tableHeaders = [
        { text: "ID", width: "w-[41px] px-3" },
        { text: "Product", width: "w-[408px] px-3" },
        { text: "Qty", width: "w-[47px] px-3" },
        { text: "Price", width: "w-[57px] px-3" },
        { text: "Bundled Unit", width: "w-[106px] px-3" },
        { text: "Warehouse", width: "w-[109px] px-3 text-center" },
        { text: "Bin", width: "w-[66px] px-3 " },
        { text: "Tax", width: "w-[86px] px-3" },
        { text: "Description", width: "w-[97px] px-3" },
        { text: "Total", width: "w-[87px] px-3" },
        { text: "Actions", width: "w-[88px] px-3 text-center" },
    ];

    // when a product create so component get new data
    const [addedNew, setAddedNew] = useState(false);

    const selectedProducts = useSelector((store) => store.selectedProducts);

    const totalOfProducts = selectedProducts?.reduce(
        (sum, item) => (sum += item.total),
        0
    );
    const taxes = selectedProducts?.reduce((sum, item) => (sum += item.tax), 0);

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
                    <SelectRow headers={tableHeaders} />

                    {selectedProducts.map((item, index) => (
                        <TableRows key={index} item={item} id={index + 1} />
                    ))}
                </TableBody>
            </Table>
            {selectedProducts.length > 0 && (
                <Calculations
                    base={totalOfProducts}
                    discount={13}
                    taxes={taxes}
                />
            )}
        </div>
    );
};

export default SelectProductTable;
