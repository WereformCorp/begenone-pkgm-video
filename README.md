# @begenone/pkgm-video

This package manages **video-related logic** in the BEGENONE app.

## Overview

Everything that involves videos — uploading, displaying, formatting, and retrieving metadata — is handled here.

## Features

- 📦 Fetch video lists (feeds, channel-specific, trending)
- 📹 Display video player with metadata
- ⏱ Duration, title, and preview management
- 🧠 Handles video encoding status and thumbnail fallback

## Usage

Any screen that shows videos — including feeds, Shorts, and channel pages — imports logic or components from this package.

## Tech Stack

- Axios for API calls
- React Native Video or Expo AV
- Shared utilities from `@begenone/pkgm-shared`
