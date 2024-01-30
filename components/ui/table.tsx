import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn("w-full caption-bottom text-sm", className)}
            {...props}
        />
    </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
    />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
            className
        )}
        {...props}
    />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            className
        )}
        {...props}
    />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "h-10 px-2 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            className
        )}
        {...props}
    />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] border-hidden",
            className
        )}
        {...props}
    />
));
TableCell.displayName = "TableCell";

const SelectTableCell = React.forwardRef<
    HTMLSelectTableCellElement,
    React.TdHTMLAttributes<HTMLSelectTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            " align-middle py-2 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] border-r border-[#E3E9FF] text-left text-[#040714] text-[13px] leading-[15.51px] font-[400] xl:px-3 md:px-1 md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] ",
            className
        )}
        {...props}
    />
));
SelectTableCell.displayName = "SelectTableCell";

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn("mt-4 text-sm text-muted-foreground", className)}
        {...props}
    />
));
TableCaption.displayName = "TableCaption";

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    SelectTableCell,
    TableCaption,
};
