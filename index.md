---
layout: default
title: Home
---

<img src="{{ site.profile_picture }}" alt="Profile picture" style="width:150px;height:150px;border-radius:50%;">

# Welcome to My Personal Website

## About Me
I am Mahammad Arshad Ayub Shaik, a data scientist with a passion for building tech apps.

## Professional Experience
- **Data Scientist at Accenture** (2019 - 2023)
  - Developed machine learning models to improve business processes.

## Education
- **Master of Science in Business Analytics and Information Systems** (2023 - 2024)
  - University of South Florida

## Skills
<ul>
{% for skill in site.skills %}
  <li>{{ skill }}</li>
{% endfor %}
</ul>

## Projects
<ul>
{% for project in site.projects %}
  <li>
    <strong>{{ project.title }}</strong> - {{ project.description }} 
    <a href="{{ project.link }}">View Project</a>
  </li>
{% endfor %}
</ul>

## Connect with Me
<ul>
  <li><a href="{{ site.linkedin }}" target="_blank">LinkedIn</a></li>
  <li><a href="{{ site.instagram }}" target="_blank">Instagram</a></li>
</ul>
