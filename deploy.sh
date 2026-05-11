#!/bin/bash

if [ -z "$CF_API_TOKEN" ]; then
  echo "Error: CF_API_TOKEN is not set."
  exit 1
fi

export CLOUDFLARE_API_TOKEN="$CF_API_TOKEN"
echo "Exported CLOUDFLARE_API_TOKEN from CF_API_TOKEN"

# Run wrangler deploy with your config
pnpm exec wrangler deploy --config=twilio-neon/wrangler.toml
