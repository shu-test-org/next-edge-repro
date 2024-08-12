export const runtime = 'edge'

export default async function () {
  const font = await fetch(
    new URL('../../assets/TYPEWR__.ttf', import.meta.url)
  )

  console.log(font)

  return new Response('Hello, world!')
}
