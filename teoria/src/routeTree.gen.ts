/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CapitoliImport } from './routes/_capitoli'
import { Route as CapitoliCapitolo3IndexImport } from './routes/_capitoli/capitolo3/index'
import { Route as CapitoliCapitolo2IndexImport } from './routes/_capitoli/capitolo2/index'
import { Route as CapitoliCapitolo2UseRefRouteImport } from './routes/_capitoli/capitolo2/useRef/route'
import { Route as CapitoliCapitolo3UseContextIndexImport } from './routes/_capitoli/capitolo3/useContext/index'
import { Route as CapitoliCapitolo3UseCallbackIndexImport } from './routes/_capitoli/capitolo3/useCallback/index'
import { Route as CapitoliCapitolo3ReactMemoIndexImport } from './routes/_capitoli/capitolo3/react-memo/index'
import { Route as CapitoliCapitolo3CustomHooksIndexImport } from './routes/_capitoli/capitolo3/custom-hooks/index'
import { Route as CapitoliCapitolo2UseEffectIndexImport } from './routes/_capitoli/capitolo2/useEffect/index'
import { Route as CapitoliCapitolo2UseEffectForFetchIndexImport } from './routes/_capitoli/capitolo2/useEffect-for-fetch/index'
import { Route as CapitoliCapitolo2UseStateIndexImport } from './routes/_capitoli/capitolo2/use-state/index'
import { Route as CapitoliCapitolo2StateTipsIndexImport } from './routes/_capitoli/capitolo2/state-tips/index'
import { Route as CapitoliCapitolo2StateAttentiIndexImport } from './routes/_capitoli/capitolo2/state-attenti/index'
import { Route as CapitoliCapitolo2StateAsObjectIndexImport } from './routes/_capitoli/capitolo2/state-as-object/index'
import { Route as CapitoliCapitolo2ReducerIndexImport } from './routes/_capitoli/capitolo2/reducer/index'
import { Route as CapitoliCapitolo1PropsObjectIndexImport } from './routes/_capitoli/capitolo1/props-object/index'
import { Route as CapitoliCapitolo1PrimoComponenteIndexImport } from './routes/_capitoli/capitolo1/primo-componente/index'
import { Route as CapitoliCapitolo1JsInJsxIndexImport } from './routes/_capitoli/capitolo1/js-in-jsx/index'
import { Route as CapitoliCapitolo1HandleEventsIndexImport } from './routes/_capitoli/capitolo1/handle-events/index'
import { Route as CapitoliCapitolo1ConditionalRenderingIndexImport } from './routes/_capitoli/capitolo1/conditional-rendering/index'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const CapitoliCapitolo1IndexLazyImport = createFileRoute(
  '/_capitoli/capitolo1/',
)()
const CapitoliCapitolo1NextLazyImport = createFileRoute(
  '/_capitoli/capitolo1/next',
)()

// Create/Update Routes

const CapitoliRoute = CapitoliImport.update({
  id: '/_capitoli',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const CapitoliCapitolo1IndexLazyRoute = CapitoliCapitolo1IndexLazyImport.update(
  {
    path: '/capitolo1/',
    getParentRoute: () => CapitoliRoute,
  } as any,
).lazy(() =>
  import('./routes/_capitoli/capitolo1/index.lazy').then((d) => d.Route),
)

const CapitoliCapitolo3IndexRoute = CapitoliCapitolo3IndexImport.update({
  path: '/capitolo3/',
  getParentRoute: () => CapitoliRoute,
} as any)

const CapitoliCapitolo2IndexRoute = CapitoliCapitolo2IndexImport.update({
  path: '/capitolo2/',
  getParentRoute: () => CapitoliRoute,
} as any)

const CapitoliCapitolo1NextLazyRoute = CapitoliCapitolo1NextLazyImport.update({
  path: '/capitolo1/next',
  getParentRoute: () => CapitoliRoute,
} as any).lazy(() =>
  import('./routes/_capitoli/capitolo1/next.lazy').then((d) => d.Route),
)

const CapitoliCapitolo2UseRefRouteRoute =
  CapitoliCapitolo2UseRefRouteImport.update({
    path: '/capitolo2/useRef',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3UseContextIndexRoute =
  CapitoliCapitolo3UseContextIndexImport.update({
    path: '/capitolo3/useContext/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3UseCallbackIndexRoute =
  CapitoliCapitolo3UseCallbackIndexImport.update({
    path: '/capitolo3/useCallback/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3ReactMemoIndexRoute =
  CapitoliCapitolo3ReactMemoIndexImport.update({
    path: '/capitolo3/react-memo/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3CustomHooksIndexRoute =
  CapitoliCapitolo3CustomHooksIndexImport.update({
    path: '/capitolo3/custom-hooks/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2UseEffectIndexRoute =
  CapitoliCapitolo2UseEffectIndexImport.update({
    path: '/capitolo2/useEffect/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2UseEffectForFetchIndexRoute =
  CapitoliCapitolo2UseEffectForFetchIndexImport.update({
    path: '/capitolo2/useEffect-for-fetch/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2UseStateIndexRoute =
  CapitoliCapitolo2UseStateIndexImport.update({
    path: '/capitolo2/use-state/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2StateTipsIndexRoute =
  CapitoliCapitolo2StateTipsIndexImport.update({
    path: '/capitolo2/state-tips/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2StateAttentiIndexRoute =
  CapitoliCapitolo2StateAttentiIndexImport.update({
    path: '/capitolo2/state-attenti/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2StateAsObjectIndexRoute =
  CapitoliCapitolo2StateAsObjectIndexImport.update({
    path: '/capitolo2/state-as-object/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2ReducerIndexRoute =
  CapitoliCapitolo2ReducerIndexImport.update({
    path: '/capitolo2/reducer/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1PropsObjectIndexRoute =
  CapitoliCapitolo1PropsObjectIndexImport.update({
    path: '/capitolo1/props-object/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1PrimoComponenteIndexRoute =
  CapitoliCapitolo1PrimoComponenteIndexImport.update({
    path: '/capitolo1/primo-componente/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1JsInJsxIndexRoute =
  CapitoliCapitolo1JsInJsxIndexImport.update({
    path: '/capitolo1/js-in-jsx/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1HandleEventsIndexRoute =
  CapitoliCapitolo1HandleEventsIndexImport.update({
    path: '/capitolo1/handle-events/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1ConditionalRenderingIndexRoute =
  CapitoliCapitolo1ConditionalRenderingIndexImport.update({
    path: '/capitolo1/conditional-rendering/',
    getParentRoute: () => CapitoliRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_capitoli': {
      preLoaderRoute: typeof CapitoliImport
      parentRoute: typeof rootRoute
    }
    '/_capitoli/capitolo2/useRef': {
      preLoaderRoute: typeof CapitoliCapitolo2UseRefRouteImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/next': {
      preLoaderRoute: typeof CapitoliCapitolo1NextLazyImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/': {
      preLoaderRoute: typeof CapitoliCapitolo2IndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/': {
      preLoaderRoute: typeof CapitoliCapitolo3IndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/': {
      preLoaderRoute: typeof CapitoliCapitolo1IndexLazyImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/conditional-rendering/': {
      preLoaderRoute: typeof CapitoliCapitolo1ConditionalRenderingIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/handle-events/': {
      preLoaderRoute: typeof CapitoliCapitolo1HandleEventsIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/js-in-jsx/': {
      preLoaderRoute: typeof CapitoliCapitolo1JsInJsxIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/primo-componente/': {
      preLoaderRoute: typeof CapitoliCapitolo1PrimoComponenteIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/props-object/': {
      preLoaderRoute: typeof CapitoliCapitolo1PropsObjectIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/reducer/': {
      preLoaderRoute: typeof CapitoliCapitolo2ReducerIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/state-as-object/': {
      preLoaderRoute: typeof CapitoliCapitolo2StateAsObjectIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/state-attenti/': {
      preLoaderRoute: typeof CapitoliCapitolo2StateAttentiIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/state-tips/': {
      preLoaderRoute: typeof CapitoliCapitolo2StateTipsIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/use-state/': {
      preLoaderRoute: typeof CapitoliCapitolo2UseStateIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/useEffect-for-fetch/': {
      preLoaderRoute: typeof CapitoliCapitolo2UseEffectForFetchIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/useEffect/': {
      preLoaderRoute: typeof CapitoliCapitolo2UseEffectIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/custom-hooks/': {
      preLoaderRoute: typeof CapitoliCapitolo3CustomHooksIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/react-memo/': {
      preLoaderRoute: typeof CapitoliCapitolo3ReactMemoIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/useCallback/': {
      preLoaderRoute: typeof CapitoliCapitolo3UseCallbackIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/useContext/': {
      preLoaderRoute: typeof CapitoliCapitolo3UseContextIndexImport
      parentRoute: typeof CapitoliImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  CapitoliRoute.addChildren([
    CapitoliCapitolo2UseRefRouteRoute,
    CapitoliCapitolo1NextLazyRoute,
    CapitoliCapitolo2IndexRoute,
    CapitoliCapitolo3IndexRoute,
    CapitoliCapitolo1IndexLazyRoute,
    CapitoliCapitolo1ConditionalRenderingIndexRoute,
    CapitoliCapitolo1HandleEventsIndexRoute,
    CapitoliCapitolo1JsInJsxIndexRoute,
    CapitoliCapitolo1PrimoComponenteIndexRoute,
    CapitoliCapitolo1PropsObjectIndexRoute,
    CapitoliCapitolo2ReducerIndexRoute,
    CapitoliCapitolo2StateAsObjectIndexRoute,
    CapitoliCapitolo2StateAttentiIndexRoute,
    CapitoliCapitolo2StateTipsIndexRoute,
    CapitoliCapitolo2UseStateIndexRoute,
    CapitoliCapitolo2UseEffectForFetchIndexRoute,
    CapitoliCapitolo2UseEffectIndexRoute,
    CapitoliCapitolo3CustomHooksIndexRoute,
    CapitoliCapitolo3ReactMemoIndexRoute,
    CapitoliCapitolo3UseCallbackIndexRoute,
    CapitoliCapitolo3UseContextIndexRoute,
  ]),
])

/* prettier-ignore-end */
