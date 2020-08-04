$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resource/Features/Login.feature");
formatter.feature({
  "line": 4,
  "name": "I want to test Login Feature",
  "description": "",
  "id": "i-want-to-test-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login Feature",
  "description": "",
  "id": "i-want-to-test-login-feature;login-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user navigates to opensource-demo.orangehrmlive.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using Username as \u003cusername\u003e and Password \u003cpassword\u003e and Message \u003cmessage\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "i-want-to-test-login-feature;login-feature;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 13,
      "id": "i-want-to-test-login-feature;login-feature;;1"
    },
    {
      "cells": [
        "admin",
        "admin123",
        "login successful"
      ],
      "line": 14,
      "id": "i-want-to-test-login-feature;login-feature;;2"
    },
    {
      "cells": [
        "admin",
        "",
        "Password cannot be empty"
      ],
      "line": 15,
      "id": "i-want-to-test-login-feature;login-feature;;3"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 16,
      "id": "i-want-to-test-login-feature;login-feature;;4"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 17,
      "id": "i-want-to-test-login-feature;login-feature;;5"
    },
    {
      "cells": [
        "admin123",
        "admin",
        "Invalid Credentials"
      ],
      "line": 18,
      "id": "i-want-to-test-login-feature;login-feature;;6"
    },
    {
      "cells": [
        "admin@yahoo.com",
        "admin123",
        "Invalid Credentials"
      ],
      "line": 19,
      "id": "i-want-to-test-login-feature;login-feature;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11363921200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Feature",
  "description": "",
  "id": "i-want-to-test-login-feature;login-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to opensource-demo.orangehrmlive.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using Username as admin and Password admin123 and Message login successful",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_navigates_to_opensource_demo_orangehrmlive_com()"
});
formatter.result({
  "duration": 151328400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 55
    }
  ],
  "location": "MyStepDef.user_logs_in_using_Username_as_admin_and_Password_admin_and_Message_login_successful(int)"
});
formatter.result({
  "duration": 1340511200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.login_should_be_successful()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.after({
  "duration": 25400,
  "status": "passed"
});
formatter.before({
  "duration": 9299262900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Feature",
  "description": "",
  "id": "i-want-to-test-login-feature;login-feature;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to opensource-demo.orangehrmlive.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using Username as admin and Password  and Message Password cannot be empty",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_navigates_to_opensource_demo_orangehrmlive_com()"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_logs_in_using_Username_as_admin_and_Password_and_Message_Password_cannot_be_empty()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.login_should_be_successful()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.after({
  "duration": 17800,
  "status": "passed"
});
formatter.before({
  "duration": 9213994600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Feature",
  "description": "",
  "id": "i-want-to-test-login-feature;login-feature;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to opensource-demo.orangehrmlive.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using Username as  and Password admin123 and Message Username cannot be empty",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_navigates_to_opensource_demo_orangehrmlive_com()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 50
    }
  ],
  "location": "MyStepDef.user_logs_in_using_Username_as_and_Password_admin_and_Message_Username_cannot_be_empty(int)"
});
formatter.result({
  "duration": 133000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.login_should_be_successful()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.after({
  "duration": 17600,
  "status": "passed"
});
formatter.before({
  "duration": 9302465400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login Feature",
  "description": "",
  "id": "i-want-to-test-login-feature;login-feature;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to opensource-demo.orangehrmlive.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using Username as  and Password  and Message Username cannot be empty",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_navigates_to_opensource_demo_orangehrmlive_com()"
});
formatter.result({
  "duration": 86500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_logs_in_using_Username_as_and_Password_and_Message_Username_cannot_be_empty()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.login_should_be_successful()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.after({
  "duration": 19800,
  "status": "passed"
});
formatter.before({
  "duration": 9169847900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login Feature",
  "description": "",
  "id": "i-want-to-test-login-feature;login-feature;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to opensource-demo.orangehrmlive.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using Username as admin123 and Password admin and Message Invalid Credentials",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_navigates_to_opensource_demo_orangehrmlive_com()"
});
formatter.result({
  "duration": 268700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 36
    }
  ],
  "location": "MyStepDef.user_logs_in_using_Username_as_admin_and_Password_admin_and_Message_Invalid_Credentials(int)"
});
formatter.result({
  "duration": 104700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.login_should_be_successful()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.after({
  "duration": 20300,
  "status": "passed"
});
formatter.before({
  "duration": 9851434000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login Feature",
  "description": "",
  "id": "i-want-to-test-login-feature;login-feature;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to opensource-demo.orangehrmlive.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using Username as admin@yahoo.com and Password admin123 and Message Invalid Credentials",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_navigates_to_opensource_demo_orangehrmlive_com()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 65
    }
  ],
  "location": "MyStepDef.user_logs_in_using_Username_as_admin_yahoo_com_and_Password_admin_and_Message_Invalid_Credentials(int)"
});
formatter.result({
  "duration": 208600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.login_should_be_successful()"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.after({
  "duration": 21700,
  "status": "passed"
});
});