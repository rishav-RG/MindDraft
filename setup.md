# 🚀 QuickBlog Setup Guide

## Required API Keys & Services

### 1. Google Gemini AI API Key

**Step 1: Get API Key**

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

**Step 2: Add to Environment**
Add this to your `server/.env` file:

```env
GEMINI_API_KEY = "your-actual-gemini-api-key-here"
```

### 2. ImageKit Account Setup

**Step 1: Create Account**

1. Go to [ImageKit.io](https://imagekit.io/)
2. Sign up for a free account
3. Complete the registration process

**Step 2: Get Credentials**

1. Go to your ImageKit dashboard
2. Navigate to "Developer Options" → "API Keys"
3. Copy your:
   - Public Key
   - Private Key
   - URL Endpoint

**Step 3: Add to Environment**
Add these to your `server/.env` file:

```env
IMAGEKIT_PUBLIC_KEY = 'your-imagekit-public-key'
IMAGEKIT_PRIVATE_KEY = 'your-imagekit-private-key'
IMAGEKIT_URL = 'your-imagekit-url-endpoint'
```

### 3. MongoDB Database

**Option 1: MongoDB Atlas (Recommended)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Add to `server/.env`:

```env
MONGODB_URI = "your-mongodb-atlas-connection-string"
```

**Option 2: Local MongoDB**

1. Install MongoDB locally
2. Start MongoDB service
3. Add to `server/.env`:

```env
MONGODB_URI = "mongodb://localhost:27017/quickblog"
```

## Complete Environment File Example

```env
# JWT Secret
JWT_SECRET = 'your-super-secret-jwt-key-here'

# Admin Credentials
ADMIN_EMAIL = "your-admin-email@gmail.com"
ADMIN_PASSWORD = "your-secure-admin-password"

# MongoDB
MONGODB_URI = "mongodb+srv://username:password@cluster.mongodb.net/quickblog?retryWrites=true&w=majority"

# ImageKit
IMAGEKIT_PUBLIC_KEY = 'public_your_imagekit_public_key'
IMAGEKIT_PRIVATE_KEY = 'private_your_imagekit_private_key'
IMAGEKIT_URL = 'https://ik.imagekit.io/your_imagekit_id'

# Gemini AI
GEMINI_API_KEY = "your-gemini-api-key-here"
```

## Testing Your Setup

1. **Start the server:**

```bash
cd server
npm run server
```

2. **Start the client:**

```bash
cd client
npm run dev
```

3. **Test AI Generation:**

   - Go to `/admin`
   - Login with your admin credentials
   - Try adding a blog with AI generation

4. **Test Image Upload:**
   - Try uploading an image when creating a blog
   - Check if it appears in your ImageKit dashboard

## Troubleshooting

### AI Generation Not Working

- Check if `GEMINI_API_KEY` is correctly set
- Verify the API key is valid and has quota remaining
- Check server console for error messages

### Image Upload Not Working

- Verify ImageKit credentials are correct
- Check if ImageKit account is active
- Ensure proper folder permissions

### Database Connection Issues

- Verify MongoDB connection string
- Check if database is accessible
- Ensure network connectivity

### Admin Login Issues

- Verify `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env`
- Check if JWT_SECRET is set
- Clear browser cache and try again
