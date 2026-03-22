---
title: "3D Mesh Tools"
date: 2025-03-11
summary: "Some mesh tools I used a lot"
icon: /img/mesh_landmarking.jpg
---

Here I share three mesh tools that saved me a lot of time in the past. They are made with [Pyvista](https://pyvista.org/).

## mesh_landmarking  <a href="https://github.com/Kiord/mesh_landmarking" target="_blank">Github</a>
Allows you to place landmarks (*i.e.* 3D surface points) on a given mesh. These landmarks can be either be saved in absolute 3D coordinates or in barycentric coordinates (*i.e* by a triangle index and a parametrization of its vertices). 3D Landmarks are widely used to build semantic correspondences between shapes of a same class (*e.g* faces) which is a mandatory step for rigging, animation or statistical analysis.

<div class="media-center">
<video controls preload="metadata" class="project-video">
  <source src="https://github.com/user-attachments/assets/47768b1e-43e7-4677-80ce-36d77c0e704e" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>
<br>
<br>

## mesh_masking <a href="https://github.com/Kiord/mesh_masking" target="_blank">Github</a>
This tool lets you select a set of vertices in a mesh and save this selection (often called a mask). The selection can either be saved as in boolean or integer (index) format.

<div class="media-center">
<video controls preload="metadata" class="project-video">
  <source src="https://github.com/user-attachments/assets/2e65b226-f1aa-4573-b141-2d3aba7d1bce" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>
<br>
<br>

## mesh_align  <a href="https://github.com/Kiord/mesh_align" target="_blank">Github</a>
This tool basically implements *Iterative Closest Point* (ICP) algorithm which aims at aligning two geometries rigidly. ICP is an iterative algorithm that finds point matches between the source and target geometry and computes the optimal alignment for these matches. New matches are computed and the process continues until convergence or stoppage.

This version is designed to be quite robust since it can test many initial solutions (ICP is *very* sensitive to that) in a coarse phase. The outliers (in which ICP is also sensitive) are considered as a ratio of the total number of points, which I found to be the easiest way to handle them. 

<div class="media-center">
<video controls preload="metadata" class="project-video" >
  <source src="https://github.com/user-attachments/assets/8f5eb941-9a9d-435a-9025-8ff0b2971220" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>
<br>
<br>

