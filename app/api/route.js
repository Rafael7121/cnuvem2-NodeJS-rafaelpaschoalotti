import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    nome: 'Rafael Paschoalotti',
    email: 'rafael.paschoalotti@fatec.sp.gov.br',
    ra: '01392321017',
  })
}