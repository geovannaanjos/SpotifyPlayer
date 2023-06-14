import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className='font-[Inter] overflow-x-hidden bg-black scrollbar-hide scrollbar-thumb-neutral-200 scrollbar-track-neutral-900 scrollbar-thin scrollbar-track-rounded-full scrollbar-h-full scrollbar-w-full text-zinc-50 min-w-max relative w-full'>{children}</body>
    </html>
  )
}
