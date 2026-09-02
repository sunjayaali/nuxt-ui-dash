FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable
RUN apk add --no-cache \
    python3 \
    make \
    g++
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm postinstall
RUN pnpm build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/.output ./.output
ENV NODE_ENV=production
ENV HOST=0.0.0.0
CMD ["node", ".output/server/index.mjs"]
