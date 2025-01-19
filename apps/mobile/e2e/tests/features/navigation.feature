@suite-3
Feature: Main functionalities of the Navigation feature

    @test-7
    Scenario: Verify that users can navigate through all pages
        Given I have the navigation panel opened
        When I access each navigation option
            | Notebooks  |
            | Favorites  |
            | Tags       |
            | Reminders  |
            | Monographs |
            | Trash      |
        Then all pages should open successfully