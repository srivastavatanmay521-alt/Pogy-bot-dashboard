const commandCatalog = [
  {
    "name": "help",
    "description": "Browse command categories with short command explanations.",
    "category": "Info",
    "aliases": [
      "h",
      "commands"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ping",
    "description": "Check PogyClient's network latency and heartbeat.",
    "category": "Info",
    "aliases": [
      "latency",
      "p"
    ],
    "cooldown": 0,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "serverinfo",
    "description": "Show a quick snapshot of the current server.",
    "category": "Info",
    "aliases": [
      "guildinfo",
      "si"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "userinfo",
    "description": "Show profile and server details for a user.",
    "category": "Info",
    "aliases": [
      "ui",
      "whois"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ban",
    "description": "Ban a user from the server.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "case",
    "description": "View or update a moderation case.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "clearwarns",
    "description": "Clear a user's warnings.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dm",
    "description": "Send a direct message to a user.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kick",
    "description": "Kick a user from the server.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lock",
    "description": "Lock the current channel.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "massban",
    "description": "Ban multiple user IDs at once.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nuke",
    "description": "Clone and reset the current channel.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "purge",
    "description": "Bulk delete recent messages.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "timeout",
    "description": "Temporarily timeout a member.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "unban",
    "description": "Unban a user by ID.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "unlock",
    "description": "Unlock the current channel.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "untimeout",
    "description": "Remove a timeout from a member.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "warn",
    "description": "Add or list warnings for a user.",
    "category": "Moderation",
    "aliases": [],
    "cooldown": 3,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dok",
    "description": "Run owner-only Dokdo utilities.",
    "category": "Owner",
    "aliases": [],
    "cooldown": 0,
    "ownerOnly": true,
    "slash": false
  },
  {
    "name": "nop",
    "description": "Manage no-prefix access for users.",
    "category": "Owner",
    "aliases": [],
    "cooldown": 0,
    "ownerOnly": true,
    "slash": true
  },
  {
    "name": "avatar",
    "description": "Show a user avatar in full quality.",
    "category": "Utility",
    "aliases": [
      "av",
      "pfp"
    ],
    "cooldown": 4,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "botstats",
    "description": "Show performance and usage stats for the bot.",
    "category": "Utility",
    "aliases": [
      "stats",
      "aboutbot"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "roleinfo",
    "description": "Inspect a server role and its metadata.",
    "category": "Utility",
    "aliases": [
      "ri"
    ],
    "cooldown": 5,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "acceptmarry",
    "description": "Accepts a marriage proposal.",
    "category": "Fun",
    "aliases": [
      "acceptmarry"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "admire",
    "description": "Admire a user.",
    "category": "Fun",
    "aliases": [
      "admire"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "adopt",
    "description": "Adopt a user.",
    "category": "Fun",
    "aliases": [
      "adopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "adorablerate",
    "description": "Check the adorable level.",
    "category": "Fun",
    "aliases": [
      "adorablerate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "agentrate",
    "description": "Check the agent level.",
    "category": "Fun",
    "aliases": [
      "agentrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "alienrate",
    "description": "Check the alien level.",
    "category": "Fun",
    "aliases": [
      "alienrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "alternatetext",
    "description": "Transform text using alternate text.",
    "category": "Fun",
    "aliases": [
      "alternatetext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ambush",
    "description": "Ambush a user.",
    "category": "Fun",
    "aliases": [
      "ambush"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "angryrate",
    "description": "Check the angry level.",
    "category": "Fun",
    "aliases": [
      "angryrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "annoy",
    "description": "Annoy a user.",
    "category": "Fun",
    "aliases": [
      "annoy"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "apocalypseplan",
    "description": "Get a random apocalypse plan prompt.",
    "category": "Fun",
    "aliases": [
      "apocalypseplan"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "applaud",
    "description": "Applaud a user.",
    "category": "Fun",
    "aliases": [
      "applaud"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "arrest",
    "description": "Arrest a user.",
    "category": "Fun",
    "aliases": [
      "arrest"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "awaken",
    "description": "Awaken a user.",
    "category": "Fun",
    "aliases": [
      "awaken"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "awkwardrate",
    "description": "Check the awkward level.",
    "category": "Fun",
    "aliases": [
      "awkwardrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "babyrate",
    "description": "Check the baby level.",
    "category": "Fun",
    "aliases": [
      "babyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "backstab",
    "description": "Backstab a user.",
    "category": "Fun",
    "aliases": [
      "backstab"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "basedrate",
    "description": "Check the based level.",
    "category": "Fun",
    "aliases": [
      "basedrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "beastrate",
    "description": "Check the beast level.",
    "category": "Fun",
    "aliases": [
      "beastrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bestiecheck",
    "description": "Get a random best friend opinion prompt.",
    "category": "Fun",
    "aliases": [
      "bestiecheck"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "blame",
    "description": "Blame a user.",
    "category": "Fun",
    "aliases": [
      "blame"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "blindfold",
    "description": "Blindfold a user.",
    "category": "Fun",
    "aliases": [
      "blindfold"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "blockcaps",
    "description": "Transform text using block caps.",
    "category": "Fun",
    "aliases": [
      "blockcaps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "blush",
    "description": "Blush.",
    "category": "Fun",
    "aliases": [
      "blush"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bonk",
    "description": "Bonk a user.",
    "category": "Fun",
    "aliases": [
      "bonk"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "boop",
    "description": "Boop a user.",
    "category": "Fun",
    "aliases": [
      "boop"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bossrate",
    "description": "Check the boss level.",
    "category": "Fun",
    "aliases": [
      "bossrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "boxtext",
    "description": "Transform text using box text.",
    "category": "Fun",
    "aliases": [
      "boxtext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "brag",
    "description": "Brag at a user.",
    "category": "Fun",
    "aliases": [
      "brag"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "brainrate",
    "description": "Check the brain level.",
    "category": "Fun",
    "aliases": [
      "brainrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bucketlist",
    "description": "Get a random bucket-list item prompt.",
    "category": "Fun",
    "aliases": [
      "bucketlist"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bump",
    "description": "Bump a user.",
    "category": "Fun",
    "aliases": [
      "bump"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cackle",
    "description": "Cackle at a user.",
    "category": "Fun",
    "aliases": [
      "cackle"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "calmrate",
    "description": "Check the calm level.",
    "category": "Fun",
    "aliases": [
      "calmrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "caress",
    "description": "Caress a user.",
    "category": "Fun",
    "aliases": [
      "caress"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carry",
    "description": "Carry a user.",
    "category": "Fun",
    "aliases": [
      "carry"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "challenge",
    "description": "Challenge a user.",
    "category": "Fun",
    "aliases": [
      "challenge"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "challengeuser",
    "description": "Challenge a user.",
    "category": "Fun",
    "aliases": [
      "challengeuser"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chanttext",
    "description": "Transform text using chant text.",
    "category": "Fun",
    "aliases": [
      "chanttext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaoscorerate",
    "description": "Check the chaos core level.",
    "category": "Fun",
    "aliases": [
      "chaoscorerate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaosquestion",
    "description": "Get a random chaotic choice prompt.",
    "category": "Fun",
    "aliases": [
      "chaosquestion"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaoticrate",
    "description": "Check the chaotic level.",
    "category": "Fun",
    "aliases": [
      "chaoticrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "charm",
    "description": "Charm a user.",
    "category": "Fun",
    "aliases": [
      "charm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chase",
    "description": "Chase a user.",
    "category": "Fun",
    "aliases": [
      "chase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cheer",
    "description": "Cheer a user.",
    "category": "Fun",
    "aliases": [
      "cheer"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cherish",
    "description": "Cherish a user.",
    "category": "Fun",
    "aliases": [
      "cherish"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "claptext",
    "description": "Transform text using clap text.",
    "category": "Fun",
    "aliases": [
      "claptext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "classyrate",
    "description": "Check the classy level.",
    "category": "Fun",
    "aliases": [
      "classyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "clinch",
    "description": "Clinch a user.",
    "category": "Fun",
    "aliases": [
      "clinch"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "clownrate",
    "description": "Check the clown level.",
    "category": "Fun",
    "aliases": [
      "clownrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "coddle",
    "description": "Coddle a user.",
    "category": "Fun",
    "aliases": [
      "coddle"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "coinflip",
    "description": "Generate a random coin flip result.",
    "category": "Fun",
    "aliases": [
      "coinflip"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "comfort",
    "description": "Comfort a user.",
    "category": "Fun",
    "aliases": [
      "comfort"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "comfortpick",
    "description": "Get a random comfort pick prompt.",
    "category": "Fun",
    "aliases": [
      "comfortpick"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "confession",
    "description": "Get a random confession prompt.",
    "category": "Fun",
    "aliases": [
      "confession"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "confront",
    "description": "Confront a user.",
    "category": "Fun",
    "aliases": [
      "confront"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "confuse",
    "description": "Confuse a user.",
    "category": "Fun",
    "aliases": [
      "confuse"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "congratulate",
    "description": "Congratulate a user.",
    "category": "Fun",
    "aliases": [
      "congratulate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "coolrate",
    "description": "Check the cool level.",
    "category": "Fun",
    "aliases": [
      "coolrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cornyrate",
    "description": "Check the corny level.",
    "category": "Fun",
    "aliases": [
      "cornyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cradle",
    "description": "Cradle a user.",
    "category": "Fun",
    "aliases": [
      "cradle"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "crown",
    "description": "Crown a user.",
    "category": "Fun",
    "aliases": [
      "crown"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "crushquestion",
    "description": "Get a random crush-related answer prompt.",
    "category": "Fun",
    "aliases": [
      "crushquestion"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cry",
    "description": "Cry.",
    "category": "Fun",
    "aliases": [
      "cry"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuddle",
    "description": "Cuddle a user.",
    "category": "Fun",
    "aliases": [
      "cuddle"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cursedrate",
    "description": "Check the cursed level.",
    "category": "Fun",
    "aliases": [
      "cursedrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dance",
    "description": "Dance.",
    "category": "Fun",
    "aliases": [
      "dance"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dangerousrate",
    "description": "Check the dangerous level.",
    "category": "Fun",
    "aliases": [
      "dangerousrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dare",
    "description": "Get a random dare question.",
    "category": "Fun",
    "aliases": [
      "dare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daydream",
    "description": "Get a random daydream prompt.",
    "category": "Fun",
    "aliases": [
      "daydream"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "debate",
    "description": "Debate a user.",
    "category": "Fun",
    "aliases": [
      "debate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "debatebait",
    "description": "Get a random debate topic prompt.",
    "category": "Fun",
    "aliases": [
      "debatebait"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "declinemarry",
    "description": "Declines a marriage proposal.",
    "category": "Fun",
    "aliases": [
      "declinemarry"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "defend",
    "description": "Defend a user.",
    "category": "Fun",
    "aliases": [
      "defend"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "deviousrate",
    "description": "Check the devious level.",
    "category": "Fun",
    "aliases": [
      "deviousrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "devour",
    "description": "Devour a user (not literally).",
    "category": "Fun",
    "aliases": [
      "devour"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "diceroll",
    "description": "Generate a random dice roll result.",
    "category": "Fun",
    "aliases": [
      "diceroll"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "disown",
    "description": "Disown a user.",
    "category": "Fun",
    "aliases": [
      "disown"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "divorce",
    "description": "Divorce your partner.",
    "category": "Fun",
    "aliases": [
      "divorce"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dottext",
    "description": "Transform text using dot text.",
    "category": "Fun",
    "aliases": [
      "dottext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "draft",
    "description": "Draft a user.",
    "category": "Fun",
    "aliases": [
      "draft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "drag",
    "description": "Drag a user.",
    "category": "Fun",
    "aliases": [
      "drag"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dreamjob",
    "description": "Get a random dream job prompt.",
    "category": "Fun",
    "aliases": [
      "dreamjob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "driprate",
    "description": "Check the drip level.",
    "category": "Fun",
    "aliases": [
      "driprate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "duel",
    "description": "Duel a user.",
    "category": "Fun",
    "aliases": [
      "duel"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "elbow",
    "description": "Elbow a user.",
    "category": "Fun",
    "aliases": [
      "elbow"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "emojify",
    "description": "Emojify a text.",
    "category": "Fun",
    "aliases": [
      "emojify"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "energyrate",
    "description": "Check the energy level.",
    "category": "Fun",
    "aliases": [
      "energyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "enlighten",
    "description": "Enlighten a user.",
    "category": "Fun",
    "aliases": [
      "enlighten"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "escort",
    "description": "Escort a user.",
    "category": "Fun",
    "aliases": [
      "escort"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "evilrate",
    "description": "Check the evil level.",
    "category": "Fun",
    "aliases": [
      "evilrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "facepalm",
    "description": "Facepalm a user.",
    "category": "Fun",
    "aliases": [
      "facepalm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fact",
    "description": "Provides a random fact.",
    "category": "Fun",
    "aliases": [
      "fact"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fakeheadline",
    "description": "Get a random fake headline prompt.",
    "category": "Fun",
    "aliases": [
      "fakeheadline"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fashionrate",
    "description": "Check the fashion level.",
    "category": "Fun",
    "aliases": [
      "fashionrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "feed",
    "description": "Feed a user.",
    "category": "Fun",
    "aliases": [
      "feed"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "feralrate",
    "description": "Check the feral level.",
    "category": "Fun",
    "aliases": [
      "feralrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fictionalfriend",
    "description": "Get a random fictional friend pick prompt.",
    "category": "Fun",
    "aliases": [
      "fictionalfriend"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "firstimpression",
    "description": "Get a random first impression prompt.",
    "category": "Fun",
    "aliases": [
      "firstimpression"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fistbump",
    "description": "Fistbump a user.",
    "category": "Fun",
    "aliases": [
      "fistbump"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "flex",
    "description": "Get a random flex prompt.",
    "category": "Fun",
    "aliases": [
      "flex"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "flexon",
    "description": "Flex On a user.",
    "category": "Fun",
    "aliases": [
      "flexon"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "flick",
    "description": "Flick a user.",
    "category": "Fun",
    "aliases": [
      "flick"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "flutter",
    "description": "Flutter at a user.",
    "category": "Fun",
    "aliases": [
      "flutter"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "focusrate",
    "description": "Check the focus level.",
    "category": "Fun",
    "aliases": [
      "focusrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "forgive",
    "description": "Forgive a user.",
    "category": "Fun",
    "aliases": [
      "forgive"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fortune",
    "description": "Generate a random fortune result.",
    "category": "Fun",
    "aliases": [
      "fortune"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "funnyrate",
    "description": "Check the funny level.",
    "category": "Fun",
    "aliases": [
      "funnyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gasup",
    "description": "Gas Up a user.",
    "category": "Fun",
    "aliases": [
      "gasup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gatekeep",
    "description": "Gatekeep from a user.",
    "category": "Fun",
    "aliases": [
      "gatekeep"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gayrate",
    "description": "Check how much of a gay you are.",
    "category": "Fun",
    "aliases": [
      "gayrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gecg",
    "description": "Get a random GECG image.",
    "category": "Fun",
    "aliases": [
      "gecg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "geekrate",
    "description": "Check the geek level.",
    "category": "Fun",
    "aliases": [
      "geekrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "geniusrate",
    "description": "Check the genius level.",
    "category": "Fun",
    "aliases": [
      "geniusrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ghostrate",
    "description": "Check the ghost level.",
    "category": "Fun",
    "aliases": [
      "ghostrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "glare",
    "description": "Glare a user.",
    "category": "Fun",
    "aliases": [
      "glare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "glitchtext",
    "description": "Transform text using glitch text.",
    "category": "Fun",
    "aliases": [
      "glitchtext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "goblinrate",
    "description": "Check the goblin level.",
    "category": "Fun",
    "aliases": [
      "goblinrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "goofyrate",
    "description": "Check the goofy level.",
    "category": "Fun",
    "aliases": [
      "goofyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "greenflag",
    "description": "Get a random green flag prompt.",
    "category": "Fun",
    "aliases": [
      "greenflag"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "greet",
    "description": "Greet a user.",
    "category": "Fun",
    "aliases": [
      "greet"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gremlinrate",
    "description": "Check the gremlin level.",
    "category": "Fun",
    "aliases": [
      "gremlinrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "growl",
    "description": "Growl at a user.",
    "category": "Fun",
    "aliases": [
      "growl"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "grumbleat",
    "description": "Grumble At a user.",
    "category": "Fun",
    "aliases": [
      "grumbleat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "grumpyrate",
    "description": "Check the grumpy level.",
    "category": "Fun",
    "aliases": [
      "grumpyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "guiltypleasure",
    "description": "Get a random guilty pleasure prompt.",
    "category": "Fun",
    "aliases": [
      "guiltypleasure"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "handshake",
    "description": "Handshake a user.",
    "category": "Fun",
    "aliases": [
      "handshake"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "happyrate",
    "description": "Check the happy level.",
    "category": "Fun",
    "aliases": [
      "happyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "haunt",
    "description": "Haunt a user.",
    "category": "Fun",
    "aliases": [
      "haunt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "headpat",
    "description": "Headpat a user.",
    "category": "Fun",
    "aliases": [
      "headpat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "heal",
    "description": "Heal a user.",
    "category": "Fun",
    "aliases": [
      "heal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "heroicrate",
    "description": "Check the heroic level.",
    "category": "Fun",
    "aliases": [
      "heroicrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "heroorigin",
    "description": "Get a random hero origin story prompt.",
    "category": "Fun",
    "aliases": [
      "heroorigin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hiddentalent",
    "description": "Get a random hidden talent prompt.",
    "category": "Fun",
    "aliases": [
      "hiddentalent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hotrate",
    "description": "Check the hot level.",
    "category": "Fun",
    "aliases": [
      "hotrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hottake",
    "description": "Get a random hot take prompt.",
    "category": "Fun",
    "aliases": [
      "hottake"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hover",
    "description": "Hover around a user.",
    "category": "Fun",
    "aliases": [
      "hover"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hype",
    "description": "Hype a user.",
    "category": "Fun",
    "aliases": [
      "hype"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hypnotize",
    "description": "Hypnotize a user.",
    "category": "Fun",
    "aliases": [
      "hypnotize"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "impersonate",
    "description": "Impersonate a user.",
    "category": "Fun",
    "aliases": [
      "impersonate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "interrogate",
    "description": "Interrogate a user.",
    "category": "Fun",
    "aliases": [
      "interrogate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "investigate",
    "description": "Investigate a user.",
    "category": "Fun",
    "aliases": [
      "investigate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "jab",
    "description": "Jab a user.",
    "category": "Fun",
    "aliases": [
      "jab"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "jawdrop",
    "description": "Jaw-drop at a user.",
    "category": "Fun",
    "aliases": [
      "jawdrop"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "judge",
    "description": "Judge a user.",
    "category": "Fun",
    "aliases": [
      "judge"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "juggle",
    "description": "Juggle a user.",
    "category": "Fun",
    "aliases": [
      "juggle"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kidnap",
    "description": "Kidnap a user.",
    "category": "Fun",
    "aliases": [
      "kidnap"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kill",
    "description": "Kill a user.",
    "category": "Fun",
    "aliases": [
      "kill"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kiss",
    "description": "Kiss a user.",
    "category": "Fun",
    "aliases": [
      "kiss"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kneel",
    "description": "Kneel before a user.",
    "category": "Fun",
    "aliases": [
      "kneel"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "laughat",
    "description": "Laugh At a user.",
    "category": "Fun",
    "aliases": [
      "laughat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lecture",
    "description": "Lecture a user.",
    "category": "Fun",
    "aliases": [
      "lecture"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leech",
    "description": "Leech off a user.",
    "category": "Fun",
    "aliases": [
      "leech"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lick",
    "description": "Lick a user.",
    "category": "Fun",
    "aliases": [
      "lick"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lifelesson",
    "description": "Get a random life lesson prompt.",
    "category": "Fun",
    "aliases": [
      "lifelesson"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lowercase",
    "description": "Transform text using lowercase text.",
    "category": "Fun",
    "aliases": [
      "lowercase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "luckycolor",
    "description": "Generate a random lucky color result.",
    "category": "Fun",
    "aliases": [
      "luckycolor"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "luckyday",
    "description": "Generate a random lucky day result.",
    "category": "Fun",
    "aliases": [
      "luckyday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "luckyletter",
    "description": "Generate a random lucky letter result.",
    "category": "Fun",
    "aliases": [
      "luckyletter"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "luckyrate",
    "description": "Check the lucky level.",
    "category": "Fun",
    "aliases": [
      "luckyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "magic8",
    "description": "Generate a random magic 8 result.",
    "category": "Fun",
    "aliases": [
      "magic8"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "magicrate",
    "description": "Check the magic level.",
    "category": "Fun",
    "aliases": [
      "magicrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "marry",
    "description": "Marry two users.",
    "category": "Fun",
    "aliases": [
      "marry"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "matchpairs",
    "description": "Play Match Pairs.",
    "category": "Fun",
    "aliases": [
      "matchpairs"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "megumin",
    "description": "Get a random Megumin image.",
    "category": "Fun",
    "aliases": [
      "megumin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "memerate",
    "description": "Check the meme level.",
    "category": "Fun",
    "aliases": [
      "memerate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "menace",
    "description": "Menace a user.",
    "category": "Fun",
    "aliases": [
      "menace"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "menacerate",
    "description": "Check the menace level.",
    "category": "Fun",
    "aliases": [
      "menacerate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "meow",
    "description": "Get a random meow image.",
    "category": "Fun",
    "aliases": [
      "meow"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "midnightthought",
    "description": "Get a random midnight thought prompt.",
    "category": "Fun",
    "aliases": [
      "midnightthought"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mimic",
    "description": "Mimic a user.",
    "category": "Fun",
    "aliases": [
      "mimic"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "minesweeper",
    "description": "Play Minesweeper.",
    "category": "Fun",
    "aliases": [
      "minesweeper"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mirrorwords",
    "description": "Transform text using mirror words.",
    "category": "Fun",
    "aliases": [
      "mirrorwords"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mocktext",
    "description": "Transform text using mock text.",
    "category": "Fun",
    "aliases": [
      "mocktext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "moodprompt",
    "description": "Get a random mood prompt.",
    "category": "Fun",
    "aliases": [
      "moodprompt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "moraldilemma",
    "description": "Get a random moral dilemma prompt.",
    "category": "Fun",
    "aliases": [
      "moraldilemma"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "morningroutine",
    "description": "Get a random morning routine prompt.",
    "category": "Fun",
    "aliases": [
      "morningroutine"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "motivate",
    "description": "Motivate a user.",
    "category": "Fun",
    "aliases": [
      "motivate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mug",
    "description": "Mug a user.",
    "category": "Fun",
    "aliases": [
      "mug"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mysteriousrate",
    "description": "Check the mysterious level.",
    "category": "Fun",
    "aliases": [
      "mysteriousrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nerdrate",
    "description": "Check the nerd level.",
    "category": "Fun",
    "aliases": [
      "nerdrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nightmarefuel",
    "description": "Get a random nightmare fuel prompt.",
    "category": "Fun",
    "aliases": [
      "nightmarefuel"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nom",
    "description": "Nom a user.",
    "category": "Fun",
    "aliases": [
      "nom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nostalgia",
    "description": "Get a random nostalgic memory prompt.",
    "category": "Fun",
    "aliases": [
      "nostalgia"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "npcrate",
    "description": "Check the npc level.",
    "category": "Fun",
    "aliases": [
      "npcrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nudge",
    "description": "Nudge a user.",
    "category": "Fun",
    "aliases": [
      "nudge"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "orbit",
    "description": "Orbit a user.",
    "category": "Fun",
    "aliases": [
      "orbit"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "outsmart",
    "description": "Outsmart a user.",
    "category": "Fun",
    "aliases": [
      "outsmart"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "override",
    "description": "Override a user.",
    "category": "Fun",
    "aliases": [
      "override"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "overthinkrate",
    "description": "Check the overthink level.",
    "category": "Fun",
    "aliases": [
      "overthinkrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "paranoia",
    "description": "Get a random paranoia question.",
    "category": "Fun",
    "aliases": [
      "paranoia"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "partyrate",
    "description": "Check the party level.",
    "category": "Fun",
    "aliases": [
      "partyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pat",
    "description": "Pat a user.",
    "category": "Fun",
    "aliases": [
      "pat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "patiencerate",
    "description": "Check the patience level.",
    "category": "Fun",
    "aliases": [
      "patiencerate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "peerat",
    "description": "Peer At a user.",
    "category": "Fun",
    "aliases": [
      "peerat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "petpeeve",
    "description": "Get a random pet peeve prompt.",
    "category": "Fun",
    "aliases": [
      "petpeeve"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pettycheck",
    "description": "Petty Check a user.",
    "category": "Fun",
    "aliases": [
      "pettycheck"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "piraterate",
    "description": "Check the pirate level.",
    "category": "Fun",
    "aliases": [
      "piraterate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "playlistmood",
    "description": "Get a random playlist mood prompt.",
    "category": "Fun",
    "aliases": [
      "playlistmood"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "plotstarter",
    "description": "Get a random story starter prompt.",
    "category": "Fun",
    "aliases": [
      "plotstarter"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pointat",
    "description": "Point At a user.",
    "category": "Fun",
    "aliases": [
      "pointat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "poke",
    "description": "Poke a user.",
    "category": "Fun",
    "aliases": [
      "poke"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "powerrate",
    "description": "Check the power level.",
    "category": "Fun",
    "aliases": [
      "powerrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "praise",
    "description": "Praise a user.",
    "category": "Fun",
    "aliases": [
      "praise"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "prank",
    "description": "Prank a user.",
    "category": "Fun",
    "aliases": [
      "prank"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "protect",
    "description": "Protect a user.",
    "category": "Fun",
    "aliases": [
      "protect"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rally",
    "description": "Rally a user.",
    "category": "Fun",
    "aliases": [
      "rally"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomaesthetic",
    "description": "Generate a random random aesthetic result.",
    "category": "Fun",
    "aliases": [
      "randomaesthetic"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomanimal",
    "description": "Generate a random random animal result.",
    "category": "Fun",
    "aliases": [
      "randomanimal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomartifact",
    "description": "Generate a random random artifact result.",
    "category": "Fun",
    "aliases": [
      "randomartifact"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randombandname",
    "description": "Generate a random random band name result.",
    "category": "Fun",
    "aliases": [
      "randombandname"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomblessing",
    "description": "Generate a random random blessing result.",
    "category": "Fun",
    "aliases": [
      "randomblessing"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomboss",
    "description": "Generate a random random boss result.",
    "category": "Fun",
    "aliases": [
      "randomboss"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomchallenge",
    "description": "Generate a random random challenge result.",
    "category": "Fun",
    "aliases": [
      "randomchallenge"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomcurse",
    "description": "Generate a random random curse result.",
    "category": "Fun",
    "aliases": [
      "randomcurse"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomdrink",
    "description": "Generate a random random drink result.",
    "category": "Fun",
    "aliases": [
      "randomdrink"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomemoji",
    "description": "Generate a random random emoji result.",
    "category": "Fun",
    "aliases": [
      "randomemoji"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomexcuse",
    "description": "Generate a random random excuse result.",
    "category": "Fun",
    "aliases": [
      "randomexcuse"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomgame",
    "description": "Generate a random random game result.",
    "category": "Fun",
    "aliases": [
      "randomgame"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomgenre",
    "description": "Generate a random random genre result.",
    "category": "Fun",
    "aliases": [
      "randomgenre"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomhobby",
    "description": "Generate a random random hobby result.",
    "category": "Fun",
    "aliases": [
      "randomhobby"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomjob",
    "description": "Generate a random random job result.",
    "category": "Fun",
    "aliases": [
      "randomjob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randommeal",
    "description": "Generate a random random meal result.",
    "category": "Fun",
    "aliases": [
      "randommeal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randommission",
    "description": "Generate a random random mission result.",
    "category": "Fun",
    "aliases": [
      "randommission"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randommood",
    "description": "Generate a random random mood result.",
    "category": "Fun",
    "aliases": [
      "randommood"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomnickname",
    "description": "Generate a random random nickname result.",
    "category": "Fun",
    "aliases": [
      "randomnickname"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randompet",
    "description": "Generate a random random pet result.",
    "category": "Fun",
    "aliases": [
      "randompet"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomplanet",
    "description": "Generate a random random planet result.",
    "category": "Fun",
    "aliases": [
      "randomplanet"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randompower",
    "description": "Generate a random random power result.",
    "category": "Fun",
    "aliases": [
      "randompower"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomquest",
    "description": "Generate a random random quest result.",
    "category": "Fun",
    "aliases": [
      "randomquest"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomroom",
    "description": "Generate a random random room result.",
    "category": "Fun",
    "aliases": [
      "randomroom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomseason",
    "description": "Generate a random random season result.",
    "category": "Fun",
    "aliases": [
      "randomseason"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomshipname",
    "description": "Generate a random random ship name result.",
    "category": "Fun",
    "aliases": [
      "randomshipname"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomsnack",
    "description": "Generate a random random snack result.",
    "category": "Fun",
    "aliases": [
      "randomsnack"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomteamrole",
    "description": "Generate a random random team role result.",
    "category": "Fun",
    "aliases": [
      "randomteamrole"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomtitle",
    "description": "Generate a random random title result.",
    "category": "Fun",
    "aliases": [
      "randomtitle"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomvacation",
    "description": "Generate a random random vacation result.",
    "category": "Fun",
    "aliases": [
      "randomvacation"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomvibe",
    "description": "Generate a random random vibe result.",
    "category": "Fun",
    "aliases": [
      "randomvibe"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomweakness",
    "description": "Generate a random random weakness result.",
    "category": "Fun",
    "aliases": [
      "randomweakness"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "randomweather",
    "description": "Generate a random random weather result.",
    "category": "Fun",
    "aliases": [
      "randomweather"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "reaction",
    "description": "Test your reaction time.",
    "category": "Fun",
    "aliases": [
      "reaction"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "realitycheck",
    "description": "Get a random reality check prompt.",
    "category": "Fun",
    "aliases": [
      "realitycheck"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "redflag",
    "description": "Get a random red flag prompt.",
    "category": "Fun",
    "aliases": [
      "redflag"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "regretcheck",
    "description": "Get a random regret prompt.",
    "category": "Fun",
    "aliases": [
      "regretcheck"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "remind",
    "description": "Remind a user.",
    "category": "Fun",
    "aliases": [
      "remind"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rescue",
    "description": "Rescue a user.",
    "category": "Fun",
    "aliases": [
      "rescue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "reverse",
    "description": "Transform text using reverse text.",
    "category": "Fun",
    "aliases": [
      "reverse"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "roast",
    "description": "Roast a user.",
    "category": "Fun",
    "aliases": [
      "roast"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "roommatego",
    "description": "Get a random roommate rule prompt.",
    "category": "Fun",
    "aliases": [
      "roommatego"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "royaltyrate",
    "description": "Check the royalty level.",
    "category": "Fun",
    "aliases": [
      "royaltyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rps",
    "description": "Play rock paper scissors with the bot.",
    "category": "Fun",
    "aliases": [
      "rps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "salute",
    "description": "Salute a user.",
    "category": "Fun",
    "aliases": [
      "salute"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "savagerate",
    "description": "Check the savage level.",
    "category": "Fun",
    "aliases": [
      "savagerate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "scare",
    "description": "Scare a user.",
    "category": "Fun",
    "aliases": [
      "scare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "scaryrate",
    "description": "Check the scary level.",
    "category": "Fun",
    "aliases": [
      "scaryrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "schemerate",
    "description": "Check the scheme level.",
    "category": "Fun",
    "aliases": [
      "schemerate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "scold",
    "description": "Scold a user.",
    "category": "Fun",
    "aliases": [
      "scold"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "screamat",
    "description": "Scream At a user.",
    "category": "Fun",
    "aliases": [
      "screamat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "secretwish",
    "description": "Get a random secret wish prompt.",
    "category": "Fun",
    "aliases": [
      "secretwish"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sentencecase",
    "description": "Transform text using sentence case.",
    "category": "Fun",
    "aliases": [
      "sentencecase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "serenade",
    "description": "Serenade a user.",
    "category": "Fun",
    "aliases": [
      "serenade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "shadow",
    "description": "Shadow a user.",
    "category": "Fun",
    "aliases": [
      "shadow"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ship",
    "description": "Ship two users",
    "category": "Fun",
    "aliases": [
      "ship"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "shock",
    "description": "Shock a user.",
    "category": "Fun",
    "aliases": [
      "shock"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "shove",
    "description": "Shove a user.",
    "category": "Fun",
    "aliases": [
      "shove"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "showerthought",
    "description": "Get a random shower thought prompt.",
    "category": "Fun",
    "aliases": [
      "showerthought"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "shrug",
    "description": "Shrug at a user.",
    "category": "Fun",
    "aliases": [
      "shrug"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "shrugat",
    "description": "Shrug At a user.",
    "category": "Fun",
    "aliases": [
      "shrugat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sideeye",
    "description": "Side Eye a user.",
    "category": "Fun",
    "aliases": [
      "sideeye"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "signalboost",
    "description": "Signal Boost a user.",
    "category": "Fun",
    "aliases": [
      "signalboost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sillyrate",
    "description": "Check the silly level.",
    "category": "Fun",
    "aliases": [
      "sillyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "simprate",
    "description": "Check how much of a simp you are.",
    "category": "Fun",
    "aliases": [
      "simprate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "singto",
    "description": "Sing To a user.",
    "category": "Fun",
    "aliases": [
      "singto"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "slap",
    "description": "Slap a user.",
    "category": "Fun",
    "aliases": [
      "slap"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sleepyrate",
    "description": "Check the sleepy level.",
    "category": "Fun",
    "aliases": [
      "sleepyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "slot",
    "description": "Play Slots.",
    "category": "Fun",
    "aliases": [
      "slot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "slowclap",
    "description": "Slow Clap a user.",
    "category": "Fun",
    "aliases": [
      "slowclap"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "slugtext",
    "description": "Transform text using slug text.",
    "category": "Fun",
    "aliases": [
      "slugtext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "smoothrate",
    "description": "Check the smooth level.",
    "category": "Fun",
    "aliases": [
      "smoothrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "snackquestion",
    "description": "Get a random snack ranking prompt.",
    "category": "Fun",
    "aliases": [
      "snackquestion"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "snackrate",
    "description": "Check the snack level.",
    "category": "Fun",
    "aliases": [
      "snackrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sneakup",
    "description": "Sneak Up a user.",
    "category": "Fun",
    "aliases": [
      "sneakup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "socialbattery",
    "description": "Get a random social battery story prompt.",
    "category": "Fun",
    "aliases": [
      "socialbattery"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "socialrate",
    "description": "Check the social level.",
    "category": "Fun",
    "aliases": [
      "socialrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "socialrisk",
    "description": "Get a random social risk prompt.",
    "category": "Fun",
    "aliases": [
      "socialrisk"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spacedtext",
    "description": "Transform text using spaced text.",
    "category": "Fun",
    "aliases": [
      "spacedtext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spar",
    "description": "Spar a user.",
    "category": "Fun",
    "aliases": [
      "spar"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spicyrate",
    "description": "Check the spicy level.",
    "category": "Fun",
    "aliases": [
      "spicyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spoilertext",
    "description": "Transform text using spoiler text.",
    "category": "Fun",
    "aliases": [
      "spoilertext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sponsor",
    "description": "Sponsor a user.",
    "category": "Fun",
    "aliases": [
      "sponsor"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spookyrate",
    "description": "Check the spooky level.",
    "category": "Fun",
    "aliases": [
      "spookyrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spotlight",
    "description": "Spotlight a user.",
    "category": "Fun",
    "aliases": [
      "spotlight"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "squish",
    "description": "Squish a user.",
    "category": "Fun",
    "aliases": [
      "squish"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "squishtext",
    "description": "Transform text using squish text.",
    "category": "Fun",
    "aliases": [
      "squishtext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stampapprove",
    "description": "Stamp Approve a user.",
    "category": "Fun",
    "aliases": [
      "stampapprove"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stareat",
    "description": "Stare At a user.",
    "category": "Fun",
    "aliases": [
      "stareat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "starrate",
    "description": "Check the star level.",
    "category": "Fun",
    "aliases": [
      "starrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stealfrom",
    "description": "Steal From a user.",
    "category": "Fun",
    "aliases": [
      "stealfrom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stomp",
    "description": "Stomp a user.",
    "category": "Fun",
    "aliases": [
      "stomp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stretchtext",
    "description": "Transform text using stretch text.",
    "category": "Fun",
    "aliases": [
      "stretchtext"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "summon",
    "description": "Summon a user.",
    "category": "Fun",
    "aliases": [
      "summon"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "survivalplan",
    "description": "Get a random survival plan prompt.",
    "category": "Fun",
    "aliases": [
      "survivalplan"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "susrate",
    "description": "Check the sus level.",
    "category": "Fun",
    "aliases": [
      "susrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "swagrate",
    "description": "Check the swag level.",
    "category": "Fun",
    "aliases": [
      "swagrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "swapcase",
    "description": "Transform text using swap case.",
    "category": "Fun",
    "aliases": [
      "swapcase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sweetheartrate",
    "description": "Check the sweetheart level.",
    "category": "Fun",
    "aliases": [
      "sweetheartrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tackle",
    "description": "Tackle a user.",
    "category": "Fun",
    "aliases": [
      "tackle"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "taunt",
    "description": "Taunt a user.",
    "category": "Fun",
    "aliases": [
      "taunt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "teamrate",
    "description": "Check the team level.",
    "category": "Fun",
    "aliases": [
      "teamrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tease",
    "description": "Tease a user.",
    "category": "Fun",
    "aliases": [
      "tease"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "thank",
    "description": "Thank a user.",
    "category": "Fun",
    "aliases": [
      "thank"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "throwshade",
    "description": "Throw Shade a user.",
    "category": "Fun",
    "aliases": [
      "throwshade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tictactoe",
    "description": "Play TicTacToe with another user.",
    "category": "Fun",
    "aliases": [
      "tictactoe"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tinyvictory",
    "description": "Get a random tiny victory prompt.",
    "category": "Fun",
    "aliases": [
      "tinyvictory"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tiptoe",
    "description": "Tiptoe around a user.",
    "category": "Fun",
    "aliases": [
      "tiptoe"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "titleize",
    "description": "Transform text using titleize.",
    "category": "Fun",
    "aliases": [
      "titleize"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "toast",
    "description": "Toast a user.",
    "category": "Fun",
    "aliases": [
      "toast"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "troll",
    "description": "Troll a user.",
    "category": "Fun",
    "aliases": [
      "troll"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "trollrate",
    "description": "Check the troll level.",
    "category": "Fun",
    "aliases": [
      "trollrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "trustfall",
    "description": "Trust Fall a user.",
    "category": "Fun",
    "aliases": [
      "trustfall"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "trustquestion",
    "description": "Get a random trust answer prompt.",
    "category": "Fun",
    "aliases": [
      "trustquestion"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "truth",
    "description": "Get a random truth question.",
    "category": "Fun",
    "aliases": [
      "truth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "truthbomb",
    "description": "Get a random truth bomb prompt.",
    "category": "Fun",
    "aliases": [
      "truthbomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "unpopularopinion",
    "description": "Get a random unpopular opinion prompt.",
    "category": "Fun",
    "aliases": [
      "unpopularopinion"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "uppercase",
    "description": "Transform text using uppercase text.",
    "category": "Fun",
    "aliases": [
      "uppercase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "vacationpick",
    "description": "Get a random vacation destination prompt.",
    "category": "Fun",
    "aliases": [
      "vacationpick"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "vampirerate",
    "description": "Check the vampire level.",
    "category": "Fun",
    "aliases": [
      "vampirerate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "vibecheckuser",
    "description": "Vibe Check a user.",
    "category": "Fun",
    "aliases": [
      "vibecheckuser"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "villainorigin",
    "description": "Get a random villain origin story prompt.",
    "category": "Fun",
    "aliases": [
      "villainorigin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "villainrate",
    "description": "Check the villain level.",
    "category": "Fun",
    "aliases": [
      "villainrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "vowelspam",
    "description": "Transform text using vowel spam.",
    "category": "Fun",
    "aliases": [
      "vowelspam"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "wagfinger",
    "description": "Wag Finger a user.",
    "category": "Fun",
    "aliases": [
      "wagfinger"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "wallpaper",
    "description": "Get a random anime wallpaper.",
    "category": "Fun",
    "aliases": [
      "wallpaper"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "wavecase",
    "description": "Transform text using wave case.",
    "category": "Fun",
    "aliases": [
      "wavecase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weekendplan",
    "description": "Get a random weekend plan prompt.",
    "category": "Fun",
    "aliases": [
      "weekendplan"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weirdfood",
    "description": "Get a random weird food opinion prompt.",
    "category": "Fun",
    "aliases": [
      "weirdfood"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weirdtalent",
    "description": "Get a random weird talent prompt.",
    "category": "Fun",
    "aliases": [
      "weirdtalent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "welcome",
    "description": "Welcome a user.",
    "category": "Fun",
    "aliases": [
      "welcome"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "whatyourather",
    "description": "Get a random ",
    "category": "Fun",
    "aliases": [
      "whatyourather"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "wildcardprompt",
    "description": "Get a random wildcard answer prompt.",
    "category": "Fun",
    "aliases": [
      "wildcardprompt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "wink",
    "description": "Wink.",
    "category": "Fun",
    "aliases": [
      "wink"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "wizardrate",
    "description": "Check the wizard level.",
    "category": "Fun",
    "aliases": [
      "wizardrate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "wobble",
    "description": "Wobble at a user.",
    "category": "Fun",
    "aliases": [
      "wobble"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "woof",
    "description": "Get a random woof image.",
    "category": "Fun",
    "aliases": [
      "woof"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "worship",
    "description": "Worship a user.",
    "category": "Fun",
    "aliases": [
      "worship"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "worsthabit",
    "description": "Get a random bad habit prompt.",
    "category": "Fun",
    "aliases": [
      "worsthabit"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeetuser",
    "description": "Yeet a user.",
    "category": "Fun",
    "aliases": [
      "yeetuser"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "zap",
    "description": "Zap a user.",
    "category": "Fun",
    "aliases": [
      "zap"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "zombierate",
    "description": "Check the zombie level.",
    "category": "Fun",
    "aliases": [
      "zombierate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "zoompast",
    "description": "Zoom Past a user.",
    "category": "Fun",
    "aliases": [
      "zoompast"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "absolute",
    "description": "Absolute Value utility.",
    "category": "Utility",
    "aliases": [
      "absolute"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "acretosqm",
    "description": "Convert acres to square meters.",
    "category": "Utility",
    "aliases": [
      "acretosqm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "acretohectare",
    "description": "Convert acres to hectares.",
    "category": "Utility",
    "aliases": [
      "acretohectare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "acretosqcm",
    "description": "Convert acres to square centimeters.",
    "category": "Utility",
    "aliases": [
      "acretosqcm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "acretosqft",
    "description": "Convert acres to square feet.",
    "category": "Utility",
    "aliases": [
      "acretosqft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "acretosqkm",
    "description": "Convert acres to square kilometers.",
    "category": "Utility",
    "aliases": [
      "acretosqkm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "acretosqmm",
    "description": "Convert acres to square millimeters.",
    "category": "Utility",
    "aliases": [
      "acretosqmm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "acretosqyd",
    "description": "Convert acres to square yards.",
    "category": "Utility",
    "aliases": [
      "acretosqyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "addnums",
    "description": "Add Numbers utility.",
    "category": "Utility",
    "aliases": [
      "addnums"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "afk",
    "description": "Set your afk status",
    "category": "Utility",
    "aliases": [
      "afk"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "alterncase",
    "description": "Transform text using alternate case.",
    "category": "Utility",
    "aliases": [
      "alterncase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "areasquare",
    "description": "Rectangle Area utility.",
    "category": "Utility",
    "aliases": [
      "areasquare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "averagenums",
    "description": "Average utility.",
    "category": "Utility",
    "aliases": [
      "averagenums"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "averagepercent",
    "description": "Average Percent utility.",
    "category": "Utility",
    "aliases": [
      "averagepercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "avgwordlen",
    "description": "Analyze text with average word length.",
    "category": "Utility",
    "aliases": [
      "avgwordlen"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "banner",
    "description": "gives a banner of user you mentioned",
    "category": "Utility",
    "aliases": [
      "banner"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "base64decode",
    "description": "Base64 Decode utility.",
    "category": "Utility",
    "aliases": [
      "base64decode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "base64encode",
    "description": "Base64 Encode utility.",
    "category": "Utility",
    "aliases": [
      "base64encode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "basispoints",
    "description": "Basis Points utility.",
    "category": "Utility",
    "aliases": [
      "basispoints"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "biggerby",
    "description": "Bigger By utility.",
    "category": "Utility",
    "aliases": [
      "biggerby"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "binarydecode",
    "description": "Binary Decode utility.",
    "category": "Utility",
    "aliases": [
      "binarydecode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "binaryencode",
    "description": "Binary Encode utility.",
    "category": "Utility",
    "aliases": [
      "binaryencode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "blacklist",
    "description": "Will avoid bot from that channel to run any command",
    "category": "Utility",
    "aliases": [
      "blacklist"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "blendratio",
    "description": "Blend Ratio utility.",
    "category": "Utility",
    "aliases": [
      "blendratio"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "botinfo",
    "description": "Get information about the bot.",
    "category": "Utility",
    "aliases": [
      "botinfo"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "box",
    "description": "Transform text using box text.",
    "category": "Utility",
    "aliases": [
      "box"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "btogb",
    "description": "Convert bytes to gigabytes.",
    "category": "Utility",
    "aliases": [
      "btogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "btogib",
    "description": "Convert bytes to gibibytes.",
    "category": "Utility",
    "aliases": [
      "btogib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "btokb",
    "description": "Convert bytes to kilobytes.",
    "category": "Utility",
    "aliases": [
      "btokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "btokib",
    "description": "Convert bytes to kibibytes.",
    "category": "Utility",
    "aliases": [
      "btokib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "btomb",
    "description": "Convert bytes to megabytes.",
    "category": "Utility",
    "aliases": [
      "btomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "btomib",
    "description": "Convert bytes to mebibytes.",
    "category": "Utility",
    "aliases": [
      "btomib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "btopb",
    "description": "Convert bytes to petabytes.",
    "category": "Utility",
    "aliases": [
      "btopb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "btotb",
    "description": "Convert bytes to terabytes.",
    "category": "Utility",
    "aliases": [
      "btotb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bytesintogb",
    "description": "Bytes Into Gigabytes utility.",
    "category": "Utility",
    "aliases": [
      "bytesintogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bytesintokb",
    "description": "Bytes Into Kilobytes utility.",
    "category": "Utility",
    "aliases": [
      "bytesintokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bytesintomb",
    "description": "Bytes Into Megabytes utility.",
    "category": "Utility",
    "aliases": [
      "bytesintomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "caltokcal",
    "description": "Convert calories to kilocalories.",
    "category": "Utility",
    "aliases": [
      "caltokcal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "camelcase",
    "description": "Transform text using camel case.",
    "category": "Utility",
    "aliases": [
      "camelcase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattog",
    "description": "Convert carats to grams.",
    "category": "Utility",
    "aliases": [
      "carattog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattograin",
    "description": "Convert carats to grains.",
    "category": "Utility",
    "aliases": [
      "carattograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattokg",
    "description": "Convert carats to kilograms.",
    "category": "Utility",
    "aliases": [
      "carattokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattolb",
    "description": "Convert carats to pounds.",
    "category": "Utility",
    "aliases": [
      "carattolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattomg",
    "description": "Convert carats to milligrams.",
    "category": "Utility",
    "aliases": [
      "carattomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattooz",
    "description": "Convert carats to ounces.",
    "category": "Utility",
    "aliases": [
      "carattooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattost",
    "description": "Convert carats to stone.",
    "category": "Utility",
    "aliases": [
      "carattost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattot",
    "description": "Convert carats to metric tons.",
    "category": "Utility",
    "aliases": [
      "carattot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "carattouston",
    "description": "Convert carats to us tons.",
    "category": "Utility",
    "aliases": [
      "carattouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cbrtvalue",
    "description": "Cube Root utility.",
    "category": "Utility",
    "aliases": [
      "cbrtvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ceilnum",
    "description": "Ceiling utility.",
    "category": "Utility",
    "aliases": [
      "ceilnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "celsiusguessfrombody",
    "description": "Body Temp Delta From 37C utility.",
    "category": "Utility",
    "aliases": [
      "celsiusguessfrombody"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytoday",
    "description": "Convert centuries to days.",
    "category": "Utility",
    "aliases": [
      "centurytoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytodecade",
    "description": "Convert centuries to decades.",
    "category": "Utility",
    "aliases": [
      "centurytodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytohr",
    "description": "Convert centuries to hours.",
    "category": "Utility",
    "aliases": [
      "centurytohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytomin",
    "description": "Convert centuries to minutes.",
    "category": "Utility",
    "aliases": [
      "centurytomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytomonth",
    "description": "Convert centuries to months.",
    "category": "Utility",
    "aliases": [
      "centurytomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytoms",
    "description": "Convert centuries to milliseconds.",
    "category": "Utility",
    "aliases": [
      "centurytoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytosec",
    "description": "Convert centuries to seconds.",
    "category": "Utility",
    "aliases": [
      "centurytosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytoweek",
    "description": "Convert centuries to weeks.",
    "category": "Utility",
    "aliases": [
      "centurytoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "centurytoyear",
    "description": "Convert centuries to years.",
    "category": "Utility",
    "aliases": [
      "centurytoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintocm",
    "description": "Convert chains to centimeters.",
    "category": "Utility",
    "aliases": [
      "chaintocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintoft",
    "description": "Convert chains to feet.",
    "category": "Utility",
    "aliases": [
      "chaintoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintofurlong",
    "description": "Convert chains to furlongs.",
    "category": "Utility",
    "aliases": [
      "chaintofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintoin",
    "description": "Convert chains to inches.",
    "category": "Utility",
    "aliases": [
      "chaintoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintokm",
    "description": "Convert chains to kilometers.",
    "category": "Utility",
    "aliases": [
      "chaintokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintoleague",
    "description": "Convert chains to leagues.",
    "category": "Utility",
    "aliases": [
      "chaintoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintom",
    "description": "Convert chains to meters.",
    "category": "Utility",
    "aliases": [
      "chaintom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintomi",
    "description": "Convert chains to miles.",
    "category": "Utility",
    "aliases": [
      "chaintomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintomm",
    "description": "Convert chains to millimeters.",
    "category": "Utility",
    "aliases": [
      "chaintomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintonm",
    "description": "Convert chains to nanometers.",
    "category": "Utility",
    "aliases": [
      "chaintonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintonmi",
    "description": "Convert chains to nautical miles.",
    "category": "Utility",
    "aliases": [
      "chaintonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintorod",
    "description": "Convert chains to rods.",
    "category": "Utility",
    "aliases": [
      "chaintorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintoum",
    "description": "Convert chains to micrometers.",
    "category": "Utility",
    "aliases": [
      "chaintoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "chaintoyd",
    "description": "Convert chains to yards.",
    "category": "Utility",
    "aliases": [
      "chaintoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "charcount",
    "description": "Analyze text with character count.",
    "category": "Utility",
    "aliases": [
      "charcount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "circlearea",
    "description": "Circle Area utility.",
    "category": "Utility",
    "aliases": [
      "circlearea"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "circlecircumference",
    "description": "Circle Circumference utility.",
    "category": "Utility",
    "aliases": [
      "circlecircumference"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "circleringarea",
    "description": "Ring Area From Radii utility.",
    "category": "Utility",
    "aliases": [
      "circleringarea"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "clap",
    "description": "Transform text using clap text.",
    "category": "Utility",
    "aliases": [
      "clap"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtopx",
    "description": "Convert centimeters to pixels.",
    "category": "Utility",
    "aliases": [
      "cmtopx"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtochain",
    "description": "Convert centimeters to chains.",
    "category": "Utility",
    "aliases": [
      "cmtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtoft",
    "description": "Convert centimeters to feet.",
    "category": "Utility",
    "aliases": [
      "cmtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtofurlong",
    "description": "Convert centimeters to furlongs.",
    "category": "Utility",
    "aliases": [
      "cmtofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtoin",
    "description": "Convert centimeters to inches.",
    "category": "Utility",
    "aliases": [
      "cmtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtokm",
    "description": "Convert centimeters to kilometers.",
    "category": "Utility",
    "aliases": [
      "cmtokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtoleague",
    "description": "Convert centimeters to leagues.",
    "category": "Utility",
    "aliases": [
      "cmtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtom",
    "description": "Convert centimeters to meters.",
    "category": "Utility",
    "aliases": [
      "cmtom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtomi",
    "description": "Convert centimeters to miles.",
    "category": "Utility",
    "aliases": [
      "cmtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtomm",
    "description": "Convert centimeters to millimeters.",
    "category": "Utility",
    "aliases": [
      "cmtomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtonm",
    "description": "Convert centimeters to nanometers.",
    "category": "Utility",
    "aliases": [
      "cmtonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtonmi",
    "description": "Convert centimeters to nautical miles.",
    "category": "Utility",
    "aliases": [
      "cmtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtorod",
    "description": "Convert centimeters to rods.",
    "category": "Utility",
    "aliases": [
      "cmtorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtoum",
    "description": "Convert centimeters to micrometers.",
    "category": "Utility",
    "aliases": [
      "cmtoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cmtoyd",
    "description": "Convert centimeters to yards.",
    "category": "Utility",
    "aliases": [
      "cmtoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "comparedelta",
    "description": "Delta utility.",
    "category": "Utility",
    "aliases": [
      "comparedelta"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "comparegap",
    "description": "Comparison Gap utility.",
    "category": "Utility",
    "aliases": [
      "comparegap"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "completionpercent",
    "description": "Completion Percent utility.",
    "category": "Utility",
    "aliases": [
      "completionpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "compoundinterestsimple",
    "description": "Simple Interest utility.",
    "category": "Utility",
    "aliases": [
      "compoundinterestsimple"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "compoundsum",
    "description": "Compound Sum utility.",
    "category": "Utility",
    "aliases": [
      "compoundsum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "consonantcount",
    "description": "Analyze text with consonant count.",
    "category": "Utility",
    "aliases": [
      "consonantcount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "consonantsonly",
    "description": "Transform text using consonants only.",
    "category": "Utility",
    "aliases": [
      "consonantsonly"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "constantcase",
    "description": "Transform text using constant case.",
    "category": "Utility",
    "aliases": [
      "constantcase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "conversionpercent",
    "description": "Conversion Percent utility.",
    "category": "Utility",
    "aliases": [
      "conversionpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cosvalue",
    "description": "Cosine utility.",
    "category": "Utility",
    "aliases": [
      "cosvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "countitems",
    "description": "Count Items utility.",
    "category": "Utility",
    "aliases": [
      "countitems"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ctorankine",
    "description": "Convert Celsius to Rankine.",
    "category": "Utility",
    "aliases": [
      "ctorankine"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ctof",
    "description": "Convert celsius to fahrenheit.",
    "category": "Utility",
    "aliases": [
      "ctof"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ctok",
    "description": "Convert celsius to kelvin.",
    "category": "Utility",
    "aliases": [
      "ctok"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cube",
    "description": "Cube utility.",
    "category": "Utility",
    "aliases": [
      "cube"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cubicmetersfromside",
    "description": "Cubic Meters From Side utility.",
    "category": "Utility",
    "aliases": [
      "cubicmetersfromside"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptofloz",
    "description": "Convert cups to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "cuptofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptogal",
    "description": "Convert cups to gallons.",
    "category": "Utility",
    "aliases": [
      "cuptogal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptol",
    "description": "Convert cups to liters.",
    "category": "Utility",
    "aliases": [
      "cuptol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptom3",
    "description": "Convert cups to cubic meters.",
    "category": "Utility",
    "aliases": [
      "cuptom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptoml",
    "description": "Convert cups to milliliters.",
    "category": "Utility",
    "aliases": [
      "cuptoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptopt",
    "description": "Convert cups to pints.",
    "category": "Utility",
    "aliases": [
      "cuptopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptoqt",
    "description": "Convert cups to quarts.",
    "category": "Utility",
    "aliases": [
      "cuptoqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptotbsp",
    "description": "Convert cups to tablespoons.",
    "category": "Utility",
    "aliases": [
      "cuptotbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "cuptotsp",
    "description": "Convert cups to teaspoons.",
    "category": "Utility",
    "aliases": [
      "cuptotsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daysintoweeks",
    "description": "Days Into Weeks utility.",
    "category": "Utility",
    "aliases": [
      "daysintoweeks"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daystohours",
    "description": "Days To Hours utility.",
    "category": "Utility",
    "aliases": [
      "daystohours"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytocentury",
    "description": "Convert days to centuries.",
    "category": "Utility",
    "aliases": [
      "daytocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytodecade",
    "description": "Convert days to decades.",
    "category": "Utility",
    "aliases": [
      "daytodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytohr",
    "description": "Convert days to hours.",
    "category": "Utility",
    "aliases": [
      "daytohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytomin",
    "description": "Convert days to minutes.",
    "category": "Utility",
    "aliases": [
      "daytomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytomonth",
    "description": "Convert days to months.",
    "category": "Utility",
    "aliases": [
      "daytomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytoms",
    "description": "Convert days to milliseconds.",
    "category": "Utility",
    "aliases": [
      "daytoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytosec",
    "description": "Convert days to seconds.",
    "category": "Utility",
    "aliases": [
      "daytosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytoweek",
    "description": "Convert days to weeks.",
    "category": "Utility",
    "aliases": [
      "daytoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "daytoyear",
    "description": "Convert days to years.",
    "category": "Utility",
    "aliases": [
      "daytoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetocentury",
    "description": "Convert decades to centuries.",
    "category": "Utility",
    "aliases": [
      "decadetocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetoday",
    "description": "Convert decades to days.",
    "category": "Utility",
    "aliases": [
      "decadetoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetohr",
    "description": "Convert decades to hours.",
    "category": "Utility",
    "aliases": [
      "decadetohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetomin",
    "description": "Convert decades to minutes.",
    "category": "Utility",
    "aliases": [
      "decadetomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetomonth",
    "description": "Convert decades to months.",
    "category": "Utility",
    "aliases": [
      "decadetomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetoms",
    "description": "Convert decades to milliseconds.",
    "category": "Utility",
    "aliases": [
      "decadetoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetosec",
    "description": "Convert decades to seconds.",
    "category": "Utility",
    "aliases": [
      "decadetosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetoweek",
    "description": "Convert decades to weeks.",
    "category": "Utility",
    "aliases": [
      "decadetoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decadetoyear",
    "description": "Convert decades to years.",
    "category": "Utility",
    "aliases": [
      "decadetoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decimaltopercent",
    "description": "Decimal To Percent utility.",
    "category": "Utility",
    "aliases": [
      "decimaltopercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "decreaseby",
    "description": "Decrease By utility.",
    "category": "Utility",
    "aliases": [
      "decreaseby"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dedupechars",
    "description": "Transform text using dedupe characters.",
    "category": "Utility",
    "aliases": [
      "dedupechars"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dedupeitems",
    "description": "Dedupe Items utility.",
    "category": "Utility",
    "aliases": [
      "dedupeitems"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dedupewords",
    "description": "Transform text using dedupe words.",
    "category": "Utility",
    "aliases": [
      "dedupewords"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "degreestoradians",
    "description": "Degrees To Radians utility.",
    "category": "Utility",
    "aliases": [
      "degreestoradians"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "densitycalc",
    "description": "Density utility.",
    "category": "Utility",
    "aliases": [
      "densitycalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "differenceofsquares",
    "description": "Difference Of Squares utility.",
    "category": "Utility",
    "aliases": [
      "differenceofsquares"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "digitcount",
    "description": "Analyze text with digit count.",
    "category": "Utility",
    "aliases": [
      "digitcount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "discountamount",
    "description": "Discount Amount utility.",
    "category": "Utility",
    "aliases": [
      "discountamount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "discountprice",
    "description": "Discounted Price utility.",
    "category": "Utility",
    "aliases": [
      "discountprice"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dividenums",
    "description": "Divide Numbers utility.",
    "category": "Utility",
    "aliases": [
      "dividenums"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "dot",
    "description": "Transform text using dot text.",
    "category": "Utility",
    "aliases": [
      "dot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "doublecompare",
    "description": "Double Compare utility.",
    "category": "Utility",
    "aliases": [
      "doublecompare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "doublespace",
    "description": "Transform text using double space.",
    "category": "Utility",
    "aliases": [
      "doublespace"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "doublevalue",
    "description": "Double Value utility.",
    "category": "Utility",
    "aliases": [
      "doublevalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "doublingtime72",
    "description": "Rule Of 72 Doubling Estimate utility.",
    "category": "Utility",
    "aliases": [
      "doublingtime72"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "efficiencycalc",
    "description": "Calculate efficiency percentage.",
    "category": "Utility",
    "aliases": [
      "efficiencycalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "embed",
    "description": "Create Embed can be used for announcment and welcome",
    "category": "Utility",
    "aliases": [
      "embed"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "expvalue",
    "description": "Exponent utility.",
    "category": "Utility",
    "aliases": [
      "expvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "factorial",
    "description": "Factorial utility.",
    "category": "Utility",
    "aliases": [
      "factorial"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fahrenheitguessfrombody",
    "description": "Body Temp Delta From 98.6F utility.",
    "category": "Utility",
    "aliases": [
      "fahrenheitguessfrombody"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "failurepercent",
    "description": "Failure Percent utility.",
    "category": "Utility",
    "aliases": [
      "failurepercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "finalpricewithtax",
    "description": "Final Price With Tax utility.",
    "category": "Utility",
    "aliases": [
      "finalpricewithtax"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floornum",
    "description": "Floor utility.",
    "category": "Utility",
    "aliases": [
      "floornum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztocup",
    "description": "Convert fluid ounces to cups.",
    "category": "Utility",
    "aliases": [
      "floztocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztogal",
    "description": "Convert fluid ounces to gallons.",
    "category": "Utility",
    "aliases": [
      "floztogal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztol",
    "description": "Convert fluid ounces to liters.",
    "category": "Utility",
    "aliases": [
      "floztol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztom3",
    "description": "Convert fluid ounces to cubic meters.",
    "category": "Utility",
    "aliases": [
      "floztom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztoml",
    "description": "Convert fluid ounces to milliliters.",
    "category": "Utility",
    "aliases": [
      "floztoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztopt",
    "description": "Convert fluid ounces to pints.",
    "category": "Utility",
    "aliases": [
      "floztopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztoqt",
    "description": "Convert fluid ounces to quarts.",
    "category": "Utility",
    "aliases": [
      "floztoqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztotbsp",
    "description": "Convert fluid ounces to tablespoons.",
    "category": "Utility",
    "aliases": [
      "floztotbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "floztotsp",
    "description": "Convert fluid ounces to teaspoons.",
    "category": "Utility",
    "aliases": [
      "floztotsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fpstoknot",
    "description": "Convert feet/second to knots.",
    "category": "Utility",
    "aliases": [
      "fpstoknot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fpstokph",
    "description": "Convert feet/second to kilometers/hour.",
    "category": "Utility",
    "aliases": [
      "fpstokph"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fpstomph",
    "description": "Convert feet/second to miles/hour.",
    "category": "Utility",
    "aliases": [
      "fpstomph"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fpstomps",
    "description": "Convert feet/second to meters/second.",
    "category": "Utility",
    "aliases": [
      "fpstomps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ftorankine",
    "description": "Convert Fahrenheit to Rankine.",
    "category": "Utility",
    "aliases": [
      "ftorankine"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ftoc",
    "description": "Convert fahrenheit to celsius.",
    "category": "Utility",
    "aliases": [
      "ftoc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ftok",
    "description": "Convert fahrenheit to kelvin.",
    "category": "Utility",
    "aliases": [
      "ftok"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttochain",
    "description": "Convert feet to chains.",
    "category": "Utility",
    "aliases": [
      "fttochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttocm",
    "description": "Convert feet to centimeters.",
    "category": "Utility",
    "aliases": [
      "fttocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttofurlong",
    "description": "Convert feet to furlongs.",
    "category": "Utility",
    "aliases": [
      "fttofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttoin",
    "description": "Convert feet to inches.",
    "category": "Utility",
    "aliases": [
      "fttoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttokm",
    "description": "Convert feet to kilometers.",
    "category": "Utility",
    "aliases": [
      "fttokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttoleague",
    "description": "Convert feet to leagues.",
    "category": "Utility",
    "aliases": [
      "fttoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttom",
    "description": "Convert feet to meters.",
    "category": "Utility",
    "aliases": [
      "fttom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttomi",
    "description": "Convert feet to miles.",
    "category": "Utility",
    "aliases": [
      "fttomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttomm",
    "description": "Convert feet to millimeters.",
    "category": "Utility",
    "aliases": [
      "fttomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttonm",
    "description": "Convert feet to nanometers.",
    "category": "Utility",
    "aliases": [
      "fttonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttonmi",
    "description": "Convert feet to nautical miles.",
    "category": "Utility",
    "aliases": [
      "fttonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttorod",
    "description": "Convert feet to rods.",
    "category": "Utility",
    "aliases": [
      "fttorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttoum",
    "description": "Convert feet to micrometers.",
    "category": "Utility",
    "aliases": [
      "fttoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "fttoyd",
    "description": "Convert feet to yards.",
    "category": "Utility",
    "aliases": [
      "fttoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtochain",
    "description": "Convert furlongs to chains.",
    "category": "Utility",
    "aliases": [
      "furlongtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtocm",
    "description": "Convert furlongs to centimeters.",
    "category": "Utility",
    "aliases": [
      "furlongtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtoft",
    "description": "Convert furlongs to feet.",
    "category": "Utility",
    "aliases": [
      "furlongtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtoin",
    "description": "Convert furlongs to inches.",
    "category": "Utility",
    "aliases": [
      "furlongtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtokm",
    "description": "Convert furlongs to kilometers.",
    "category": "Utility",
    "aliases": [
      "furlongtokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtoleague",
    "description": "Convert furlongs to leagues.",
    "category": "Utility",
    "aliases": [
      "furlongtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtom",
    "description": "Convert furlongs to meters.",
    "category": "Utility",
    "aliases": [
      "furlongtom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtomi",
    "description": "Convert furlongs to miles.",
    "category": "Utility",
    "aliases": [
      "furlongtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtomm",
    "description": "Convert furlongs to millimeters.",
    "category": "Utility",
    "aliases": [
      "furlongtomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtonm",
    "description": "Convert furlongs to nanometers.",
    "category": "Utility",
    "aliases": [
      "furlongtonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtonmi",
    "description": "Convert furlongs to nautical miles.",
    "category": "Utility",
    "aliases": [
      "furlongtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtorod",
    "description": "Convert furlongs to rods.",
    "category": "Utility",
    "aliases": [
      "furlongtorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtoum",
    "description": "Convert furlongs to micrometers.",
    "category": "Utility",
    "aliases": [
      "furlongtoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "furlongtoyd",
    "description": "Convert furlongs to yards.",
    "category": "Utility",
    "aliases": [
      "furlongtoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbtomb",
    "description": "Convert gigabytes to megabytes.",
    "category": "Utility",
    "aliases": [
      "gbtomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbtotb",
    "description": "Convert gigabytes to terabytes.",
    "category": "Utility",
    "aliases": [
      "gbtotb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gainpercent",
    "description": "Gain Percent utility.",
    "category": "Utility",
    "aliases": [
      "gainpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtol",
    "description": "Convert US gallons to liters.",
    "category": "Utility",
    "aliases": [
      "galtol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtocup",
    "description": "Convert gallons to cups.",
    "category": "Utility",
    "aliases": [
      "galtocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtofloz",
    "description": "Convert gallons to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "galtofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtom3",
    "description": "Convert gallons to cubic meters.",
    "category": "Utility",
    "aliases": [
      "galtom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtoml",
    "description": "Convert gallons to milliliters.",
    "category": "Utility",
    "aliases": [
      "galtoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtopt",
    "description": "Convert gallons to pints.",
    "category": "Utility",
    "aliases": [
      "galtopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtoqt",
    "description": "Convert gallons to quarts.",
    "category": "Utility",
    "aliases": [
      "galtoqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtotbsp",
    "description": "Convert gallons to tablespoons.",
    "category": "Utility",
    "aliases": [
      "galtotbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "galtotsp",
    "description": "Convert gallons to teaspoons.",
    "category": "Utility",
    "aliases": [
      "galtotsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbpstombps",
    "description": "Convert gigabits per second to megabits per second.",
    "category": "Utility",
    "aliases": [
      "gbpstombps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbtob",
    "description": "Convert gigabytes to bytes.",
    "category": "Utility",
    "aliases": [
      "gbtob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbtogib",
    "description": "Convert gigabytes to gibibytes.",
    "category": "Utility",
    "aliases": [
      "gbtogib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbtokb",
    "description": "Convert gigabytes to kilobytes.",
    "category": "Utility",
    "aliases": [
      "gbtokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbtokib",
    "description": "Convert gigabytes to kibibytes.",
    "category": "Utility",
    "aliases": [
      "gbtokib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbtomib",
    "description": "Convert gigabytes to mebibytes.",
    "category": "Utility",
    "aliases": [
      "gbtomib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gbtopb",
    "description": "Convert gigabytes to petabytes.",
    "category": "Utility",
    "aliases": [
      "gbtopb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gcdnum",
    "description": "Greatest Common Divisor utility.",
    "category": "Utility",
    "aliases": [
      "gcdnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "geommean",
    "description": "Geometric Mean utility.",
    "category": "Utility",
    "aliases": [
      "geommean"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gibtob",
    "description": "Convert gibibytes to bytes.",
    "category": "Utility",
    "aliases": [
      "gibtob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gibtogb",
    "description": "Convert gibibytes to gigabytes.",
    "category": "Utility",
    "aliases": [
      "gibtogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gibtokb",
    "description": "Convert gibibytes to kilobytes.",
    "category": "Utility",
    "aliases": [
      "gibtokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gibtokib",
    "description": "Convert gibibytes to kibibytes.",
    "category": "Utility",
    "aliases": [
      "gibtokib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gibtomb",
    "description": "Convert gibibytes to megabytes.",
    "category": "Utility",
    "aliases": [
      "gibtomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gibtomib",
    "description": "Convert gibibytes to mebibytes.",
    "category": "Utility",
    "aliases": [
      "gibtomib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gibtopb",
    "description": "Convert gibibytes to petabytes.",
    "category": "Utility",
    "aliases": [
      "gibtopb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gibtotb",
    "description": "Convert gibibytes to terabytes.",
    "category": "Utility",
    "aliases": [
      "gibtotb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintocarat",
    "description": "Convert grains to carats.",
    "category": "Utility",
    "aliases": [
      "graintocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintog",
    "description": "Convert grains to grams.",
    "category": "Utility",
    "aliases": [
      "graintog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintokg",
    "description": "Convert grains to kilograms.",
    "category": "Utility",
    "aliases": [
      "graintokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintolb",
    "description": "Convert grains to pounds.",
    "category": "Utility",
    "aliases": [
      "graintolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintomg",
    "description": "Convert grains to milligrams.",
    "category": "Utility",
    "aliases": [
      "graintomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintooz",
    "description": "Convert grains to ounces.",
    "category": "Utility",
    "aliases": [
      "graintooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintost",
    "description": "Convert grains to stone.",
    "category": "Utility",
    "aliases": [
      "graintost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintot",
    "description": "Convert grains to metric tons.",
    "category": "Utility",
    "aliases": [
      "graintot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "graintouston",
    "description": "Convert grains to us tons.",
    "category": "Utility",
    "aliases": [
      "graintouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "grossprofit",
    "description": "Calculate gross profit margin.",
    "category": "Utility",
    "aliases": [
      "grossprofit"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtocarat",
    "description": "Convert grams to carats.",
    "category": "Utility",
    "aliases": [
      "gtocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtograin",
    "description": "Convert grams to grains.",
    "category": "Utility",
    "aliases": [
      "gtograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtokg",
    "description": "Convert grams to kilograms.",
    "category": "Utility",
    "aliases": [
      "gtokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtolb",
    "description": "Convert grams to pounds.",
    "category": "Utility",
    "aliases": [
      "gtolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtomg",
    "description": "Convert grams to milligrams.",
    "category": "Utility",
    "aliases": [
      "gtomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtooz",
    "description": "Convert grams to ounces.",
    "category": "Utility",
    "aliases": [
      "gtooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtost",
    "description": "Convert grams to stone.",
    "category": "Utility",
    "aliases": [
      "gtost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtot",
    "description": "Convert grams to metric tons.",
    "category": "Utility",
    "aliases": [
      "gtot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "gtouston",
    "description": "Convert grams to us tons.",
    "category": "Utility",
    "aliases": [
      "gtouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "halvevalue",
    "description": "Half Value utility.",
    "category": "Utility",
    "aliases": [
      "halvevalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "harmmean",
    "description": "Harmonic Mean utility.",
    "category": "Utility",
    "aliases": [
      "harmmean"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hectaretosqm",
    "description": "Convert hectares to square meters.",
    "category": "Utility",
    "aliases": [
      "hectaretosqm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hectaretoacre",
    "description": "Convert hectares to acres.",
    "category": "Utility",
    "aliases": [
      "hectaretoacre"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hectaretosqcm",
    "description": "Convert hectares to square centimeters.",
    "category": "Utility",
    "aliases": [
      "hectaretosqcm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hectaretosqft",
    "description": "Convert hectares to square feet.",
    "category": "Utility",
    "aliases": [
      "hectaretosqft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hectaretosqkm",
    "description": "Convert hectares to square kilometers.",
    "category": "Utility",
    "aliases": [
      "hectaretosqkm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hectaretosqmm",
    "description": "Convert hectares to square millimeters.",
    "category": "Utility",
    "aliases": [
      "hectaretosqmm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hectaretosqyd",
    "description": "Convert hectares to square yards.",
    "category": "Utility",
    "aliases": [
      "hectaretosqyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hexdecode",
    "description": "Hex Decode utility.",
    "category": "Utility",
    "aliases": [
      "hexdecode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hexencode",
    "description": "Hex Encode utility.",
    "category": "Utility",
    "aliases": [
      "hexencode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hoursintodays",
    "description": "Hours Into Days utility.",
    "category": "Utility",
    "aliases": [
      "hoursintodays"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hourstominutes",
    "description": "Hours To Minutes utility.",
    "category": "Utility",
    "aliases": [
      "hourstominutes"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hourstoseconds",
    "description": "Hours To Seconds utility.",
    "category": "Utility",
    "aliases": [
      "hourstoseconds"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtocentury",
    "description": "Convert hours to centuries.",
    "category": "Utility",
    "aliases": [
      "hrtocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtoday",
    "description": "Convert hours to days.",
    "category": "Utility",
    "aliases": [
      "hrtoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtodecade",
    "description": "Convert hours to decades.",
    "category": "Utility",
    "aliases": [
      "hrtodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtomin",
    "description": "Convert hours to minutes.",
    "category": "Utility",
    "aliases": [
      "hrtomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtomonth",
    "description": "Convert hours to months.",
    "category": "Utility",
    "aliases": [
      "hrtomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtoms",
    "description": "Convert hours to milliseconds.",
    "category": "Utility",
    "aliases": [
      "hrtoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtosec",
    "description": "Convert hours to seconds.",
    "category": "Utility",
    "aliases": [
      "hrtosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtoweek",
    "description": "Convert hours to weeks.",
    "category": "Utility",
    "aliases": [
      "hrtoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hrtoyear",
    "description": "Convert hours to years.",
    "category": "Utility",
    "aliases": [
      "hrtoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "htmldecode",
    "description": "HTML Decode utility.",
    "category": "Utility",
    "aliases": [
      "htmldecode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "htmlencode",
    "description": "HTML Encode utility.",
    "category": "Utility",
    "aliases": [
      "htmlencode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hypotenuse",
    "description": "Hypotenuse utility.",
    "category": "Utility",
    "aliases": [
      "hypotenuse"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "increaseby",
    "description": "Increase By utility.",
    "category": "Utility",
    "aliases": [
      "increaseby"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "initials",
    "description": "Transform text using initials.",
    "category": "Utility",
    "aliases": [
      "initials"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intochain",
    "description": "Convert inches to chains.",
    "category": "Utility",
    "aliases": [
      "intochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intocm",
    "description": "Convert inches to centimeters.",
    "category": "Utility",
    "aliases": [
      "intocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intoft",
    "description": "Convert inches to feet.",
    "category": "Utility",
    "aliases": [
      "intoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intofurlong",
    "description": "Convert inches to furlongs.",
    "category": "Utility",
    "aliases": [
      "intofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intokm",
    "description": "Convert inches to kilometers.",
    "category": "Utility",
    "aliases": [
      "intokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intoleague",
    "description": "Convert inches to leagues.",
    "category": "Utility",
    "aliases": [
      "intoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intom",
    "description": "Convert inches to meters.",
    "category": "Utility",
    "aliases": [
      "intom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intomi",
    "description": "Convert inches to miles.",
    "category": "Utility",
    "aliases": [
      "intomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intomm",
    "description": "Convert inches to millimeters.",
    "category": "Utility",
    "aliases": [
      "intomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intonm",
    "description": "Convert inches to nanometers.",
    "category": "Utility",
    "aliases": [
      "intonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intonmi",
    "description": "Convert inches to nautical miles.",
    "category": "Utility",
    "aliases": [
      "intonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intorod",
    "description": "Convert inches to rods.",
    "category": "Utility",
    "aliases": [
      "intorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intoum",
    "description": "Convert inches to micrometers.",
    "category": "Utility",
    "aliases": [
      "intoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intoyd",
    "description": "Convert inches to yards.",
    "category": "Utility",
    "aliases": [
      "intoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "inventoryvalue",
    "description": "Inventory Value utility.",
    "category": "Utility",
    "aliases": [
      "inventoryvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "invertnumber",
    "description": "Invert Sign utility.",
    "category": "Utility",
    "aliases": [
      "invertnumber"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "invite",
    "description": "Get the invite link for the bot",
    "category": "Utility",
    "aliases": [
      "invite"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "inviteinfo",
    "description": "Get information about an invite",
    "category": "Utility",
    "aliases": [
      "inviteinfo"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ispalindrome",
    "description": "Analyze text with palindrome check.",
    "category": "Utility",
    "aliases": [
      "ispalindrome"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "isprimehint",
    "description": "Prime Hint utility.",
    "category": "Utility",
    "aliases": [
      "isprimehint"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kbtob",
    "description": "Convert kilobytes to bytes.",
    "category": "Utility",
    "aliases": [
      "kbtob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kbtogb",
    "description": "Convert kilobytes to gigabytes.",
    "category": "Utility",
    "aliases": [
      "kbtogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kbtogib",
    "description": "Convert kilobytes to gibibytes.",
    "category": "Utility",
    "aliases": [
      "kbtogib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kbtokib",
    "description": "Convert kilobytes to kibibytes.",
    "category": "Utility",
    "aliases": [
      "kbtokib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kbtomb",
    "description": "Convert kilobytes to megabytes.",
    "category": "Utility",
    "aliases": [
      "kbtomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kbtomib",
    "description": "Convert kilobytes to mebibytes.",
    "category": "Utility",
    "aliases": [
      "kbtomib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kbtopb",
    "description": "Convert kilobytes to petabytes.",
    "category": "Utility",
    "aliases": [
      "kbtopb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kbtotb",
    "description": "Convert kilobytes to terabytes.",
    "category": "Utility",
    "aliases": [
      "kbtotb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kebabcase",
    "description": "Transform text using kebab case.",
    "category": "Utility",
    "aliases": [
      "kebabcase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtocarat",
    "description": "Convert kilograms to carats.",
    "category": "Utility",
    "aliases": [
      "kgtocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtog",
    "description": "Convert kilograms to grams.",
    "category": "Utility",
    "aliases": [
      "kgtog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtograin",
    "description": "Convert kilograms to grains.",
    "category": "Utility",
    "aliases": [
      "kgtograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtolb",
    "description": "Convert kilograms to pounds.",
    "category": "Utility",
    "aliases": [
      "kgtolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtomg",
    "description": "Convert kilograms to milligrams.",
    "category": "Utility",
    "aliases": [
      "kgtomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtooz",
    "description": "Convert kilograms to ounces.",
    "category": "Utility",
    "aliases": [
      "kgtooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtost",
    "description": "Convert kilograms to stone.",
    "category": "Utility",
    "aliases": [
      "kgtost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtot",
    "description": "Convert kilograms to metric tons.",
    "category": "Utility",
    "aliases": [
      "kgtot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kgtouston",
    "description": "Convert kilograms to us tons.",
    "category": "Utility",
    "aliases": [
      "kgtouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kibtob",
    "description": "Convert kibibytes to bytes.",
    "category": "Utility",
    "aliases": [
      "kibtob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kibtogb",
    "description": "Convert kibibytes to gigabytes.",
    "category": "Utility",
    "aliases": [
      "kibtogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kibtogib",
    "description": "Convert kibibytes to gibibytes.",
    "category": "Utility",
    "aliases": [
      "kibtogib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kibtokb",
    "description": "Convert kibibytes to kilobytes.",
    "category": "Utility",
    "aliases": [
      "kibtokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kibtomb",
    "description": "Convert kibibytes to megabytes.",
    "category": "Utility",
    "aliases": [
      "kibtomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kibtomib",
    "description": "Convert kibibytes to mebibytes.",
    "category": "Utility",
    "aliases": [
      "kibtomib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kibtopb",
    "description": "Convert kibibytes to petabytes.",
    "category": "Utility",
    "aliases": [
      "kibtopb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kibtotb",
    "description": "Convert kibibytes to terabytes.",
    "category": "Utility",
    "aliases": [
      "kibtotb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtochain",
    "description": "Convert kilometers to chains.",
    "category": "Utility",
    "aliases": [
      "kmtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtocm",
    "description": "Convert kilometers to centimeters.",
    "category": "Utility",
    "aliases": [
      "kmtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtoft",
    "description": "Convert kilometers to feet.",
    "category": "Utility",
    "aliases": [
      "kmtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtofurlong",
    "description": "Convert kilometers to furlongs.",
    "category": "Utility",
    "aliases": [
      "kmtofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtoin",
    "description": "Convert kilometers to inches.",
    "category": "Utility",
    "aliases": [
      "kmtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtoleague",
    "description": "Convert kilometers to leagues.",
    "category": "Utility",
    "aliases": [
      "kmtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtom",
    "description": "Convert kilometers to meters.",
    "category": "Utility",
    "aliases": [
      "kmtom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtomi",
    "description": "Convert kilometers to miles.",
    "category": "Utility",
    "aliases": [
      "kmtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtomm",
    "description": "Convert kilometers to millimeters.",
    "category": "Utility",
    "aliases": [
      "kmtomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtonm",
    "description": "Convert kilometers to nanometers.",
    "category": "Utility",
    "aliases": [
      "kmtonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtonmi",
    "description": "Convert kilometers to nautical miles.",
    "category": "Utility",
    "aliases": [
      "kmtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtorod",
    "description": "Convert kilometers to rods.",
    "category": "Utility",
    "aliases": [
      "kmtorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtoum",
    "description": "Convert kilometers to micrometers.",
    "category": "Utility",
    "aliases": [
      "kmtoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kmtoyd",
    "description": "Convert kilometers to yards.",
    "category": "Utility",
    "aliases": [
      "kmtoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "knottofps",
    "description": "Convert knots to feet/second.",
    "category": "Utility",
    "aliases": [
      "knottofps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "knottokph",
    "description": "Convert knots to kilometers/hour.",
    "category": "Utility",
    "aliases": [
      "knottokph"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "knottomph",
    "description": "Convert knots to miles/hour.",
    "category": "Utility",
    "aliases": [
      "knottomph"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "knottomps",
    "description": "Convert knots to meters/second.",
    "category": "Utility",
    "aliases": [
      "knottomps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kphtofps",
    "description": "Convert kilometers/hour to feet/second.",
    "category": "Utility",
    "aliases": [
      "kphtofps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kphtoknot",
    "description": "Convert kilometers/hour to knots.",
    "category": "Utility",
    "aliases": [
      "kphtoknot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kphtomph",
    "description": "Convert kilometers/hour to miles/hour.",
    "category": "Utility",
    "aliases": [
      "kphtomph"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kphtomps",
    "description": "Convert kilometers/hour to meters/second.",
    "category": "Utility",
    "aliases": [
      "kphtomps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ktoc",
    "description": "Convert kelvin to celsius.",
    "category": "Utility",
    "aliases": [
      "ktoc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ktof",
    "description": "Convert kelvin to fahrenheit.",
    "category": "Utility",
    "aliases": [
      "ktof"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtocarat",
    "description": "Convert pounds to carats.",
    "category": "Utility",
    "aliases": [
      "lbtocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtog",
    "description": "Convert pounds to grams.",
    "category": "Utility",
    "aliases": [
      "lbtog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtograin",
    "description": "Convert pounds to grains.",
    "category": "Utility",
    "aliases": [
      "lbtograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtokg",
    "description": "Convert pounds to kilograms.",
    "category": "Utility",
    "aliases": [
      "lbtokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtomg",
    "description": "Convert pounds to milligrams.",
    "category": "Utility",
    "aliases": [
      "lbtomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtooz",
    "description": "Convert pounds to ounces.",
    "category": "Utility",
    "aliases": [
      "lbtooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtost",
    "description": "Convert pounds to stone.",
    "category": "Utility",
    "aliases": [
      "lbtost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtot",
    "description": "Convert pounds to metric tons.",
    "category": "Utility",
    "aliases": [
      "lbtot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lbtouston",
    "description": "Convert pounds to us tons.",
    "category": "Utility",
    "aliases": [
      "lbtouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lcmnum",
    "description": "Least Common Multiple utility.",
    "category": "Utility",
    "aliases": [
      "lcmnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetochain",
    "description": "Convert leagues to chains.",
    "category": "Utility",
    "aliases": [
      "leaguetochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetocm",
    "description": "Convert leagues to centimeters.",
    "category": "Utility",
    "aliases": [
      "leaguetocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetoft",
    "description": "Convert leagues to feet.",
    "category": "Utility",
    "aliases": [
      "leaguetoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetofurlong",
    "description": "Convert leagues to furlongs.",
    "category": "Utility",
    "aliases": [
      "leaguetofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetoin",
    "description": "Convert leagues to inches.",
    "category": "Utility",
    "aliases": [
      "leaguetoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetokm",
    "description": "Convert leagues to kilometers.",
    "category": "Utility",
    "aliases": [
      "leaguetokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetom",
    "description": "Convert leagues to meters.",
    "category": "Utility",
    "aliases": [
      "leaguetom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetomi",
    "description": "Convert leagues to miles.",
    "category": "Utility",
    "aliases": [
      "leaguetomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetomm",
    "description": "Convert leagues to millimeters.",
    "category": "Utility",
    "aliases": [
      "leaguetomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetonm",
    "description": "Convert leagues to nanometers.",
    "category": "Utility",
    "aliases": [
      "leaguetonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetonmi",
    "description": "Convert leagues to nautical miles.",
    "category": "Utility",
    "aliases": [
      "leaguetonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetorod",
    "description": "Convert leagues to rods.",
    "category": "Utility",
    "aliases": [
      "leaguetorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetoum",
    "description": "Convert leagues to micrometers.",
    "category": "Utility",
    "aliases": [
      "leaguetoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leaguetoyd",
    "description": "Convert leagues to yards.",
    "category": "Utility",
    "aliases": [
      "leaguetoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leftoverright",
    "description": "Left Over Right utility.",
    "category": "Utility",
    "aliases": [
      "leftoverright"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "leftpercentageofright",
    "description": "Left As Percent Of Right utility.",
    "category": "Utility",
    "aliases": [
      "leftpercentageofright"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lefttorightpercent",
    "description": "Left To Right Percent utility.",
    "category": "Utility",
    "aliases": [
      "lefttorightpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "linecount",
    "description": "Analyze text with line count.",
    "category": "Utility",
    "aliases": [
      "linecount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lnvalue",
    "description": "Natural Log utility.",
    "category": "Utility",
    "aliases": [
      "lnvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "log10value",
    "description": "Log Base 10 utility.",
    "category": "Utility",
    "aliases": [
      "log10value"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "longestword",
    "description": "Analyze text with longest word.",
    "category": "Utility",
    "aliases": [
      "longestword"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "losspercent",
    "description": "Loss Percent utility.",
    "category": "Utility",
    "aliases": [
      "losspercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lossratecalc",
    "description": "Loss Rate utility.",
    "category": "Utility",
    "aliases": [
      "lossratecalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lowercasecount",
    "description": "Analyze text with lowercase count.",
    "category": "Utility",
    "aliases": [
      "lowercasecount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltogal",
    "description": "Convert liters to US gallons.",
    "category": "Utility",
    "aliases": [
      "ltogal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltocup",
    "description": "Convert liters to cups.",
    "category": "Utility",
    "aliases": [
      "ltocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltofloz",
    "description": "Convert liters to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "ltofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltom3",
    "description": "Convert liters to cubic meters.",
    "category": "Utility",
    "aliases": [
      "ltom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltoml",
    "description": "Convert liters to milliliters.",
    "category": "Utility",
    "aliases": [
      "ltoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltopt",
    "description": "Convert liters to pints.",
    "category": "Utility",
    "aliases": [
      "ltopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltoqt",
    "description": "Convert liters to quarts.",
    "category": "Utility",
    "aliases": [
      "ltoqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltotbsp",
    "description": "Convert liters to tablespoons.",
    "category": "Utility",
    "aliases": [
      "ltotbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ltotsp",
    "description": "Convert liters to teaspoons.",
    "category": "Utility",
    "aliases": [
      "ltotsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3tocup",
    "description": "Convert cubic meters to cups.",
    "category": "Utility",
    "aliases": [
      "m3tocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3tofloz",
    "description": "Convert cubic meters to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "m3tofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3togal",
    "description": "Convert cubic meters to gallons.",
    "category": "Utility",
    "aliases": [
      "m3togal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3tol",
    "description": "Convert cubic meters to liters.",
    "category": "Utility",
    "aliases": [
      "m3tol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3toml",
    "description": "Convert cubic meters to milliliters.",
    "category": "Utility",
    "aliases": [
      "m3toml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3topt",
    "description": "Convert cubic meters to pints.",
    "category": "Utility",
    "aliases": [
      "m3topt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3toqt",
    "description": "Convert cubic meters to quarts.",
    "category": "Utility",
    "aliases": [
      "m3toqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3totbsp",
    "description": "Convert cubic meters to tablespoons.",
    "category": "Utility",
    "aliases": [
      "m3totbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "m3totsp",
    "description": "Convert cubic meters to teaspoons.",
    "category": "Utility",
    "aliases": [
      "m3totsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbtogb",
    "description": "Convert megabytes to gigabytes.",
    "category": "Utility",
    "aliases": [
      "mbtogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mjtokwh",
    "description": "Convert megajoules to kilowatt-hours.",
    "category": "Utility",
    "aliases": [
      "mjtokwh"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "managerrole",
    "description": "Used to give Setuproles (bypass)",
    "category": "Utility",
    "aliases": [
      "managerrole"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "marginpercent",
    "description": "Margin Percent utility.",
    "category": "Utility",
    "aliases": [
      "marginpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "markuppercent",
    "description": "Markup Percent utility.",
    "category": "Utility",
    "aliases": [
      "markuppercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "maxnum",
    "description": "Maximum utility.",
    "category": "Utility",
    "aliases": [
      "maxnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbpstogbps",
    "description": "Convert megabits per second to gigabits per second.",
    "category": "Utility",
    "aliases": [
      "mbpstogbps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbtob",
    "description": "Convert megabytes to bytes.",
    "category": "Utility",
    "aliases": [
      "mbtob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbtogib",
    "description": "Convert megabytes to gibibytes.",
    "category": "Utility",
    "aliases": [
      "mbtogib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbtokb",
    "description": "Convert megabytes to kilobytes.",
    "category": "Utility",
    "aliases": [
      "mbtokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbtokib",
    "description": "Convert megabytes to kibibytes.",
    "category": "Utility",
    "aliases": [
      "mbtokib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbtomib",
    "description": "Convert megabytes to mebibytes.",
    "category": "Utility",
    "aliases": [
      "mbtomib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbtopb",
    "description": "Convert megabytes to petabytes.",
    "category": "Utility",
    "aliases": [
      "mbtopb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mbtotb",
    "description": "Convert megabytes to terabytes.",
    "category": "Utility",
    "aliases": [
      "mbtotb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "md5hash",
    "description": "MD5 Hash utility.",
    "category": "Utility",
    "aliases": [
      "md5hash"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "membercount",
    "description": "Shows the member count of the server.",
    "category": "Utility",
    "aliases": [
      "membercount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtocarat",
    "description": "Convert milligrams to carats.",
    "category": "Utility",
    "aliases": [
      "mgtocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtog",
    "description": "Convert milligrams to grams.",
    "category": "Utility",
    "aliases": [
      "mgtog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtograin",
    "description": "Convert milligrams to grains.",
    "category": "Utility",
    "aliases": [
      "mgtograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtokg",
    "description": "Convert milligrams to kilograms.",
    "category": "Utility",
    "aliases": [
      "mgtokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtolb",
    "description": "Convert milligrams to pounds.",
    "category": "Utility",
    "aliases": [
      "mgtolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtooz",
    "description": "Convert milligrams to ounces.",
    "category": "Utility",
    "aliases": [
      "mgtooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtost",
    "description": "Convert milligrams to stone.",
    "category": "Utility",
    "aliases": [
      "mgtost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtot",
    "description": "Convert milligrams to metric tons.",
    "category": "Utility",
    "aliases": [
      "mgtot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mgtouston",
    "description": "Convert milligrams to us tons.",
    "category": "Utility",
    "aliases": [
      "mgtouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mibtob",
    "description": "Convert mebibytes to bytes.",
    "category": "Utility",
    "aliases": [
      "mibtob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mibtogb",
    "description": "Convert mebibytes to gigabytes.",
    "category": "Utility",
    "aliases": [
      "mibtogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mibtogib",
    "description": "Convert mebibytes to gibibytes.",
    "category": "Utility",
    "aliases": [
      "mibtogib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mibtokb",
    "description": "Convert mebibytes to kilobytes.",
    "category": "Utility",
    "aliases": [
      "mibtokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mibtokib",
    "description": "Convert mebibytes to kibibytes.",
    "category": "Utility",
    "aliases": [
      "mibtokib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mibtomb",
    "description": "Convert mebibytes to megabytes.",
    "category": "Utility",
    "aliases": [
      "mibtomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mibtopb",
    "description": "Convert mebibytes to petabytes.",
    "category": "Utility",
    "aliases": [
      "mibtopb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mibtotb",
    "description": "Convert mebibytes to terabytes.",
    "category": "Utility",
    "aliases": [
      "mibtotb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "midpointnum",
    "description": "Midpoint utility.",
    "category": "Utility",
    "aliases": [
      "midpointnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "minnum",
    "description": "Minimum utility.",
    "category": "Utility",
    "aliases": [
      "minnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintocentury",
    "description": "Convert minutes to centuries.",
    "category": "Utility",
    "aliases": [
      "mintocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintoday",
    "description": "Convert minutes to days.",
    "category": "Utility",
    "aliases": [
      "mintoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintodecade",
    "description": "Convert minutes to decades.",
    "category": "Utility",
    "aliases": [
      "mintodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintohr",
    "description": "Convert minutes to hours.",
    "category": "Utility",
    "aliases": [
      "mintohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintomonth",
    "description": "Convert minutes to months.",
    "category": "Utility",
    "aliases": [
      "mintomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintoms",
    "description": "Convert minutes to milliseconds.",
    "category": "Utility",
    "aliases": [
      "mintoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintosec",
    "description": "Convert minutes to seconds.",
    "category": "Utility",
    "aliases": [
      "mintosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintoweek",
    "description": "Convert minutes to weeks.",
    "category": "Utility",
    "aliases": [
      "mintoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mintoyear",
    "description": "Convert minutes to years.",
    "category": "Utility",
    "aliases": [
      "mintoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "minutesintohours",
    "description": "Minutes Into Hours utility.",
    "category": "Utility",
    "aliases": [
      "minutesintohours"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "minutestoseconds",
    "description": "Minutes To Seconds utility.",
    "category": "Utility",
    "aliases": [
      "minutestoseconds"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitochain",
    "description": "Convert miles to chains.",
    "category": "Utility",
    "aliases": [
      "mitochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitocm",
    "description": "Convert miles to centimeters.",
    "category": "Utility",
    "aliases": [
      "mitocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitoft",
    "description": "Convert miles to feet.",
    "category": "Utility",
    "aliases": [
      "mitoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitofurlong",
    "description": "Convert miles to furlongs.",
    "category": "Utility",
    "aliases": [
      "mitofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitoin",
    "description": "Convert miles to inches.",
    "category": "Utility",
    "aliases": [
      "mitoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitokm",
    "description": "Convert miles to kilometers.",
    "category": "Utility",
    "aliases": [
      "mitokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitoleague",
    "description": "Convert miles to leagues.",
    "category": "Utility",
    "aliases": [
      "mitoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitom",
    "description": "Convert miles to meters.",
    "category": "Utility",
    "aliases": [
      "mitom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitomm",
    "description": "Convert miles to millimeters.",
    "category": "Utility",
    "aliases": [
      "mitomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitonm",
    "description": "Convert miles to nanometers.",
    "category": "Utility",
    "aliases": [
      "mitonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitonmi",
    "description": "Convert miles to nautical miles.",
    "category": "Utility",
    "aliases": [
      "mitonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitorod",
    "description": "Convert miles to rods.",
    "category": "Utility",
    "aliases": [
      "mitorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitoum",
    "description": "Convert miles to micrometers.",
    "category": "Utility",
    "aliases": [
      "mitoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mitoyd",
    "description": "Convert miles to yards.",
    "category": "Utility",
    "aliases": [
      "mitoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltocup",
    "description": "Convert milliliters to cups.",
    "category": "Utility",
    "aliases": [
      "mltocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltofloz",
    "description": "Convert milliliters to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "mltofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltogal",
    "description": "Convert milliliters to gallons.",
    "category": "Utility",
    "aliases": [
      "mltogal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltol",
    "description": "Convert milliliters to liters.",
    "category": "Utility",
    "aliases": [
      "mltol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltom3",
    "description": "Convert milliliters to cubic meters.",
    "category": "Utility",
    "aliases": [
      "mltom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltopt",
    "description": "Convert milliliters to pints.",
    "category": "Utility",
    "aliases": [
      "mltopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltoqt",
    "description": "Convert milliliters to quarts.",
    "category": "Utility",
    "aliases": [
      "mltoqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltotbsp",
    "description": "Convert milliliters to tablespoons.",
    "category": "Utility",
    "aliases": [
      "mltotbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltotsp",
    "description": "Convert milliliters to teaspoons.",
    "category": "Utility",
    "aliases": [
      "mltotsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtochain",
    "description": "Convert millimeters to chains.",
    "category": "Utility",
    "aliases": [
      "mmtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtocm",
    "description": "Convert millimeters to centimeters.",
    "category": "Utility",
    "aliases": [
      "mmtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtoft",
    "description": "Convert millimeters to feet.",
    "category": "Utility",
    "aliases": [
      "mmtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtofurlong",
    "description": "Convert millimeters to furlongs.",
    "category": "Utility",
    "aliases": [
      "mmtofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtoin",
    "description": "Convert millimeters to inches.",
    "category": "Utility",
    "aliases": [
      "mmtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtokm",
    "description": "Convert millimeters to kilometers.",
    "category": "Utility",
    "aliases": [
      "mmtokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtoleague",
    "description": "Convert millimeters to leagues.",
    "category": "Utility",
    "aliases": [
      "mmtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtom",
    "description": "Convert millimeters to meters.",
    "category": "Utility",
    "aliases": [
      "mmtom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtomi",
    "description": "Convert millimeters to miles.",
    "category": "Utility",
    "aliases": [
      "mmtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtonm",
    "description": "Convert millimeters to nanometers.",
    "category": "Utility",
    "aliases": [
      "mmtonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtonmi",
    "description": "Convert millimeters to nautical miles.",
    "category": "Utility",
    "aliases": [
      "mmtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtorod",
    "description": "Convert millimeters to rods.",
    "category": "Utility",
    "aliases": [
      "mmtorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtoum",
    "description": "Convert millimeters to micrometers.",
    "category": "Utility",
    "aliases": [
      "mmtoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mmtoyd",
    "description": "Convert millimeters to yards.",
    "category": "Utility",
    "aliases": [
      "mmtoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mock",
    "description": "Transform text using mock text.",
    "category": "Utility",
    "aliases": [
      "mock"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "modulonums",
    "description": "Modulo utility.",
    "category": "Utility",
    "aliases": [
      "modulonums"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthsintoyears",
    "description": "Months Into Years utility.",
    "category": "Utility",
    "aliases": [
      "monthsintoyears"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtocentury",
    "description": "Convert months to centuries.",
    "category": "Utility",
    "aliases": [
      "monthtocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtoday",
    "description": "Convert months to days.",
    "category": "Utility",
    "aliases": [
      "monthtoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtodecade",
    "description": "Convert months to decades.",
    "category": "Utility",
    "aliases": [
      "monthtodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtohr",
    "description": "Convert months to hours.",
    "category": "Utility",
    "aliases": [
      "monthtohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtomin",
    "description": "Convert months to minutes.",
    "category": "Utility",
    "aliases": [
      "monthtomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtoms",
    "description": "Convert months to milliseconds.",
    "category": "Utility",
    "aliases": [
      "monthtoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtosec",
    "description": "Convert months to seconds.",
    "category": "Utility",
    "aliases": [
      "monthtosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtoweek",
    "description": "Convert months to weeks.",
    "category": "Utility",
    "aliases": [
      "monthtoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "monthtoyear",
    "description": "Convert months to years.",
    "category": "Utility",
    "aliases": [
      "monthtoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mphtofps",
    "description": "Convert miles/hour to feet/second.",
    "category": "Utility",
    "aliases": [
      "mphtofps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mphtoknot",
    "description": "Convert miles/hour to knots.",
    "category": "Utility",
    "aliases": [
      "mphtoknot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mphtokph",
    "description": "Convert miles/hour to kilometers/hour.",
    "category": "Utility",
    "aliases": [
      "mphtokph"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mphtomps",
    "description": "Convert miles/hour to meters/second.",
    "category": "Utility",
    "aliases": [
      "mphtomps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mpstofps",
    "description": "Convert meters/second to feet/second.",
    "category": "Utility",
    "aliases": [
      "mpstofps"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mpstoknot",
    "description": "Convert meters/second to knots.",
    "category": "Utility",
    "aliases": [
      "mpstoknot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mpstokph",
    "description": "Convert meters/second to kilometers/hour.",
    "category": "Utility",
    "aliases": [
      "mpstokph"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mpstomph",
    "description": "Convert meters/second to miles/hour.",
    "category": "Utility",
    "aliases": [
      "mpstomph"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstocentury",
    "description": "Convert milliseconds to centuries.",
    "category": "Utility",
    "aliases": [
      "mstocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstoday",
    "description": "Convert milliseconds to days.",
    "category": "Utility",
    "aliases": [
      "mstoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstodecade",
    "description": "Convert milliseconds to decades.",
    "category": "Utility",
    "aliases": [
      "mstodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstohr",
    "description": "Convert milliseconds to hours.",
    "category": "Utility",
    "aliases": [
      "mstohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstomin",
    "description": "Convert milliseconds to minutes.",
    "category": "Utility",
    "aliases": [
      "mstomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstomonth",
    "description": "Convert milliseconds to months.",
    "category": "Utility",
    "aliases": [
      "mstomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstosec",
    "description": "Convert milliseconds to seconds.",
    "category": "Utility",
    "aliases": [
      "mstosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstoweek",
    "description": "Convert milliseconds to weeks.",
    "category": "Utility",
    "aliases": [
      "mstoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mstoyear",
    "description": "Convert milliseconds to years.",
    "category": "Utility",
    "aliases": [
      "mstoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtochain",
    "description": "Convert meters to chains.",
    "category": "Utility",
    "aliases": [
      "mtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtocm",
    "description": "Convert meters to centimeters.",
    "category": "Utility",
    "aliases": [
      "mtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtoft",
    "description": "Convert meters to feet.",
    "category": "Utility",
    "aliases": [
      "mtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtofurlong",
    "description": "Convert meters to furlongs.",
    "category": "Utility",
    "aliases": [
      "mtofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtoin",
    "description": "Convert meters to inches.",
    "category": "Utility",
    "aliases": [
      "mtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtokm",
    "description": "Convert meters to kilometers.",
    "category": "Utility",
    "aliases": [
      "mtokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtoleague",
    "description": "Convert meters to leagues.",
    "category": "Utility",
    "aliases": [
      "mtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtomi",
    "description": "Convert meters to miles.",
    "category": "Utility",
    "aliases": [
      "mtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtomm",
    "description": "Convert meters to millimeters.",
    "category": "Utility",
    "aliases": [
      "mtomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtonm",
    "description": "Convert meters to nanometers.",
    "category": "Utility",
    "aliases": [
      "mtonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtonmi",
    "description": "Convert meters to nautical miles.",
    "category": "Utility",
    "aliases": [
      "mtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtorod",
    "description": "Convert meters to rods.",
    "category": "Utility",
    "aliases": [
      "mtorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtoum",
    "description": "Convert meters to micrometers.",
    "category": "Utility",
    "aliases": [
      "mtoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mtoyd",
    "description": "Convert meters to yards.",
    "category": "Utility",
    "aliases": [
      "mtoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "multiplynums",
    "description": "Multiply Numbers utility.",
    "category": "Utility",
    "aliases": [
      "multiplynums"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "negatevalue",
    "description": "Negate Value utility.",
    "category": "Utility",
    "aliases": [
      "negatevalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitochain",
    "description": "Convert nautical miles to chains.",
    "category": "Utility",
    "aliases": [
      "nmitochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitocm",
    "description": "Convert nautical miles to centimeters.",
    "category": "Utility",
    "aliases": [
      "nmitocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitoft",
    "description": "Convert nautical miles to feet.",
    "category": "Utility",
    "aliases": [
      "nmitoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitofurlong",
    "description": "Convert nautical miles to furlongs.",
    "category": "Utility",
    "aliases": [
      "nmitofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitoin",
    "description": "Convert nautical miles to inches.",
    "category": "Utility",
    "aliases": [
      "nmitoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitokm",
    "description": "Convert nautical miles to kilometers.",
    "category": "Utility",
    "aliases": [
      "nmitokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitoleague",
    "description": "Convert nautical miles to leagues.",
    "category": "Utility",
    "aliases": [
      "nmitoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitom",
    "description": "Convert nautical miles to meters.",
    "category": "Utility",
    "aliases": [
      "nmitom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitomi",
    "description": "Convert nautical miles to miles.",
    "category": "Utility",
    "aliases": [
      "nmitomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitomm",
    "description": "Convert nautical miles to millimeters.",
    "category": "Utility",
    "aliases": [
      "nmitomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitonm",
    "description": "Convert nautical miles to nanometers.",
    "category": "Utility",
    "aliases": [
      "nmitonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitorod",
    "description": "Convert nautical miles to rods.",
    "category": "Utility",
    "aliases": [
      "nmitorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitoum",
    "description": "Convert nautical miles to micrometers.",
    "category": "Utility",
    "aliases": [
      "nmitoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmitoyd",
    "description": "Convert nautical miles to yards.",
    "category": "Utility",
    "aliases": [
      "nmitoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtochain",
    "description": "Convert nanometers to chains.",
    "category": "Utility",
    "aliases": [
      "nmtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtocm",
    "description": "Convert nanometers to centimeters.",
    "category": "Utility",
    "aliases": [
      "nmtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtoft",
    "description": "Convert nanometers to feet.",
    "category": "Utility",
    "aliases": [
      "nmtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtofurlong",
    "description": "Convert nanometers to furlongs.",
    "category": "Utility",
    "aliases": [
      "nmtofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtoin",
    "description": "Convert nanometers to inches.",
    "category": "Utility",
    "aliases": [
      "nmtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtokm",
    "description": "Convert nanometers to kilometers.",
    "category": "Utility",
    "aliases": [
      "nmtokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtoleague",
    "description": "Convert nanometers to leagues.",
    "category": "Utility",
    "aliases": [
      "nmtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtom",
    "description": "Convert nanometers to meters.",
    "category": "Utility",
    "aliases": [
      "nmtom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtomi",
    "description": "Convert nanometers to miles.",
    "category": "Utility",
    "aliases": [
      "nmtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtomm",
    "description": "Convert nanometers to millimeters.",
    "category": "Utility",
    "aliases": [
      "nmtomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtonmi",
    "description": "Convert nanometers to nautical miles.",
    "category": "Utility",
    "aliases": [
      "nmtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtorod",
    "description": "Convert nanometers to rods.",
    "category": "Utility",
    "aliases": [
      "nmtorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtoum",
    "description": "Convert nanometers to micrometers.",
    "category": "Utility",
    "aliases": [
      "nmtoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nmtoyd",
    "description": "Convert nanometers to yards.",
    "category": "Utility",
    "aliases": [
      "nmtoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "normalizews",
    "description": "Transform text using normalize whitespace.",
    "category": "Utility",
    "aliases": [
      "normalizews"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "occupancypercent",
    "description": "Occupancy Percent utility.",
    "category": "Utility",
    "aliases": [
      "occupancypercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "onlysymbols",
    "description": "Transform text using only symbols.",
    "category": "Utility",
    "aliases": [
      "onlysymbols"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztocarat",
    "description": "Convert ounces to carats.",
    "category": "Utility",
    "aliases": [
      "oztocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztog",
    "description": "Convert ounces to grams.",
    "category": "Utility",
    "aliases": [
      "oztog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztograin",
    "description": "Convert ounces to grains.",
    "category": "Utility",
    "aliases": [
      "oztograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztokg",
    "description": "Convert ounces to kilograms.",
    "category": "Utility",
    "aliases": [
      "oztokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztolb",
    "description": "Convert ounces to pounds.",
    "category": "Utility",
    "aliases": [
      "oztolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztomg",
    "description": "Convert ounces to milligrams.",
    "category": "Utility",
    "aliases": [
      "oztomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztost",
    "description": "Convert ounces to stone.",
    "category": "Utility",
    "aliases": [
      "oztost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztot",
    "description": "Convert ounces to metric tons.",
    "category": "Utility",
    "aliases": [
      "oztot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "oztouston",
    "description": "Convert ounces to us tons.",
    "category": "Utility",
    "aliases": [
      "oztouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pacecalc",
    "description": "Pace utility.",
    "category": "Utility",
    "aliases": [
      "pacecalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "paragraphcount",
    "description": "Analyze text with paragraph count.",
    "category": "Utility",
    "aliases": [
      "paragraphcount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pascalcase",
    "description": "Transform text using pascal case.",
    "category": "Utility",
    "aliases": [
      "pascalcase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pbtob",
    "description": "Convert petabytes to bytes.",
    "category": "Utility",
    "aliases": [
      "pbtob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pbtogb",
    "description": "Convert petabytes to gigabytes.",
    "category": "Utility",
    "aliases": [
      "pbtogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pbtogib",
    "description": "Convert petabytes to gibibytes.",
    "category": "Utility",
    "aliases": [
      "pbtogib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pbtokb",
    "description": "Convert petabytes to kilobytes.",
    "category": "Utility",
    "aliases": [
      "pbtokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pbtokib",
    "description": "Convert petabytes to kibibytes.",
    "category": "Utility",
    "aliases": [
      "pbtokib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pbtomb",
    "description": "Convert petabytes to megabytes.",
    "category": "Utility",
    "aliases": [
      "pbtomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pbtomib",
    "description": "Convert petabytes to mebibytes.",
    "category": "Utility",
    "aliases": [
      "pbtomib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pbtotb",
    "description": "Convert petabytes to terabytes.",
    "category": "Utility",
    "aliases": [
      "pbtotb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "percentageof",
    "description": "Percentage Of utility.",
    "category": "Utility",
    "aliases": [
      "percentageof"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "percentchange",
    "description": "Percent Change utility.",
    "category": "Utility",
    "aliases": [
      "percentchange"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "percentofone",
    "description": "Percent Of One utility.",
    "category": "Utility",
    "aliases": [
      "percentofone"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "percenttodecimal",
    "description": "Percent To Decimal utility.",
    "category": "Utility",
    "aliases": [
      "percenttodecimal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "perimeterrect",
    "description": "Rectangle Perimeter utility.",
    "category": "Utility",
    "aliases": [
      "perimeterrect"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "permille",
    "description": "Per Mille utility.",
    "category": "Utility",
    "aliases": [
      "permille"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pickitem",
    "description": "Pick Item utility.",
    "category": "Utility",
    "aliases": [
      "pickitem"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pinttoml",
    "description": "Convert pints to milliliters.",
    "category": "Utility",
    "aliases": [
      "pinttoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "powernums",
    "description": "Power utility.",
    "category": "Utility",
    "aliases": [
      "powernums"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "prefix",
    "description": "Set the prefix for the bot",
    "category": "Utility",
    "aliases": [
      "prefix"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "premium",
    "description": "Shows/Activates your premium.",
    "category": "Utility",
    "aliases": [
      "premium"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "presenceroles",
    "description": "Gives role on basis of your activities",
    "category": "Utility",
    "aliases": [
      "presenceroles"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pressurecalc",
    "description": "Pressure utility.",
    "category": "Utility",
    "aliases": [
      "pressurecalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "productplus",
    "description": "Product Plus Sum utility.",
    "category": "Utility",
    "aliases": [
      "productplus"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "profile",
    "description": "Show a clean text summary of a user",
    "category": "Utility",
    "aliases": [
      "profile"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttocup",
    "description": "Convert pints to cups.",
    "category": "Utility",
    "aliases": [
      "pttocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttofloz",
    "description": "Convert pints to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "pttofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttogal",
    "description": "Convert pints to gallons.",
    "category": "Utility",
    "aliases": [
      "pttogal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttol",
    "description": "Convert pints to liters.",
    "category": "Utility",
    "aliases": [
      "pttol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttom3",
    "description": "Convert pints to cubic meters.",
    "category": "Utility",
    "aliases": [
      "pttom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttoml",
    "description": "Convert pints to milliliters.",
    "category": "Utility",
    "aliases": [
      "pttoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttoqt",
    "description": "Convert pints to quarts.",
    "category": "Utility",
    "aliases": [
      "pttoqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttotbsp",
    "description": "Convert pints to tablespoons.",
    "category": "Utility",
    "aliases": [
      "pttotbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pttotsp",
    "description": "Convert pints to teaspoons.",
    "category": "Utility",
    "aliases": [
      "pttotsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pxtocm",
    "description": "Convert pixels to centimeters.",
    "category": "Utility",
    "aliases": [
      "pxtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttocup",
    "description": "Convert quarts to cups.",
    "category": "Utility",
    "aliases": [
      "qttocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttofloz",
    "description": "Convert quarts to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "qttofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttogal",
    "description": "Convert quarts to gallons.",
    "category": "Utility",
    "aliases": [
      "qttogal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttol",
    "description": "Convert quarts to liters.",
    "category": "Utility",
    "aliases": [
      "qttol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttom3",
    "description": "Convert quarts to cubic meters.",
    "category": "Utility",
    "aliases": [
      "qttom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttoml",
    "description": "Convert quarts to milliliters.",
    "category": "Utility",
    "aliases": [
      "qttoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttopt",
    "description": "Convert quarts to pints.",
    "category": "Utility",
    "aliases": [
      "qttopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttotbsp",
    "description": "Convert quarts to tablespoons.",
    "category": "Utility",
    "aliases": [
      "qttotbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "qttotsp",
    "description": "Convert quarts to teaspoons.",
    "category": "Utility",
    "aliases": [
      "qttotsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "quartervalue",
    "description": "Quarter Value utility.",
    "category": "Utility",
    "aliases": [
      "quartervalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "radianstodegrees",
    "description": "Radians To Degrees utility.",
    "category": "Utility",
    "aliases": [
      "radianstodegrees"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ratiodiff",
    "description": "Ratio Difference utility.",
    "category": "Utility",
    "aliases": [
      "ratiodiff"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "readingtime",
    "description": "Analyze text with reading time.",
    "category": "Utility",
    "aliases": [
      "readingtime"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "reciprocal",
    "description": "Reciprocal utility.",
    "category": "Utility",
    "aliases": [
      "reciprocal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "record",
    "description": "Record audio from your current voice channel.",
    "category": "Utility",
    "aliases": [
      "record"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "remainingpercent",
    "description": "Remaining Percent utility.",
    "category": "Utility",
    "aliases": [
      "remainingpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "removespaces",
    "description": "Transform text using remove spaces.",
    "category": "Utility",
    "aliases": [
      "removespaces"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "repeat2",
    "description": "Transform text using repeat twice.",
    "category": "Utility",
    "aliases": [
      "repeat2"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "repeat3",
    "description": "Transform text using repeat thrice.",
    "category": "Utility",
    "aliases": [
      "repeat3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "reverseitems",
    "description": "Reverse Items utility.",
    "category": "Utility",
    "aliases": [
      "reverseitems"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rightpercentageofleft",
    "description": "Right As Percent Of Left utility.",
    "category": "Utility",
    "aliases": [
      "rightpercentageofleft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "righttoleftpercent",
    "description": "Right To Left Percent utility.",
    "category": "Utility",
    "aliases": [
      "righttoleftpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ripemd160hash",
    "description": "RIPEMD160 Hash utility.",
    "category": "Utility",
    "aliases": [
      "ripemd160hash"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtochain",
    "description": "Convert rods to chains.",
    "category": "Utility",
    "aliases": [
      "rodtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtocm",
    "description": "Convert rods to centimeters.",
    "category": "Utility",
    "aliases": [
      "rodtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtoft",
    "description": "Convert rods to feet.",
    "category": "Utility",
    "aliases": [
      "rodtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtofurlong",
    "description": "Convert rods to furlongs.",
    "category": "Utility",
    "aliases": [
      "rodtofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtoin",
    "description": "Convert rods to inches.",
    "category": "Utility",
    "aliases": [
      "rodtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtokm",
    "description": "Convert rods to kilometers.",
    "category": "Utility",
    "aliases": [
      "rodtokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtoleague",
    "description": "Convert rods to leagues.",
    "category": "Utility",
    "aliases": [
      "rodtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtom",
    "description": "Convert rods to meters.",
    "category": "Utility",
    "aliases": [
      "rodtom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtomi",
    "description": "Convert rods to miles.",
    "category": "Utility",
    "aliases": [
      "rodtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtomm",
    "description": "Convert rods to millimeters.",
    "category": "Utility",
    "aliases": [
      "rodtomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtonm",
    "description": "Convert rods to nanometers.",
    "category": "Utility",
    "aliases": [
      "rodtonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtonmi",
    "description": "Convert rods to nautical miles.",
    "category": "Utility",
    "aliases": [
      "rodtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtoum",
    "description": "Convert rods to micrometers.",
    "category": "Utility",
    "aliases": [
      "rodtoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rodtoyd",
    "description": "Convert rods to yards.",
    "category": "Utility",
    "aliases": [
      "rodtoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "roleicon",
    "description": "Sets role icon for you",
    "category": "Utility",
    "aliases": [
      "roleicon"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "rolesetup",
    "description": "Setup Roles!",
    "category": "Utility",
    "aliases": [
      "rolesetup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "roundnum",
    "description": "Round Number utility.",
    "category": "Utility",
    "aliases": [
      "roundnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "secondstominutes",
    "description": "Seconds To Minutes utility.",
    "category": "Utility",
    "aliases": [
      "secondstominutes"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectocentury",
    "description": "Convert seconds to centuries.",
    "category": "Utility",
    "aliases": [
      "sectocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectoday",
    "description": "Convert seconds to days.",
    "category": "Utility",
    "aliases": [
      "sectoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectodecade",
    "description": "Convert seconds to decades.",
    "category": "Utility",
    "aliases": [
      "sectodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectohr",
    "description": "Convert seconds to hours.",
    "category": "Utility",
    "aliases": [
      "sectohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectomin",
    "description": "Convert seconds to minutes.",
    "category": "Utility",
    "aliases": [
      "sectomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectomonth",
    "description": "Convert seconds to months.",
    "category": "Utility",
    "aliases": [
      "sectomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectoms",
    "description": "Convert seconds to milliseconds.",
    "category": "Utility",
    "aliases": [
      "sectoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectoweek",
    "description": "Convert seconds to weeks.",
    "category": "Utility",
    "aliases": [
      "sectoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sectoyear",
    "description": "Convert seconds to years.",
    "category": "Utility",
    "aliases": [
      "sectoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sentcase",
    "description": "Transform text using sentence case.",
    "category": "Utility",
    "aliases": [
      "sentcase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "setup",
    "description": "Setup the bot",
    "category": "Utility",
    "aliases": [
      "setup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sha1hash",
    "description": "SHA1 Hash utility.",
    "category": "Utility",
    "aliases": [
      "sha1hash"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sha224hash",
    "description": "SHA224 Hash utility.",
    "category": "Utility",
    "aliases": [
      "sha224hash"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sha256hash",
    "description": "SHA256 Hash utility.",
    "category": "Utility",
    "aliases": [
      "sha256hash"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sha384hash",
    "description": "SHA384 Hash utility.",
    "category": "Utility",
    "aliases": [
      "sha384hash"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sha512hash",
    "description": "SHA512 Hash utility.",
    "category": "Utility",
    "aliases": [
      "sha512hash"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "shortestword",
    "description": "Analyze text with shortest word.",
    "category": "Utility",
    "aliases": [
      "shortestword"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "shuffleitems",
    "description": "Shuffle Items utility.",
    "category": "Utility",
    "aliases": [
      "shuffleitems"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "signnum",
    "description": "Sign utility.",
    "category": "Utility",
    "aliases": [
      "signnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sinvalue",
    "description": "Sine utility.",
    "category": "Utility",
    "aliases": [
      "sinvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "slopecalc",
    "description": "Slope utility.",
    "category": "Utility",
    "aliases": [
      "slopecalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "slug",
    "description": "Transform text using slug text.",
    "category": "Utility",
    "aliases": [
      "slug"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "smallerby",
    "description": "Smaller By utility.",
    "category": "Utility",
    "aliases": [
      "smallerby"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "snakecase",
    "description": "Transform text using snake case.",
    "category": "Utility",
    "aliases": [
      "snakecase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sortchars",
    "description": "Transform text using sort characters.",
    "category": "Utility",
    "aliases": [
      "sortchars"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sortitems",
    "description": "Sort Items utility.",
    "category": "Utility",
    "aliases": [
      "sortitems"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sortwords",
    "description": "Transform text using sort words.",
    "category": "Utility",
    "aliases": [
      "sortwords"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spacecount",
    "description": "Analyze text with space count.",
    "category": "Utility",
    "aliases": [
      "spacecount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spaced",
    "description": "Transform text using spaced text.",
    "category": "Utility",
    "aliases": [
      "spaced"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "speedcalc",
    "description": "Calculate average speed from distance and time.",
    "category": "Utility",
    "aliases": [
      "speedcalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spherearea",
    "description": "Sphere Surface Area utility.",
    "category": "Utility",
    "aliases": [
      "spherearea"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spherevolume",
    "description": "Sphere Volume utility.",
    "category": "Utility",
    "aliases": [
      "spherevolume"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "splitbill",
    "description": "Split Bill utility.",
    "category": "Utility",
    "aliases": [
      "splitbill"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "spoiler",
    "description": "Transform text using spoiler text.",
    "category": "Utility",
    "aliases": [
      "spoiler"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmtoacre",
    "description": "Convert square meters to acres.",
    "category": "Utility",
    "aliases": [
      "sqmtoacre"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmtohectare",
    "description": "Convert square meters to hectares.",
    "category": "Utility",
    "aliases": [
      "sqmtohectare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqcmtoacre",
    "description": "Convert square centimeters to acres.",
    "category": "Utility",
    "aliases": [
      "sqcmtoacre"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqcmtohectare",
    "description": "Convert square centimeters to hectares.",
    "category": "Utility",
    "aliases": [
      "sqcmtohectare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqcmtosqft",
    "description": "Convert square centimeters to square feet.",
    "category": "Utility",
    "aliases": [
      "sqcmtosqft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqcmtosqkm",
    "description": "Convert square centimeters to square kilometers.",
    "category": "Utility",
    "aliases": [
      "sqcmtosqkm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqcmtosqm",
    "description": "Convert square centimeters to square meters.",
    "category": "Utility",
    "aliases": [
      "sqcmtosqm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqcmtosqmm",
    "description": "Convert square centimeters to square millimeters.",
    "category": "Utility",
    "aliases": [
      "sqcmtosqmm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqcmtosqyd",
    "description": "Convert square centimeters to square yards.",
    "category": "Utility",
    "aliases": [
      "sqcmtosqyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqfttoacre",
    "description": "Convert square feet to acres.",
    "category": "Utility",
    "aliases": [
      "sqfttoacre"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqfttohectare",
    "description": "Convert square feet to hectares.",
    "category": "Utility",
    "aliases": [
      "sqfttohectare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqfttosqcm",
    "description": "Convert square feet to square centimeters.",
    "category": "Utility",
    "aliases": [
      "sqfttosqcm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqfttosqkm",
    "description": "Convert square feet to square kilometers.",
    "category": "Utility",
    "aliases": [
      "sqfttosqkm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqfttosqm",
    "description": "Convert square feet to square meters.",
    "category": "Utility",
    "aliases": [
      "sqfttosqm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqfttosqmm",
    "description": "Convert square feet to square millimeters.",
    "category": "Utility",
    "aliases": [
      "sqfttosqmm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqfttosqyd",
    "description": "Convert square feet to square yards.",
    "category": "Utility",
    "aliases": [
      "sqfttosqyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqkmtoacre",
    "description": "Convert square kilometers to acres.",
    "category": "Utility",
    "aliases": [
      "sqkmtoacre"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqkmtohectare",
    "description": "Convert square kilometers to hectares.",
    "category": "Utility",
    "aliases": [
      "sqkmtohectare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqkmtosqcm",
    "description": "Convert square kilometers to square centimeters.",
    "category": "Utility",
    "aliases": [
      "sqkmtosqcm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqkmtosqft",
    "description": "Convert square kilometers to square feet.",
    "category": "Utility",
    "aliases": [
      "sqkmtosqft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqkmtosqm",
    "description": "Convert square kilometers to square meters.",
    "category": "Utility",
    "aliases": [
      "sqkmtosqm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqkmtosqmm",
    "description": "Convert square kilometers to square millimeters.",
    "category": "Utility",
    "aliases": [
      "sqkmtosqmm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqkmtosqyd",
    "description": "Convert square kilometers to square yards.",
    "category": "Utility",
    "aliases": [
      "sqkmtosqyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmmtoacre",
    "description": "Convert square millimeters to acres.",
    "category": "Utility",
    "aliases": [
      "sqmmtoacre"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmmtohectare",
    "description": "Convert square millimeters to hectares.",
    "category": "Utility",
    "aliases": [
      "sqmmtohectare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmmtosqcm",
    "description": "Convert square millimeters to square centimeters.",
    "category": "Utility",
    "aliases": [
      "sqmmtosqcm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmmtosqft",
    "description": "Convert square millimeters to square feet.",
    "category": "Utility",
    "aliases": [
      "sqmmtosqft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmmtosqkm",
    "description": "Convert square millimeters to square kilometers.",
    "category": "Utility",
    "aliases": [
      "sqmmtosqkm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmmtosqm",
    "description": "Convert square millimeters to square meters.",
    "category": "Utility",
    "aliases": [
      "sqmmtosqm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmmtosqyd",
    "description": "Convert square millimeters to square yards.",
    "category": "Utility",
    "aliases": [
      "sqmmtosqyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmtosqcm",
    "description": "Convert square meters to square centimeters.",
    "category": "Utility",
    "aliases": [
      "sqmtosqcm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmtosqft",
    "description": "Convert square meters to square feet.",
    "category": "Utility",
    "aliases": [
      "sqmtosqft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmtosqkm",
    "description": "Convert square meters to square kilometers.",
    "category": "Utility",
    "aliases": [
      "sqmtosqkm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmtosqmm",
    "description": "Convert square meters to square millimeters.",
    "category": "Utility",
    "aliases": [
      "sqmtosqmm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqmtosqyd",
    "description": "Convert square meters to square yards.",
    "category": "Utility",
    "aliases": [
      "sqmtosqyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqrtvalue",
    "description": "Square Root utility.",
    "category": "Utility",
    "aliases": [
      "sqrtvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "square",
    "description": "Square utility.",
    "category": "Utility",
    "aliases": [
      "square"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "squaremetersfromside",
    "description": "Square Meters From Side utility.",
    "category": "Utility",
    "aliases": [
      "squaremetersfromside"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqydtoacre",
    "description": "Convert square yards to acres.",
    "category": "Utility",
    "aliases": [
      "sqydtoacre"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqydtohectare",
    "description": "Convert square yards to hectares.",
    "category": "Utility",
    "aliases": [
      "sqydtohectare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqydtosqcm",
    "description": "Convert square yards to square centimeters.",
    "category": "Utility",
    "aliases": [
      "sqydtosqcm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqydtosqft",
    "description": "Convert square yards to square feet.",
    "category": "Utility",
    "aliases": [
      "sqydtosqft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqydtosqkm",
    "description": "Convert square yards to square kilometers.",
    "category": "Utility",
    "aliases": [
      "sqydtosqkm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqydtosqm",
    "description": "Convert square yards to square meters.",
    "category": "Utility",
    "aliases": [
      "sqydtosqm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sqydtosqmm",
    "description": "Convert square yards to square millimeters.",
    "category": "Utility",
    "aliases": [
      "sqydtosqmm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "starboard",
    "description": "enabling you to highlight and amplify a specific sentence within a designated channel.",
    "category": "Utility",
    "aliases": [
      "starboard"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "statusole",
    "description": "Assigning a role to you by fetching your status information.",
    "category": "Utility",
    "aliases": [
      "statusole"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "steal",
    "description": "Steal emojis and adds to the server.",
    "category": "Utility",
    "aliases": [
      "steal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stickynick",
    "description": "Sticks a permenant nickname to an user.",
    "category": "Utility",
    "aliases": [
      "stickynick"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stripletters",
    "description": "Transform text using strip letters.",
    "category": "Utility",
    "aliases": [
      "stripletters"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stripnumbers",
    "description": "Transform text using strip numbers.",
    "category": "Utility",
    "aliases": [
      "stripnumbers"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stripsymbols",
    "description": "Transform text using strip symbols.",
    "category": "Utility",
    "aliases": [
      "stripsymbols"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttocarat",
    "description": "Convert stone to carats.",
    "category": "Utility",
    "aliases": [
      "sttocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttog",
    "description": "Convert stone to grams.",
    "category": "Utility",
    "aliases": [
      "sttog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttograin",
    "description": "Convert stone to grains.",
    "category": "Utility",
    "aliases": [
      "sttograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttokg",
    "description": "Convert stone to kilograms.",
    "category": "Utility",
    "aliases": [
      "sttokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttolb",
    "description": "Convert stone to pounds.",
    "category": "Utility",
    "aliases": [
      "sttolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttomg",
    "description": "Convert stone to milligrams.",
    "category": "Utility",
    "aliases": [
      "sttomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttooz",
    "description": "Convert stone to ounces.",
    "category": "Utility",
    "aliases": [
      "sttooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttot",
    "description": "Convert stone to metric tons.",
    "category": "Utility",
    "aliases": [
      "sttot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sttouston",
    "description": "Convert stone to us tons.",
    "category": "Utility",
    "aliases": [
      "sttouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "subtractnums",
    "description": "Subtract Numbers utility.",
    "category": "Utility",
    "aliases": [
      "subtractnums"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "successpercent",
    "description": "Success Percent utility.",
    "category": "Utility",
    "aliases": [
      "successpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sumdistance",
    "description": "Absolute Difference utility.",
    "category": "Utility",
    "aliases": [
      "sumdistance"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "sumofsquares",
    "description": "Sum Of Squares utility.",
    "category": "Utility",
    "aliases": [
      "sumofsquares"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "symbolcount",
    "description": "Analyze text with symbol count.",
    "category": "Utility",
    "aliases": [
      "symbolcount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbtogb",
    "description": "Convert terabytes to gigabytes.",
    "category": "Utility",
    "aliases": [
      "tbtogb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tanvalue",
    "description": "Tangent utility.",
    "category": "Utility",
    "aliases": [
      "tanvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "taxcalc",
    "description": "Calculate tax amount from value and rate.",
    "category": "Utility",
    "aliases": [
      "taxcalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "taxamount",
    "description": "Tax Amount utility.",
    "category": "Utility",
    "aliases": [
      "taxamount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptocup",
    "description": "Convert tablespoons to cups.",
    "category": "Utility",
    "aliases": [
      "tbsptocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptofloz",
    "description": "Convert tablespoons to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "tbsptofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptogal",
    "description": "Convert tablespoons to gallons.",
    "category": "Utility",
    "aliases": [
      "tbsptogal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptol",
    "description": "Convert tablespoons to liters.",
    "category": "Utility",
    "aliases": [
      "tbsptol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptom3",
    "description": "Convert tablespoons to cubic meters.",
    "category": "Utility",
    "aliases": [
      "tbsptom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptoml",
    "description": "Convert tablespoons to milliliters.",
    "category": "Utility",
    "aliases": [
      "tbsptoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptopt",
    "description": "Convert tablespoons to pints.",
    "category": "Utility",
    "aliases": [
      "tbsptopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptoqt",
    "description": "Convert tablespoons to quarts.",
    "category": "Utility",
    "aliases": [
      "tbsptoqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbsptotsp",
    "description": "Convert tablespoons to teaspoons.",
    "category": "Utility",
    "aliases": [
      "tbsptotsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbtob",
    "description": "Convert terabytes to bytes.",
    "category": "Utility",
    "aliases": [
      "tbtob"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbtogib",
    "description": "Convert terabytes to gibibytes.",
    "category": "Utility",
    "aliases": [
      "tbtogib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbtokb",
    "description": "Convert terabytes to kilobytes.",
    "category": "Utility",
    "aliases": [
      "tbtokb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbtokib",
    "description": "Convert terabytes to kibibytes.",
    "category": "Utility",
    "aliases": [
      "tbtokib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbtomb",
    "description": "Convert terabytes to megabytes.",
    "category": "Utility",
    "aliases": [
      "tbtomb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbtomib",
    "description": "Convert terabytes to mebibytes.",
    "category": "Utility",
    "aliases": [
      "tbtomib"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tbtopb",
    "description": "Convert terabytes to petabytes.",
    "category": "Utility",
    "aliases": [
      "tbtopb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "thirdvalue",
    "description": "Third Value utility.",
    "category": "Utility",
    "aliases": [
      "thirdvalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ticketadd",
    "description": "Add a member to the current ticket channel.",
    "category": "Utility",
    "aliases": [
      "ticketadd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ticketclose",
    "description": "Close the current managed ticket channel.",
    "category": "Utility",
    "aliases": [
      "ticketclose"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ticketpanel",
    "description": "Send the ticket open panel in the current channel.",
    "category": "Utility",
    "aliases": [
      "ticketpanel"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ticketremove",
    "description": "Remove a member from the current ticket channel.",
    "category": "Utility",
    "aliases": [
      "ticketremove"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ticketrole",
    "description": "Manage support roles that can see new tickets.",
    "category": "Utility",
    "aliases": [
      "ticketrole"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ticketsetup",
    "description": "Configure the ticket category and optional log channel.",
    "category": "Utility",
    "aliases": [
      "ticketsetup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tip10",
    "description": "Ten Percent Tip utility.",
    "category": "Utility",
    "aliases": [
      "tip10"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tip15",
    "description": "Fifteen Percent Tip utility.",
    "category": "Utility",
    "aliases": [
      "tip15"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tip18",
    "description": "Eighteen Percent Tip utility.",
    "category": "Utility",
    "aliases": [
      "tip18"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tip20",
    "description": "Twenty Percent Tip utility.",
    "category": "Utility",
    "aliases": [
      "tip20"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "titlecase",
    "description": "Transform text using title case.",
    "category": "Utility",
    "aliases": [
      "titlecase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tokenestimate",
    "description": "Analyze text with token estimate.",
    "category": "Utility",
    "aliases": [
      "tokenestimate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "translate",
    "description": "Translate text to another language.",
    "category": "Utility",
    "aliases": [
      "translate"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "trianglearea",
    "description": "Triangle Area utility.",
    "category": "Utility",
    "aliases": [
      "trianglearea"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "trim",
    "description": "Transform text using trim text.",
    "category": "Utility",
    "aliases": [
      "trim"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "triplecompare",
    "description": "Triple Compare utility.",
    "category": "Utility",
    "aliases": [
      "triplecompare"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "triplespace",
    "description": "Transform text using triple space.",
    "category": "Utility",
    "aliases": [
      "triplespace"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "triplevalue",
    "description": "Triple Value utility.",
    "category": "Utility",
    "aliases": [
      "triplevalue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "truncnum",
    "description": "Truncate Number utility.",
    "category": "Utility",
    "aliases": [
      "truncnum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptocup",
    "description": "Convert teaspoons to cups.",
    "category": "Utility",
    "aliases": [
      "tsptocup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptofloz",
    "description": "Convert teaspoons to fluid ounces.",
    "category": "Utility",
    "aliases": [
      "tsptofloz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptogal",
    "description": "Convert teaspoons to gallons.",
    "category": "Utility",
    "aliases": [
      "tsptogal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptol",
    "description": "Convert teaspoons to liters.",
    "category": "Utility",
    "aliases": [
      "tsptol"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptom3",
    "description": "Convert teaspoons to cubic meters.",
    "category": "Utility",
    "aliases": [
      "tsptom3"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptoml",
    "description": "Convert teaspoons to milliliters.",
    "category": "Utility",
    "aliases": [
      "tsptoml"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptopt",
    "description": "Convert teaspoons to pints.",
    "category": "Utility",
    "aliases": [
      "tsptopt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptoqt",
    "description": "Convert teaspoons to quarts.",
    "category": "Utility",
    "aliases": [
      "tsptoqt"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "tsptotbsp",
    "description": "Convert teaspoons to tablespoons.",
    "category": "Utility",
    "aliases": [
      "tsptotbsp"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttocarat",
    "description": "Convert metric tons to carats.",
    "category": "Utility",
    "aliases": [
      "ttocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttog",
    "description": "Convert metric tons to grams.",
    "category": "Utility",
    "aliases": [
      "ttog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttograin",
    "description": "Convert metric tons to grains.",
    "category": "Utility",
    "aliases": [
      "ttograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttokg",
    "description": "Convert metric tons to kilograms.",
    "category": "Utility",
    "aliases": [
      "ttokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttolb",
    "description": "Convert metric tons to pounds.",
    "category": "Utility",
    "aliases": [
      "ttolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttomg",
    "description": "Convert metric tons to milligrams.",
    "category": "Utility",
    "aliases": [
      "ttomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttooz",
    "description": "Convert metric tons to ounces.",
    "category": "Utility",
    "aliases": [
      "ttooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttost",
    "description": "Convert metric tons to stone.",
    "category": "Utility",
    "aliases": [
      "ttost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ttouston",
    "description": "Convert metric tons to us tons.",
    "category": "Utility",
    "aliases": [
      "ttouston"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtochain",
    "description": "Convert micrometers to chains.",
    "category": "Utility",
    "aliases": [
      "umtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtocm",
    "description": "Convert micrometers to centimeters.",
    "category": "Utility",
    "aliases": [
      "umtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtoft",
    "description": "Convert micrometers to feet.",
    "category": "Utility",
    "aliases": [
      "umtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtofurlong",
    "description": "Convert micrometers to furlongs.",
    "category": "Utility",
    "aliases": [
      "umtofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtoin",
    "description": "Convert micrometers to inches.",
    "category": "Utility",
    "aliases": [
      "umtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtokm",
    "description": "Convert micrometers to kilometers.",
    "category": "Utility",
    "aliases": [
      "umtokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtoleague",
    "description": "Convert micrometers to leagues.",
    "category": "Utility",
    "aliases": [
      "umtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtom",
    "description": "Convert micrometers to meters.",
    "category": "Utility",
    "aliases": [
      "umtom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtomi",
    "description": "Convert micrometers to miles.",
    "category": "Utility",
    "aliases": [
      "umtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtomm",
    "description": "Convert micrometers to millimeters.",
    "category": "Utility",
    "aliases": [
      "umtomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtonm",
    "description": "Convert micrometers to nanometers.",
    "category": "Utility",
    "aliases": [
      "umtonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtonmi",
    "description": "Convert micrometers to nautical miles.",
    "category": "Utility",
    "aliases": [
      "umtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtorod",
    "description": "Convert micrometers to rods.",
    "category": "Utility",
    "aliases": [
      "umtorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "umtoyd",
    "description": "Convert micrometers to yards.",
    "category": "Utility",
    "aliases": [
      "umtoyd"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "uniquechars",
    "description": "Analyze text with unique characters.",
    "category": "Utility",
    "aliases": [
      "uniquechars"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "uniquewords",
    "description": "Analyze text with unique words.",
    "category": "Utility",
    "aliases": [
      "uniquewords"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "uppercasecount",
    "description": "Analyze text with uppercase count.",
    "category": "Utility",
    "aliases": [
      "uppercasecount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "urlcount",
    "description": "Analyze text with url count.",
    "category": "Utility",
    "aliases": [
      "urlcount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "urldecode",
    "description": "URL Decode utility.",
    "category": "Utility",
    "aliases": [
      "urldecode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "urlencode",
    "description": "URL Encode utility.",
    "category": "Utility",
    "aliases": [
      "urlencode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontocarat",
    "description": "Convert us tons to carats.",
    "category": "Utility",
    "aliases": [
      "ustontocarat"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontog",
    "description": "Convert us tons to grams.",
    "category": "Utility",
    "aliases": [
      "ustontog"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontograin",
    "description": "Convert us tons to grains.",
    "category": "Utility",
    "aliases": [
      "ustontograin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontokg",
    "description": "Convert us tons to kilograms.",
    "category": "Utility",
    "aliases": [
      "ustontokg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontolb",
    "description": "Convert us tons to pounds.",
    "category": "Utility",
    "aliases": [
      "ustontolb"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontomg",
    "description": "Convert us tons to milligrams.",
    "category": "Utility",
    "aliases": [
      "ustontomg"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontooz",
    "description": "Convert us tons to ounces.",
    "category": "Utility",
    "aliases": [
      "ustontooz"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontost",
    "description": "Convert us tons to stone.",
    "category": "Utility",
    "aliases": [
      "ustontost"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ustontot",
    "description": "Convert us tons to metric tons.",
    "category": "Utility",
    "aliases": [
      "ustontot"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "utilizationpercent",
    "description": "Utilization Percent utility.",
    "category": "Utility",
    "aliases": [
      "utilizationpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "variables",
    "description": "To get information about all variables.",
    "category": "Utility",
    "aliases": [
      "variables"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "vcrole",
    "description": "Sets role for vc",
    "category": "Utility",
    "aliases": [
      "vcrole"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "vowelcount",
    "description": "Analyze text with vowel count.",
    "category": "Utility",
    "aliases": [
      "vowelcount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "vowelsonly",
    "description": "Transform text using vowels only.",
    "category": "Utility",
    "aliases": [
      "vowelsonly"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weeksintomonths",
    "description": "Weeks Into Months utility.",
    "category": "Utility",
    "aliases": [
      "weeksintomonths"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektocentury",
    "description": "Convert weeks to centuries.",
    "category": "Utility",
    "aliases": [
      "weektocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektoday",
    "description": "Convert weeks to days.",
    "category": "Utility",
    "aliases": [
      "weektoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektodecade",
    "description": "Convert weeks to decades.",
    "category": "Utility",
    "aliases": [
      "weektodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektohr",
    "description": "Convert weeks to hours.",
    "category": "Utility",
    "aliases": [
      "weektohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektomin",
    "description": "Convert weeks to minutes.",
    "category": "Utility",
    "aliases": [
      "weektomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektomonth",
    "description": "Convert weeks to months.",
    "category": "Utility",
    "aliases": [
      "weektomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektoms",
    "description": "Convert weeks to milliseconds.",
    "category": "Utility",
    "aliases": [
      "weektoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektosec",
    "description": "Convert weeks to seconds.",
    "category": "Utility",
    "aliases": [
      "weektosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "weektoyear",
    "description": "Convert weeks to years.",
    "category": "Utility",
    "aliases": [
      "weektoyear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "whatpercent",
    "description": "What Percent utility.",
    "category": "Utility",
    "aliases": [
      "whatpercent"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "winratecalc",
    "description": "Win Rate utility.",
    "category": "Utility",
    "aliases": [
      "winratecalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "wordcount",
    "description": "Analyze text with word count.",
    "category": "Utility",
    "aliases": [
      "wordcount"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "workcalc",
    "description": "Work utility.",
    "category": "Utility",
    "aliases": [
      "workcalc"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtochain",
    "description": "Convert yards to chains.",
    "category": "Utility",
    "aliases": [
      "ydtochain"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtocm",
    "description": "Convert yards to centimeters.",
    "category": "Utility",
    "aliases": [
      "ydtocm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtoft",
    "description": "Convert yards to feet.",
    "category": "Utility",
    "aliases": [
      "ydtoft"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtofurlong",
    "description": "Convert yards to furlongs.",
    "category": "Utility",
    "aliases": [
      "ydtofurlong"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtoin",
    "description": "Convert yards to inches.",
    "category": "Utility",
    "aliases": [
      "ydtoin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtokm",
    "description": "Convert yards to kilometers.",
    "category": "Utility",
    "aliases": [
      "ydtokm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtoleague",
    "description": "Convert yards to leagues.",
    "category": "Utility",
    "aliases": [
      "ydtoleague"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtom",
    "description": "Convert yards to meters.",
    "category": "Utility",
    "aliases": [
      "ydtom"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtomi",
    "description": "Convert yards to miles.",
    "category": "Utility",
    "aliases": [
      "ydtomi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtomm",
    "description": "Convert yards to millimeters.",
    "category": "Utility",
    "aliases": [
      "ydtomm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtonm",
    "description": "Convert yards to nanometers.",
    "category": "Utility",
    "aliases": [
      "ydtonm"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtonmi",
    "description": "Convert yards to nautical miles.",
    "category": "Utility",
    "aliases": [
      "ydtonmi"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtorod",
    "description": "Convert yards to rods.",
    "category": "Utility",
    "aliases": [
      "ydtorod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "ydtoum",
    "description": "Convert yards to micrometers.",
    "category": "Utility",
    "aliases": [
      "ydtoum"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yearsintomonths",
    "description": "Years Into Months utility.",
    "category": "Utility",
    "aliases": [
      "yearsintomonths"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yearstodays",
    "description": "Years To Days utility.",
    "category": "Utility",
    "aliases": [
      "yearstodays"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartocentury",
    "description": "Convert years to centuries.",
    "category": "Utility",
    "aliases": [
      "yeartocentury"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartoday",
    "description": "Convert years to days.",
    "category": "Utility",
    "aliases": [
      "yeartoday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartodecade",
    "description": "Convert years to decades.",
    "category": "Utility",
    "aliases": [
      "yeartodecade"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartohr",
    "description": "Convert years to hours.",
    "category": "Utility",
    "aliases": [
      "yeartohr"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartomin",
    "description": "Convert years to minutes.",
    "category": "Utility",
    "aliases": [
      "yeartomin"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartomonth",
    "description": "Convert years to months.",
    "category": "Utility",
    "aliases": [
      "yeartomonth"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartoms",
    "description": "Convert years to milliseconds.",
    "category": "Utility",
    "aliases": [
      "yeartoms"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartosec",
    "description": "Convert years to seconds.",
    "category": "Utility",
    "aliases": [
      "yeartosec"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "yeartoweek",
    "description": "Convert years to weeks.",
    "category": "Utility",
    "aliases": [
      "yeartoweek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "youtube",
    "description": "Set a notification for a youtube channel.",
    "category": "Utility",
    "aliases": [
      "youtube"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "audit",
    "description": "View the server",
    "category": "Utility",
    "aliases": [
      "audit"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "createembed",
    "description": "Create a custom embed with variables and formatting.",
    "category": "Utility",
    "aliases": [
      "createembed"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "intro",
    "description": "Get to know about the bot.",
    "category": "Utility",
    "aliases": [
      "intro"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kwhtomj",
    "description": "Convert kilowatt-hours to megajoules.",
    "category": "Utility",
    "aliases": [
      "kwhtomj"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "kcaltocal",
    "description": "Convert kilocalories to calories.",
    "category": "Utility",
    "aliases": [
      "kcaltocal"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "mltopint",
    "description": "Convert milliliters to pints.",
    "category": "Utility",
    "aliases": [
      "mltopint"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "support",
    "description": "Get support for the bot.",
    "category": "Utility",
    "aliases": [
      "support"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "todo",
    "description": "Manage your personal to-do list",
    "category": "Utility",
    "aliases": [
      "todo"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "automoderation",
    "description": "Configure the shared automod suite for spam, caps, links, mentions, and enforcement.",
    "category": "Moderation",
    "aliases": [
      "automoderation"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "clear",
    "description": "Clears number of messages in a particular channel",
    "category": "Moderation",
    "aliases": [
      "clear"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "hide",
    "description": "Hides a channel",
    "category": "Moderation",
    "aliases": [
      "hide"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "punishment",
    "description": "Sets the punishment for Antinuke",
    "category": "Moderation",
    "aliases": [
      "punishment"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "role",
    "description": "Securely assign or remove roles with hierarchy and permission safeguards.",
    "category": "Moderation",
    "aliases": [
      "role"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "slowmode",
    "description": "Sets slowmode in a channel",
    "category": "Moderation",
    "aliases": [
      "slowmode"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "unhide",
    "description": "Hide A Channel",
    "category": "Moderation",
    "aliases": [
      "unhide"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "unmute",
    "description": "Unmutes A User",
    "category": "Moderation",
    "aliases": [
      "unmute"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "anticonfig",
    "description": "Show the antinuke command map and configuration snapshot.",
    "category": "AntiNuke",
    "aliases": [
      "anticonfig"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "antilogs",
    "description": "Set or clear the antinuke log channel.",
    "category": "AntiNuke",
    "aliases": [
      "antilogs"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "antinuke",
    "description": "Manage the shared antinuke profile used by both the bot and dashboard.",
    "category": "AntiNuke",
    "aliases": [
      "antinuke"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "antipunishment",
    "description": "Choose how antinuke punishes malicious executors.",
    "category": "AntiNuke",
    "aliases": [
      "antipunishment"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "antistatus",
    "description": "Show a full antinuke overview panel.",
    "category": "AntiNuke",
    "aliases": [
      "antistatus"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "vanityguard",
    "description": "Protect the server vanity URL through the antinuke layer.",
    "category": "AntiNuke",
    "aliases": [
      "vanityguard"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "whitelist",
    "description": "Manage the antinuke whitelist.",
    "category": "AntiNuke",
    "aliases": [
      "whitelist"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "antilink",
    "description": "Toggle external-link protection for the guarded automod suite.",
    "category": "AutoMod",
    "aliases": [
      "antilink"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "antimention",
    "description": "Toggle and inspect mass-mention protection for the guarded automod suite.",
    "category": "AutoMod",
    "aliases": [
      "antimention"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "automodsetup",
    "description": "Provision the guarded automod suite with secure defaults.",
    "category": "AutoMod",
    "aliases": [
      "automodsetup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "blacklistword",
    "description": "Create a Blacklist Words AutoMod rule with a custom block message",
    "category": "AutoMod",
    "aliases": [
      "blacklistword"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "resetautomod",
    "description": "Reset guarded automod settings and remove the bot-managed native rules.",
    "category": "AutoMod",
    "aliases": [
      "resetautomod"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "birthday",
    "description": "Manage user birthdays and server birthday delivery settings.",
    "category": "Birthday",
    "aliases": [
      "birthday"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "delete",
    "description": "Delete a giveaway and remove its tracked campaign record.",
    "category": "Giveaways",
    "aliases": [
      "delete"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "end",
    "description": "End an active giveaway campaign.",
    "category": "Giveaways",
    "aliases": [
      "end"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "list",
    "description": "List active and ended giveaways in the current server.",
    "category": "Giveaways",
    "aliases": [
      "list"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "reroll",
    "description": "Reroll an ended giveaway and select fresh winners.",
    "category": "Giveaways",
    "aliases": [
      "reroll"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "snowflake",
    "description": "Compare two Discord snowflakes and show the time gap between them.",
    "category": "Giveaways",
    "aliases": [
      "snowflake"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "start",
    "description": "Start a giveaway campaign with validation for duration, winners, and reaction emoji.",
    "category": "Giveaways",
    "aliases": [
      "start"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "loop",
    "description": "Set loop mode to none, track, or queue.",
    "category": "Music",
    "aliases": [
      "loop"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "lyrics",
    "description": "Fetch lyrics for the current track or a search query.",
    "category": "Music",
    "aliases": [
      "lyrics"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "nowplaying",
    "description": "Show the currently playing track.",
    "category": "Music",
    "aliases": [
      "nowplaying"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "pause",
    "description": "Pause the current track.",
    "category": "Music",
    "aliases": [
      "pause"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "play",
    "description": "Play a track or playlist through Lavalink.",
    "category": "Music",
    "aliases": [
      "play"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "playlist",
    "description": "Queue a playlist URL or playlist search result.",
    "category": "Music",
    "aliases": [
      "playlist"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "previous",
    "description": "Play the previously played track again.",
    "category": "Music",
    "aliases": [
      "previous"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "queue",
    "description": "Show the current queue with pagination.",
    "category": "Music",
    "aliases": [
      "queue"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "remove",
    "description": "Remove a queued track by its queue index.",
    "category": "Music",
    "aliases": [
      "remove"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "resume",
    "description": "Resume the current track.",
    "category": "Music",
    "aliases": [
      "resume"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "seek",
    "description": "Seek within the current track.",
    "category": "Music",
    "aliases": [
      "seek"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "shuffle",
    "description": "Shuffle the upcoming queue.",
    "category": "Music",
    "aliases": [
      "shuffle"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "skip",
    "description": "Skip the current track.",
    "category": "Music",
    "aliases": [
      "skip"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "stop",
    "description": "Stop playback, clear the queue, and leave voice.",
    "category": "Music",
    "aliases": [
      "stop"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "volume",
    "description": "Set player volume between 0 and 200.",
    "category": "Music",
    "aliases": [
      "volume"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "bash",
    "description": "Evaluate the bot",
    "category": "Owner",
    "aliases": [
      "bash"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "blacklistuser",
    "description": "Blacklist a User",
    "category": "Owner",
    "aliases": [
      "blacklistuser"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "deleteuserdata",
    "description": "Delete a User Data",
    "category": "Owner",
    "aliases": [
      "deleteuserdata"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "eval",
    "description": "Evaluate the bot",
    "category": "Owner",
    "aliases": [
      "eval"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "eval2",
    "description": "Evaluate the bot",
    "category": "Owner",
    "aliases": [
      "eval2"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "managepremium",
    "description": "Manage premium",
    "category": "Owner",
    "aliases": [
      "managepremium"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "noprefix",
    "description": "Set the prefix for the bot",
    "category": "Owner",
    "aliases": [
      "noprefix"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "reload",
    "description": "Reload a command module (or `all`). Owner only.",
    "category": "Owner",
    "aliases": [
      "reload"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "addbadge",
    "description": "Add a predefined badge to a user",
    "category": "Owner",
    "aliases": [
      "addbadge"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "restart",
    "description": "Restart the bot (owner only)",
    "category": "Owner",
    "aliases": [
      "restart"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "backgrounds",
    "description": "List available bundled profile background templates.",
    "category": "Profile",
    "aliases": [
      "backgrounds"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "profilecard",
    "description": "Render a cleaner profile card with bio and cosmetic background.",
    "category": "Profile",
    "aliases": [
      "profilecard"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "resetprofile",
    "description": "Reset your profile bio and cosmetic background to defaults.",
    "category": "Profile",
    "aliases": [
      "resetprofile"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "setbackground",
    "description": "Set your profile background from bundled local templates.",
    "category": "Profile",
    "aliases": [
      "setbackground"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "setbio",
    "description": "Set your profile bio with mention-safe text cleanup.",
    "category": "Profile",
    "aliases": [
      "setbio"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "verification",
    "description": "Set up a verification system for your server.",
    "category": "Verify",
    "aliases": [
      "verification"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "reactionrole",
    "description": "Manage reaction roles",
    "category": "Verify",
    "aliases": [
      "reactionrole"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "case_edit",
    "description": "Edit the stored reason for a moderation case.",
    "category": "Warn",
    "aliases": [
      "case_edit"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "casedelete",
    "description": "Delete a specific moderation case by its ID.",
    "category": "Warn",
    "aliases": [
      "casedelete"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "caserestore",
    "description": "Mark a moderation case as addressed and remove it from records.",
    "category": "Warn",
    "aliases": [
      "caserestore"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "clearcase",
    "description": "Clear every moderation case for a specific member.",
    "category": "Warn",
    "aliases": [
      "clearcase"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "warnpunish",
    "description": "Configure automatic punishments triggered by warn counts.",
    "category": "Warn",
    "aliases": [
      "warnpunish"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "applyconfig",
    "description": "Show the current application configuration.",
    "category": "Welcome",
    "aliases": [
      "applyconfig"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "applypanel",
    "description": "Send the application panel in the current channel.",
    "category": "Welcome",
    "aliases": [
      "applypanel"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "applyquestion",
    "description": "Edit one of the application questions.",
    "category": "Welcome",
    "aliases": [
      "applyquestion"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "applysetup",
    "description": "Configure the application review channel.",
    "category": "Welcome",
    "aliases": [
      "applysetup"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  },
  {
    "name": "autorole",
    "description": "Configure guarded autoroles for human members and bots.",
    "category": "Welcome",
    "aliases": [
      "autorole"
    ],
    "cooldown": 2,
    "ownerOnly": false,
    "slash": true
  }
];

export default commandCatalog;
