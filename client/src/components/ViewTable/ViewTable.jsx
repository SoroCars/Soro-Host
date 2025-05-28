import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ViewTable({ data, saleType, THColumns }) {
  console.log(data)
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">
        Car Details (Sale Type: <span className="capitalize">{saleType}</span>)
      </h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S.No</TableHead>
            {THColumns.map((item, index) => (
              <TableHead key={index}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {saleType === "Stock Invoice" && data?.cars?.length > 0 ? (
            <>
              {data.cars.map((item, index) => (
                <TableRow key={item.id ?? index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item?.Stock_Id ?? "-"}</TableCell>
                  <TableCell>{item?.Invoice_Id ?? "-"}</TableCell>
                  <TableCell>{item?.Status ?? "-"}</TableCell>
                  <TableCell>{item?.Adjustment ?? "-"}</TableCell>
                  <TableCell>{item?.Amount ?? "-"}</TableCell>
                  <TableCell>{item?.Total ?? "-"}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  colSpan={THColumns.length - 2}
                  className="text-center text-muted-foreground"
                >
                  Grand Total
                </TableCell>
                <TableCell>{data?.totalAdjustmentInPKR ?? "-"}</TableCell>
                <TableCell>{data?.totalAmount ?? "-"}</TableCell>

                <TableCell>{data?.grandTotal ?? "-"}</TableCell>
              </TableRow>
            </>
          ) : data?.length > 0 ? (
            data.map((item, index) => (
              <TableRow key={item.id ?? index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item?.AgentName ?? "-"}</TableCell>
                <TableCell>{item?.Invoice_Id ?? "-"}</TableCell>
                <TableCell>{item?.Stock_Id ?? "-"}</TableCell>
                <TableCell>{item?.Adjustment ?? "-"}</TableCell>
                <TableCell>{item?.Amount ?? "-"}</TableCell>
                <TableCell>{item?.Status ?? "-"}</TableCell>
                <TableCell>{item?.Sale_type ?? "-"}</TableCell>
                <TableCell>{item?.Agency ?? "-"}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={THColumns.length + 1}
                className="text-center text-muted-foreground"
              >
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
