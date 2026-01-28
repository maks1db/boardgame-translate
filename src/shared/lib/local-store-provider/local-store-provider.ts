import {
  type Context,
  type FC,
  type ReactNode,
  createElement,
  useContext,
} from 'react';

export const makeLocalStoreProvider = <Store>(params: {
  context: Context<Store | null>;
  errorMessage: string;
}) => {
  const StoreProvider: FC<{
    children: ReactNode;
    store: Store;
  }> = ({ children, store }) => {
    return createElement(params.context.Provider, { value: store }, children);
  };

  const useLocalStore = () => {
    const store = useContext(params.context);

    if (!store) {
      throw new Error(params.errorMessage);
    }

    return store;
  };

  return { StoreProvider, useLocalStore };
};
