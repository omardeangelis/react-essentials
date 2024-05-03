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
    // {
    //   path: `/capitolo1/conditional-rendering`,
    //   label: `Conditional rendering`,
    // },
    // {
    //   path: `/capitolo1/props-object`,
    //   label: `Props object`,
    // },
  ],
}

export const routesMapKeys = Object.keys(routesMaps) as Array<
  keyof typeof routesMaps
>
