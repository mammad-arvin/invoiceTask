import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const BasicInfo = () => {
    const optionDivStyle = "w-[22%] flex flex-col gap-2";

    const [description, setDescription] = useState("");
    const [optionsValue, setOptionsValue] = useState({
        CostCenter: "",
        Marketer: "",
        MarketerShare: "",
        Discount: "",
        Client: "",
        Warehouse: "",
        Bin: "",
    });

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
                    {selectPotions("Delinternet", "CostCenter", [
                        "Delinternet",
                        "greatHearte",
                        "upinternet",
                    ])}
                </div>
                <div className={optionDivStyle}>
                    <Label htmlFor="Marketer">Marketer</Label>
                    {selectPotions("Terry Geidt", "Marketer", [
                        "Terry Geidt",
                        "Terry Geidt2",
                        "Terry Geidt3",
                    ])}
                </div>
                <div className={optionDivStyle}>
                    <Label htmlFor="Marketer Share">Marketer Share</Label>
                    {selectPotions("9%", "MarketerShare", ["9%", "36%", "15%"])}
                </div>
                <div className={optionDivStyle}>
                    <Label htmlFor="Marketer Share">Discount</Label>
                    {selectPotions("21%", "Discount", ["21%", "13%", "5%"])}
                </div>
            </div>

            <div className="w-full flex justify-between gap-4">
                <div className={`w-[48%] flex flex-col gap-2`}>
                    <Label htmlFor="Client">Client</Label>
                    {selectPotions("Raul Bento", "Client", [
                        "Raul Bento",
                        "Raul Bento2",
                        "Raul Bento3",
                    ])}
                </div>
                <div className="w-[48%] flex justify-between">
                    <div className="w-[46%] flex flex-col gap-2">
                        <Label htmlFor="Warehouse">Warehouse</Label>
                        {selectPotions("Delinternet", "Warehouse", [
                            "Delinternet",
                            "Delinternet2",
                            "Delinternet3",
                        ])}
                    </div>
                    <div className="w-[46%] flex flex-col gap-2">
                        <Label htmlFor="Bin">Bin</Label>
                        {selectPotions("A86", "Bin", ["A86", "A86 2", "A86 3"])}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
        </div>
    );
};

export default BasicInfo;
