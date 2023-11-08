---
layout: index
title : competences
lable : competences
---
{% assign competences = site.data.competences.en.competences%}
<div class='content div_skills'>
    <h2 class="section-title blue bold">Skills</h2>
    <div class= 'div_skill row'>
        <div class="row">
            <div class="col-6">
                    <div class='skill_header'>
                        <img src="/assets/image/python.svg" alt="python_logo">
                        <b class='skill_title'>Python</b>
                    </div>
                    <div class="python_competences">
                    {% for competence in competences.competences_python %}
                        <div class="competence_header">
                        <b >{{ competence[0] }} :</b>
                        </div>
                        <p class="competence_value">
                        {% for item in competence[1].competences %}
                            {{ item }} -
                        {% endfor %}
                        </p>
                    {% endfor %}
                    </div>
                    <div class='div_langages'>
                        <b>Others langages :</b>
                        <div>
                        {% for langage in competences.autres_langage %}
                            {{ langage[0] | capitalize }}
                            <img src="/assets/image/{{ langage[0] }}.svg" alt="html_logo">
                        {% endfor %}
                        </div>
                    </div>    
            </div>
                <div class='div_knowledge col-6'>
                    <h5 class='skill_header'>Others knowledge</h5>
                    {% for competence in competences.autre_competences %}
                        <b class="competence_header">{{ competence[0] }} :</b>
                        <p class="competence_value">
                        {% for item in competence[1] %}
                            {{ item }} -
                        {% endfor %}
                        </p>
                    {% endfor %}
                </div>
            </div>
    </div>
</div>
-