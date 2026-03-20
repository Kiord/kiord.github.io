---
title: "SpaceBrowser"
date: 2025-10-04
summary: "A cross-platform file system visualizer with Go and Wails"
---

SpaceBrowser is a cross-platform file system viewer that allows you to monitor disk usage at a glance:  <a href="https://github.com/Kiord/SpaceBrowser" target="_blank">Link</a>

A Go backend parses the file system, computes a treemap and sends that to a webview (Wails) for display.

SpaceBrowser is an independent open-source project inspired by <a href="https://github.com/seanofw/spacemonger1" target="_blank">SpaceMonger 1.4</a>.

Screenshot:
![image](https://raw.githubusercontent.com/Kiord/SpaceBrowser/refs/heads/main/assets/screenshot.jpg)

## Features

- Treemap with SpaceMonger's style
- Open folder in file system
- Node selection
- Navigation
    - go to (double click)
    - Zoom full
    - Go to parent
    - backward/forward
- Responsive
- Cross platform
    - Ubuntu/Linux
    - Windows
    - MacOS