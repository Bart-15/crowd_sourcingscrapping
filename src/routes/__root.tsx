import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import App from '@/App';

export const Route = createRootRoute({
  notFoundComponent: () => '',
  component: () => (
    <>
      <App />
      <hr />
      <div className="p-4">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
