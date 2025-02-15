/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CapitoliImport } from './routes/_capitoli'
import { Route as CapitoliReact19IndexImport } from './routes/_capitoli/react-19/index'
import { Route as CapitoliCapitolo3IndexImport } from './routes/_capitoli/capitolo3/index'
import { Route as CapitoliCapitolo2IndexImport } from './routes/_capitoli/capitolo2/index'
import { Route as CapitoliCapitolo2UseRefRouteImport } from './routes/_capitoli/capitolo2/useRef/route'
import { Route as CapitoliReact19UseOptimisticIndexImport } from './routes/_capitoli/react-19/useOptimistic/index'
import { Route as CapitoliReact19UseActionStateIndexImport } from './routes/_capitoli/react-19/useActionState/index'
import { Route as CapitoliReact19UseIndexImport } from './routes/_capitoli/react-19/use/index'
import { Route as CapitoliCapitolo3UseTransitionIndexImport } from './routes/_capitoli/capitolo3/useTransition/index'
import { Route as CapitoliCapitolo3UseMemoIndexImport } from './routes/_capitoli/capitolo3/useMemo/index'
import { Route as CapitoliCapitolo3UseDeferredValueIndexImport } from './routes/_capitoli/capitolo3/useDeferredValue/index'
import { Route as CapitoliCapitolo3UseContextIndexImport } from './routes/_capitoli/capitolo3/useContext/index'
import { Route as CapitoliCapitolo3UseCallbackIndexImport } from './routes/_capitoli/capitolo3/useCallback/index'
import { Route as CapitoliCapitolo3SuspenseIndexImport } from './routes/_capitoli/capitolo3/suspense/index'
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
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const CapitoliCapitolo1IndexLazyRoute = CapitoliCapitolo1IndexLazyImport.update(
  {
    id: '/capitolo1/',
    path: '/capitolo1/',
    getParentRoute: () => CapitoliRoute,
  } as any,
).lazy(() =>
  import('./routes/_capitoli/capitolo1/index.lazy').then((d) => d.Route),
)

const CapitoliReact19IndexRoute = CapitoliReact19IndexImport.update({
  id: '/react-19/',
  path: '/react-19/',
  getParentRoute: () => CapitoliRoute,
} as any)

const CapitoliCapitolo3IndexRoute = CapitoliCapitolo3IndexImport.update({
  id: '/capitolo3/',
  path: '/capitolo3/',
  getParentRoute: () => CapitoliRoute,
} as any)

const CapitoliCapitolo2IndexRoute = CapitoliCapitolo2IndexImport.update({
  id: '/capitolo2/',
  path: '/capitolo2/',
  getParentRoute: () => CapitoliRoute,
} as any)

const CapitoliCapitolo1NextLazyRoute = CapitoliCapitolo1NextLazyImport.update({
  id: '/capitolo1/next',
  path: '/capitolo1/next',
  getParentRoute: () => CapitoliRoute,
} as any).lazy(() =>
  import('./routes/_capitoli/capitolo1/next.lazy').then((d) => d.Route),
)

const CapitoliCapitolo2UseRefRouteRoute =
  CapitoliCapitolo2UseRefRouteImport.update({
    id: '/capitolo2/useRef',
    path: '/capitolo2/useRef',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliReact19UseOptimisticIndexRoute =
  CapitoliReact19UseOptimisticIndexImport.update({
    id: '/react-19/useOptimistic/',
    path: '/react-19/useOptimistic/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliReact19UseActionStateIndexRoute =
  CapitoliReact19UseActionStateIndexImport.update({
    id: '/react-19/useActionState/',
    path: '/react-19/useActionState/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliReact19UseIndexRoute = CapitoliReact19UseIndexImport.update({
  id: '/react-19/use/',
  path: '/react-19/use/',
  getParentRoute: () => CapitoliRoute,
} as any)

const CapitoliCapitolo3UseTransitionIndexRoute =
  CapitoliCapitolo3UseTransitionIndexImport.update({
    id: '/capitolo3/useTransition/',
    path: '/capitolo3/useTransition/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3UseMemoIndexRoute =
  CapitoliCapitolo3UseMemoIndexImport.update({
    id: '/capitolo3/useMemo/',
    path: '/capitolo3/useMemo/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3UseDeferredValueIndexRoute =
  CapitoliCapitolo3UseDeferredValueIndexImport.update({
    id: '/capitolo3/useDeferredValue/',
    path: '/capitolo3/useDeferredValue/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3UseContextIndexRoute =
  CapitoliCapitolo3UseContextIndexImport.update({
    id: '/capitolo3/useContext/',
    path: '/capitolo3/useContext/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3UseCallbackIndexRoute =
  CapitoliCapitolo3UseCallbackIndexImport.update({
    id: '/capitolo3/useCallback/',
    path: '/capitolo3/useCallback/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3SuspenseIndexRoute =
  CapitoliCapitolo3SuspenseIndexImport.update({
    id: '/capitolo3/suspense/',
    path: '/capitolo3/suspense/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3ReactMemoIndexRoute =
  CapitoliCapitolo3ReactMemoIndexImport.update({
    id: '/capitolo3/react-memo/',
    path: '/capitolo3/react-memo/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo3CustomHooksIndexRoute =
  CapitoliCapitolo3CustomHooksIndexImport.update({
    id: '/capitolo3/custom-hooks/',
    path: '/capitolo3/custom-hooks/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2UseEffectIndexRoute =
  CapitoliCapitolo2UseEffectIndexImport.update({
    id: '/capitolo2/useEffect/',
    path: '/capitolo2/useEffect/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2UseEffectForFetchIndexRoute =
  CapitoliCapitolo2UseEffectForFetchIndexImport.update({
    id: '/capitolo2/useEffect-for-fetch/',
    path: '/capitolo2/useEffect-for-fetch/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2UseStateIndexRoute =
  CapitoliCapitolo2UseStateIndexImport.update({
    id: '/capitolo2/use-state/',
    path: '/capitolo2/use-state/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2StateTipsIndexRoute =
  CapitoliCapitolo2StateTipsIndexImport.update({
    id: '/capitolo2/state-tips/',
    path: '/capitolo2/state-tips/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2StateAttentiIndexRoute =
  CapitoliCapitolo2StateAttentiIndexImport.update({
    id: '/capitolo2/state-attenti/',
    path: '/capitolo2/state-attenti/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2StateAsObjectIndexRoute =
  CapitoliCapitolo2StateAsObjectIndexImport.update({
    id: '/capitolo2/state-as-object/',
    path: '/capitolo2/state-as-object/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo2ReducerIndexRoute =
  CapitoliCapitolo2ReducerIndexImport.update({
    id: '/capitolo2/reducer/',
    path: '/capitolo2/reducer/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1PropsObjectIndexRoute =
  CapitoliCapitolo1PropsObjectIndexImport.update({
    id: '/capitolo1/props-object/',
    path: '/capitolo1/props-object/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1PrimoComponenteIndexRoute =
  CapitoliCapitolo1PrimoComponenteIndexImport.update({
    id: '/capitolo1/primo-componente/',
    path: '/capitolo1/primo-componente/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1JsInJsxIndexRoute =
  CapitoliCapitolo1JsInJsxIndexImport.update({
    id: '/capitolo1/js-in-jsx/',
    path: '/capitolo1/js-in-jsx/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1HandleEventsIndexRoute =
  CapitoliCapitolo1HandleEventsIndexImport.update({
    id: '/capitolo1/handle-events/',
    path: '/capitolo1/handle-events/',
    getParentRoute: () => CapitoliRoute,
  } as any)

const CapitoliCapitolo1ConditionalRenderingIndexRoute =
  CapitoliCapitolo1ConditionalRenderingIndexImport.update({
    id: '/capitolo1/conditional-rendering/',
    path: '/capitolo1/conditional-rendering/',
    getParentRoute: () => CapitoliRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_capitoli': {
      id: '/_capitoli'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof CapitoliImport
      parentRoute: typeof rootRoute
    }
    '/_capitoli/capitolo2/useRef': {
      id: '/_capitoli/capitolo2/useRef'
      path: '/capitolo2/useRef'
      fullPath: '/capitolo2/useRef'
      preLoaderRoute: typeof CapitoliCapitolo2UseRefRouteImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/next': {
      id: '/_capitoli/capitolo1/next'
      path: '/capitolo1/next'
      fullPath: '/capitolo1/next'
      preLoaderRoute: typeof CapitoliCapitolo1NextLazyImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/': {
      id: '/_capitoli/capitolo2/'
      path: '/capitolo2'
      fullPath: '/capitolo2'
      preLoaderRoute: typeof CapitoliCapitolo2IndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/': {
      id: '/_capitoli/capitolo3/'
      path: '/capitolo3'
      fullPath: '/capitolo3'
      preLoaderRoute: typeof CapitoliCapitolo3IndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/react-19/': {
      id: '/_capitoli/react-19/'
      path: '/react-19'
      fullPath: '/react-19'
      preLoaderRoute: typeof CapitoliReact19IndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/': {
      id: '/_capitoli/capitolo1/'
      path: '/capitolo1'
      fullPath: '/capitolo1'
      preLoaderRoute: typeof CapitoliCapitolo1IndexLazyImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/conditional-rendering/': {
      id: '/_capitoli/capitolo1/conditional-rendering/'
      path: '/capitolo1/conditional-rendering'
      fullPath: '/capitolo1/conditional-rendering'
      preLoaderRoute: typeof CapitoliCapitolo1ConditionalRenderingIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/handle-events/': {
      id: '/_capitoli/capitolo1/handle-events/'
      path: '/capitolo1/handle-events'
      fullPath: '/capitolo1/handle-events'
      preLoaderRoute: typeof CapitoliCapitolo1HandleEventsIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/js-in-jsx/': {
      id: '/_capitoli/capitolo1/js-in-jsx/'
      path: '/capitolo1/js-in-jsx'
      fullPath: '/capitolo1/js-in-jsx'
      preLoaderRoute: typeof CapitoliCapitolo1JsInJsxIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/primo-componente/': {
      id: '/_capitoli/capitolo1/primo-componente/'
      path: '/capitolo1/primo-componente'
      fullPath: '/capitolo1/primo-componente'
      preLoaderRoute: typeof CapitoliCapitolo1PrimoComponenteIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo1/props-object/': {
      id: '/_capitoli/capitolo1/props-object/'
      path: '/capitolo1/props-object'
      fullPath: '/capitolo1/props-object'
      preLoaderRoute: typeof CapitoliCapitolo1PropsObjectIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/reducer/': {
      id: '/_capitoli/capitolo2/reducer/'
      path: '/capitolo2/reducer'
      fullPath: '/capitolo2/reducer'
      preLoaderRoute: typeof CapitoliCapitolo2ReducerIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/state-as-object/': {
      id: '/_capitoli/capitolo2/state-as-object/'
      path: '/capitolo2/state-as-object'
      fullPath: '/capitolo2/state-as-object'
      preLoaderRoute: typeof CapitoliCapitolo2StateAsObjectIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/state-attenti/': {
      id: '/_capitoli/capitolo2/state-attenti/'
      path: '/capitolo2/state-attenti'
      fullPath: '/capitolo2/state-attenti'
      preLoaderRoute: typeof CapitoliCapitolo2StateAttentiIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/state-tips/': {
      id: '/_capitoli/capitolo2/state-tips/'
      path: '/capitolo2/state-tips'
      fullPath: '/capitolo2/state-tips'
      preLoaderRoute: typeof CapitoliCapitolo2StateTipsIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/use-state/': {
      id: '/_capitoli/capitolo2/use-state/'
      path: '/capitolo2/use-state'
      fullPath: '/capitolo2/use-state'
      preLoaderRoute: typeof CapitoliCapitolo2UseStateIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/useEffect-for-fetch/': {
      id: '/_capitoli/capitolo2/useEffect-for-fetch/'
      path: '/capitolo2/useEffect-for-fetch'
      fullPath: '/capitolo2/useEffect-for-fetch'
      preLoaderRoute: typeof CapitoliCapitolo2UseEffectForFetchIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo2/useEffect/': {
      id: '/_capitoli/capitolo2/useEffect/'
      path: '/capitolo2/useEffect'
      fullPath: '/capitolo2/useEffect'
      preLoaderRoute: typeof CapitoliCapitolo2UseEffectIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/custom-hooks/': {
      id: '/_capitoli/capitolo3/custom-hooks/'
      path: '/capitolo3/custom-hooks'
      fullPath: '/capitolo3/custom-hooks'
      preLoaderRoute: typeof CapitoliCapitolo3CustomHooksIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/react-memo/': {
      id: '/_capitoli/capitolo3/react-memo/'
      path: '/capitolo3/react-memo'
      fullPath: '/capitolo3/react-memo'
      preLoaderRoute: typeof CapitoliCapitolo3ReactMemoIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/suspense/': {
      id: '/_capitoli/capitolo3/suspense/'
      path: '/capitolo3/suspense'
      fullPath: '/capitolo3/suspense'
      preLoaderRoute: typeof CapitoliCapitolo3SuspenseIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/useCallback/': {
      id: '/_capitoli/capitolo3/useCallback/'
      path: '/capitolo3/useCallback'
      fullPath: '/capitolo3/useCallback'
      preLoaderRoute: typeof CapitoliCapitolo3UseCallbackIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/useContext/': {
      id: '/_capitoli/capitolo3/useContext/'
      path: '/capitolo3/useContext'
      fullPath: '/capitolo3/useContext'
      preLoaderRoute: typeof CapitoliCapitolo3UseContextIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/useDeferredValue/': {
      id: '/_capitoli/capitolo3/useDeferredValue/'
      path: '/capitolo3/useDeferredValue'
      fullPath: '/capitolo3/useDeferredValue'
      preLoaderRoute: typeof CapitoliCapitolo3UseDeferredValueIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/useMemo/': {
      id: '/_capitoli/capitolo3/useMemo/'
      path: '/capitolo3/useMemo'
      fullPath: '/capitolo3/useMemo'
      preLoaderRoute: typeof CapitoliCapitolo3UseMemoIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/capitolo3/useTransition/': {
      id: '/_capitoli/capitolo3/useTransition/'
      path: '/capitolo3/useTransition'
      fullPath: '/capitolo3/useTransition'
      preLoaderRoute: typeof CapitoliCapitolo3UseTransitionIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/react-19/use/': {
      id: '/_capitoli/react-19/use/'
      path: '/react-19/use'
      fullPath: '/react-19/use'
      preLoaderRoute: typeof CapitoliReact19UseIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/react-19/useActionState/': {
      id: '/_capitoli/react-19/useActionState/'
      path: '/react-19/useActionState'
      fullPath: '/react-19/useActionState'
      preLoaderRoute: typeof CapitoliReact19UseActionStateIndexImport
      parentRoute: typeof CapitoliImport
    }
    '/_capitoli/react-19/useOptimistic/': {
      id: '/_capitoli/react-19/useOptimistic/'
      path: '/react-19/useOptimistic'
      fullPath: '/react-19/useOptimistic'
      preLoaderRoute: typeof CapitoliReact19UseOptimisticIndexImport
      parentRoute: typeof CapitoliImport
    }
  }
}

// Create and export the route tree

interface CapitoliRouteChildren {
  CapitoliCapitolo2UseRefRouteRoute: typeof CapitoliCapitolo2UseRefRouteRoute
  CapitoliCapitolo1NextLazyRoute: typeof CapitoliCapitolo1NextLazyRoute
  CapitoliCapitolo2IndexRoute: typeof CapitoliCapitolo2IndexRoute
  CapitoliCapitolo3IndexRoute: typeof CapitoliCapitolo3IndexRoute
  CapitoliReact19IndexRoute: typeof CapitoliReact19IndexRoute
  CapitoliCapitolo1IndexLazyRoute: typeof CapitoliCapitolo1IndexLazyRoute
  CapitoliCapitolo1ConditionalRenderingIndexRoute: typeof CapitoliCapitolo1ConditionalRenderingIndexRoute
  CapitoliCapitolo1HandleEventsIndexRoute: typeof CapitoliCapitolo1HandleEventsIndexRoute
  CapitoliCapitolo1JsInJsxIndexRoute: typeof CapitoliCapitolo1JsInJsxIndexRoute
  CapitoliCapitolo1PrimoComponenteIndexRoute: typeof CapitoliCapitolo1PrimoComponenteIndexRoute
  CapitoliCapitolo1PropsObjectIndexRoute: typeof CapitoliCapitolo1PropsObjectIndexRoute
  CapitoliCapitolo2ReducerIndexRoute: typeof CapitoliCapitolo2ReducerIndexRoute
  CapitoliCapitolo2StateAsObjectIndexRoute: typeof CapitoliCapitolo2StateAsObjectIndexRoute
  CapitoliCapitolo2StateAttentiIndexRoute: typeof CapitoliCapitolo2StateAttentiIndexRoute
  CapitoliCapitolo2StateTipsIndexRoute: typeof CapitoliCapitolo2StateTipsIndexRoute
  CapitoliCapitolo2UseStateIndexRoute: typeof CapitoliCapitolo2UseStateIndexRoute
  CapitoliCapitolo2UseEffectForFetchIndexRoute: typeof CapitoliCapitolo2UseEffectForFetchIndexRoute
  CapitoliCapitolo2UseEffectIndexRoute: typeof CapitoliCapitolo2UseEffectIndexRoute
  CapitoliCapitolo3CustomHooksIndexRoute: typeof CapitoliCapitolo3CustomHooksIndexRoute
  CapitoliCapitolo3ReactMemoIndexRoute: typeof CapitoliCapitolo3ReactMemoIndexRoute
  CapitoliCapitolo3SuspenseIndexRoute: typeof CapitoliCapitolo3SuspenseIndexRoute
  CapitoliCapitolo3UseCallbackIndexRoute: typeof CapitoliCapitolo3UseCallbackIndexRoute
  CapitoliCapitolo3UseContextIndexRoute: typeof CapitoliCapitolo3UseContextIndexRoute
  CapitoliCapitolo3UseDeferredValueIndexRoute: typeof CapitoliCapitolo3UseDeferredValueIndexRoute
  CapitoliCapitolo3UseMemoIndexRoute: typeof CapitoliCapitolo3UseMemoIndexRoute
  CapitoliCapitolo3UseTransitionIndexRoute: typeof CapitoliCapitolo3UseTransitionIndexRoute
  CapitoliReact19UseIndexRoute: typeof CapitoliReact19UseIndexRoute
  CapitoliReact19UseActionStateIndexRoute: typeof CapitoliReact19UseActionStateIndexRoute
  CapitoliReact19UseOptimisticIndexRoute: typeof CapitoliReact19UseOptimisticIndexRoute
}

const CapitoliRouteChildren: CapitoliRouteChildren = {
  CapitoliCapitolo2UseRefRouteRoute: CapitoliCapitolo2UseRefRouteRoute,
  CapitoliCapitolo1NextLazyRoute: CapitoliCapitolo1NextLazyRoute,
  CapitoliCapitolo2IndexRoute: CapitoliCapitolo2IndexRoute,
  CapitoliCapitolo3IndexRoute: CapitoliCapitolo3IndexRoute,
  CapitoliReact19IndexRoute: CapitoliReact19IndexRoute,
  CapitoliCapitolo1IndexLazyRoute: CapitoliCapitolo1IndexLazyRoute,
  CapitoliCapitolo1ConditionalRenderingIndexRoute:
    CapitoliCapitolo1ConditionalRenderingIndexRoute,
  CapitoliCapitolo1HandleEventsIndexRoute:
    CapitoliCapitolo1HandleEventsIndexRoute,
  CapitoliCapitolo1JsInJsxIndexRoute: CapitoliCapitolo1JsInJsxIndexRoute,
  CapitoliCapitolo1PrimoComponenteIndexRoute:
    CapitoliCapitolo1PrimoComponenteIndexRoute,
  CapitoliCapitolo1PropsObjectIndexRoute:
    CapitoliCapitolo1PropsObjectIndexRoute,
  CapitoliCapitolo2ReducerIndexRoute: CapitoliCapitolo2ReducerIndexRoute,
  CapitoliCapitolo2StateAsObjectIndexRoute:
    CapitoliCapitolo2StateAsObjectIndexRoute,
  CapitoliCapitolo2StateAttentiIndexRoute:
    CapitoliCapitolo2StateAttentiIndexRoute,
  CapitoliCapitolo2StateTipsIndexRoute: CapitoliCapitolo2StateTipsIndexRoute,
  CapitoliCapitolo2UseStateIndexRoute: CapitoliCapitolo2UseStateIndexRoute,
  CapitoliCapitolo2UseEffectForFetchIndexRoute:
    CapitoliCapitolo2UseEffectForFetchIndexRoute,
  CapitoliCapitolo2UseEffectIndexRoute: CapitoliCapitolo2UseEffectIndexRoute,
  CapitoliCapitolo3CustomHooksIndexRoute:
    CapitoliCapitolo3CustomHooksIndexRoute,
  CapitoliCapitolo3ReactMemoIndexRoute: CapitoliCapitolo3ReactMemoIndexRoute,
  CapitoliCapitolo3SuspenseIndexRoute: CapitoliCapitolo3SuspenseIndexRoute,
  CapitoliCapitolo3UseCallbackIndexRoute:
    CapitoliCapitolo3UseCallbackIndexRoute,
  CapitoliCapitolo3UseContextIndexRoute: CapitoliCapitolo3UseContextIndexRoute,
  CapitoliCapitolo3UseDeferredValueIndexRoute:
    CapitoliCapitolo3UseDeferredValueIndexRoute,
  CapitoliCapitolo3UseMemoIndexRoute: CapitoliCapitolo3UseMemoIndexRoute,
  CapitoliCapitolo3UseTransitionIndexRoute:
    CapitoliCapitolo3UseTransitionIndexRoute,
  CapitoliReact19UseIndexRoute: CapitoliReact19UseIndexRoute,
  CapitoliReact19UseActionStateIndexRoute:
    CapitoliReact19UseActionStateIndexRoute,
  CapitoliReact19UseOptimisticIndexRoute:
    CapitoliReact19UseOptimisticIndexRoute,
}

const CapitoliRouteWithChildren = CapitoliRoute._addFileChildren(
  CapitoliRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '': typeof CapitoliRouteWithChildren
  '/capitolo2/useRef': typeof CapitoliCapitolo2UseRefRouteRoute
  '/capitolo1/next': typeof CapitoliCapitolo1NextLazyRoute
  '/capitolo2': typeof CapitoliCapitolo2IndexRoute
  '/capitolo3': typeof CapitoliCapitolo3IndexRoute
  '/react-19': typeof CapitoliReact19IndexRoute
  '/capitolo1': typeof CapitoliCapitolo1IndexLazyRoute
  '/capitolo1/conditional-rendering': typeof CapitoliCapitolo1ConditionalRenderingIndexRoute
  '/capitolo1/handle-events': typeof CapitoliCapitolo1HandleEventsIndexRoute
  '/capitolo1/js-in-jsx': typeof CapitoliCapitolo1JsInJsxIndexRoute
  '/capitolo1/primo-componente': typeof CapitoliCapitolo1PrimoComponenteIndexRoute
  '/capitolo1/props-object': typeof CapitoliCapitolo1PropsObjectIndexRoute
  '/capitolo2/reducer': typeof CapitoliCapitolo2ReducerIndexRoute
  '/capitolo2/state-as-object': typeof CapitoliCapitolo2StateAsObjectIndexRoute
  '/capitolo2/state-attenti': typeof CapitoliCapitolo2StateAttentiIndexRoute
  '/capitolo2/state-tips': typeof CapitoliCapitolo2StateTipsIndexRoute
  '/capitolo2/use-state': typeof CapitoliCapitolo2UseStateIndexRoute
  '/capitolo2/useEffect-for-fetch': typeof CapitoliCapitolo2UseEffectForFetchIndexRoute
  '/capitolo2/useEffect': typeof CapitoliCapitolo2UseEffectIndexRoute
  '/capitolo3/custom-hooks': typeof CapitoliCapitolo3CustomHooksIndexRoute
  '/capitolo3/react-memo': typeof CapitoliCapitolo3ReactMemoIndexRoute
  '/capitolo3/suspense': typeof CapitoliCapitolo3SuspenseIndexRoute
  '/capitolo3/useCallback': typeof CapitoliCapitolo3UseCallbackIndexRoute
  '/capitolo3/useContext': typeof CapitoliCapitolo3UseContextIndexRoute
  '/capitolo3/useDeferredValue': typeof CapitoliCapitolo3UseDeferredValueIndexRoute
  '/capitolo3/useMemo': typeof CapitoliCapitolo3UseMemoIndexRoute
  '/capitolo3/useTransition': typeof CapitoliCapitolo3UseTransitionIndexRoute
  '/react-19/use': typeof CapitoliReact19UseIndexRoute
  '/react-19/useActionState': typeof CapitoliReact19UseActionStateIndexRoute
  '/react-19/useOptimistic': typeof CapitoliReact19UseOptimisticIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '': typeof CapitoliRouteWithChildren
  '/capitolo2/useRef': typeof CapitoliCapitolo2UseRefRouteRoute
  '/capitolo1/next': typeof CapitoliCapitolo1NextLazyRoute
  '/capitolo2': typeof CapitoliCapitolo2IndexRoute
  '/capitolo3': typeof CapitoliCapitolo3IndexRoute
  '/react-19': typeof CapitoliReact19IndexRoute
  '/capitolo1': typeof CapitoliCapitolo1IndexLazyRoute
  '/capitolo1/conditional-rendering': typeof CapitoliCapitolo1ConditionalRenderingIndexRoute
  '/capitolo1/handle-events': typeof CapitoliCapitolo1HandleEventsIndexRoute
  '/capitolo1/js-in-jsx': typeof CapitoliCapitolo1JsInJsxIndexRoute
  '/capitolo1/primo-componente': typeof CapitoliCapitolo1PrimoComponenteIndexRoute
  '/capitolo1/props-object': typeof CapitoliCapitolo1PropsObjectIndexRoute
  '/capitolo2/reducer': typeof CapitoliCapitolo2ReducerIndexRoute
  '/capitolo2/state-as-object': typeof CapitoliCapitolo2StateAsObjectIndexRoute
  '/capitolo2/state-attenti': typeof CapitoliCapitolo2StateAttentiIndexRoute
  '/capitolo2/state-tips': typeof CapitoliCapitolo2StateTipsIndexRoute
  '/capitolo2/use-state': typeof CapitoliCapitolo2UseStateIndexRoute
  '/capitolo2/useEffect-for-fetch': typeof CapitoliCapitolo2UseEffectForFetchIndexRoute
  '/capitolo2/useEffect': typeof CapitoliCapitolo2UseEffectIndexRoute
  '/capitolo3/custom-hooks': typeof CapitoliCapitolo3CustomHooksIndexRoute
  '/capitolo3/react-memo': typeof CapitoliCapitolo3ReactMemoIndexRoute
  '/capitolo3/suspense': typeof CapitoliCapitolo3SuspenseIndexRoute
  '/capitolo3/useCallback': typeof CapitoliCapitolo3UseCallbackIndexRoute
  '/capitolo3/useContext': typeof CapitoliCapitolo3UseContextIndexRoute
  '/capitolo3/useDeferredValue': typeof CapitoliCapitolo3UseDeferredValueIndexRoute
  '/capitolo3/useMemo': typeof CapitoliCapitolo3UseMemoIndexRoute
  '/capitolo3/useTransition': typeof CapitoliCapitolo3UseTransitionIndexRoute
  '/react-19/use': typeof CapitoliReact19UseIndexRoute
  '/react-19/useActionState': typeof CapitoliReact19UseActionStateIndexRoute
  '/react-19/useOptimistic': typeof CapitoliReact19UseOptimisticIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_capitoli': typeof CapitoliRouteWithChildren
  '/_capitoli/capitolo2/useRef': typeof CapitoliCapitolo2UseRefRouteRoute
  '/_capitoli/capitolo1/next': typeof CapitoliCapitolo1NextLazyRoute
  '/_capitoli/capitolo2/': typeof CapitoliCapitolo2IndexRoute
  '/_capitoli/capitolo3/': typeof CapitoliCapitolo3IndexRoute
  '/_capitoli/react-19/': typeof CapitoliReact19IndexRoute
  '/_capitoli/capitolo1/': typeof CapitoliCapitolo1IndexLazyRoute
  '/_capitoli/capitolo1/conditional-rendering/': typeof CapitoliCapitolo1ConditionalRenderingIndexRoute
  '/_capitoli/capitolo1/handle-events/': typeof CapitoliCapitolo1HandleEventsIndexRoute
  '/_capitoli/capitolo1/js-in-jsx/': typeof CapitoliCapitolo1JsInJsxIndexRoute
  '/_capitoli/capitolo1/primo-componente/': typeof CapitoliCapitolo1PrimoComponenteIndexRoute
  '/_capitoli/capitolo1/props-object/': typeof CapitoliCapitolo1PropsObjectIndexRoute
  '/_capitoli/capitolo2/reducer/': typeof CapitoliCapitolo2ReducerIndexRoute
  '/_capitoli/capitolo2/state-as-object/': typeof CapitoliCapitolo2StateAsObjectIndexRoute
  '/_capitoli/capitolo2/state-attenti/': typeof CapitoliCapitolo2StateAttentiIndexRoute
  '/_capitoli/capitolo2/state-tips/': typeof CapitoliCapitolo2StateTipsIndexRoute
  '/_capitoli/capitolo2/use-state/': typeof CapitoliCapitolo2UseStateIndexRoute
  '/_capitoli/capitolo2/useEffect-for-fetch/': typeof CapitoliCapitolo2UseEffectForFetchIndexRoute
  '/_capitoli/capitolo2/useEffect/': typeof CapitoliCapitolo2UseEffectIndexRoute
  '/_capitoli/capitolo3/custom-hooks/': typeof CapitoliCapitolo3CustomHooksIndexRoute
  '/_capitoli/capitolo3/react-memo/': typeof CapitoliCapitolo3ReactMemoIndexRoute
  '/_capitoli/capitolo3/suspense/': typeof CapitoliCapitolo3SuspenseIndexRoute
  '/_capitoli/capitolo3/useCallback/': typeof CapitoliCapitolo3UseCallbackIndexRoute
  '/_capitoli/capitolo3/useContext/': typeof CapitoliCapitolo3UseContextIndexRoute
  '/_capitoli/capitolo3/useDeferredValue/': typeof CapitoliCapitolo3UseDeferredValueIndexRoute
  '/_capitoli/capitolo3/useMemo/': typeof CapitoliCapitolo3UseMemoIndexRoute
  '/_capitoli/capitolo3/useTransition/': typeof CapitoliCapitolo3UseTransitionIndexRoute
  '/_capitoli/react-19/use/': typeof CapitoliReact19UseIndexRoute
  '/_capitoli/react-19/useActionState/': typeof CapitoliReact19UseActionStateIndexRoute
  '/_capitoli/react-19/useOptimistic/': typeof CapitoliReact19UseOptimisticIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/capitolo2/useRef'
    | '/capitolo1/next'
    | '/capitolo2'
    | '/capitolo3'
    | '/react-19'
    | '/capitolo1'
    | '/capitolo1/conditional-rendering'
    | '/capitolo1/handle-events'
    | '/capitolo1/js-in-jsx'
    | '/capitolo1/primo-componente'
    | '/capitolo1/props-object'
    | '/capitolo2/reducer'
    | '/capitolo2/state-as-object'
    | '/capitolo2/state-attenti'
    | '/capitolo2/state-tips'
    | '/capitolo2/use-state'
    | '/capitolo2/useEffect-for-fetch'
    | '/capitolo2/useEffect'
    | '/capitolo3/custom-hooks'
    | '/capitolo3/react-memo'
    | '/capitolo3/suspense'
    | '/capitolo3/useCallback'
    | '/capitolo3/useContext'
    | '/capitolo3/useDeferredValue'
    | '/capitolo3/useMemo'
    | '/capitolo3/useTransition'
    | '/react-19/use'
    | '/react-19/useActionState'
    | '/react-19/useOptimistic'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/capitolo2/useRef'
    | '/capitolo1/next'
    | '/capitolo2'
    | '/capitolo3'
    | '/react-19'
    | '/capitolo1'
    | '/capitolo1/conditional-rendering'
    | '/capitolo1/handle-events'
    | '/capitolo1/js-in-jsx'
    | '/capitolo1/primo-componente'
    | '/capitolo1/props-object'
    | '/capitolo2/reducer'
    | '/capitolo2/state-as-object'
    | '/capitolo2/state-attenti'
    | '/capitolo2/state-tips'
    | '/capitolo2/use-state'
    | '/capitolo2/useEffect-for-fetch'
    | '/capitolo2/useEffect'
    | '/capitolo3/custom-hooks'
    | '/capitolo3/react-memo'
    | '/capitolo3/suspense'
    | '/capitolo3/useCallback'
    | '/capitolo3/useContext'
    | '/capitolo3/useDeferredValue'
    | '/capitolo3/useMemo'
    | '/capitolo3/useTransition'
    | '/react-19/use'
    | '/react-19/useActionState'
    | '/react-19/useOptimistic'
  id:
    | '__root__'
    | '/'
    | '/_capitoli'
    | '/_capitoli/capitolo2/useRef'
    | '/_capitoli/capitolo1/next'
    | '/_capitoli/capitolo2/'
    | '/_capitoli/capitolo3/'
    | '/_capitoli/react-19/'
    | '/_capitoli/capitolo1/'
    | '/_capitoli/capitolo1/conditional-rendering/'
    | '/_capitoli/capitolo1/handle-events/'
    | '/_capitoli/capitolo1/js-in-jsx/'
    | '/_capitoli/capitolo1/primo-componente/'
    | '/_capitoli/capitolo1/props-object/'
    | '/_capitoli/capitolo2/reducer/'
    | '/_capitoli/capitolo2/state-as-object/'
    | '/_capitoli/capitolo2/state-attenti/'
    | '/_capitoli/capitolo2/state-tips/'
    | '/_capitoli/capitolo2/use-state/'
    | '/_capitoli/capitolo2/useEffect-for-fetch/'
    | '/_capitoli/capitolo2/useEffect/'
    | '/_capitoli/capitolo3/custom-hooks/'
    | '/_capitoli/capitolo3/react-memo/'
    | '/_capitoli/capitolo3/suspense/'
    | '/_capitoli/capitolo3/useCallback/'
    | '/_capitoli/capitolo3/useContext/'
    | '/_capitoli/capitolo3/useDeferredValue/'
    | '/_capitoli/capitolo3/useMemo/'
    | '/_capitoli/capitolo3/useTransition/'
    | '/_capitoli/react-19/use/'
    | '/_capitoli/react-19/useActionState/'
    | '/_capitoli/react-19/useOptimistic/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  CapitoliRoute: typeof CapitoliRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  CapitoliRoute: CapitoliRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_capitoli"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_capitoli": {
      "filePath": "_capitoli.tsx",
      "children": [
        "/_capitoli/capitolo2/useRef",
        "/_capitoli/capitolo1/next",
        "/_capitoli/capitolo2/",
        "/_capitoli/capitolo3/",
        "/_capitoli/react-19/",
        "/_capitoli/capitolo1/",
        "/_capitoli/capitolo1/conditional-rendering/",
        "/_capitoli/capitolo1/handle-events/",
        "/_capitoli/capitolo1/js-in-jsx/",
        "/_capitoli/capitolo1/primo-componente/",
        "/_capitoli/capitolo1/props-object/",
        "/_capitoli/capitolo2/reducer/",
        "/_capitoli/capitolo2/state-as-object/",
        "/_capitoli/capitolo2/state-attenti/",
        "/_capitoli/capitolo2/state-tips/",
        "/_capitoli/capitolo2/use-state/",
        "/_capitoli/capitolo2/useEffect-for-fetch/",
        "/_capitoli/capitolo2/useEffect/",
        "/_capitoli/capitolo3/custom-hooks/",
        "/_capitoli/capitolo3/react-memo/",
        "/_capitoli/capitolo3/suspense/",
        "/_capitoli/capitolo3/useCallback/",
        "/_capitoli/capitolo3/useContext/",
        "/_capitoli/capitolo3/useDeferredValue/",
        "/_capitoli/capitolo3/useMemo/",
        "/_capitoli/capitolo3/useTransition/",
        "/_capitoli/react-19/use/",
        "/_capitoli/react-19/useActionState/",
        "/_capitoli/react-19/useOptimistic/"
      ]
    },
    "/_capitoli/capitolo2/useRef": {
      "filePath": "_capitoli/capitolo2/useRef/route.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo1/next": {
      "filePath": "_capitoli/capitolo1/next.lazy.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo2/": {
      "filePath": "_capitoli/capitolo2/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/": {
      "filePath": "_capitoli/capitolo3/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/react-19/": {
      "filePath": "_capitoli/react-19/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo1/": {
      "filePath": "_capitoli/capitolo1/index.lazy.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo1/conditional-rendering/": {
      "filePath": "_capitoli/capitolo1/conditional-rendering/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo1/handle-events/": {
      "filePath": "_capitoli/capitolo1/handle-events/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo1/js-in-jsx/": {
      "filePath": "_capitoli/capitolo1/js-in-jsx/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo1/primo-componente/": {
      "filePath": "_capitoli/capitolo1/primo-componente/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo1/props-object/": {
      "filePath": "_capitoli/capitolo1/props-object/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo2/reducer/": {
      "filePath": "_capitoli/capitolo2/reducer/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo2/state-as-object/": {
      "filePath": "_capitoli/capitolo2/state-as-object/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo2/state-attenti/": {
      "filePath": "_capitoli/capitolo2/state-attenti/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo2/state-tips/": {
      "filePath": "_capitoli/capitolo2/state-tips/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo2/use-state/": {
      "filePath": "_capitoli/capitolo2/use-state/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo2/useEffect-for-fetch/": {
      "filePath": "_capitoli/capitolo2/useEffect-for-fetch/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo2/useEffect/": {
      "filePath": "_capitoli/capitolo2/useEffect/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/custom-hooks/": {
      "filePath": "_capitoli/capitolo3/custom-hooks/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/react-memo/": {
      "filePath": "_capitoli/capitolo3/react-memo/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/suspense/": {
      "filePath": "_capitoli/capitolo3/suspense/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/useCallback/": {
      "filePath": "_capitoli/capitolo3/useCallback/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/useContext/": {
      "filePath": "_capitoli/capitolo3/useContext/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/useDeferredValue/": {
      "filePath": "_capitoli/capitolo3/useDeferredValue/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/useMemo/": {
      "filePath": "_capitoli/capitolo3/useMemo/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/capitolo3/useTransition/": {
      "filePath": "_capitoli/capitolo3/useTransition/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/react-19/use/": {
      "filePath": "_capitoli/react-19/use/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/react-19/useActionState/": {
      "filePath": "_capitoli/react-19/useActionState/index.tsx",
      "parent": "/_capitoli"
    },
    "/_capitoli/react-19/useOptimistic/": {
      "filePath": "_capitoli/react-19/useOptimistic/index.tsx",
      "parent": "/_capitoli"
    }
  }
}
ROUTE_MANIFEST_END */
