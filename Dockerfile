FROM node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /opt/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:lts-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /opt/app
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN pnpm build

FROM node:lts-alpine AS runner
WORKDIR /opt/app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    apk add --no-cache bash
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=2048"
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next/standalone ./
COPY --from=builder /opt/app/.next/static ./.next/static
RUN chown -R nextjs:nodejs .
USER nextjs
EXPOSE 3070
ENV PORT 3070
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]