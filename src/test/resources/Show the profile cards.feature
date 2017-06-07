Feature: Show the profile cards
  As an User
  I want to check the profile cards of each member
  So that I can get to know more about each member

  Scenario Outline: The profile cards has all the information
    Given Im into de website
    When the page finished load
    Then the website shows the profile cards of each member with "<photo>", "<name>", "<job>", "<workplace>","<linkedIn>","<facebook>" and "<instagram>"

  Examples:
    | photo     | name               | job                                      |workplace                      |linkedIn                                                      |facebook                                              |instagram                                                |
    | img/1.jpg | Ana Margarida Weber| Estudante do Mestrado de Eng.Informática |Instituto Politécnico de Leiria|https://www.linkedin.com/in/anamargaridaweber/                |https://www.facebook.com/margarida.weber.9            |https://www.instagram.com/margarida_weber/?hl=pt         |
    | img/2.jpg | João Fernandes     | Software Developer                       |Tecmic                         |https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/    |https://www.facebook.com/joao.fernandes.90281?fref=ts |https://www.instagram.com/joaofpfernandes/?hl=pt         |
#    | img/3.jpg | Mónica Francisco   | Estudante do Mestrado de Eng.Informática |Instituto Politécnico de Leiria|https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/ |https://www.facebook.com/monicasmfrancisco?fref=ts   |                                                         |
#
# Scenario: The profile card doesn't have photo
#  Given is not possible show <photo>t
#  When the user accesses the site
#  Then the system should show a "imagedefault.jpg"
#
# Scenario: The profile card doesn't have name
#  Given the profile card is not possible show <name>
#  When the user accesses the site
#  Then the system should say "An?nimo"
#
# Scenario: The profile card doesn't have job
#  Given the profile card is not possible show <job>
#  When the user accesses the site
#  Then the system should show "N?o ? possivel mostrar!"
#
# Scenario: The profile card doesn't have workplace
#  Given the profile card is not possible show <workplace>
#  When the user accesses the site
#  Then the system should show "N?o ? possivel mostrar!"
#
# Scenario: The profile card doesn't have LinkedIn
#  Given the speaker doesn't have <linkedIn>
#  When the user accesses the site
#  Then the system should disable the LinkedIn button with the color grey
#
# Scenario: The profile card doesn't have Facebook
#  Given the speaker doesn't have <facebook>
#  When the user accesses the site
#  Then the system should disable the Facebook button with the color grey
#
# Scenario: The profile card doesn't have Instagram
#  Given the speaker doesn't have <instagram>
#  When the user accesses the site
#  Then the system should disable the Instagram button with the color grey
#
#
# Scenario: The profile card doesn't have an associated email
#  Given the speaker doesn't have <email>
#  When the user accesses the site
#  Then the system should disable the email button with the color grey
