# Shortform Videos Directory

This directory is for storing local shortform video files that will be embedded in the portfolio.

## Required Files

For each shortform video entry in `shortformVideoData.ts`, you need to add corresponding files here:

- Upload MP4 format videos named `video1.mp4`, `video2.mp4`, etc.
- Thumbnails will be automatically generated from the first frame of each video

## How to Create a Default Thumbnail

Create a file called `default-thumb.jpg` in this directory that will be used as a fallback thumbnail if the video cannot be loaded for thumbnail generation.

## Video Requirements

- **Format**: MP4 (H.264 codec)
- **Aspect Ratio**: 9:16 (vertical/portrait)
- **Resolution**: Recommended 1080x1920
- **Duration**: 15-60 seconds
- **Size**: Keep under 5MB per video if possible

## How to Add Videos

1. Download the Instagram videos from the sources listed in `shortformVideoData.ts`
2. Convert them to MP4 format if needed
3. Name them according to the pattern (video1.mp4, video2.mp4, etc.)
4. Place the video files in this directory

## Important Note

The application will automatically generate thumbnail images from the first frame of each video. No separate thumbnail images are needed. 