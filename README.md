# @wereform/pkgm-video

Reusable video UI components and layouts for the WeReform / BEGENONE platform.

This package provides video-centric building blocks including thumbnails, video players, card layouts, and full video view layouts. It is designed for mobile-first experiences using React Native and Expo, and composes cleanly with shared UI primitives from the WeReform ecosystem.

---

## Install

```bash
npm install @wereform/pkgm-video
# or
yarn add @wereform/pkgm-video
# or
pnpm add @wereform/pkgm-video
```

---

## What this package gives you

- Video UI components:

  - Video thumbnail renderer
  - Auto-playing video player
  - Horizontal and vertical video cards

- Video layouts:

  - Full video view layout with metadata and interactions
  - Scrollable suggested videos list

- Built for:

  - React Native / Expo
  - Video-first feeds and detail pages
  - Composition with channel, menu, and shared UI packages

---

## Exports

From `@wereform/pkgm-video` you can import:

```ts
import {
  Thumbnail,
  VideoPlayer,
  VideoCardLayout,
  VideoCardHorizontalLayout,
  VideoViewLayout,
} from "@wereform/pkgm-video";
```

---

## Core components

## Thumbnail

Renders a responsive 16:9 video thumbnail.

### Props

```ts
Thumbnail({
  thumbnailURL,
  thumbHeight,
});
```

- `thumbnailURL` Thumbnail image URL
- `thumbHeight` Height of the thumbnail container

---

## VideoPlayer

Auto-playing, looping video player built on `expo-video`.

### Props

```ts
VideoPlayer({
  videoSource,
});
```

- Automatically plays when screen is focused
- Pauses when screen loses focus
- Supports picture-in-picture mode
- Maintains a 16:9 aspect ratio

---

## VideoCardHorizontalLayout

Compact horizontal video card used in lists and side feeds.

### Props

```ts
VideoCardHorizontalLayout({
  timeAgo,
  viewsText,
  titleText,
  contentThumbUrl,
  navigateToVideo,
});
```

- Designed for dense lists
- Clickable to navigate to video detail view

---

## VideoCardLayout

Standard vertical video card with thumbnail, title, channel info, and metadata.

### Props

```ts
VideoCardLayout({
  timeAgo,
  viewsText,
  titleText,
  userNameText,
  contentThumbUrl,
  channelLogo,
  containerStyles,
  dateViewsContainerStyle,
  userImageStyles,
  titleNameContainerStyles,
  userNameTextStyles,
  titleTextStyles,
  thumbnailImageStyles,
  customMetaDataStyles,
  navigateToVideo,
});
```

- Highly customizable via style overrides
- Used across feeds and suggested video sections

---

## VideoViewLayout

Full video detail layout including player, title, interactions, channel metadata, and suggested videos.

### Props

```ts
VideoViewLayout({
  videoSource,
  CustomizedTitleText,
  MenuChannelMetaTimeAgo,
  MenuChannelMetaViews,
  MenuChannelMetaUserName,
  MenuChannelMetaSubCount,
  MenuChannelMetaChannelLogo,
  suggestedVideos,
});
```

- Renders the active video at the top
- Displays interaction controls
- Shows channel metadata
- Maps and renders suggested videos below

---

## Typical usage

```ts
<VideoViewLayout
  videoSource={{ uri: videoUrl }}
  CustomizedTitleText="Video title"
  MenuChannelMetaUserName="WeReform"
  MenuChannelMetaSubCount="542,000"
  suggestedVideos={videos}
/>
```

---

## Design philosophy

- UI-only package
- No data fetching or API calls
- Video lifecycle handled at the layout level
- Composable with shared menu and channel components
- Optimized for mobile performance and readability

---

## License

MIT License

Copyright (c) 2025 WeReform / BEGENONE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
