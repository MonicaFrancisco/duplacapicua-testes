
Feature: Access the social networks

  Background:
    Given the speaker has socialNetwork

  Scenario Outline: The profile card has Instagram
    When the user clicks on the Instagram button of "<member>"
    Then the system should show speaker "<instagram>" page of "<member>"

    Examples:

      |member         |instagram                                         |
      |Margarida      |https://www.instagram.com/margarida_weber/?hl=pt  |
      |Joao           |https://www.instagram.com/joaofpfernandes/?hl=pt  |
      |Monica         |                                                  |


  Scenario Outline: The profile card has Facebook
    When the user clicks on  the Facebook button of "<member>"
    Then the website should show speaker "<facebook>" page of "<member>"

    Examples:
      |member         |facebook                                               |
      |Margarida      |https://www.facebook.com/margarida.weber.9             |
      |Joao           |https://www.facebook.com/joao.fernandes.90281          |
      |Monica         |https://www.facebook.com/monicasmfrancisco             |


  Scenario Outline: The profile card has LinkedIn
    When the user clicks on the LinkedIn button of "<member>"
    Then the system should show profile card "<linkedin>" page of "<member>"

    Examples:
      |member         |linkedin                                                          |
      |Margarida      |https://www.linkedin.com/in/anamargaridaweber/                    |
      |Joao           |https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/        |
      |Monica         |https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/      |
