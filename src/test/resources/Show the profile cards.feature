Feature: Show the profile cards
  As an User
  I want to check the profile cards of each member
  So that I can get to know more about each member

  Scenario Outline: The profile cards has all the information
    Given Im into de website
    When the page finished load
    Then the website shows the profile cards of each "<member>" with "<photo>", "<name>", "<job>", "<workplace>","<linkedIn>","<facebook>" and "<instagram>"

    Examples:
      | member     | photo     | name               | job                                      |workplace                      |linkedIn                                                      |facebook                                              |instagram                                                |
      | Margarida  | img/1.jpg | Ana Margarida Weber| Estudante do Mestrado de Eng.Informática |Instituto Politécnico de Leiria|https://www.linkedin.com/in/anamargaridaweber/                |https://www.facebook.com/margarida.weber.9            |https://www.instagram.com/margarida_weber/?hl=pt         |
      | Joao       | img/2.jpg | João Fernandes     | Software Developer                       |Tecmic                         |https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/    |https://www.facebook.com/joao.fernandes.90281         |https://www.instagram.com/joaofpfernandes/?hl=pt         |
      | Monica     | img/3.jpg | Mónica Francisco   | Estudante do Mestrado de Eng.Informática |Instituto Politécnico de Leiria|https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/  |https://www.facebook.com/monicasmfrancisco             |                                                         |



  Scenario Outline: : The profile card doesn´t have Instagram
    When the user clicks on the Instagram button of "<member>"
    Then the system must hace a disable "<instagram>" link with the color grey of "<member>"

    Examples:
      |member         |instagram   |
      |Monica         |  disabled  |

