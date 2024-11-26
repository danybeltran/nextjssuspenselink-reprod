import Link from "next/link"

export default function Home() {
  return (
    <div className="p-16">
      <Link href={"/todo/1"}>Go to todo 1</Link>
      <br />
      <Link href={"/todo/2"}>Go to todo 2</Link>
      <br />
      <Link href={"/todo/3"}>Go to todo 3</Link>
      <br />
      <Link href={"/todo/4"}>Go to todo 4</Link>
      <br />
      <Link href={"/todo/5"}>Go to todo 5</Link>
      <br />
      <Link href={"/todo/6"}>Go to todo 6</Link>
      <br />
    </div>
  )
}
