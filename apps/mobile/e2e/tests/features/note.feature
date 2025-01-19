@suite-1
Feature: Main functionalities of Notes feature

    @test-1
    Scenario: Verify that a user can create a note
        Given I create a new note from the home screen
        When I type "Testing Create Note Feature" in the text field
        And I go back to the home screen from the note editor
        Then the note should be displayed correctly in the home screen

    @test-2
    Scenario: Verify that a user can fully delete a note
        Given I create a new note from the home screen
        When I type "Testing Delete Note Feature" in the text field
        And I go back to the home screen from the note editor
        And I tap the ... icon from the created note
        And I tap the "Move to trash" button
        And I tap the menu button
        And I tap "Trash" page
        Then the note I made should be in trash
        And it should be deleted when I empty the trash

    @test-3
    Scenario: Verify that a user can favorite a note
        Given I create a new note from the home screen
        When I type "Testing Favorite Note Feature" in the text field
        And I go back to the home screen from the note editor
        And I tap the ... icon from the created note
        And I tap the "Favorite" button
        Then the note should be marked as "favorite"

    @test-4
    Scenario: Verify that a user can pin a note
        Given I create a new note from the home screen
        When I type "Testing Pin Note Feature" in the text field
        And I go back to the home screen from the note editor
        And I tap the ... icon from the created note
        And I tap the "Pin" button
        Then the note should be marked as "Pinned"

    @test-5
    Scenario: Verify that a user can lock a note
        Given I create a new note from the home screen
        When I type "Testing Lock Note Feature" in the text field
        And I go back to the home screen from the note editor
        And I tap the ... icon from the created note
        And I tap the "lock" button
        And I enter "password" to the password field
        And I enter "password" to the confirm password field
        And I tap the Lock button
        Then the note should be marked as "Locked"
        And the note should be protected by password