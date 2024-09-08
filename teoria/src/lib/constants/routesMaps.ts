export const routesMaps = {
  capitolo1: [
    {
      path: `/capitolo1`,
      label: `Introduzione`,
    },
    {
      path: `/capitolo1/primo-componente`,
      label: `Er primo componente`,
    },
    {
      path: `/capitolo1/js-in-jsx`,
      label: `JS in JSX`,
    },
    {
      path: `/capitolo1/handle-events`,
      label: `Gestione eventi`,
    },
    {
      path: `/capitolo1/props-object`,
      label: `Props object`,
    },

    {
      path: `/capitolo1/conditional-rendering`,
      label: `Conditional rendering`,
    },
    {
      path: `/capitolo1/next`,
      label: `Verso il Capitolo 2`,
    },
  ],
  capitolo2: [
    {
      path: `/capitolo2`,
      label: `Introduzione e Regole`,
    },
    {
      path: `/capitolo2/use-state`,
      label: `Aggiornare la UI`,
    },
    {
      path: `/capitolo2/state-attenti`,
      label: `State, Attenti`,
    },
    {
      path: `/capitolo2/state-as-object`,
      label: `Gli oggetti come stato`,
    },
    {
      path: `/capitolo2/state-tips/`,
      label: `Gestione Avanzata`,
    },
    {
      path: `/capitolo2/reducer/`,
      label: `useReducer`,
    },
    {
      path: `/capitolo2/useRef/`,
      label: `useRef`,
    },
    {
      path: `/capitolo2/useEffect/`,
      label: `useEffect`,
    },
    {
      path: `/capitolo2/useEffect-for-fetch/`,
      label: `Data Fetching con useEffect`,
    },
  ],
}

export const routesMapKeys = Object.keys(routesMaps) as Array<
  keyof typeof routesMaps
>
