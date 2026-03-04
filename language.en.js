window.languageEn = {
  "story": {
    "intro_walk": {
      "bg": "street",
      "sprite": null,
      "narrator": true,
      "text": "The clock shows 11 PM. You are walking home from the convenience store through a quiet alley.",
      "next": "kidnap_moment"
    },
    "kidnap_moment": {
      "bg": "street",
      "sprite": null,
      "narrator": true,
      "text": "The sound of crickets follows your steps. Suddenly, you hear fast footsteps behind you.",
      "next": "blackout_hit"
    },
    "blackout_hit": {
      "special": "blackout",
      "narrator": true,
      "text": "THUD!!\n\nA heavy blow lands on your head. Your vision goes dark instantly.",
      "next": "wakeup_room"
    },
    "wakeup_room": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "special": "fadein",
      "text": "Your head throbs in pain. You slowly open your eyes.\n\nThis... is not your room. Your hands are tied to the bed frame.",
      "next": "maimy_enter"
    },
    "maimy_enter": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "Good morning, darling! Did you sleep well? I was worried you wouldn't wake up since yesterday.",
      "next": "first_choice"
    },
    "first_choice": {
      "bg": "room",
      "sprite": "lookPsyko",
      "name": "Maimy",
      "text": "Don't worry, I tied you loosely. So you won't 'wander off' again like yesterday.",
      "choices": [
        {
          "text": "Let me go! Who are you?!",
          "delta": -0.3,
          "next": "path_angry"
        },
        {
          "text": "My head hurts... water...",
          "delta": 0.1,
          "next": "path_calm"
        }
      ]
    },
    "path_angry": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Shhh... don't scream. The neighbors don't like noise. I'm Maimy. And starting today, I'm your caretaker. Understand?",
      "choices": [
        {
          "text": "You're crazy! I want to go home!",
          "delta": -0.4,
          "next": "trigger_death"
        },
        {
          "text": "Okay... I understand.",
          "delta": 0.1,
          "next": "path_calm"
        }
      ]
    },
    "path_calm": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Poor thing... it must hurt after getting hit last night, right? Sorry, I had to. Otherwise, you wouldn't come home with me.",
      "next": "feeding_time"
    },
    "feeding_time": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Here, I cooked porridge. Open your mouth... Aaaa...",
      "choices": [
        {
          "text": "(Eat) Thank you, Maimy.",
          "delta": 0.2,
          "next": "day_1_end"
        },
        {
          "text": "(Spit food) I don't want your food!",
          "delta": -0.5,
          "next": "trigger_death"
        }
      ]
    },
    "day_1_end": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "You choose to obey. Maimy smiles in satisfaction and feeds you until you're full. Night falls...",
      "next": "day_2_start"
    },
    "day_2_start": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "The next day... Maimy gets ready with her handbag. She looks cheerful.",
      "next": "maimy_leaving"
    },
    "maimy_leaving": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "I need to go buy groceries for a while. I won't tie you today, but I've locked the door. Don't be naughty, okay?",
      "choices": [
        {
          "text": "Okay, be careful.",
          "delta": 0.1,
          "next": "alone_start"
        },
        {
          "text": "Take me with you!",
          "delta": -0.2,
          "next": "alone_angry"
        }
      ]
    },
    "alone_angry": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "No can do! The outside world is dangerous. Stay here quietly. I'll buy you candy later.",
      "next": "alone_start"
    },
    "alone_start": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Maimy leaves and locks the door. You are now alone in the room.",
      "next": "exploration_choice"
    },
    "exploration_choice": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "What do you want to do?",
      "choices": [
        {
          "text": "Search The Drawer",
          "delta": 0,
          "next": "check_drawer"
        },
        {
          "text": "Check The Window",
          "delta": 0,
          "next": "check_window"
        }
      ]
    },
    "check_drawer": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "You find an old diary. It's filled with photos of you secretly taken over the past year. 'You're finally mine...', it says.",
      "next": "maimy_return_sound"
    },
    "check_window": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "The window is nailed shut with thick planks from outside. Impossible to open without heavy tools. You're trapped.",
      "next": "maimy_return_sound"
    },
    "maimy_return_sound": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "CLICK! The door unlocks. Maimy has returned earlier than expected!",
      "next": "gift_scene"
    },
    "gift_scene": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "I'm back! Did you miss me? I bought a special gift for you.",
      "choices": [
        {
          "text": "What gift?",
          "delta": 0.1,
          "next": "gift_reveal"
        },
        {
          "text": "I don't want your gift.",
          "delta": -0.2,
          "next": "gift_reveal_force"
        }
      ]
    },
    "gift_reveal": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Here... (She takes out a bell collar). Wear this? So I know where you are in this house.",
      "next": "wear_collar_choice"
    },
    "gift_reveal_force": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Don't be arrogant. Here, wear this collar. If not, I'll tie you back to the bed.",
      "next": "wear_collar_choice"
    },
    "wear_collar_choice": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "(Maimy holds the collar while smiling creepily)",
      "choices": [
        {
          "text": "(Wear it) Pretty...",
          "delta": 0.3,
          "next": "true_love_dinner"
        },
        {
          "text": "(Throw it) I'm not your dog!",
          "delta": -0.5,
          "next": "trigger_death"
        }
      ]
    },
    "true_love_dinner": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Good child... Shall we eat? I cooked special meat today.",
      "next": "meat_joke"
    },
    "meat_joke": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Tasty, right? This meat... is from someone who tried to bother you last week.",
      "choices": [
        {
          "text": "What?! (Throw up)",
          "delta": -0.2,
          "next": "joke_reveal"
        },
        {
          "text": "Tasty... thank you.",
          "delta": 0.4,
          "next": "stockholm_end"
        }
      ]
    },
    "joke_reveal": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Hahaha! Just kidding. It's beef. You're cute when you're scared. Shall we sleep?",
      "next": "survival_end"
    },
    "trigger_death": {
      "special": "die"
    },
    "stockholm_end": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "[ TRUE YANDERE ENDING ]\nYou accept Maimy's madness. The two of you live happily in this little world... forever.",
      "next": "day_3_start"
    },
    "survival_end": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "[ SURVIVAL ENDING ]\nYou survive for one more day. But will you ever be free? Maybe not.",
      "next": "day_3_start"
    },
    "day_3_start": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "special": "fadein",
      "text": "DAY THREE...\n\nMorning sunlight seeps through the gaps between the nailed wooden boards on the window. You are still alive. The room feels heavy, thick with the smell of antiseptic.",
      "next": "d3_wake_up"
    },
    "d3_wake_up": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "You try to move your hands. The metal chain around your wrist scrapes with a sharp sound. Suddenly, there's a soft knock on the bedroom door from outside.",
      "next": "d3_maimy_enters"
    },
    "d3_maimy_enters": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "Good morning, darling! I heard the chain... so you're awake. You looked so cute sleeping last night.",
      "next": "d3_breakfast_tray"
    },
    "d3_breakfast_tray": {
      "bg": "room",
      "sprite": "smile",
      "narrator": true,
      "text": "Maimy steps in carrying a breakfast tray. Heart-shaped toast and a glass of warm milk.",
      "next": "d3_breakfast_talk"
    },
    "d3_breakfast_talk": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "I made this just for you. It took effort to cut those hearts, you know. Come on, open up... I'll feed you.",
      "choices": [
        {
          "text": "(Eat) It's delicious... thank you, Maimy.",
          "delta": 0.15,
          "next": "d3_breakfast_eat"
        },
        {
          "text": "I can eat by myself. Untie my hands.",
          "delta": -0.2,
          "next": "d3_breakfast_question"
        }
      ]
    },
    "d3_breakfast_eat": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Hehe, such a good darling. Eat well so you stay strong. We have a lot of time to spend together today.",
      "next": "d3_post_breakfast"
    },
    "d3_breakfast_question": {
      "bg": "room",
      "sprite": "angry",
      "name": "Maimy",
      "text": "Sleeping pills? Do you really think I'm that evil? I just wanted to make sure you could rest... But no pills today. Just drink.",
      "next": "d3_post_breakfast"
    },
    "d3_post_breakfast": {
      "bg": "room",
      "sprite": "blush",
      "narrator": true,
      "text": "After feeding you, Maimy wipes your mouth with a damp cloth, far too gently. Gentle enough to send chills down your spine.",
      "next": "d3_sudden_knock"
    },
    "d3_sudden_knock": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "BAM! BAM! BAM!\n\nSuddenly, loud knocking echoes from the front door downstairs.",
      "next": "d3_maimy_freeze"
    },
    "d3_maimy_freeze": {
      "bg": "room",
      "sprite": "serious",
      "narrator": true,
      "text": "Maimy freezes instantly. Her smile dies. Her eyes turn sharply toward the bedroom door.",
      "next": "d3_visitor_voice"
    },
    "d3_visitor_voice": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "A MAN'S VOICE OUTSIDE: 'Hello! Ms. Maimy! Courier delivery! I need a signature! Can you open the door for a moment?'",
      "next": "d3_maimy_panics"
    },
    "d3_maimy_panics": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Shhh! (Maimy rushes toward you and covers your mouth with her cold hand). Don't make a sound.",
      "next": "d3_maimy_threatens"
    },
    "d3_maimy_threatens": {
      "bg": "room",
      "sprite": "serious",
      "name": "Maimy",
      "text": "Listen carefully, darling... If you make even the slightest sound, that delivery guy won't make it home to his family tonight. Understand?",
      "choices": [
        {
          "text": "(Struggle and bite her hand) HELP!! I'M IN HERE!!",
          "delta": -0.4,
          "next": "d3_shout_help"
        },
        {
          "text": "(Nod slowly and hold your breath)",
          "delta": 0.2,
          "next": "d3_stay_quiet"
        }
      ]
    },
    "d3_shout_help": {
      "bg": "room",
      "sprite": "angry",
      "narrator": true,
      "text": "You bite Maimy's hand and scream as loud as you can. Maimy doesn't cry out in pain. Instead, she stares at you with a terrifying smile.",
      "next": "d3_maimy_kills_postman"
    },
    "d3_maimy_kills_postman": {
      "bg": "room",
      "sprite": "angry",
      "name": "Maimy",
      "text": "Ah... now you made me dirty the house. Why are you so naughty? Sit still. I'll go 'take care' of our guest.",
      "next": "d3_postman_dead_end"
    },
    "d3_postman_dead_end": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "special": "blackout",
      "text": "Maimy goes downstairs. Not long after, you hear panicked screams, followed by dull chopping sounds. Then... silence.",
      "next": "d3_maimy_blood_return"
    },
    "d3_maimy_blood_return": {
      "bg": "room",
      "sprite": "killer",
      "narrator": true,
      "special": "fadein",
      "text": "Maimy comes back to the room. Her face and clothes are splattered with fresh blood. In her hand is a butcher knife.",
      "next": "d3_punishment_time"
    },
    "d3_punishment_time": {
      "bg": "room",
      "sprite": "killer",
      "name": "Maimy",
      "text": "This is your fault. He died because you tried to call for help. Now... I need to teach you not to do that again.",
      "next": "trigger_death"
    },
    "d3_stay_quiet": {
      "bg": "room",
      "sprite": "smile",
      "narrator": true,
      "text": "You hold your breath. Maimy smiles with satisfaction, slowly releases your mouth, and kisses your forehead before heading to the living room.",
      "next": "d3_alone_moment"
    },
    "d3_alone_moment": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "From downstairs, you hear Maimy speaking gently and warmly to the delivery man. Her performance is flawless.",
      "next": "d3_maimy_returns_happy"
    },
    "d3_maimy_returns_happy": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "I'm back! The delivery guy is gone. See? If you listen, no one gets hurt.",
      "next": "d3_reward_time"
    },
    "d3_reward_time": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "Because you were a good child today, I have a reward. I'll unlock your chain for a while. But you can only move inside this room.",
      "next": "d3_untie_hands"
    },
    "d3_untie_hands": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "CLICK. The chain around your wrist comes off. You rub the bruises on your skin. Finally, you can stand.",
      "next": "d3_maimy_cook_excuse"
    },
    "d3_maimy_cook_excuse": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "I'm going to the kitchen downstairs to prepare a special dinner. Don't try opening this room door, I've locked it from outside.",
      "next": "d3_explore_start"
    },
    "d3_explore_start": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "The door shuts tight and you hear the lock turn. You are alone in the room, unchained. Time to find clues or a way out.",
      "choices": [
        {
          "text": "Check the nailed window.",
          "delta": 0,
          "next": "d3_check_window"
        },
        {
          "text": "Search Maimy's wardrobe.",
          "delta": 0,
          "next": "d3_check_closet"
        }
      ]
    },
    "d3_check_window": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "The window is sealed with thick wooden planks. You try to push them, but the nails are long and solid. No gap to escape through.",
      "next": "d3_explore_continue"
    },
    "d3_explore_continue": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "You need to find something else before Maimy comes back.",
      "choices": [
        {
          "text": "Search Maimy's wardrobe.",
          "delta": 0,
          "next": "d3_check_closet"
        }
      ]
    },
    "d3_check_closet": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "You open the wardrobe slowly to avoid noise. Behind rows of clothes, there's a small black box in the lower corner.",
      "next": "d3_open_box"
    },
    "d3_open_box": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "You open the box. Your chest pounds. Inside are your wallet, your phone (screen shattered), and dozens of candid photos of you.",
      "next": "d3_creepy_photos"
    },
    "d3_creepy_photos": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "The photos were taken over the past months. You at a cafe, at a bus station, even sleeping through your own bedroom window.",
      "next": "d3_maimy_returns_sudden"
    },
    "d3_maimy_returns_sudden": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "CLACK! The doorknob turns. Maimy enters carrying a dinner tray.",
      "next": "d3_caught_snooping"
    },
    "d3_caught_snooping": {
      "bg": "room",
      "sprite": "serious",
      "name": "Maimy",
      "text": "Darling... what are you doing by that wardrobe? (Maimy sets the tray down and stares sharply at the box in your hands).",
      "choices": [
        {
          "text": "I-I was just looking for a jacket. It's a bit cold in here.",
          "delta": 0.1,
          "next": "d3_lie_excuse"
        },
        {
          "text": "What are all these photos, Maimy?! Are you insane? (Hold the box)",
          "delta": -0.3,
          "next": "d3_confront_box"
        }
      ]
    },
    "d3_lie_excuse": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Oh... cold, is it? Poor darling. Come sit on the bed, I'll wrap you in a blanket. That box... don't touch it. It's precious to me.",
      "next": "d3_dinner_start"
    },
    "d3_confront_box": {
      "bg": "room",
      "sprite": "killer",
      "name": "Maimy",
      "text": "Crazy? I did all this because I LOVE you! No one watches over you day and night like I do! Don't call me crazy!",
      "next": "d3_dinner_forced"
    },
    "d3_dinner_forced": {
      "bg": "room",
      "sprite": "killer",
      "narrator": true,
      "text": "Maimy shoves you onto the bed and snatches the box. She glares at you, breathing hard, then suddenly calms down.",
      "next": "d3_dinner_start"
    },
    "d3_dinner_start": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "I'm sorry if I got a little harsh. Let's have dinner. I made a special steak tonight. Let's talk while we eat, okay?",
      "next": "d3_dinner_chat"
    },
    "d3_dinner_chat": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Darling... be honest with me. Do you still miss your outside life? Your job, your friends?",
      "choices": [
        {
          "text": "I'd be lying if I said I didn't. I want to go back to my family.",
          "delta": -0.2,
          "next": "d3_dinner_honest"
        },
        {
          "text": "No. Since I've been here, I feel like you're all I need.",
          "delta": 0.3,
          "next": "d3_dinner_lie"
        }
      ]
    },
    "d3_dinner_honest": {
      "bg": "room",
      "sprite": "killer",
      "name": "Maimy",
      "text": "Family? Friends? They never valued you the way I do! They left you when things got hard! I'm the only one willing to do anything for you!",
      "next": "d3_dinner_conclusion"
    },
    "d3_dinner_lie": {
      "bg": "room",
      "sprite": "blush",
      "name": "Maimy",
      "text": "Awww... what a sweet mouth. (Maimy strokes your cheek). I promise I'll make you the happiest person in this world. Forever.",
      "next": "d3_dinner_conclusion"
    },
    "d3_dinner_conclusion": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "Dinner goes on in tense, terrifying silence. Every bite is watched by Maimy's unblinking eyes.",
      "next": "d3_night_time"
    },
    "d3_night_time": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "Night grows late. The main lights are off, leaving only a dim orange night lamp. Maimy sits at the edge of the bed, staring as you lie down.",
      "next": "d3_sleep_question"
    },
    "d3_sleep_question": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Darling... before we sleep, can I ask you something? Do you... love me?",
      "choices": [
        {
          "text": "I... need time, Maimy.",
          "delta": -0.15,
          "next": "d3_sleep_hesitate"
        },
        {
          "text": "Yes, I love you, Maimy.",
          "delta": 0.25,
          "next": "d3_sleep_accept"
        }
      ]
    },
    "d3_sleep_hesitate": {
      "bg": "room",
      "sprite": "angry",
      "name": "Maimy",
      "text": "Time? It's okay, we have plenty of TIME. We'll stay here every day until that feeling comes. Sleep now, darling... sweet dreams.",
      "next": "d3_end_episode"
    },
    "d3_sleep_accept": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "I knew it... (Maimy smiles happily). I'll make sure no one can separate us. Sleep, my darling.",
      "next": "d3_end_episode"
    },
    "d3_end_episode": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "special": "blackout",
      "text": "[ EPISODE 3 ENDING ]\nAnother day passes in Maimy's captivity. Your mind begins to blur between reality and fear.\nThis game will continue in the next update.",
      "next": null
    }
  }
};
