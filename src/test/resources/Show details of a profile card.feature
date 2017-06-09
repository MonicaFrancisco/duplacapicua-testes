Feature: Show details of a profile card

 As an User
 I want to check the details of a profile card
 So that I can get to know more about the speaker

  Background:
    Given Im into de landing page
    When the landing page finished load

  Scenario Outline: The  detail page has principal information
    And the user clicks on the profile card of "<member>"
    Then the system should show a page of  "<member>" with details like "<photo>","<name>" , "<workplace>" and "<job>"

    Examples:
      | member     |photo   | name                   | workplace                              |  job                                            |
      | Margarida |img/1.jpg|Ana Margarida Weber  | Instituto Politécnico de Leiria     |  Estudante do Mestrado de Engenharia Informática|
      | Joao      |img/2.jpg|João Fernandes       | Tecmic                              |Software Developer                                           |
      | Monica    |img/3.jpg|Mónica Francisco     | Instituto Politécnico de Leiria     |  Estudante do Mestrado de Engenharia Informática|
  Scenario Outline: The  detail page has work information
    And the user clicks on the profile card of "<member>"
    Then the system should show a page of  "<member>" with work details like "<workplace>" and "<job> "

    Examples:
      | member     | workplace                        |  job              |
      | Margarida  | Leirivida Clínica Médica, Leiria |Administrativa     |
      |Joao        | Tecmic                           |Software Developer |
      | Monica     | STREAM Consulting, Milagres      |Estagiária         |

  Scenario Outline: The  detail page has work information
    And the user clicks on the profile card of "<member>"
    Then the system should show a page of  "<member>" with education details like "<school>", "<course>" and "<date> "

    Examples:
      | member     | school                        |  course                                                |date|
      | Margarida  | Instituto Politécnico de Leiria |Mestrado em Engenharia Informática - Computação Móvel |2016 - Presente|
      | Joao       | Instituto Politécnico de Leiria |Mestrado em Engenharia Informática - Computação Móvel |2016 - Presente|
      | Monica     | Instituto Politécnico de Leiria |Mestrado em Engenharia Informática - Computação Móvel |2016 - Presente|

 Scenario Outline: The profile card has all the information
    Given the speaker had all the information
   When the user clicks on the profile card of "<member>"
    Then the system should show a page with "<member>" with skills details "<projects>", "<certifications>" and "<skills>"

   Examples:
 | member      | projects                                                                                                          | certifications                                                 | skills |
 | Margarida   | No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades |IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE) | HTML & CSS JavaScript & Jquery C# Java SQL Android Ruby on Rails Swift |
 | Joao        | Aplicação mobile para sócios treinadores e jogadores.| Swift Level 2 Cambridge Certification Authority|HTML CSS JavaScript PHP C# Java SQL Android Swift Objective-C|
 | Monica      | No âmbito do Mestrado Engenharia Informática Computação móvel, foi desenvolvida em Swift3 uma aplicação móvel para dispositivos de IOS, designada por Series Time, esta tem como objetivo descobrir novas séries e através das sugestões saber as séries que estão na moda, podendo seguir as suas favoritas.Com Series Time nunca mais irão perder os episódios das vossas séries favoritas, nem se esquecer do episódio onde ficaram no último dia!| IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE) | HTML CSS JavaScript PHP C# Java SQL Android Ruby on Rails Swift|


# Scenario: The details of profile card don't have photo
#  Given is not possible to show <photo>
#  When the user clicks on the profile card
#  Then the system should show a "imagedefault.jpg"
#
# Scenario: The profile card doesn't have a name
#  Given the profile card is not possible show <name>
#  When the user clicks on the profile card
#  Then the system should say "Anónimo"
#
# Scenario: The profile card doesn't have a job
#  Given is not possible to show <job>
#  When the user clicks on the profile card
#  Then the system should shows "Não é possivel mostrar!"
#
# Scenario: The profile card doesn't have a workplace
#  Given the profile card is not possible to show <workplace>
#  When the user accesses the site
#  Then the system should shows "Não é possivel mostrar!"
#
# Scenario: The details of profile card don't have working experience
#   Given is not possible to show <working experience>
#   When the user clicks on the profile card
#   Then the system shouldn´t show this section
#
# Scenario: The details of profile card don't have education
#   Given is not possible show <education>
#   When the user clicks on the profile card
#   Then the system shouldn´t show this section
#
#Scenario: The details of profile card don't have projects
#   Given is not possible to show <projects>
#   When the user clicks on the profile card
#   Then the system shouldn´t show this section
#
#Scenario: The details of profile card don't have certifications and awards
#   Given is not possible to show <certifications and awards>
#   When the user clicks on the profile card
#   Then the system shouldn´t show this section
#
#Scenario: The details of profile card don't have skills
#   Given is not possible show <skills>
#   When the user clicks on the profile card
#   Then the system shouldn´t show this section