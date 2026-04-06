# Next.js dockerizado com rota /api

Este projeto expõe o endpoint `/api` com o seguinte JSON:

```json
{
  "nome": "Rafael Paschoalotti",
  "email": "rafael.paschoalotti@fatec.sp.gov.br",
  "ra": "01392321017"
}
```

## Build local

```bash
docker build -t us-central1-docker.pkg.dev/nodejs-rafael/nextjs-rafael/app:1 .
```

## Push para o Artifact Registry

```bash
docker push us-central1-docker.pkg.dev/nodejs-rafael/nextjs-rafael/app:1
```

## Deploy no Cloud Run

```bash
gcloud run deploy nodejs-rafael --image us-central1-docker.pkg.dev/nodejs-rafael/nextjs-rafael/app:1 --region us-central1 --allow-unauthenticated
```
