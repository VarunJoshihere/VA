## Overlaying images ontop of a video player in react

This is a project that shows images ontop of a video at certain timestamps and within certain positions and only for a fixed number of times.

## Features

**Image 1**:

- shows at **3500ms**
- shows for **5000ms** (i.e. the image is visible from 3500ms-8500ms)
- shows in **top left** of the video
- \*\*shows up **once** (i.e. when rewinding it should not show up again)

**Image 2:**

- shows at **6000ms**
- shows for **2000ms** (i.e. 6000ms-8000ms)
- shows in **top right** of the video
- \*\*shows up **twice**

**Image 3:**

- shows at **7000ms**
- shows for **1500ms** (i.e. 7000ms-8500ms)
- shows up in **centre** of the video
- \*\*shows up **three** times

## How to run this project?

```
1. npm install
2. npm start
```

## Approach

- Using a native html video player, get currentTime and update currentTime everytime video is playing using onTimeUpdate
- If currentTime is >= the startTime of a given image, and less than the endTime, and the image has not exceeded the its number of occruances, then show the image
- images have css applied for positioning
- after the duration of the image has passed, increase the count
