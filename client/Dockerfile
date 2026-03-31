# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app

# 1. Copy package files from the subfolder
COPY my-app/package*.json ./

# 2. Install dependencies
RUN npm install

# 3. Copy the CONTENTS of my-app directly into /app
COPY my-app/ .

# 4. Build the app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Adjust the 'dist' path if your vite config outputs elsewhere
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
