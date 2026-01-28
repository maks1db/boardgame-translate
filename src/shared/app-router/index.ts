import { makeAppRouter } from '../lib/router';

export const { RouteLink, RouterProvider, useRouter, RouterComponent } =
  makeAppRouter({
    lotr: '/lotr',
    insideJob: '/inside-job',
  });
