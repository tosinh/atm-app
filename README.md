# ATM App - Backend & Frontend

Đây là dự án ATM App bao gồm **Backend** và **Frontend** chạy trên Docker. Dự án sử dụng MongoDB làm cơ sở dữ liệu.

## Link Docker

- [Frontend] (https://hub.docker.com/repository/docker/2115262/atm-frontend/general)
- [Backend] (https://hub.docker.com/repository/docker/2115262/atm-backend/general)

## Các bước để chạy ứng dụng

### 1. Tải dự án về

Sử dụng Git để clone dự án về máy tính của bạn:

```bash
git clone https://github.com/yourusername/atm-app.git
cd atm-app
```

### 2. Chạy ứng dụng bằng Docker Compose

```bash
    docker-compose up
```

Build và run các container cho frontend, backend và MongoDB.

- Frontend sẽ được chạy trên cổng 3000 (http://localhost:3000).
- Backend sẽ được chạy trên cổng 5000 (http://localhost:5000).
- MongoDB sẽ được chạy trên cổng 27017.

### 3. Dừng ứng dụng

```bash
    docker-compose down
```
