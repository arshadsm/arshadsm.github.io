---
layout: default
title: Projects
---

# Projects

<ul>
{% for project in site.projects %}
  <li>
    <strong>{{ project.title }}</strong> - {{ project.description }}
    <a href="{{ project.link }}">View Project</a>
  </li>
{% endfor %}
</ul>
