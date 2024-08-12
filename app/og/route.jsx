export const runtime = 'edge'

export async function GET() {
  const font = await fetch(
    new URL('../../assets/TYPEWR__.ttf', import.meta.url)
  )

  console.log(typeof font)

  return new Response('Hello, world!')
}
