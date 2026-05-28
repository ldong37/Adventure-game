# Adventure Game Plan: The Lost Temple

- State: "start" (Intro)
    - Choice 1: Go Left into the dark tunnel -> leads to "left_tunnel"
    - Choice 2: Go Right toward the light -> leads to "right_tunnel"

- State: "left_tunnel" 
    - Choice 1: Fight the giant spider -> leads to 'spider_fight'
    - Choice 2: Run away -> leads to 'game_over_coward'

- State: 'right_tunnel' (Decision Point 1b)
    - Choice 1: Cross the rickety bridge -> leads to 'bridge_cross'
    - Choice 2: Search the treasure chest -> leads to 'chest_trap'

- State: 'spider_fight' (Decision Point 2a) -> Leads to Ending A
- State: 'bridge_cross' (Decision Point 2b) -> Leads to Ending B
- State: 'chest_trap' (Decision Point 2c) -> Leads to Ending C