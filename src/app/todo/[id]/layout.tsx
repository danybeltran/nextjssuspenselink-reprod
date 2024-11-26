import { Suspense } from "react"

export default function TodoLayout({ children }: any) {
  return (
    <Suspense
      fallback={
        <div className="p-16">
          <p>Loading todo...</p>
        </div>
      }
    >
      {children}
    </Suspense>
  )
}
