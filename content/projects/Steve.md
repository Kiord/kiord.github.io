---
title: "Steve"
date: 2025-07-16
summary: "A Taichi path tracer"
icon: /img/steve.jpg
---


Steve is a path tracer written in [Taichi](https://www.taichi-lang.org/) as I wanted to learn this Python-embedded language:  <a href="https://github.com/Kiord/Steve" target="_blank">Link</a>

This project is stalled but I might come back to it to make a minimal working version. Name is shamelessly taken from [@vigzvigz's](https://www.youtube.com/@vigzvigz) little fish character.

## Progress

- ✅ Scene & Camera
- ✅ Phong unified material
- ✅ Progressive integration
- ✅ ACES + gamma tone mapping 
- ✅ simple denoising
- ✅ Plane, Sphere and Triangle intersection
- ✅ Sphere & Triangle lights
- ✅ Direct Illumination MIS
- ✅ Analytic environnment map
- ✅ Pixel-stable sampler
- ✅ Mesh loading
- ✅ BVH
- ✅ BSDF & light logics separated from integrator logic
- 🟡 CLI
- 🟡 More materials (GGX ? Disney BSDF?)
- ❌ Environment map sampling
- ❌ Texture & normal mapping
- ❌ Framebuffer export
- ❌ Depth of field
- ❌ Data oriented design refactor ?