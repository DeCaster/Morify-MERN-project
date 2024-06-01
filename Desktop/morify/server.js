import 'express-async-errors';
// .env dosyasını yükleme
import * as dotenv from 'dotenv';
dotenv.config();

// express uygulaması kurulumu
import express from 'express';
const app = express();

// importlar
import morgan from 'morgan';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary';

// routerlar
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// middlewareler
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

// cookie parser
import cookieParser from 'cookie-parser';

// Cloudinary konfigürasyonu
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

// Geliştirme ortamı için morgan kullanımı
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.json());
app.use(cookieParser());

// Test çalışmaları için
app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

// SPA yönlendirmesi (public klasöründeki index.html dosyasını servis etmek için)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

// 404 Not Found Middleware
app.use((req, res) => {
  res.status(404).json({ msg: 'Not Found' });
});

// Hata yakalama middleware'i
app.use(errorHandlerMiddleware);

// Sunucuyu başlatma
const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}...`);
  });
} catch (error) {
  console.error('Error connecting to MongoDB:', error.message);
  process.exit(1);
}
