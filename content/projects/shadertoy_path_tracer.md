---
title: "GLSL Path Tracer"
date: 2020-01-26
summary: "A small path tracer written in GLSL and hosted on ShaderToy"
icon: /img/veach.jpg
---

A small path tracer I made in GLSL, hosted on ShaderToy: <a href="https://www.shadertoy.com/view/wlyGWc" target="_blank">Link</a>

- Multiple Importance Sampling for direct lighting
- Sphere and Triangle Primitives (Emissive as well)
- Veach's scene
- Phong BSDF
- First Person Camera (camera parameters are stored in bottom left pixels !)

Render:
![image](/img/veach.jpg)
*Balance heuristic* weights visualization (<span style="color:red">BSDF sampling</span>, <span style="color:green">surface sampling</span>):
![image](/img/veach_mis.jpg)
Another scene:
![image](/img/cornell.jpg)
