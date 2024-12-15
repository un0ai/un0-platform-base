import { useCallback, useEffect, useState } from "react"

export function usePersistedState<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  // Initialize with defaultValue first
  const [state, setState] = useState<T>(defaultValue)

  // Then update from localStorage after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(key)
      if (stored) {
        try {
          setState(JSON.parse(stored))
        } catch (e) {
          console.error("Error parsing stored value:", e)
        }
      }
    }
  }, [key])

  // Update localStorage when state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  // Wrapper for setState that also updates localStorage
  const setPersistedState = useCallback((value: T) => {
    setState(value)
  }, [])

  return [state, setPersistedState]
}
