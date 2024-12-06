# Dockerfile cho Frontend
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng cho ứng dụng frontend
EXPOSE 3000

# Khởi động ứng dụng
CMD ["node", "frontend.js"]
