$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Access the social networks.feature");
formatter.feature({
  "line": 2,
  "name": "Access the social networks",
  "description": "",
  "id": "access-the-social-networks",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "The profile card has Instagram",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the Instagram button of \"\u003cmember\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the system should show speaker \"\u003cinstagram\u003e\" page of \"\u003cmember\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram;",
  "rows": [
    {
      "cells": [
        "member",
        "instagram"
      ],
      "line": 11,
      "id": "access-the-social-networks;the-profile-card-has-instagram;;1"
    },
    {
      "cells": [
        "Margarida",
        "https://www.instagram.com/margarida_weber/?hl\u003dpt"
      ],
      "line": 12,
      "id": "access-the-social-networks;the-profile-card-has-instagram;;2"
    },
    {
      "cells": [
        "Joao",
        "https://www.instagram.com/joaofpfernandes/?hl\u003dpt"
      ],
      "line": 13,
      "id": "access-the-social-networks;the-profile-card-has-instagram;;3"
    },
    {
      "cells": [
        "Monica",
        ""
      ],
      "line": 14,
      "id": "access-the-social-networks;the-profile-card-has-instagram;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "The profile card has Instagram",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the Instagram button of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the system should show speaker \"https://www.instagram.com/margarida_weber/?hl\u003dpt\" page of \"Margarida\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 7180116283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 44
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheInstagramButtonOf(String)"
});
formatter.result({
  "duration": 3743220420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.instagram.com/margarida_weber/?hl\u003dpt",
      "offset": 32
    },
    {
      "val": "Margarida",
      "offset": 91
    }
  ],
  "location": "StepdefsSocial.theSystemShouldShowSpeakerPageOf(String,String)"
});
formatter.result({
  "duration": 722714118,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "The profile card has Instagram",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the Instagram button of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the system should show speaker \"https://www.instagram.com/joaofpfernandes/?hl\u003dpt\" page of \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 197240190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 44
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheInstagramButtonOf(String)"
});
formatter.result({
  "duration": 457220220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.instagram.com/joaofpfernandes/?hl\u003dpt",
      "offset": 32
    },
    {
      "val": "Joao",
      "offset": 91
    }
  ],
  "location": "StepdefsSocial.theSystemShouldShowSpeakerPageOf(String,String)"
});
formatter.result({
  "duration": 26857359,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "The profile card has Instagram",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the Instagram button of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the system should show speaker \"\" page of \"Monica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 187702460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 44
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheInstagramButtonOf(String)"
});
formatter.result({
  "duration": 321144771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "Monica",
      "offset": 43
    }
  ],
  "location": "StepdefsSocial.theSystemShouldShowSpeakerPageOf(String,String)"
});
formatter.result({
  "duration": 89149,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "The profile card has Facebook",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user clicks on  the Facebook button of \"\u003cmember\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the website should show speaker \"\u003cfacebook\u003e\" page of \"\u003cmember\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook;",
  "rows": [
    {
      "cells": [
        "member",
        "facebook"
      ],
      "line": 23,
      "id": "access-the-social-networks;the-profile-card-has-facebook;;1"
    },
    {
      "cells": [
        "Margarida",
        "https://www.facebook.com/margarida.weber.9"
      ],
      "line": 24,
      "id": "access-the-social-networks;the-profile-card-has-facebook;;2"
    },
    {
      "cells": [
        "Joao",
        "https://www.facebook.com/joao.fernandes.90281"
      ],
      "line": 25,
      "id": "access-the-social-networks;the-profile-card-has-facebook;;3"
    },
    {
      "cells": [
        "Monica",
        "https://www.facebook.com/monicasmfrancisco"
      ],
      "line": 26,
      "id": "access-the-social-networks;the-profile-card-has-facebook;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "The profile card has Facebook",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user clicks on  the Facebook button of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the website should show speaker \"https://www.facebook.com/margarida.weber.9\" page of \"Margarida\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 220813217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 44
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheFacebookButtonOf(String)"
});
formatter.result({
  "duration": 1388303972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/margarida.weber.9",
      "offset": 33
    },
    {
      "val": "Margarida",
      "offset": 86
    }
  ],
  "location": "StepdefsSocial.theWebsiteShouldShowSpeakerPageOf(String,String)"
});
formatter.result({
  "duration": 5873300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "The profile card has Facebook",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user clicks on  the Facebook button of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the website should show speaker \"https://www.facebook.com/joao.fernandes.90281\" page of \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 20411885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 44
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheFacebookButtonOf(String)"
});
formatter.result({
  "duration": 543229172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/joao.fernandes.90281",
      "offset": 33
    },
    {
      "val": "Joao",
      "offset": 89
    }
  ],
  "location": "StepdefsSocial.theWebsiteShouldShowSpeakerPageOf(String,String)"
});
formatter.result({
  "duration": 3243808,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "The profile card has Facebook",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user clicks on  the Facebook button of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the website should show speaker \"https://www.facebook.com/monicasmfrancisco\" page of \"Monica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 26361772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 44
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheFacebookButtonOf(String)"
});
formatter.result({
  "duration": 514002475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/monicasmfrancisco",
      "offset": 33
    },
    {
      "val": "Monica",
      "offset": 86
    }
  ],
  "location": "StepdefsSocial.theWebsiteShouldShowSpeakerPageOf(String,String)"
});
formatter.result({
  "duration": 3816389,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "The profile card has LinkedIn",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-linkedin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the user clicks on the LinkedIn button of \"\u003cmember\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the system should show profile card \"\u003clinkedin\u003e\" page of \"\u003cmember\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-linkedin;",
  "rows": [
    {
      "cells": [
        "member",
        "linkedin"
      ],
      "line": 35,
      "id": "access-the-social-networks;the-profile-card-has-linkedin;;1"
    },
    {
      "cells": [
        "Margarida",
        "https://www.linkedin.com/in/anamargaridaweber/"
      ],
      "line": 36,
      "id": "access-the-social-networks;the-profile-card-has-linkedin;;2"
    },
    {
      "cells": [
        "Joao",
        "https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/"
      ],
      "line": 37,
      "id": "access-the-social-networks;the-profile-card-has-linkedin;;3"
    },
    {
      "cells": [
        "Monica",
        "https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/"
      ],
      "line": 38,
      "id": "access-the-social-networks;the-profile-card-has-linkedin;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "The profile card has LinkedIn",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-linkedin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the user clicks on the LinkedIn button of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the system should show profile card \"https://www.linkedin.com/in/anamargaridaweber/\" page of \"Margarida\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 220852119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 43
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheLinkedInButtonOf(String)"
});
formatter.result({
  "duration": 1070308593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.linkedin.com/in/anamargaridaweber/",
      "offset": 37
    },
    {
      "val": "Margarida",
      "offset": 94
    }
  ],
  "location": "StepdefsSocial.theSystemShouldShowProfileCardPageOf(String,String)"
});
formatter.result({
  "duration": 3777082,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "The profile card has LinkedIn",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-linkedin;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the user clicks on the LinkedIn button of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the system should show profile card \"https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/\" page of \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 27282438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 43
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheLinkedInButtonOf(String)"
});
formatter.result({
  "duration": 919258134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/",
      "offset": 37
    },
    {
      "val": "Joao",
      "offset": 106
    }
  ],
  "location": "StepdefsSocial.theSystemShouldShowProfileCardPageOf(String,String)"
});
formatter.result({
  "duration": 2397299,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "The profile card has LinkedIn",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-linkedin;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the user clicks on the LinkedIn button of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the system should show profile card \"https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/\" page of \"Monica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 12861773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 43
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheLinkedInButtonOf(String)"
});
formatter.result({
  "duration": 927081366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/",
      "offset": 37
    },
    {
      "val": "Monica",
      "offset": 108
    }
  ],
  "location": "StepdefsSocial.theSystemShouldShowProfileCardPageOf(String,String)"
});
formatter.result({
  "duration": 4932373,
  "status": "passed"
});
formatter.uri("Search a profile card.feature");
formatter.feature({
  "line": 1,
  "name": "Search a profile card",
  "description": "\r\nAs an User\r\nI want to search a speaker\r\nSo that I can find the speaker quickly",
  "id": "search-a-profile-card",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Search by profile card that exists",
  "description": "",
  "id": "search-a-profile-card;search-by-profile-card-that-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Im into the website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for some keyworks",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the website should adjust the Profile Cards content",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSearchProfileCard.imIntoTheWebsite()"
});
formatter.result({
  "duration": 473172222,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsSearchProfileCard.iSearchForSomeKeyworks()"
});
formatter.result({
  "duration": 2311254091,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsSearchProfileCard.theWebsiteShouldAdjustTheProfileCardsContent()"
});
formatter.result({
  "duration": 210745862,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search by profile card that doesn\u0027t exist",
  "description": "",
  "id": "search-a-profile-card;search-by-profile-card-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Im into the website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I search for some keyworks",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the system should say \"Não foram encontrados resultados\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsSearchProfileCard.imIntoTheWebsite()"
});
formatter.result({
  "duration": 27609453,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsSearchProfileCard.iSearchForSomeKeyworks()"
});
formatter.result({
  "duration": 327085337,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Show details of a profile card.feature");
formatter.feature({
  "line": 1,
  "name": "Show details of a profile card",
  "description": "\r\nAs an User\r\nI want to check the details of a profile card\r\nSo that I can get to know more about the speaker",
  "id": "show-details-of-a-profile-card",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "The  detail page has principal information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user clicks on the profile card of \"\u003cmember\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the system should show a page of  \"\u003cmember\u003e\" with details like \"\u003cphoto\u003e\",\"\u003cname\u003e\" , \"\u003cworkplace\u003e\" and \"\u003cjob\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information;",
  "rows": [
    {
      "cells": [
        "member",
        "photo",
        "name",
        "workplace",
        "job"
      ],
      "line": 16,
      "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information;;1"
    },
    {
      "cells": [
        "Margarida",
        "img/1.jpg",
        "Ana Margarida Weber",
        "Instituto Politécnico de Leiria",
        "Estudante do Mestrado de Engenharia Informática"
      ],
      "line": 17,
      "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information;;2"
    },
    {
      "cells": [
        "Joao",
        "img/2.jpg",
        "João Fernandes",
        "Tecmic",
        "Software Developer"
      ],
      "line": 18,
      "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information;;3"
    },
    {
      "cells": [
        "Monica",
        "img/3.jpg",
        "Mónica Francisco",
        "Instituto Politécnico de Leiria",
        "Estudante do Mestrado de Engenharia Informática"
      ],
      "line": 19,
      "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 480905089,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 28771,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "The  detail page has principal information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user clicks on the profile card of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the system should show a page of  \"Margarida\" with details like \"img/1.jpg\",\"Ana Margarida Weber\" , \"Instituto Politécnico de Leiria\" and \"Estudante do Mestrado de Engenharia Informática\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 2430718647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 35
    },
    {
      "val": "img/1.jpg",
      "offset": 65
    },
    {
      "val": "Ana Margarida Weber",
      "offset": 77
    },
    {
      "val": "Instituto Politécnico de Leiria",
      "offset": 101
    },
    {
      "val": "Estudante do Mestrado de Engenharia Informática",
      "offset": 139
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithDetailsLikeAnd(String,String,String,String,String)"
});
formatter.result({
  "duration": 1110631508,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 24998197,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 25529,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "The  detail page has principal information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user clicks on the profile card of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the system should show a page of  \"Joao\" with details like \"img/2.jpg\",\"João Fernandes\" , \"Tecmic\" and \"Software Developer\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 645142311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 35
    },
    {
      "val": "img/2.jpg",
      "offset": 60
    },
    {
      "val": "João Fernandes",
      "offset": 72
    },
    {
      "val": "Tecmic",
      "offset": 91
    },
    {
      "val": "Software Developer",
      "offset": 104
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithDetailsLikeAnd(String,String,String,String,String)"
});
formatter.result({
  "duration": 487878164,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 20938269,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 26744,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "The  detail page has principal information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-principal-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "the user clicks on the profile card of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the system should show a page of  \"Monica\" with details like \"img/3.jpg\",\"Mónica Francisco\" , \"Instituto Politécnico de Leiria\" and \"Estudante do Mestrado de Engenharia Informática\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 517168886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 35
    },
    {
      "val": "img/3.jpg",
      "offset": 62
    },
    {
      "val": "Mónica Francisco",
      "offset": 74
    },
    {
      "val": "Instituto Politécnico de Leiria",
      "offset": 95
    },
    {
      "val": "Estudante do Mestrado de Engenharia Informática",
      "offset": 133
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithDetailsLikeAnd(String,String,String,String,String)"
});
formatter.result({
  "duration": 1377414014,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "The  detail page has work information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the user clicks on the profile card of \"\u003cmember\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the system should show a page of  \"\u003cmember\u003e\" with work details like \"\u003cworkplace\u003e\" and \"\u003cjob\u003e \"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;",
  "rows": [
    {
      "cells": [
        "member",
        "workplace",
        "job"
      ],
      "line": 25,
      "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;1"
    },
    {
      "cells": [
        "Margarida",
        "Leirivida Clínica Médica, Leiria",
        "Administrativa"
      ],
      "line": 26,
      "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;2"
    },
    {
      "cells": [
        "Joao",
        "Tecmic",
        "Software Developer"
      ],
      "line": 27,
      "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;3"
    },
    {
      "cells": [
        "Monica",
        "STREAM Consulting, Milagres",
        "Estagiária"
      ],
      "line": 28,
      "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 13896712,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 24313,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "The  detail page has work information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the user clicks on the profile card of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the system should show a page of  \"Margarida\" with work details like \"Leirivida Clínica Médica, Leiria\" and \"Administrativa \"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 623520430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 35
    },
    {
      "val": "Leirivida Clínica Médica, Leiria",
      "offset": 70
    },
    {
      "val": "Administrativa ",
      "offset": 109
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithWorkDetailsLikeAnd(String,String,String)"
});
formatter.result({
  "duration": 559015439,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 14915848,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 24718,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "The  detail page has work information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the user clicks on the profile card of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the system should show a page of  \"Joao\" with work details like \"Tecmic\" and \"Software Developer \"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 380763180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 35
    },
    {
      "val": "Tecmic",
      "offset": 65
    },
    {
      "val": "Software Developer ",
      "offset": 78
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithWorkDetailsLikeAnd(String,String,String)"
});
formatter.result({
  "duration": 372313879,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 13556730,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 25934,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "The  detail page has work information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the user clicks on the profile card of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the system should show a page of  \"Monica\" with work details like \"STREAM Consulting, Milagres\" and \"Estagiária \"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 457491314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 35
    },
    {
      "val": "STREAM Consulting, Milagres",
      "offset": 67
    },
    {
      "val": "Estagiária ",
      "offset": 101
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithWorkDetailsLikeAnd(String,String,String)"
});
formatter.result({
  "duration": 375864847,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "The  detail page has work information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the user clicks on the profile card of \"\u003cmember\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the system should show a page of  \"\u003cmember\u003e\" with education details like \"\u003cschool\u003e\", \"\u003ccourse\u003e\" and \"\u003cdate\u003e \"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;",
  "rows": [
    {
      "cells": [
        "member",
        "school",
        "course",
        "date"
      ],
      "line": 35,
      "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;1"
    },
    {
      "cells": [
        "Margarida",
        "Instituto Politécnico de Leiria",
        "Mestrado em Engenharia Informática - Computação Móvel",
        "2016 - Presente"
      ],
      "line": 36,
      "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;2"
    },
    {
      "cells": [
        "Joao",
        "Instituto Politécnico de Leiria",
        "Mestrado em Engenharia Informática - Computação Móvel",
        "2016 - Presente"
      ],
      "line": 37,
      "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;3"
    },
    {
      "cells": [
        "Monica",
        "Instituto Politécnico de Leiria",
        "Mestrado em Engenharia Informática - Computação Móvel",
        "2016 - Presente"
      ],
      "line": 38,
      "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 22769471,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 28366,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "The  detail page has work information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the user clicks on the profile card of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the system should show a page of  \"Margarida\" with education details like \"Instituto Politécnico de Leiria\", \"Mestrado em Engenharia Informática - Computação Móvel\" and \"2016 - Presente \"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 314486960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 35
    },
    {
      "val": "Instituto Politécnico de Leiria",
      "offset": 75
    },
    {
      "val": "Mestrado em Engenharia Informática - Computação Móvel",
      "offset": 110
    },
    {
      "val": "2016 - Presente ",
      "offset": 170
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithEducationDetailsLikeAnd(String,String,String,String)"
});
formatter.result({
  "duration": 401107393,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 16237684,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 22287,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "The  detail page has work information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the user clicks on the profile card of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the system should show a page of  \"Joao\" with education details like \"Instituto Politécnico de Leiria\", \"Mestrado em Engenharia Informática - Computação Móvel\" and \"2016 - Presente \"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 346081779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 35
    },
    {
      "val": "Instituto Politécnico de Leiria",
      "offset": 70
    },
    {
      "val": "Mestrado em Engenharia Informática - Computação Móvel",
      "offset": 105
    },
    {
      "val": "2016 - Presente ",
      "offset": 165
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithEducationDetailsLikeAnd(String,String,String,String)"
});
formatter.result({
  "duration": 412519683,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 118613586,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 27555,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "The  detail page has work information",
  "description": "",
  "id": "show-details-of-a-profile-card;the--detail-page-has-work-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the user clicks on the profile card of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the system should show a page of  \"Monica\" with education details like \"Instituto Politécnico de Leiria\", \"Mestrado em Engenharia Informática - Computação Móvel\" and \"2016 - Presente \"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "duration": 335569488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 35
    },
    {
      "val": "Instituto Politécnico de Leiria",
      "offset": 72
    },
    {
      "val": "Mestrado em Engenharia Informática - Computação Móvel",
      "offset": 107
    },
    {
      "val": "2016 - Presente ",
      "offset": 167
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageOfWithEducationDetailsLikeAnd(String,String,String,String)"
});
formatter.result({
  "duration": 427185914,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "The profile card has all the information",
  "description": "",
  "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the speaker had all the information",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user clicks on the profile card of \"\u003cmember\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the system should show a page with \"\u003cmember\u003e\" with skills details \"\u003cprojects\u003e\", \"\u003ccertifications\u003e\" and \"\u003cskills\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;",
  "rows": [
    {
      "cells": [
        "member",
        "projects",
        "certifications",
        "skills"
      ],
      "line": 46,
      "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;1"
    },
    {
      "cells": [
        "Margarida",
        "No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades",
        "IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)",
        "HTML \u0026 CSS JavaScript \u0026 Jquery C# Java SQL Android Ruby on Rails Swift"
      ],
      "line": 47,
      "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;2"
    },
    {
      "cells": [
        "Joao",
        "Aplicação mobile para sócios treinadores e jogadores.",
        "Swift Level 2 Cambridge Certification Authority",
        "HTML CSS JavaScript PHP C# Java SQL Android Swift Objective-C"
      ],
      "line": 48,
      "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;3"
    },
    {
      "cells": [
        "Monica",
        "No âmbito do Mestrado Engenharia Informática Computação móvel, foi desenvolvida em Swift3 uma aplicação móvel para dispositivos de IOS, designada por Series Time, esta tem como objetivo descobrir novas séries e através das sugestões saber as séries que estão na moda, podendo seguir as suas favoritas.Com Series Time nunca mais irão perder os episódios das vossas séries favoritas, nem se esquecer do episódio onde ficaram no último dia!",
        "IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)",
        "HTML CSS JavaScript PHP C# Java SQL Android Ruby on Rails Swift"
      ],
      "line": 49,
      "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 43620212,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 29987,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "The profile card has all the information",
  "description": "",
  "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the speaker had all the information",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user clicks on the profile card of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the system should show a page with \"Margarida\" with skills details \"No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades\", \"IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)\" and \"HTML \u0026 CSS JavaScript \u0026 Jquery C# Java SQL Android Ruby on Rails Swift\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 36
    },
    {
      "val": "No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades",
      "offset": 68
    },
    {
      "val": "IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)",
      "offset": 557
    },
    {
      "val": "HTML \u0026 CSS JavaScript \u0026 Jquery C# Java SQL Android Ruby on Rails Swift",
      "offset": 637
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageWithWithSkillsDetailsAnd(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 9979423,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 22692,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "The profile card has all the information",
  "description": "",
  "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the speaker had all the information",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user clicks on the profile card of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the system should show a page with \"Joao\" with skills details \"Aplicação mobile para sócios treinadores e jogadores.\", \"Swift Level 2 Cambridge Certification Authority\" and \"HTML CSS JavaScript PHP C# Java SQL Android Swift Objective-C\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 36
    },
    {
      "val": "Aplicação mobile para sócios treinadores e jogadores.",
      "offset": 63
    },
    {
      "val": "Swift Level 2 Cambridge Certification Authority",
      "offset": 120
    },
    {
      "val": "HTML CSS JavaScript PHP C# Java SQL Android Swift Objective-C",
      "offset": 174
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageWithWithSkillsDetailsAnd(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Im into de landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the landing page finished load",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsDetailsProfile.imIntoDeLandingPage()"
});
formatter.result({
  "duration": 14275190,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 25124,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "The profile card has all the information",
  "description": "",
  "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the speaker had all the information",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user clicks on the profile card of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the system should show a page with \"Monica\" with skills details \"No âmbito do Mestrado Engenharia Informática Computação móvel, foi desenvolvida em Swift3 uma aplicação móvel para dispositivos de IOS, designada por Series Time, esta tem como objetivo descobrir novas séries e através das sugestões saber as séries que estão na moda, podendo seguir as suas favoritas.Com Series Time nunca mais irão perder os episódios das vossas séries favoritas, nem se esquecer do episódio onde ficaram no último dia!\", \"IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)\" and \"HTML CSS JavaScript PHP C# Java SQL Android Ruby on Rails Swift\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 40
    }
  ],
  "location": "StepdefsDetailsProfile.theUserClicksOnTheProfileCardOf(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 36
    },
    {
      "val": "No âmbito do Mestrado Engenharia Informática Computação móvel, foi desenvolvida em Swift3 uma aplicação móvel para dispositivos de IOS, designada por Series Time, esta tem como objetivo descobrir novas séries e através das sugestões saber as séries que estão na moda, podendo seguir as suas favoritas.Com Series Time nunca mais irão perder os episódios das vossas séries favoritas, nem se esquecer do episódio onde ficaram no último dia!",
      "offset": 65
    },
    {
      "val": "IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)",
      "offset": 506
    },
    {
      "val": "HTML CSS JavaScript PHP C# Java SQL Android Ruby on Rails Swift",
      "offset": 586
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageWithWithSkillsDetailsAnd(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Show the profile cards.feature");
formatter.feature({
  "line": 1,
  "name": "Show the profile cards",
  "description": "As an User\r\nI want to check the profile cards of each member\r\nSo that I can get to know more about each member",
  "id": "show-the-profile-cards",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "The profile cards has all the information",
  "description": "",
  "id": "show-the-profile-cards;the-profile-cards-has-all-the-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Im into de website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finished load",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the website shows the profile cards of each \"\u003cmember\u003e\" with \"\u003cphoto\u003e\", \"\u003cname\u003e\", \"\u003cjob\u003e\", \"\u003cworkplace\u003e\",\"\u003clinkedIn\u003e\",\"\u003cfacebook\u003e\" and \"\u003cinstagram\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;",
  "rows": [
    {
      "cells": [
        "member",
        "photo",
        "name",
        "job",
        "workplace",
        "linkedIn",
        "facebook",
        "instagram"
      ],
      "line": 12,
      "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;;1"
    },
    {
      "cells": [
        "Margarida",
        "img/1.jpg",
        "Ana Margarida Weber",
        "Estudante do Mestrado de Eng.Informática",
        "Instituto Politécnico de Leiria",
        "https://www.linkedin.com/in/anamargaridaweber/",
        "https://www.facebook.com/margarida.weber.9",
        "https://www.instagram.com/margarida_weber/?hl\u003dpt"
      ],
      "line": 13,
      "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;;2"
    },
    {
      "cells": [
        "Joao",
        "img/2.jpg",
        "João Fernandes",
        "Software Developer",
        "Tecmic",
        "https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/",
        "https://www.facebook.com/joao.fernandes.90281",
        "https://www.instagram.com/joaofpfernandes/?hl\u003dpt"
      ],
      "line": 14,
      "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;;3"
    },
    {
      "cells": [
        "Monica",
        "img/3.jpg",
        "Mónica Francisco",
        "Estudante do Mestrado de Eng.Informática",
        "Instituto Politécnico de Leiria",
        "https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/",
        "https://www.facebook.com/monicasmfrancisco",
        ""
      ],
      "line": 15,
      "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "The profile cards has all the information",
  "description": "",
  "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Im into de website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finished load",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the website shows the profile cards of each \"Margarida\" with \"img/1.jpg\", \"Ana Margarida Weber\", \"Estudante do Mestrado de Eng.Informática\", \"Instituto Politécnico de Leiria\",\"https://www.linkedin.com/in/anamargaridaweber/\",\"https://www.facebook.com/margarida.weber.9\" and \"https://www.instagram.com/margarida_weber/?hl\u003dpt\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsShowProfileCards.imIntoDeWebsite()"
});
formatter.result({
  "duration": 413638099,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsShowProfileCards.thePageFinishedLoad()"
});
formatter.result({
  "duration": 7804997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 45
    },
    {
      "val": "img/1.jpg",
      "offset": 62
    },
    {
      "val": "Ana Margarida Weber",
      "offset": 75
    },
    {
      "val": "Estudante do Mestrado de Eng.Informática",
      "offset": 98
    },
    {
      "val": "Instituto Politécnico de Leiria",
      "offset": 142
    },
    {
      "val": "https://www.linkedin.com/in/anamargaridaweber/",
      "offset": 176
    },
    {
      "val": "https://www.facebook.com/margarida.weber.9",
      "offset": 225
    },
    {
      "val": "https://www.instagram.com/margarida_weber/?hl\u003dpt",
      "offset": 274
    }
  ],
  "location": "StepdefsShowProfileCards.theWebsiteShowsTheProfileCardsOfEachMemberWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1995405179,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "The profile cards has all the information",
  "description": "",
  "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Im into de website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finished load",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the website shows the profile cards of each \"Joao\" with \"img/2.jpg\", \"João Fernandes\", \"Software Developer\", \"Tecmic\",\"https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/\",\"https://www.facebook.com/joao.fernandes.90281\" and \"https://www.instagram.com/joaofpfernandes/?hl\u003dpt\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsShowProfileCards.imIntoDeWebsite()"
});
formatter.result({
  "duration": 14992839,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsShowProfileCards.thePageFinishedLoad()"
});
formatter.result({
  "duration": 16803780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao",
      "offset": 45
    },
    {
      "val": "img/2.jpg",
      "offset": 57
    },
    {
      "val": "João Fernandes",
      "offset": 70
    },
    {
      "val": "Software Developer",
      "offset": 88
    },
    {
      "val": "Tecmic",
      "offset": 110
    },
    {
      "val": "https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/",
      "offset": 119
    },
    {
      "val": "https://www.facebook.com/joao.fernandes.90281",
      "offset": 180
    },
    {
      "val": "https://www.instagram.com/joaofpfernandes/?hl\u003dpt",
      "offset": 232
    }
  ],
  "location": "StepdefsShowProfileCards.theWebsiteShowsTheProfileCardsOfEachMemberWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 384594967,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "The profile cards has all the information",
  "description": "",
  "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Im into de website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finished load",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the website shows the profile cards of each \"Monica\" with \"img/3.jpg\", \"Mónica Francisco\", \"Estudante do Mestrado de Eng.Informática\", \"Instituto Politécnico de Leiria\",\"https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/\",\"https://www.facebook.com/monicasmfrancisco\" and \"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsShowProfileCards.imIntoDeWebsite()"
});
formatter.result({
  "duration": 11945564,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsShowProfileCards.thePageFinishedLoad()"
});
formatter.result({
  "duration": 17039620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 45
    },
    {
      "val": "img/3.jpg",
      "offset": 59
    },
    {
      "val": "Mónica Francisco",
      "offset": 72
    },
    {
      "val": "Estudante do Mestrado de Eng.Informática",
      "offset": 92
    },
    {
      "val": "Instituto Politécnico de Leiria",
      "offset": 136
    },
    {
      "val": "https://www.linkedin.com/in/m%C3%B3nica-francisco-997746115/",
      "offset": 170
    },
    {
      "val": "https://www.facebook.com/monicasmfrancisco",
      "offset": 233
    },
    {
      "val": "",
      "offset": 282
    }
  ],
  "location": "StepdefsShowProfileCards.theWebsiteShowsTheProfileCardsOfEachMemberWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 345260798,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "The profile card doesn\u0027t have photo",
  "description": "",
  "id": "show-the-profile-cards;the-profile-card-doesn\u0027t-have-photo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "is not possible show \u003cphoto\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user accesses the site",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the system should show a \"imagedefault.jpg\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsShowProfileCards.isNotPossibleShowPhoto()"
});
formatter.result({
  "duration": 2466996,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat StepdefsShowProfileCards.isNotPossibleShowPhoto(StepdefsShowProfileCards.java:83)\r\n\tat ✽.Given is not possible show \u003cphoto\u003e(Show the profile cards.feature:18)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "StepdefsShowProfileCards.theUserAccessesTheSite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "imagedefault.jpg",
      "offset": 26
    }
  ],
  "location": "StepdefsShowProfileCards.theSystemShouldShowA(String)"
});
formatter.result({
  "status": "skipped"
});
});