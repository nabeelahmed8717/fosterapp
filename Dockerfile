FROM node:18-alpine AS builder
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm i -f 
COPY . .
RUN npm run build
####################################################
FROM node:18-alpine as runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next-i18next.config.js ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
####################################################
