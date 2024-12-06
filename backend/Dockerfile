# Dockerfile cho Backend
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng cho ứng dụng backend
EXPOSE 5000

# Khởi động ứng dụng
CMD ["node", "backend.js"]
