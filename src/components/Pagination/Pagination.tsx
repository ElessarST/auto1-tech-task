import React from 'react';
import { Grid } from '@mui/material';
import PaginationButton from './PaginationButton';

type Props = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ page, pageCount, onPageChange }) => {
  const isFirst = page === 1;
  const hasPrev = page > 1;
  const hasNext = page < pageCount;
  const isLast = page === pageCount;
  return (
    <Grid container alignItems="center" spacing={1} justifyContent="center">
      <Grid item>
        <PaginationButton visible={!isFirst} onClick={() => onPageChange(0)}>
          First
        </PaginationButton>
      </Grid>
      <Grid item>
        <PaginationButton
          visible={hasPrev}
          onClick={() => onPageChange(page - 1)}>
          Previous
        </PaginationButton>
      </Grid>
      <Grid item>
        Page {page} of {pageCount}
      </Grid>
      <Grid item>
        <PaginationButton
          visible={hasNext}
          onClick={() => onPageChange(page + 1)}>
          Next
        </PaginationButton>
      </Grid>
      <Grid item>
        <PaginationButton
          visible={!isLast}
          onClick={() => onPageChange(pageCount - 1)}>
          Last
        </PaginationButton>
      </Grid>
    </Grid>
  );
};

export default Pagination;
