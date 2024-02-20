import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useRecoilValue } from "recoil";

import Error from "@/components/error/Error";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface IProps {
  children: React.ReactNode;
}

const ErrorBoundaryProvider = ({ children }: IProps) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      resetKeys={[]}
      fallbackRender={({ error, resetErrorBoundary }) => {
        const e = error as AxiosError;
        return (
          <Error
            status={e?.response?.status.toString()}
            onReset={resetErrorBoundary}
          />
        );
      }}
      onReset={reset}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryProvider;
