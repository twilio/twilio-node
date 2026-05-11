#!/bin/bash

# Commit message (customize this)
COMMIT_MSG="chore: finalize modularization, add tests, linting, and deploy workflow"

echo "Adding all changes..."
git add .

echo "Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "Pulling remote changes with rebase..."
git pull --rebase origin main

if [ $? -ne 0 ]; then
  echo "Rebase failed. Please resolve conflicts, then run 'git rebase --continue'."
  exit 1
fi

echo "Pushing commits to origin/main..."
git push origin main

if [ $? -eq 0 ]; then
  echo "Push successful! 🎉"
else
  echo "Push failed. Check your network or remote repository status."
fi

