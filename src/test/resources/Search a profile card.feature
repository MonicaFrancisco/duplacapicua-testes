Feature: Search a profile card

 As an User
 I want to search a speaker
 So that I can find the speaker quickly

 Scenario: Search by profile card that exists
  Given Im into the website
  When I search for some keyworks
  Then the website should adjust the Profile Cards content

 Scenario: Search by profile card that doesn't exist
  Given Im into the website
  When I search for some keyworks
  Then the system should say "Não foram encontrados resultados"