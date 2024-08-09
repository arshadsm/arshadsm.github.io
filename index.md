---
layout: default
title: Home
---
# Welcome to My Personal Website

## Professional Experience
<p><strong>Data Scientist</strong> | <em>Accenture (2019 - 2023)</em></p>
<ul>
  <li>Designed and developed Tableau dashboards to track key metrics and customer behavior. Employed R for statistical analysis, increasing click-through rates by 20%.</li>
  <li>Analyzed large datasets with Spark and Hive, improving data efficiency by 25%.</li>
  <li>Built predictive models using machine learning, achieving 95% accuracy.</li>
</ul>

<p><strong>Jr. Data Scientist</strong> | <em>BSNL (May 2018 - Apr 2019)</em></p>
<ul>
  <li>Conducted data analysis using Hive and SQL, compiling and retrieving data from Hadoop clusters and RedShift.</li>
  <li>Assisted in building data pipelines from various sources (AWS S3, RDS, Web APIs, MongoDB) into Hadoop HDFS.</li>
  <li>Developed Python scripts and created visualizations with Tableau and PowerBI, enhancing data preprocessing by 30%.</li>
</ul>

## Education
<p><strong>Master of Science in Business Analytics and Information Systems</strong> | <em>University of South Florida (2023 - 2024)</em></p>

## Skills
<ul>
{% for skill in site.skills %}
  <li>{{ skill | markdownify }}</li>
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

