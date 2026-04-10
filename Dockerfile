# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /singh_jasanpreet_final_site

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

LABEL name="singh_jasanpreet_coding_assignment14"

COPY --from=builder /singh_jasanpreet_final_site/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]
