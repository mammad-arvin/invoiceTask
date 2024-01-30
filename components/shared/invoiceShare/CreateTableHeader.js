import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CreateTableHeader = ({ headers, draftPage }) => {
    return (
        <TableHeader className="w-full">
            <TableRow
                className={
                    !draftPage
                        ? `w-full xl:flex md:grid md:grid-cols-12 2xl:grid justify-between items-center 2xl:h-[45px]`
                        : `w-full flex justify-between 2xl:h-[50px]`
                }
            >
                {headers.map((item, index) => (
                    <TableHead
                        key={index}
                        className={`text-left text-[#040714] md:text-[11px] lg:text-[12px] xl:text-[13px]
                         2xl:text-[16px] leading-[15.51px] py-3 px-0 font-[510] ${item.width}`}
                    >
                        {item.text}
                    </TableHead>
                ))}
            </TableRow>
        </TableHeader>
    );
};
export default CreateTableHeader;
