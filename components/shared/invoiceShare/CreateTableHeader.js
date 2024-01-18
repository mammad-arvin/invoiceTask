import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CreateTableHeader = ({ headers }) => {
    return (
        <TableHeader className="w-full">
            <TableRow className="w-full flex justify-between ">
                {headers.map((item, index) => (
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
export default CreateTableHeader;
