import { createBrowserHistory } from 'history';
import { RouterComponent, RouterProvider } from '../shared/app-router';
import { Navbar } from '../widgets/navbar';
import { InsideJobPage } from '../pages/inside-job';
import { LotrPage } from '../pages/lotr';

const history = createBrowserHistory();
export function App() {
  return (
    <RouterProvider
      history={history}
      routes={{
        insideJob: InsideJobPage,
        lotr: LotrPage,
      }}
    >
      <Navbar />
      <RouterComponent />
    </RouterProvider>
  );
}
