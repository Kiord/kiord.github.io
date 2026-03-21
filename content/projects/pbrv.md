---
title: "pbrv"
date: 2026-01-15
summary: "A small PBR 3D Viewer in CLI powered by ModernGL"
icon: https://raw.githubusercontent.com/Kiord/pbrv/main/src/pbrv/resources/misc/screenshot3.jpg
---

**P**hysically **B**ased **R**endering **V**iewer (pbrv) is a small PBR 3D Viewer in CLI powered by ModernGL: <a href="https://github.com/Kiord/pbrv" target="_blank">Link</a>

I wanted to basically go through [learnopengl.com](/https://learnopengl.com/) and a little beyond with that Python PBR viewer.


### Features/Specs
- Interactive window
    - Trackball camera (with path indepedance)
    - Lclick: rotate
    - Rclick: pan
    - Dblclick: focus
    - Ctrl+Lclick: rotate object
    - Shift+Lclick: rotate environment
    - Alt+Lclick: rotate directional light
- Deferred Shading

- Metal/roughness workflow
- Normal mapping (tangent space)
- SSAO (if no AO map)
- Image based lighting
    - Cubemaps
    - Equirectangular panoramas (converted to cubemap)
    - Cubemap prefiltering
        - Irradiance (Cosine)
        - Specular (GGX)
- 1 Directional light
- 1 Point light
- Procedural Environment
    - Sun (sunrise/dusk)
    - Based on directional light direction
    - Stars at night

### Examples
![image](https://raw.githubusercontent.com/Kiord/pbrv/main/src/pbrv/resources/misc/screenshot1.jpg)
![image](https://raw.githubusercontent.com/Kiord/pbrv/main/src/pbrv/resources/misc/screenshot2.jpg)
![image](https://raw.githubusercontent.com/Kiord/pbrv/main/src/pbrv/resources/misc/screenshot3.jpg)
![image](https://raw.githubusercontent.com/Kiord/pbrv/main/src/pbrv/resources/misc/screenshot4.jpg)
