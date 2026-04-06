const payload = {
  nome: 'Rafael Paschoalotti',
  email: 'rafael.paschoalotti@fatec.sp.gov.br',
  ra: '01392321017',
}

export default function Home() {
  return (
    <main>
      <h1>Aplicação Next.js Dockerizada</h1>
      <p>
        Endpoint disponível em <code>/api</code>.
      </p>
      <p>Resposta JSON:</p>
      <pre>{JSON.stringify(payload, null, 2)}</pre>
    </main>
  )
}