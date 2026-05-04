#!/usr/bin/env bash
# Build + deploy adamscottthomas.com to Cloudflare Pages.
# CF project has no Git provider, so deploys are manual.
set -euo pipefail

PROJECT="adam-scott-thomas"
BRANCH="master"
URL="https://adamscottthomas.com"

cd "$(dirname "$0")"

echo "==> npm run build"
npm run build

echo "==> wrangler pages deploy out --project-name=$PROJECT --branch=$BRANCH"
npx wrangler pages deploy out --project-name="$PROJECT" --branch="$BRANCH"

echo "==> verify $URL"
sleep 4
code=$(curl -s -o /dev/null -w "%{http_code}" "$URL/")
echo "    $URL/  -> HTTP $code"
[ "$code" = "200" ] || { echo "ERROR: prod URL did not return 200"; exit 1; }

echo "==> done"
