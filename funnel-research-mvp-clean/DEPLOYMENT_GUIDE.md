# 🚀 Complete Deployment Guide

Follow these steps to get your funnel research tool live!

## Phase 1: Deploy Backend API (15 minutes)

### Step 1: Get API Keys
1. **OpenAI API Key**:
   - Go to https://platform.openai.com/api-keys
   - Click "Create new secret key"
   - Copy the key (starts with `sk-`)
   - Add $5-10 credit for testing

2. **Generate Secret Key**:
   ```bash
   python -c "import secrets; print(secrets.token_urlsafe(32))"
   ```

### Step 2: Deploy to Railway (Easiest)

1. **Sign up at [Railway.app](https://railway.app)** with GitHub
2. **Create new project**:
   - Click "New Project" 
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Add PostgreSQL Database**:
   - In your project, click "New"
   - Select "Database" → "Add PostgreSQL"
   - Railway automatically sets DATABASE_URL

4. **Set Environment Variables**:
   Click on your web service → Variables tab → Add:
   ```
   OPENAI_API_KEY=sk-your-openai-key-here
   SECRET_KEY=your-generated-secret-key
   BACKEND_CORS_ORIGINS=["*"]
   DEBUG=false
   ```

5. **Deploy**: Railway automatically builds and deploys
6. **Get your API URL**: Copy from Railway dashboard

### Step 3: Test Your API
Visit these URLs to confirm it's working:
- `https://your-app.railway.app/api/v1/health/`
- `https://your-app.railway.app/docs`

---

## Phase 2: Deploy Frontend (10 minutes)

### Step 1: Update API URL in Frontend Files
1. Edit `frontend/embed-iframe.html` line ~50
2. Edit `frontend/framer-components.tsx` line ~800
3. Replace with your Railway URL

### Step 2: Deploy to Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub and select repository
5. Build settings:
   - Build command: `cd frontend && npm install && npm run build`
   - Publish directory: `frontend/dist`

### Step 3: Update CORS
In Railway, update CORS variable:
```
BACKEND_CORS_ORIGINS=["https://your-funnel-tool.netlify.app"]
```

---

## Phase 3: Integration with Framer (5 minutes)

### Method 1: iframe Embed (Easiest)
```html
<iframe 
  src="https://your-funnel-tool.netlify.app/embed-iframe.html"
  width="100%" 
  height="700px"
  style="border: none; border-radius: 20px;">
</iframe>
```

### Method 2: React Components
1. Copy `frontend/framer-components.tsx` to your Framer project
2. Copy `frontend/design-system.css` to your Framer project
3. Use the component in your pages

---

## Phase 4: Testing (5 minutes)

1. Visit your Framer site
2. Fill out the form with test data
3. Start analysis and wait for results
4. Verify complete flow works

---

## 🎉 You're Live!

Your funnel research tool is now ready to help users analyze competitors and build content strategies!

## Quick Commands Reference

```bash
# Test API locally
uvicorn app.main:app --reload

# Test frontend locally  
cd frontend && npm install && npm run dev

# Deploy updates
git add . && git commit -m "Update" && git push
```

## Support

If you run into issues:
1. Check browser console for errors
2. Check Railway logs for API issues
3. Verify all environment variables are set