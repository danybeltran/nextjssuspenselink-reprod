"use client"

import { use } from "react"
import useSWR from "swr"

export default function TodoPage({
  params: $params,
}: {
  params: Promise<{
    id: string
  }>
}) {
  const params = use($params)

  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/" + params.id,
    {
      fetcher: (key) => fetch(key).then((e) => e.json()),
      suspense: true,
    }
  )

  return (
    <div className="p-10">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
