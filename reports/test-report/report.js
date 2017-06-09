$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Access the social networks.feature");
formatter.feature({
  "line": 2,
  "name": "Access the social networks",
  "description": "",
  "id": "access-the-social-networks",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "The profile card has Instagram",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the user clicks on the Instagram button of \"\u003cmember\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the system should show speaker \"\u003cinstagram\u003e\" page of \"\u003cmember\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram;",
  "rows": [
    {
      "cells": [
        "member",
        "instagram"
      ],
      "line": 13,
      "id": "access-the-social-networks;the-profile-card-has-instagram;;1"
    },
    {
      "cells": [
        "Margarida",
        "https://www.instagram.com/margarida_weber/?hl\u003dpt"
      ],
      "line": 14,
      "id": "access-the-social-networks;the-profile-card-has-instagram;;2"
    },
    {
      "cells": [
        "Joao",
        "https://www.instagram.com/joaofpfernandes/?hl\u003dpt"
      ],
      "line": 15,
      "id": "access-the-social-networks;the-profile-card-has-instagram;;3"
    },
    {
      "cells": [
        "Monica",
        ""
      ],
      "line": 16,
      "id": "access-the-social-networks;the-profile-card-has-instagram;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 4317546112,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "The profile card has Instagram",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the user clicks on the Instagram button of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the system should show speaker \"https://www.instagram.com/margarida_weber/?hl\u003dpt\" page of \"Margarida\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
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
  "duration": 2881322631,
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
  "duration": 141167048,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 48241842,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "The profile card has Instagram",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the user clicks on the Instagram button of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the system should show speaker \"https://www.instagram.com/joaofpfernandes/?hl\u003dpt\" page of \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
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
  "duration": 343530225,
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
  "duration": 10273525,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 39374385,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "The profile card has Instagram",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-instagram;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the user clicks on the Instagram button of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the system should show speaker \"\" page of \"Monica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
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
  "duration": 266561927,
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
  "duration": 94833,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "The profile card has Facebook",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the user clicks on  the Facebook button of \"\u003cmember\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the website should show speaker \"\u003cfacebook\u003e\" page of \"\u003cmember\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook;",
  "rows": [
    {
      "cells": [
        "member",
        "facebook"
      ],
      "line": 24,
      "id": "access-the-social-networks;the-profile-card-has-facebook;;1"
    },
    {
      "cells": [
        "Margarida",
        "https://www.facebook.com/margarida.weber.9"
      ],
      "line": 25,
      "id": "access-the-social-networks;the-profile-card-has-facebook;;2"
    },
    {
      "cells": [
        "Joao",
        "https://www.facebook.com/joao.fernandes.90281"
      ],
      "line": 26,
      "id": "access-the-social-networks;the-profile-card-has-facebook;;3"
    },
    {
      "cells": [
        "Monica",
        "https://www.facebook.com/monicasmfrancisco"
      ],
      "line": 27,
      "id": "access-the-social-networks;the-profile-card-has-facebook;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 170198528,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "The profile card has Facebook",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the user clicks on  the Facebook button of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the website should show speaker \"https://www.facebook.com/margarida.weber.9\" page of \"Margarida\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
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
  "duration": 1311108584,
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
  "duration": 5633710,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 23578816,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "The profile card has Facebook",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the user clicks on  the Facebook button of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the website should show speaker \"https://www.facebook.com/joao.fernandes.90281\" page of \"Joao\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
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
  "duration": 516292516,
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
  "duration": 5864427,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 17532934,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "The profile card has Facebook",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-facebook;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the user clicks on  the Facebook button of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the website should show speaker \"https://www.facebook.com/monicasmfrancisco\" page of \"Monica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
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
  "duration": 472696236,
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
  "duration": 12701811,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "The profile card has LinkedIn",
  "description": "",
  "id": "access-the-social-networks;the-profile-card-has-linkedin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 19311352,
  "status": "passed"
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
  "arguments": [
    {
      "val": "Margarida",
      "offset": 43
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheLinkedInButtonOf(String)"
});
formatter.result({
  "duration": 875944271,
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
  "duration": 2485351,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 17668819,
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
  "arguments": [
    {
      "val": "Joao",
      "offset": 43
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheLinkedInButtonOf(String)"
});
formatter.result({
  "duration": 888029055,
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
  "duration": 2795302,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "the speaker has socialNetwork",
  "keyword": "Given "
});
formatter.match({
  "location": "StepdefsSocial.theSpeakerHasSocialNetwork()"
});
formatter.result({
  "duration": 26069504,
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
  "arguments": [
    {
      "val": "Monica",
      "offset": 43
    }
  ],
  "location": "StepdefsSocial.theUserClicksOnTheLinkedInButtonOf(String)"
});
formatter.result({
  "duration": 834317306,
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
  "duration": 2746860,
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
  "duration": 390201377,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsSearchProfileCard.iSearchForSomeKeyworks()"
});
formatter.result({
  "duration": 1807501458,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsSearchProfileCard.theWebsiteShouldAdjustTheProfileCardsContent()"
});
formatter.result({
  "duration": 123356595,
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
  "duration": 22197791,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsSearchProfileCard.iSearchForSomeKeyworks()"
});
formatter.result({
  "duration": 278249318,
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
  "duration": 389824510,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 3477603,
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
  "duration": 1908054730,
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
  "duration": 942763436,
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
  "duration": 19939874,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 13134921,
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
  "duration": 475607308,
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
  "duration": 343824165,
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
  "duration": 14000730,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 4992050,
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
  "duration": 462008077,
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
  "duration": 334594209,
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
  "duration": 71395348,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 8474990,
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
  "duration": 285572770,
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
  "duration": 337944137,
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
  "duration": 16874032,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 2839228,
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
  "duration": 265538474,
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
  "duration": 337732304,
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
  "duration": 9739013,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 2263254,
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
  "duration": 281960924,
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
  "duration": 368588182,
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
  "duration": 11534674,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 2409814,
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
  "duration": 258963008,
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
  "duration": 330818150,
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
  "duration": 12372977,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 1925798,
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
  "duration": 267166638,
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
  "duration": 346659699,
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
  "duration": 25771458,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 2634784,
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
  "duration": 285566202,
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
  "duration": 357399995,
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
  "name": "the user clicks on the profile card of \"\u003cmember\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the system should show a page with \"\u003cmember\u003e\" with skills details \"\u003cprojects\u003e\", \"\u003ccertifications\u003e\" and \"\u003cskills\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
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
      "line": 45,
      "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;1"
    },
    {
      "cells": [
        "Margarida",
        "No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades.",
        "IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)",
        "HTML \u0026 CSS  Javascript \u0026 jQuery PHP Ruby on Rails C# Android SQL Swift"
      ],
      "line": 46,
      "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;2"
    },
    {
      "cells": [
        "Joao",
        "Aplicação mobile para sócios treinadores e jogadores.",
        "Swift Level 2 - Cambridge Certification Authority",
        "HTML \u0026 CSS  Javascript PHP C# Java SQL Android Swift"
      ],
      "line": 47,
      "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;3"
    },
    {
      "cells": [
        "Monica",
        "No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades.",
        "IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)",
        "HTML \u0026 CSS  Javascript \u0026 jQuery C# Java SQL Android Ruby on Rails Swift"
      ],
      "line": 48,
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
  "duration": 9502959,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 1929082,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "The profile card has all the information",
  "description": "",
  "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the user clicks on the profile card of \"Margarida\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the system should show a page with \"Margarida\" with skills details \"No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades.\", \"IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)\" and \"HTML \u0026 CSS  Javascript \u0026 jQuery PHP Ruby on Rails C# Android SQL Swift\"",
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
  "duration": 270916423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Margarida",
      "offset": 36
    },
    {
      "val": "No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades.",
      "offset": 68
    },
    {
      "val": "IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)",
      "offset": 558
    },
    {
      "val": "HTML \u0026 CSS  Javascript \u0026 jQuery PHP Ruby on Rails C# Android SQL Swift",
      "offset": 638
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageWithWithSkillsDetailsAnd(String,String,String,String)"
});
formatter.result({
  "duration": 379537849,
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
  "duration": 8013964,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 1458204,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "The profile card has all the information",
  "description": "",
  "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the user clicks on the profile card of \"Joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the system should show a page with \"Joao\" with skills details \"Aplicação mobile para sócios treinadores e jogadores.\", \"Swift Level 2 - Cambridge Certification Authority\" and \"HTML \u0026 CSS  Javascript PHP C# Java SQL Android Swift\"",
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
  "duration": 273125077,
  "status": "passed"
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
      "val": "Swift Level 2 - Cambridge Certification Authority",
      "offset": 120
    },
    {
      "val": "HTML \u0026 CSS  Javascript PHP C# Java SQL Android Swift",
      "offset": 176
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageWithWithSkillsDetailsAnd(String,String,String,String)"
});
formatter.result({
  "duration": 368917427,
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
  "duration": 8707351,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 3331865,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "The profile card has all the information",
  "description": "",
  "id": "show-details-of-a-profile-card;the-profile-card-has-all-the-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "the user clicks on the profile card of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the system should show a page with \"Monica\" with skills details \"No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades.\", \"IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)\" and \"HTML \u0026 CSS  Javascript \u0026 jQuery C# Java SQL Android Ruby on Rails Swift\"",
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
  "duration": 264469864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Monica",
      "offset": 36
    },
    {
      "val": "No âmbito da unidade curricular Projeto de Informática para a Saúde foi desenvolvida uma aplicação móvel para dispositivos Android, designada por Diabetes Friend, que tem como objetivo auxiliar pessoas diabéticas. Esta aplicação permite ao doente registar diariamente os seus níveis de glicemia, enviar gráficos/tabelas da evolução dos seus dados para o médico, definir alarmes, visualizar recomendações ao nível alimentar, de atividade física e da doença, entre outras funcionalidades.",
      "offset": 65
    },
    {
      "val": "IP Erasmus - Learning Computer Programming in Virtual Environment (VIOPE)",
      "offset": 555
    },
    {
      "val": "HTML \u0026 CSS  Javascript \u0026 jQuery C# Java SQL Android Ruby on Rails Swift",
      "offset": 635
    }
  ],
  "location": "StepdefsDetailsProfile.theSystemShouldShowAPageWithWithSkillsDetailsAnd(String,String,String,String)"
});
formatter.result({
  "duration": 378973781,
  "status": "passed"
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
  "duration": 384193264,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsShowProfileCards.thePageFinishedLoad()"
});
formatter.result({
  "duration": 11568338,
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
  "duration": 1683252370,
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
  "duration": 10940226,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsShowProfileCards.thePageFinishedLoad()"
});
formatter.result({
  "duration": 6286863,
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
  "duration": 273871421,
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
  "duration": 7848521,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsShowProfileCards.thePageFinishedLoad()"
});
formatter.result({
  "duration": 3436960,
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
  "duration": 272818000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": ": The profile card doesn´t have Instagram",
  "description": "",
  "id": "show-the-profile-cards;:-the-profile-card-doesn´t-have-instagram",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the user clicks on the Instagram button of \"\u003cmember\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the system must hace a disable \"\u003cinstagram\u003e\" link with the color grey of \"\u003cmember\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "show-the-profile-cards;:-the-profile-card-doesn´t-have-instagram;",
  "rows": [
    {
      "cells": [
        "member",
        "instagram"
      ],
      "line": 24,
      "id": "show-the-profile-cards;:-the-profile-card-doesn´t-have-instagram;;1"
    },
    {
      "cells": [
        "Monica",
        "disabled"
      ],
      "line": 25,
      "id": "show-the-profile-cards;:-the-profile-card-doesn´t-have-instagram;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": ": The profile card doesn´t have Instagram",
  "description": "",
  "id": "show-the-profile-cards;:-the-profile-card-doesn´t-have-instagram;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the user clicks on the Instagram button of \"Monica\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the system must hace a disable \"disabled\" link with the color grey of \"Monica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
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
  "duration": 232310552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "disabled",
      "offset": 32
    },
    {
      "val": "Monica",
      "offset": 71
    }
  ],
  "location": "StepdefsShowProfileCards.theSystemMustHaceADisableLinkWithTheColorGreyOf(String,String)"
});
formatter.result({
  "duration": 1968082,
  "status": "passed"
});
});