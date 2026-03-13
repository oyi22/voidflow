"use client"

import { useEffect, useState } from "react"
import LoadingScreen from "./LoadingScreen"

export default function AppClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return <>{children}</>
}