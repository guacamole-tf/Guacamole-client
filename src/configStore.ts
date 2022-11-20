import rootReducer from '@/data/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootSaga from '@/data/rootSaga';

export default function configStore() {
  const saga = createSagaMiddleware();
  const logger = createLogger({});

  const store = configureStore({
    reducer: rootReducer,
    middleware: [saga, logger], // TODO: middleware logger 사용 PHASE별 분기처리 필요
    devTools: true, // TODO: devTools 사용 PHASE별 분기처리 필요
  });

  saga.run(rootSaga);

  return { store };
}
