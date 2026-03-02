import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import { Button } from "../ui/button";

interface Props {
  current: number;
  limit: number;
  onPageChange: (page: number) => void;
  total: number;
}

export const Pagination = ({ current, limit, onPageChange, total }: Props) => {
  const totalPages = Math.ceil(total / limit);

  const startRow = total === 0 ? 0 : (current - 1) * limit + 1;
  const endRow = Math.min(current * limit, total);

  const isFirstPage = current <= 1;
  const isLastPage = current >= totalPages;

  const handleFirstPage = () => {
    if (!isFirstPage) {
      onPageChange(1);
    }
  };

  const handleLastPage = () => {
    if (!isLastPage) {
      onPageChange(totalPages);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      onPageChange(current + 1);
    }
  };

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      onPageChange(current - 1);
    }
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-4">
        <p className="text-muted-foreground text-sm">
          Showing {startRow} to {endRow} of {total} rows
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <p className="text-sm">
          Page {current} of {totalPages}
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <Button onClick={handleFirstPage} size="icon-sm" variant="outline" disabled={isFirstPage}>
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button onClick={handlePreviousPage} size="icon-sm" variant="outline" disabled={isFirstPage}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button onClick={handleNextPage} size="icon-sm" variant="outline" disabled={isLastPage}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button onClick={handleLastPage} size="icon-sm" variant="outline" disabled={isLastPage}>
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
