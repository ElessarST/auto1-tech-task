import UseDataLayout from '../UseDataLayout';
import { render, screen } from '@testing-library/react';
import { UseData } from '../../utils/useData';

const LOADING = 'loading';
const ERROR = 'Error';
const DATA = 'Data';

function renderUseDataLayout(state: UseData<string>) {
  render(
    <UseDataLayout<string>
      useDataState={state}
      loadingComponent={<span>{LOADING}</span>}
      errorMsg={ERROR}
    >
      {(data) => <span>{data}</span>}
    </UseDataLayout>,
  );
  return {
    loading: () => screen.queryByText(LOADING),
    error: () => screen.queryByText(ERROR),
    data: () => screen.queryByText(DATA),
  };
}

const loadingState = {
  loading: true,
  error: undefined,
  data: undefined,
};

const errorState = {
  loading: false,
  error: new Error('error'),
  data: undefined,
};

const dataState = {
  loading: false,
  error: undefined,
  data: DATA,
};

describe('UseDataLayout component', () => {
  it('should render only loading component for loading state', () => {
    const { loading, data, error } = renderUseDataLayout(loadingState);
    expect(loading()).toBeInTheDocument();
    expect(data()).not.toBeInTheDocument();
    expect(error()).not.toBeInTheDocument();
  });
  it('should render only error message for error state', () => {
    const { loading, data, error } = renderUseDataLayout(errorState);
    expect(loading()).not.toBeInTheDocument();
    expect(data()).not.toBeInTheDocument();
    expect(error()).toBeInTheDocument();
  });
  it('should render only data component for data state', () => {
    const { loading, data, error } = renderUseDataLayout(dataState);
    expect(loading()).not.toBeInTheDocument();
    expect(data()).toBeInTheDocument();
    expect(error()).not.toBeInTheDocument();
  });
});
