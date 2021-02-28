---
id: files
title: Addon files explained
sidebar_label: Addon files explained
---
---
a.k.a Plugin configuration section

Additional files generated on the main plugin folder

## ranks.yml
:::note
Here you can add as many ranks as you want which will be triggered by statistic types
:::
```yml
Ranks:
  # Should custom ranks be enabled?
  Enabled: true
  # Should ranks be formatted in global chat?
  Global-Chat: false
  List:
    Rookie:
      # Statistic to check for, if player has x wins and higher his messages in game will be formatted like that
      # Valid Statistic Types:
      # - WINS           - LOSES
      # - GAMES_PLAYED   - SCORED_POINTS
      Statistic: WINS
      # Minimum amount of statistic needed to format user message into this one
      Amount-Needed: 0
      # Message formatting. Placeholders: %player% - player name, %message% - player message
      Format: "&fRookie &7%player%: %message%"
```

## achievements.yml
:::note
Here you can add as many achievements as you want. We recommend the In-Game creator.
:::
```yml
# Set this section to "Achievements: []" to disable it completely
Achievements:
  # Achievement ID
  Scorer1:
    # Name of achievement visible in game
    Name: "&cScorer I"

    # Description of achievement visible in game
    # Use ';' to move text to next line
    # Use %progress% placeholder to add current progress of achievement
    # if current progress is above Objective-Amount it will set it to Objective-Amount
    Description: "&7Score 250 times!;&7Progress: &e%progress%/250"

    # Material displayed in GUI when achievement is unlocked
    Unlocked-Material: "EMERALD"

    # Material displayed in GUI when achievement is locked
    Locked-Material: "COAL"

    # Achievement objective. Valid objectives:
    #  GAMES_PLAYED - when x amount of games are played
    #    GAMES_PLAYED will be called ONLY when player leave arena! It's plugin's API limitation
    #  DEATHS - when player died for x times
    Objective: GAMES_PLAYED

    # Amount of objective points player need to have to get this achievement.
    # Players can have this OR MORE amount of points to get this achievement.
    Objective-Amount: 250

    # Command rewards executed from console after achievement is unlocked
    #
    #                    Placeholders list:
    #             %player% - Current player name
    #             %wave% - Current wave number
    #             %mapname% - Name of map
    #             %arena-id% - Arena Identifier
    #             %playeramount% - Number of players in game
    #
    #        Commands are executed by default BY CONSOLE, use "p:" to preform command by player
    #  You can use chance to execute command adding "chance(NUMBER):" (ex chance(10):) at the beginning of command
    #
    #  Commands examples:
    #    - p:say New achievement, yeah!                 # Player will say "New achievement, yeah!"
    #    - bc %player% unlocked achievement Killer!     # Will broadcast "<player name> unlocked achievement Killer" message
    #    - chance(1):p:say I was very lucky!            # Player has 1% chance to say "I was very lucky!"
    #    - p:chance(99):spawn                           # Player has 99% chance to teleport to spawn
    #       ^ YOU CAN EVEN SWAP CHANCE WITH PLAYER!
    #    - chance(50):eco give %PLAYER% 10              # Console has 10% chance to give player 10$
    Reward:
      - eco give %player% 10
      - p:say I got new achievement!!!
```

## replay_notifier.yml
:::note
Here you can find any setting about the replay module
:::
```yml
# Should replay notifier be enabled?
# REMEMBER to add murdermystery.join.* permission to allow access to all random arenas!
Enabled: true

# Replay message sent to all players in arena
Replay-Message: "&aGame has ended! &eWant to play again? &b&lClick here!"

# Message when hover Replay-Message
Replay-Message-Hover: "&eClick to play again!"

# Replay action when player click Replay-Message. Available actions:
#   RANDOM - join random arena (if not full)
#   RANDOM_WAITING - join random arena which state is waiting for players or starting
Replay-Action: RANDOM

# Plugin will automatically hook with these configured servers if bungee mode is activated in main
# murdermystery plugin
#
# Type here murdermystery server names that are hooked to Bungee Cord
Bungee-Server-Names:
  - "TB01"
```

## achievement_storage.yml

:::note
If you use MySQL on the main plugin it will also use MySQL
:::

:::caution
It saves the achievements for the players! You do not need to edit anything here, except you want to manipulate the achievements!
:::
## internal/achievements_menu_design.yml
:::caution
This is just an internal file! Do not edit it! It saves your menu design.
:::