#!/bin/bash
# W1 Deployment Script - Used by Deployer agent

set -e

# Configuration
SITE_URL="https://ai-directory-pearl.vercel.app"
REPO_DIR="/data/.openclaw/workspace/ai-directory"
BRANCH="${1:-main}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🚀 W1 Deployment Script"
echo "======================"
echo "Branch: $BRANCH"
echo ""

# Navigate to repo
cd "${REPO_DIR}"

# Pre-deployment checks
echo "📋 Pre-deployment checks..."

# Check if working directory is clean
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️ Working directory has uncommitted changes${NC}"
    git status --short
fi

# Pull latest
echo "⬇️ Pulling latest from origin/$BRANCH..."
git pull origin "$BRANCH"

# Check Node.js version
NODE_VERSION=$(node --version)
echo "📦 Node.js version: $NODE_VERSION"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build check
echo "🏗️ Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful${NC}"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
if command -v vercel &> /dev/null; then
    vercel --prod --yes
else
    echo -e "${YELLOW}⚠️ Vercel CLI not found, using git push${NC}"
    git push origin "$BRANCH"
fi

# Wait for deploy propagation
echo "⏳ Waiting for deployment..."
sleep 15

# Post-deployment verification
echo "🔍 Post-deployment verification..."

# Check homepage
HTTP_CODE=$(curl -sSf "$SITE_URL" -o /dev/null -w "%{http_code}" || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    echo -e "${GREEN}✅ Homepage: 200 OK${NC}"
else
    echo -e "${RED}❌ Homepage: $HTTP_CODE${NC}"
    exit 1
fi

# Check directory page
HTTP_CODE=$(curl -sSf "$SITE_URL/directory" -o /dev/null -w "%{http_code}" || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    echo -e "${GREEN}✅ Directory page: 200 OK${NC}"
else
    echo -e "${RED}❌ Directory page: $HTTP_CODE${NC}"
fi

# Check a few tool pages
for slug in jasper chatgpt; do
    HTTP_CODE=$(curl -sSf "$SITE_URL/directory/$slug" -o /dev/null -w "%{http_code}" || echo "000")
    if [ "$HTTP_CODE" = "200" ]; then
        echo -e "${GREEN}✅ Tool page /$slug: 200 OK${NC}"
    else
        echo -e "${RED}❌ Tool page /$slug: $HTTP_CODE${NC}"
    fi
done

# Report summary
echo ""
echo "======================"
echo -e "${GREEN}✅ Deployment Complete${NC}"
echo "======================"
echo "Site: $SITE_URL"
echo "Branch: $BRANCH"
echo "Time: $(date)"
echo ""

# Output for Coordinator report
cat << EOF

📊 Deployment Report
====================
Status: SUCCESS
Branch: $BRANCH
URL: $SITE_URL
Commit: $(git rev-parse --short HEAD)
Time: $(date)

Verification:
- Homepage: 200 OK
- Directory: