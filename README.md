# MindDraft - AI-Powered Blogging Platform

A modern, full-stack blogging platform with AI content generation capabilities.

## 🚀 Features

- **AI Content Generation**: Generate blog content using Google Gemini AI
- **Admin Dashboard**: Complete blog management system
- **Comment System**: User comments with admin approval
- **Image Upload**: Cloud storage with ImageKit integration
- **Responsive Design**: Modern UI with Tailwind CSS
- **Real-time Search**: Filter blogs by category and search terms

## 📋 Prerequisites

Before running this project, you need:

1. **Node.js** (v16 or higher)
2. **MongoDB** database
3. **Google Gemini AI API Key**
4. **ImageKit Account** (for image storage)

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Quickblog
```

### 2. Install Dependencies

**Server:**

```bash
cd server
npm install
```

**Client:**

```bash
cd client
npm install
```

### 3. Environment Configuration

**Server (.env) - REQUIRED:**

```env
# JWT Secret
JWT_SECRET = 'your-jwt-secret-key'

# Admin Credentials
ADMIN_EMAIL = "your-admin-email@gmail.com"
ADMIN_PASSWORD = "your-admin-password"

# MongoDB
MONGODB_URI = "your-mongodb-connection-string"

# ImageKit (Required for image uploads)
IMAGEKIT_PUBLIC_KEY = 'your-imagekit-public-key'
IMAGEKIT_PRIVATE_KEY = 'your-imagekit-private-key'
IMAGEKIT_URL = 'your-imagekit-url-endpoint'

# Gemini AI (Required for AI content generation)
GEMINI_API_KEY = "your-gemini-api-key"
```

**Client (.env):**

```env
VITE_BASE_URL = http://localhost:3000
```

### 4. Get Required API Keys

#### Google Gemini AI API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your server `.env` file

#### ImageKit Account

1. Sign up at [ImageKit](https://imagekit.io/)
2. Get your public key, private key, and URL endpoint
3. Add them to your server `.env` file

### 5. Run the Application

**Start the Server:**

```bash
cd server
npm run server
```

**Start the Client:**

```bash
cd client
npm run dev
```

## 🎯 Usage

### Admin Access

- Navigate to `/admin` to access the admin panel
- Login with credentials from your `.env` file
- Manage blogs, comments, and generate AI content

### Blog Management

- Add new blogs with AI-generated content
- Upload images for blog thumbnails
- Publish/unpublish blogs
- Manage user comments

### AI Content Generation

- Enter a blog title in the "Add Blog" section
- Click "Generate Content" to use AI
- Edit and customize the generated content
- Add images and publish

## 🏗️ Project Structure

```
Quickblog/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context for state
│   │   └── assets/        # Static assets
├── server/                 # Node.js backend
│   ├── controllers/       # API controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── configs/         # Configuration files
```

## 🔑 API Endpoints

### Blog Routes

- `GET /api/blog/all` - Get all published blogs
- `GET /api/blog/:id` - Get specific blog
- `POST /api/blog/add` - Add new blog (admin only)
- `POST /api/blog/delete` - Delete blog (admin only)
- `POST /api/blog/toggle-publish` - Toggle publish status
- `POST /api/blog/generate` - Generate AI content

### Admin Routes

- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/dashboard` - Dashboard data
- `GET /api/admin/blogs` - All blogs (admin view)
- `GET /api/admin/comments` - All comments
- `POST /api/admin/approve-comment` - Approve comment
- `POST /api/admin/delete-comment` - Delete comment

### Comment Routes

- `POST /api/blog/add-comment` - Add user comment
- `POST /api/blog/comments` - Get blog comments

## 🛠️ Technologies Used

**Frontend:**

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Quill Editor
- Framer Motion

**Backend:**

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (File uploads)
- ImageKit (Image storage)
- Google Gemini AI

## 🚨 Important Notes

1. **API Keys Required**: You must obtain and configure:

   - Google Gemini AI API key for content generation
   - ImageKit credentials for image storage

2. **Database**: Ensure MongoDB is running and accessible

3. **Environment Variables**: All required variables must be set in `.env` files

4. **Admin Access**: Default admin credentials are in the `.env` file

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support, please open an issue in the repository or contact the development team.
