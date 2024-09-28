import { useEffect, useState } from "react"

// non puoi riutilizzare hook in funzioni con non iniziano in use
// export const checkIsOnline = () => {
//   const [isOnline, setIsOnline] = useState(true)
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true)
//     }
//     function handleOffline() {
//       setIsOnline(false)
//     }
//     window.addEventListener(`online`, handleOnline)
//     window.addEventListener(`offline`, handleOffline)
//     return () => {
//       window.removeEventListener(`online`, handleOnline)
//       window.removeEventListener(`offline`, handleOffline)
//     }
//   }, [])
//   return isOnline
// }

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
    }
    function handleOffline() {
      setIsOnline(false)
    }
    window.addEventListener(`online`, handleOnline)
    window.addEventListener(`offline`, handleOffline)
    return () => {
      window.removeEventListener(`online`, handleOnline)
      window.removeEventListener(`offline`, handleOffline)
    }
  }, [])
  return isOnline
}
