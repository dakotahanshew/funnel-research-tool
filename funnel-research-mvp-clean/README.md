# Funnel Research MVP - Clean Build

This is a production-ready funnel research and competitor analysis tool built with:

## 🚀 Features

- **FastAPI Backend**: Async Python API with comprehensive competitor analysis
- **React Frontend**: Embeddable components with Podlab LV design system
- **Multiple Integration Options**: iframe, React components, and Framer components
- **Production Ready**: Docker, tests, and deployment configurations included

## 📁 Project Structure

```
funnel-research-mvp-clean/
├── app/                    # Backend API
│   ├── api/               # API endpoints
│   ├── core/              # Core configuration
│   ├── db/                # Database models
│   ├── models/            # Pydantic schemas
│   ├── services/          # Business logic
│   └── utils/             # Utilities
├── frontend/              # React frontend
│   ├── src/               # Source files
│   ├── design-system.css  # Podlab LV design system
│   └── components/        # React components
├── tests/                 # Test files
├── deployment/            # Deployment configs
└── scripts/              # Utility scripts
```

## 🛠️ Setup Instructions

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Set Environment Variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Run Development Server**:
   ```bash
   uvicorn app.main:app --reload
   ```

4. **Deploy to Production**:
   - See `DEPLOYMENT_GUIDE.md` for complete instructions
   - Use Railway for backend, Netlify for frontend

## 🎯 Integration

### Option 1: iframe Embed
```html
<iframe src="https://your-tool.netlify.app/embed-iframe.html" width="100%" height="700px"></iframe>
```

### Option 2: React Component
```tsx
import { FunnelResearchTool } from './components/FunnelResearchTool'

<FunnelResearchTool apiUrl="https://your-api.railway.app/api/v1" />
```

### Option 3: Framer Components
Copy the components from `frontend/framer-components.tsx` into your Framer project.

## 📚 Documentation

- [Deployment Guide](DEPLOYMENT_GUIDE.md)
- [API Documentation](http://localhost:8000/docs)
- [Frontend README](frontend/README.md)

## 🔧 Tech Stack

- **Backend**: FastAPI, PostgreSQL, SQLAlchemy, Pydantic
- **Frontend**: React, TypeScript, Vite
- **Deployment**: Railway (API), Netlify (Frontend)
- **Design**: Podlab LV design system

Your complete funnel research tool ready for production! 🚀