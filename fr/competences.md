---
layout: index
title : competences
lable : competences
---
<div class='content div_skills'>
    <h2 class="section-title blue bold"> Compétences</h2>
    <div class= 'div_skill row'>
        <div class="row">
            <div class="col-6">
                    <div class='skill_header'>
                        <img src="/assets/image/python.svg" alt="python_logo">
                        <b class='skill_title'>Python</b>
                    </div>
                    <div class="python_competences">
                    {% for competences_id in site.data.competences.fr.competences.competences_python %}
                    {% assign experience = competences_id %}
                        <div class="competence_header">
                        <b >{{ experience[0] }} :</b>
                        </div>
                        <p class="competence_value">
                        {% for item in experience[1].competences %}
                            {{ item }} -
                        {% endfor %}
                        </p>
                    {% endfor %}
                    </div>
                    <div class='div_langages'>
                        <b>Autre langage :</b>
                        {% for langage in site.data.competences.fr.competences.autres_langage %}
                            <img src="/assets/image/{{ langage[0] }}.svg" alt="html_logo">
                        {% endfor %}
                    </div>    
            </div>
                <div class='div_knowledge col-6'>
                    <h5 class='skill_header'>Autres connaissances</h5>
                    {% for competences_id in site.data.competences.fr.competences.autre_competences %}
                    {% assign experience = competences_id %}
                        <b class="competence_header">{{ experience[0] }} :</b>
                        <p class="competence_value">
                        {% for item in experience[1] %}
                            {{ item }} -
                        {% endfor %}
                        </p>
                    {% endfor %}
                </div>
            </div>
    </div>
</div>
-