"use client";

import { selectbasicInfoInitialValue } from "@/Redux/features/basicInfoInitialValue/basicInfoInitialValueSlice";
import { getBasicInfo } from "@/Redux/features/sectedProducts/inProgressSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// style
const optionDivStyle = "w-[22%] flex flex-col gap-2";

const BasicInfo = () => {
    const dispath = useDispatch();

    const {
        costCenter,
        marketer,
        marketerShare,
        discount,
        client,
        warehouse,
        bin,
    } = useSelector(selectbasicInfoInitialValue);

    const [optionsValue, setOptionsValue] = useState({
        costCenter: "",
        marketer: "",
        marketerShare: "",
        discount: "",
        client: "",
        warehouse: "",
        bin: "",
        description: "",
    });

    useEffect(() => {
        dispath(getBasicInfo(optionsValue));
    }, [optionsValue]);

    const selectPotions = (placeholder, key, options) => {
        return (
            <Select
                defaultValue={optionsValue[key]}
                onValueChange={(value) =>
                    setOptionsValue({ ...optionsValue, [key]: value })
                }
            >
                <SelectTrigger className="w-full h-[32px] text-sm text-[#040714]">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem
                            key={option}
                            value={option}
                            className="text-[12px] text-[#040714] p-1 "
                        >
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        );
    };

    return (
        <div className="flex flex-col justify-start items-start gap-4">
            <div className="h-4 text-gray-950 text-sm leading-[16.71px] font-[510]">
                Basic Information
            </div>
            <div className="w-full flex justify-between">
                <div className={optionDivStyle}>
                    <Label htmlFor="cost center">Cost Center</Label>
                    {selectPotions("select", "costCenter", costCenter)}
                </div>
                <div className={optionDivStyle}>
                    <Label htmlFor="Marketer">Marketer</Label>
                    {selectPotions("select", "marketer", marketer)}
                </div>
                <div className={optionDivStyle}>
                    <Label htmlFor="Marketer Share">Marketer Share</Label>
                    {selectPotions("select", "marketerShare", marketerShare)}
                </div>
                <div className={optionDivStyle}>
                    <Label htmlFor="Marketer Share">Discount</Label>
                    {selectPotions("select", "discount", discount)}
                </div>
            </div>

            <div className="w-full flex justify-between gap-4">
                <div className={`w-[48%] flex flex-col gap-2`}>
                    <Label htmlFor="Client">Client</Label>
                    {selectPotions("select", "client", client)}
                </div>
                <div className="w-[48%] flex justify-between">
                    <div className="w-[46%] flex flex-col gap-2">
                        <Label htmlFor="Warehouse">Warehouse</Label>
                        {selectPotions("select", "warehouse", warehouse)}
                    </div>
                    <div className="w-[46%] flex flex-col gap-2">
                        <Label htmlFor="Bin">Bin</Label>
                        {selectPotions("select", "bin", bin)}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
                <Label htmlFor="description">Invoice Description</Label>
                <Input
                    type="text"
                    id="description"
                    placeholder="Invoice description"
                    className="h-[32px] px-2 py-[6px] shadow-none"
                    value={optionsValue.description}
                    onChange={(e) =>
                        setOptionsValue({
                            ...optionsValue,
                            description: e.target.value,
                        })
                    }
                />
            </div>
        </div>
    );
};

export default BasicInfo;
