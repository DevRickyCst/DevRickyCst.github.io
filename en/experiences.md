---
layout: index
title : experiences
lable : experiences
---
{% assign experiences = site.data.experiences.en.experiences %}
<div class="content div_experiences">
    <h2 class="section-title blue bold"> Experiences</h2>
    {% for experience in experiences reversed%}
        <div class="div_experience">
            <div class='experience_header'>
                <h4 class= "blue">{{ experience.title }}</h4>
                <b class="experience_company_info">at 
                    <a href="{{ experience.linkedin_url }}"> {{ experience.compagny }}</a>
                 ({{ experience.compagny_categ }})</b> 
                <div class= "experience_date">
                    {{ experience.from }} –>  {{ experience.to }}
                </div>
            </div>
            <div class="experience_detail">
                {% for detail in experience.details %}
                {% assign detail_h = detail[0] %}
                <ul>
                    <p>{{ detail_h }}</p>
                    {% for item in detail[1] %}
                        <li> {{ item  }}</li>
                    {% endfor %}
                </ul>
                {% endfor %}
            </div> 
        </div>
    {% endfor %}
</div>
