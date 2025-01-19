@suite-2
Feature: Main functionality of Notebook feature

    @test-6
    Scenario: Verify that a user can create a notebook
        Given I have 3 notes
        And I am in the "Notebooks" page
        When I tap the add new note button
        And I fill out the title with "My Notebook"
        And I fill out the description with "My First Notebook"
        And I tap the Add button
        And I select all 3 notes
        And I tap Move selected notes button
        And I tap the created notebook
        Then all 3 notes are added to the created notebook