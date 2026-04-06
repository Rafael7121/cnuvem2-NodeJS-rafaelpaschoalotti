import './globals.css'

export const metadata = {
  title: 'Next.js Docker App',
  description: 'Aplicação Next.js dockerizada com rota /api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}