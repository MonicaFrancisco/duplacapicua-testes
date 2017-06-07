$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Show the profile cards.feature");
formatter.feature({
  "line": 1,
  "name": "Show the profile cards",
  "description": "As an User\nI want to check the profile cards of each member\nSo that I can get to know more about each member",
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
  "name": "the website shows the profile cards of each member with \"\u003cphoto\u003e\", \"\u003cname\u003e\", \"\u003cjob\u003e\", \"\u003cworkplace\u003e\",\"\u003clinkedIn\u003e\",\"\u003cfacebook\u003e\" and \"\u003cinstagram\u003e\"",
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
        "img/2.jpg",
        "João Fernandes",
        "Software Developer",
        "Tecmic",
        "https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/",
        "https://www.facebook.com/joao.fernandes.90281?fref\u003dts",
        "https://www.instagram.com/joaofpfernandes/?hl\u003dpt"
      ],
      "line": 14,
      "id": "show-the-profile-cards;the-profile-cards-has-all-the-information;;3"
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
  "name": "the website shows the profile cards of each member with \"img/1.jpg\", \"Ana Margarida Weber\", \"Estudante do Mestrado de Eng.Informática\", \"Instituto Politécnico de Leiria\",\"https://www.linkedin.com/in/anamargaridaweber/\",\"https://www.facebook.com/margarida.weber.9\" and \"https://www.instagram.com/margarida_weber/?hl\u003dpt\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsShowProfileCards.imIntoDeWebsite()"
});
formatter.result({
  "duration": 1440622253,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsShowProfileCards.thePageFinishedLoad()"
});
formatter.result({
  "duration": 81632799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "img/1.jpg",
      "offset": 57
    },
    {
      "val": "Ana Margarida Weber",
      "offset": 70
    },
    {
      "val": "Estudante do Mestrado de Eng.Informática",
      "offset": 93
    },
    {
      "val": "Instituto Politécnico de Leiria",
      "offset": 137
    },
    {
      "val": "https://www.linkedin.com/in/anamargaridaweber/",
      "offset": 171
    },
    {
      "val": "https://www.facebook.com/margarida.weber.9",
      "offset": 220
    },
    {
      "val": "https://www.instagram.com/margarida_weber/?hl\u003dpt",
      "offset": 269
    }
  ],
  "location": "StepdefsShowProfileCards.theWebsiteShowsTheProfileCardsOfEachMemberWithAnd(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2213538998,
  "status": "passed"
});
formatter.after({
  "duration": 2517629,
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
  "name": "the website shows the profile cards of each member with \"img/2.jpg\", \"João Fernandes\", \"Software Developer\", \"Tecmic\",\"https://www.linkedin.com/in/jo%C3%A3o-fernandes-17b8a7114/\",\"https://www.facebook.com/joao.fernandes.90281?fref\u003dts\" and \"https://www.instagram.com/joaofpfernandes/?hl\u003dpt\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsShowProfileCards.imIntoDeWebsite()"
});
formatter.result({
  "duration": 10851302,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session is closed\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027MBP-de-Joao-2.lan\u0027, ip: \u0027fe80:0:0:0:cc2:bee9:3bc6:2be%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: HtmlUnitDriver\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.getWebClient(HtmlUnitDriver.java:1382)\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.get(HtmlUnitDriver.java:526)\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.get(HtmlUnitDriver.java:515)\n\tat StepdefsShowProfileCards.imIntoDeWebsite(StepdefsShowProfileCards.java:40)\n\tat ✽.Given Im into de website(Show the profile cards.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepdefsShowProfileCards.thePageFinishedLoad()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
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
      "val": "https://www.facebook.com/joao.fernandes.90281?fref\u003dts",
      "offset": 180
    },
    {
      "val": "https://www.instagram.com/joaofpfernandes/?hl\u003dpt",
      "offset": 240
    }
  ],
  "location": "StepdefsShowProfileCards.theWebsiteShowsTheProfileCardsOfEachMemberWithAnd(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 66524,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session is closed\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027MBP-de-Joao-2.lan\u0027, ip: \u0027fe80:0:0:0:cc2:bee9:3bc6:2be%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: HtmlUnitDriver\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.getWebClient(HtmlUnitDriver.java:1382)\n\tat org.openqa.selenium.htmlunit.HtmlUnitDriver.close(HtmlUnitDriver.java:617)\n\tat StepdefsShowProfileCards.tearDown(StepdefsShowProfileCards.java:85)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:237)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});