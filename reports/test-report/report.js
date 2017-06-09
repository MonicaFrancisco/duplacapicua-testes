$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Show details of a profile card.feature");
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
  "duration": 3674418576,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 22579,
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
  "duration": 2413406200,
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
  "duration": 1448554174,
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
  "duration": 39856347,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 24631,
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
  "duration": 492291265,
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
  "duration": 366499403,
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
  "duration": 25681553,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 21758,
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
  "duration": 683903471,
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
  "duration": 356712357,
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
  "duration": 118494273,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 22168,
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
  "duration": 293144593,
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
  "duration": 346052113,
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
  "duration": 43217770,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 24632,
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
  "duration": 297148496,
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
  "duration": 590766842,
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
  "duration": 21840219,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 26684,
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
  "duration": 285233261,
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
  "duration": 344060630,
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
  "duration": 14717927,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 21758,
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
  "duration": 276020959,
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
  "duration": 352593916,
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
  "duration": 17324384,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 23811,
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
  "duration": 265998268,
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
  "duration": 353304133,
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
  "duration": 18191014,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 28737,
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
  "duration": 280033072,
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
  "duration": 338502048,
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
  "duration": 16946696,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 31201,
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
  "duration": 17525544,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 39001,
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
  "duration": 19434921,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsProfile.theLandingPageFinishedLoad()"
});
formatter.result({
  "duration": 24222,
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
});