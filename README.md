# Next.js Docker App

Aplicação Next.js com rota `/api` retornando um JSON com:
- nome
- email
- ra

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse:
- http://localhost:3000
- http://localhost:3000/api

## Build local

```bash
npm run build
npm run start
```

## Docker

```bash
docker build -t nextjs-docker-app .
docker run -p 3000:3000 nextjs-docker-app
```

## Deploy no Google Cloud Run

Exemplo com Artifact Registry + Cloud Run:

```bash
export PROJECT_ID="SEU_PROJECT_ID"
export REGION="us-central1"
export REPOSITORY="apps"
export IMAGE="nextjs-docker-app"

# autenticação do Docker no Artifact Registry
gcloud auth configure-docker ${REGION}-docker.pkg.dev

# criar repositório (uma vez)
gcloud artifacts repositories create ${REPOSITORY} \
  --repository-format=docker \
  --location=${REGION}

# build da imagem
docker build -t ${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${IMAGE}:latest .

# push
docker push ${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${IMAGE}:latest

# deploy
gcloud run deploy ${IMAGE} \
  --image ${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${IMAGE}:latest \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated
```

Depois do deploy, o Cloud Run exibirá a URL pública do serviço.
