Feature: Creating the new Cucumber Features File

    Scenario: Naviagting to pratice section and selecting the check box
       Given open the url 
       When  click on the pratice section 
       Then  on opening the openbox Automation application check the main heading
    
    Scenario: As a user i can navigate to the Static drop down Example
        When check the drop down heading should be Static Dropdown Example
        Then try to select the drop down value as "Option 1"
        And Verify if the drop is selected as "Option 1"