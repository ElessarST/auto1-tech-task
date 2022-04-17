import Pagination from '../Pagination';
import { fireEvent, render, screen } from '@testing-library/react';

const FIRST_PAGE_BTN_TEXT = 'First';
const PREVIOUS_PAGE_BTN_TEXT = 'Previous';
const NEXT_PAGE_BTN_TEXT = 'Next';
const LAST_PAGE_BTN_TEXT = 'Last';

function renderPagination(page: number, pageCount: number) {
  const onPageChange = jest.fn();
  render(
    <Pagination
      page={page}
      pageCount={pageCount}
      onPageChange={onPageChange}
    />,
  );
  return {
    first: () => screen.getByText(FIRST_PAGE_BTN_TEXT),
    prev: () => screen.getByText(PREVIOUS_PAGE_BTN_TEXT),
    next: () => screen.getByText(NEXT_PAGE_BTN_TEXT),
    last: () => screen.getByText(LAST_PAGE_BTN_TEXT),
    page: () => screen.getByText(`Page ${page} of ${pageCount}`),
    onPageChange,
  };
}

describe('Pagination component', () => {
  describe('Navigation buttons presence', () => {
    it('should have page,next,last buttons for the first page', () => {
      const { first, prev, next, last, page } = renderPagination(1, 10);

      expect(first()).toBeDisabled();
      expect(prev()).toBeDisabled();
      expect(page()).toBeInTheDocument();
      expect(next()).toBeInTheDocument();
      expect(last()).toBeInTheDocument();
    });
    it('should have first,prev,page buttons for the last page', () => {
      const { first, prev, next, last, page } = renderPagination(10, 10);

      expect(first()).toBeInTheDocument();
      expect(prev()).toBeInTheDocument();
      expect(page()).toBeInTheDocument();
      expect(next()).toBeDisabled();
      expect(last()).toBeDisabled();
    });
    it('should have all buttons for the middle page', () => {
      const { first, prev, next, last, page } = renderPagination(2, 10);

      expect(first()).toBeInTheDocument();
      expect(prev()).toBeInTheDocument();
      expect(page()).toBeInTheDocument();
      expect(next()).toBeInTheDocument();
      expect(last()).toBeInTheDocument();
    });
    it('should have only page number for one page', () => {
      const { first, prev, next, last, page } = renderPagination(1, 1);

      expect(first()).toBeDisabled();
      expect(prev()).toBeDisabled();
      expect(page()).toBeInTheDocument();
      expect(next()).toBeDisabled();
      expect(last()).toBeDisabled();
    });
  });

  describe('Navigation buttons actions', () => {
    it('First button should navigate to 1', () => {
      const { first, onPageChange } = renderPagination(2, 10);

      fireEvent.click(first());
      expect(onPageChange).toHaveBeenCalledTimes(1);
      expect(onPageChange).toBeCalledWith(1);
    });
    it('Prev button should navigate to previous page', () => {
      const { prev, onPageChange } = renderPagination(3, 10);
      fireEvent.click(prev());
      expect(onPageChange).toBeCalledWith(2);
    });
    it('Next button should navigate to next page', () => {
      const { next, onPageChange } = renderPagination(3, 10);
      fireEvent.click(next());
      expect(onPageChange).toBeCalledWith(4);
    });
    it('Last button should navigate to last page', () => {
      const { last, onPageChange } = renderPagination(3, 10);
      fireEvent.click(last());
      expect(onPageChange).toBeCalledWith(10);
    });
  });
});
