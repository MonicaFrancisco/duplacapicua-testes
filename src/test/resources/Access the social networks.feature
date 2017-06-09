
Feature: Access the social networks

  Scenario Outline: The profile card has Instagram
    Given the speaker has socialNetwork
    When the user clicks on the Instagram button of "<member>"
    Then the system should show speaker "<instagram>" page of "<member>"

    Examples:

      |member         |instagram                                         |
      |Margarida      |https://www.instagram.com/margarida_weber/?hl=pt  |
      |Joao           |https://www.instagram.com/joaofpfernandes/?hl=pt  |
      |Monica         |                                                  |


  Scenario Outline: The profile card has Facebook
    Given the speaker has socialNetwork
    When the user clicks on  the Facebook button of "<member>"
    Then the website should show speaker "<facebook>" page of "<member>"

    Examples:
      |member         |facebook                                               |
      |Margarida      |https://www.facebook.com/margarida.weber.9             |
      |Joao           |https://www.facebook.com/joao.fernandes.90281          |
      |Monica         |https://www.facebook.com/monicasmfrancisco             |


  Scenario Outline: The profile card has LinkedIn
    Given the speaker has socialNetwork
    When the user clicks on the LinkedIn button of "<member>"
    Then the system should show profile card "<linkedin>" page of "<member>"

    Examples:
      |member         |linkedin                                                          |
      |Margarida      |https://www.linkedin.com/in/anamargaridaweber/                    |
      |Joao           |https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/        |
      |Monica         |https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/      |

#
# Scenario: The profile card has Facebook
#  Given the speaker has <facebook>
#  When the user clicks on the Facebook button
#  Then the system should show speaker Facebook page
#
# Scenario: The profile card has LinkedIn
#  Given the speaker has <linkedIn>
#  When the user clicks on the LinkedIn button
#  Then the system should show speaker LinkedIn page
#
# Scenario: The profile card doesn´t have Instagram
#  Given the speaker doesn´t have <instagram>
#  When the user clicks on the Instagram button
#  Then the system shouldn´t do any action
#
#Scenario: The profile card doesn´t have Facebook
#  Given the speaker doesn´t have <facebook>
#  When the user click on the Facebook button
#  Then the system shouldn´t do any action
#
#Scenario: The profile card doesn´t have LinkedIn
#  Given the speaker doesn´t have <linkedIn>
#  When the user click on LinkedIn button
#  Then the system shouldn´t do any action
#
#
#
# | photo                         | name               | job                |workplace                      |linkedIn                                                      |facebook                                              |instagram                                                |email
# | Ana Margarida Weber's photo   | Ana Margarida Weber|Estudante do MEI-CM |Instituto Politécnico de Leiria|https://www.linkedin.com/in/anamargaridaweber/                |https://www.facebook.com/margarida.weber.9            |https://www.instagram.com/margarida_weber/?hl=pt         |anamargaridaweber@gmail.com
# | João Fernandes's photo        | João Fernandes     |Programador         |Tecmic                         |https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/    |https://www.facebook.com/joao.fernandes.90281?fref=ts |https://www.instagram.com/joaofpfernandes/?hl=pt         |fernandes-jota@hotmail.com
# | Mónica Francisco's photo      | Mónica Francisco   |Estudante do MEI-CM |Instituto Politécnico de Leiria|https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/  |https://www.facebook.com/monicasmfrancisco?fref=ts    |                                                         |monica.francisco@hotmail.com
