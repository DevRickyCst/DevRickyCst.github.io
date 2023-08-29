---
layout: index
title : experiences
lable : experiences
---
<div class="content div_experiences">
    <h2 class="section-title blue bold"> Experiences</h2>
    {% for experience_id in site.data.experiences reversed %}
    {% assign experience = experience_id[1] %}
        <div>
            <div class='experience_header'>
                <h4 class= "blue">{{ experience.title }}</h4> 
                <div class= "experience_information">
                    <b>{{ experience.compagny }}</b>, {{ experience.compagny_categ }}
                    <p>{{ experience.from }} –>  {{ experience.to }}</p>
                </div>
            </div>
            <div class="experience_detail">
                <ul>
                    {{ experience.detail }}
                </ul>
            </div> 
        </div>
    {% endfor %}
</div>