  import express from 'express';
  import bodyParser from 'body-parser';
  import mongoose from 'mongoose';
  import cors from 'cors';
  import dotenv from 'dotenv';
  import multer from 'multer';
  import helmet from 'helmet';
  import morgan from 'morgan';
  import path from 'path';
  import { fileURLToPath } from 'url';
  import authRoutes from './routes/auth.js';
  import userRoutes from './routes/users.js';
  import postRoutes from './routes/posts.js';
  import { register } from './controllers/auth.js';
  import { createPost } from './controllers/posts.js';
  import { verifyToken } from './middleware/auth.js';
  import User from './models/User.js';
  import Post from './models/Post.js';
  import { users, posts } from './data/index.js';

  // Configuration
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  dotenv.config();
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
  app.use(morgan('common'));
  app.use(bodyParser.json({ limit: '30mb', extended: true }));
  app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
  // const corsOptions = {
  //   origin: 'https://social-media-client-tau.vercel.app',
  // };
  // app.use(cors(corsOptions));
  app.use(cors({ origin: '*' }));
  // app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

  // // File Storage
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, 'public/assets');
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, file.originalname);
  //   },
  // });
  // const upload = multer({ storage });

  // Routes with Files -- this route because of uploading of file
  app.post('/auth/register',register);
  app.post('/post', verifyToken,createPost);

  //Routes -- Seprate
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
  app.use('/post', postRoutes);

  // Mongoose setup
  mongoose.set('strictQuery', false);
  const PORT = process.env.PORT || 6000;
  app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT} `);
  });

  app.get('/', function (req, res) {
    res.send(`Backend is running on port number ${PORT}`);
  });

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    .then(() => {
      console.log(`conneted to db`);
      // /* ADD DATA ONE TIME */
      // User.insertMany(users);
      // Post.insertMany(posts);
    })
    .catch((error) => console.log(`${error} -->  did not connect`));
