---
layout: index
title : experiences
lable : experiences
---
<div class="content div_experiences">
    <h2 class="section-title blue bold"> Expériences</h2>
    {% for experience_id in site.data.experiences.fr.experiences reversed%}
    {% assign experience = experience_id %}
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