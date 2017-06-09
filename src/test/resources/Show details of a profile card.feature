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
   When the user clicks on the profile card of "<member>"
    Then the system should show a page with "<member>" with skills details "<projects>", "<certifications>" and "<skills>"

   Examples:
 | member      | projects                                                                                                          | certifications                                                 | skills |
 | Margarida   | No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades. |IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE) | HTML & CSS  Javascript & jQuery PHP Ruby on Rails C# Android SQL Swift|
 | Joao        | Aplicação mobile para sócios treinadores e jogadores.| Swift Level 2 - Cambridge Certification Authority|HTML & CSS  Javascript PHP C# Java SQL Android Swift|
 | Monica      | No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades.| IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE) |HTML & CSS  Javascript & jQuery C# Java SQL Android Ruby on Rails Swift|
