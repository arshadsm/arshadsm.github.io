---
layout: default
title: Home
---

# Welcome to My Personal Website

## About Me
I'm Mahammad Arshad Ayub Shaik, a data scientist on a mission to craft cutting-edge tech apps that transform ideas into reality.

## Professional Experience
- **Data Scientist** | *Accenture (2019 - 2023)*
  - Designed and developed Tableau dashboards to track key metrics and customer behavior. Employed R for statistical analysis, increasing click-through rates by 20%. Analyzed large datasets with Spark and Hive, improving data efficiency by 25%. Built predictive models using machine learning, achieving 95% accuracy.


## Education
- **Master of Science in Business Analytics and Information Systems** | *University of South Florida (2023 - 2024)*

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
