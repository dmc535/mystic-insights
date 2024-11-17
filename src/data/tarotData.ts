export interface TarotCard {
  name: string;
  image: string;
  uprightMeaning: string;
  reversedMeaning: string;
  description: string;
}

export const majorArcana: TarotCard[] = [
  {
    name: "The Fool",
    image: "/images/tarot/major/fool.jpg",
    uprightMeaning: "New beginnings, innocence, spontaneity",
    reversedMeaning: "Recklessness, risk-taking, inconsideration",
    description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe."
  },
  {
    name: "The Magician",
    image: "/images/tarot/major/magician.jpg",
    uprightMeaning: "Manifestation, resourcefulness, power",
    reversedMeaning: "Manipulation, poor planning, untapped talents",
    description: "The Magician represents your ability to utilize all of your skills, tools, and resources to manifest your desires. It's a card of action, power, and taking control of your destiny."
  },
  {
    name: "The High Priestess",
    image: "/images/tarot/major/high priestess.jpg",
    uprightMeaning: "Intuition, sacred knowledge, divine feminine",
    reversedMeaning: "Secrets, disconnected from intuition, withdrawal",
    description: "The High Priestess represents intuition, sacred knowledge, and divine feminine energy. She suggests that it's time to listen to your inner voice and pay attention to your dreams and hunches."
  },
  {
    name: "The Empress",
    image: "/images/tarot/major/empress.jpg",
    uprightMeaning: "Fertility, nurturing, abundance",
    reversedMeaning: "Creative block, dependence, smothering",
    description: "The Empress represents the fertile, nurturing aspects of life. She embodies maternal influence, creativity, and the abundance of nature."
  },
  {
    name: "The Emperor",
    image: "/images/tarot/major/emperor.jpg",
    uprightMeaning: "Authority, structure, leadership",
    reversedMeaning: "Domination, rigidity, lack of discipline",
    description: "The Emperor represents masculine energy, authority, and structure. He signifies leadership, stability, and the establishment of order."
  },
  {
    name: "The Hierophant",
    image: "/images/tarot/major/hierophant.jpg",
    uprightMeaning: "Tradition, conformity, morality & ethics",
    reversedMeaning: "Challenge to the status quo, personal beliefs",
    description: "The Hierophant represents traditional values and institutions. He guides through established principles and spiritual teachings."
  },
  {
    name: "The Lovers",
    image: "/images/tarot/major/lovers.jpg",
    uprightMeaning: "Love, harmony, relationships, choices",
    reversedMeaning: "Disharmony, imbalance, misalignment",
    description: "The Lovers represent relationships and choices. It's about finding harmony and making decisions in line with your values."
  },
  {
    name: "The Chariot",
    image: "/images/tarot/major/chariot.jpg",
    uprightMeaning: "Direction, control, willpower",
    reversedMeaning: "Lack of control, opposition, lack of direction",
    description: "The Chariot represents overcoming challenges through confidence, determination, and willpower."
  },
  {
    name: "Strength",
    image: "/images/tarot/major/strength.jpg",
    uprightMeaning: "Inner strength, courage, persuasion",
    reversedMeaning: "Self-doubt, weakness, insecurity",
    description: "Strength represents inner power, courage, and the ability to overcome challenges through patience and soft control rather than brute force."
  },
  {
    name: "The Hermit",
    image: "/images/tarot/major/hermit.jpg",
    uprightMeaning: "Soul-searching, introspection, guidance",
    reversedMeaning: "Isolation, loneliness, withdrawal",
    description: "The Hermit represents a period of introspection and soul-searching. It suggests seeking inner guidance and spiritual enlightenment."
  },
  {
    name: "Wheel of Fortune",
    image: "/images/tarot/major/wheel.jpg",
    uprightMeaning: "Good luck, karma, life cycles",
    reversedMeaning: "Bad luck, resistance to change",
    description: "The Wheel of Fortune represents the cyclical nature of life, karma, and destiny. It suggests that change is constant and inevitable."
  },
  {
    name: "Justice",
    image: "/images/tarot/major/justice.jpg",
    uprightMeaning: "Justice, fairness, truth",
    reversedMeaning: "Unfairness, dishonesty, lack of accountability",
    description: "Justice represents fairness, truth, and cause and effect. It suggests that decisions and actions have consequences."
  },
  {
    name: "The Hanged Man",
    image: "/images/tarot/major/hanged man.jpg",
    uprightMeaning: "Surrender, letting go, new perspective",
    reversedMeaning: "Stalling, resistance, indecision",
    description: "The Hanged Man represents voluntary sacrifice and gaining new perspectives through surrender and letting go."
  },
  {
    name: "Death",
    image: "/images/tarot/major/death.jpg",
    uprightMeaning: "Endings, change, transformation",
    reversedMeaning: "Resistance to change, stagnation",
    description: "Death represents endings and transformations. It suggests that something needs to end to make way for new beginnings."
  },
  {
    name: "Temperance",
    image: "/images/tarot/major/temperance.jpg",
    uprightMeaning: "Balance, moderation, patience",
    reversedMeaning: "Imbalance, excess, lack of harmony",
    description: "Temperance represents balance, moderation, and the middle path. It suggests finding harmony between opposing forces."
  },
  {
    name: "The Devil",
    image: "/images/tarot/major/devil.jpg",
    uprightMeaning: "Bondage, materialism, addiction",
    reversedMeaning: "Breaking free, release, restoring control",
    description: "The Devil represents bondage to material things and base desires. It suggests being trapped by illusions and self-imposed limitations."
  },
  {
    name: "The Tower",
    image: "/images/tarot/major/tower.jpg",
    uprightMeaning: "Sudden change, upheaval, revelation",
    reversedMeaning: "Avoiding disaster, fear of change",
    description: "The Tower represents sudden upheaval and breakthrough. It suggests that false structures are crumbling to make way for truth."
  },
  {
    name: "The Star",
    image: "/images/tarot/major/star.jpg",
    uprightMeaning: "Hope, inspiration, generosity",
    reversedMeaning: "Lack of faith, despair, disconnection",
    description: "The Star represents hope, inspiration, and spiritual guidance. It suggests a period of peace and faith in the future."
  },
  {
    name: "The Moon",
    image: "/images/tarot/major/moon.jpg",
    uprightMeaning: "Intuition, unconscious, illusion",
    reversedMeaning: "Confusion, fear, misinterpretation",
    description: "The Moon represents intuition, dreams, and the subconscious mind. It suggests a time of uncertainty and dealing with illusions."
  },
  {
    name: "The Sun",
    image: "/images/tarot/major/sun.jpg",
    uprightMeaning: "Joy, success, positivity",
    reversedMeaning: "Temporary depression, lack of success",
    description: "The Sun represents joy, happiness, and positive energy. It suggests a time of clarity, warmth, and success."
  },
  {
    name: "Judgement",
    image: "/images/tarot/major/judgement.jpg",
    uprightMeaning: "Rebirth, inner calling, absolution",
    reversedMeaning: "Self-doubt, refusal of self-examination",
    description: "Judgement represents spiritual awakening and rebirth. It suggests hearing a calling and rising to a higher level of consciousness."
  },
  {
    name: "The World",
    image: "/images/tarot/major/world.jpg",
    uprightMeaning: "Completion, integration, accomplishment",
    reversedMeaning: "Lack of completion, shortcuts",
    description: "The World represents completion, wholeness, and accomplishment. It suggests the successful conclusion of a cycle and ultimate fulfillment."
  }
];

const createMinorArcanaSet = (suit: string) => 
  Array.from({ length: 9 }, (_, i) => ({
    name: `${i + 2} of ${suit}`,
    image: `/images/tarot/minor/${suit.toLowerCase()}${i + 2}.jpg`,
    uprightMeaning: `${suit} energy - Number ${i + 2}`,
    reversedMeaning: `Reversed ${suit} energy - Number ${i + 2}`,
    description: `The ${i + 2} of ${suit} represents various aspects of ${suit.toLowerCase()} energy.`
  }));

  export const minorArcana = {
    cups: [
      {
        name: "Two of Cups",
        image: "/images/tarot/minor/cups2.jpg",
        uprightMeaning: "Unity, partnership, attraction, connection",
        reversedMeaning: "Broken relationships, disharmony, tension",
        description: "The Two of Cups represents partnerships and relationships. It symbolizes the coming together of two entities in harmony and mutual attraction."
      },
      {
        name: "Three of Cups",
        image: "/images/tarot/minor/cups3.jpg",
        uprightMeaning: "Celebration, friendship, community, joy",
        reversedMeaning: "Overindulgence, gossip, isolation",
        description: "The Three of Cups symbolizes celebration and social harmony. It represents friendship, gatherings, and the joy of coming together with others."
      },
      {
        name: "Four of Cups",
        image: "/images/tarot/minor/cups4.jpg",
        uprightMeaning: "Contemplation, apathy, reevaluation",
        reversedMeaning: "New opportunities, awakening, action",
        description: "The Four of Cups suggests a period of contemplation and reevaluation. It often indicates feeling dissatisfied despite having opportunities present."
      },
      {
        name: "Five of Cups",
        image: "/images/tarot/minor/cups5.jpg",
        uprightMeaning: "Loss, grief, disappointment, regret",
        reversedMeaning: "Recovery, forgiveness, moving on",
        description: "The Five of Cups represents emotional disappointment and the process of grieving. It reminds us to acknowledge what remains rather than only focusing on what's lost."
      },
      {
        name: "Six of Cups",
        image: "/images/tarot/minor/cups6.jpg",
        uprightMeaning: "Nostalgia, childhood memories, innocence",
        reversedMeaning: "Living in the past, naivety, stuck",
        description: "The Six of Cups symbolizes nostalgia and childhood memories. It represents innocence, joy, and the simple pleasures of the past."
      },
      {
        name: "Seven of Cups",
        image: "/images/tarot/minor/cups7.jpg",
        uprightMeaning: "Choices, fantasy, illusion, opportunities",
        reversedMeaning: "Clarity, focus, commitment",
        description: "The Seven of Cups represents choices and possibilities. It suggests a time of dreams and visions, but also potential illusion and the need to distinguish reality from fantasy."
      },
      {
        name: "Eight of Cups",
        image: "/images/tarot/minor/cups8.jpg",
        uprightMeaning: "Walking away, disillusionment, seeking truth",
        reversedMeaning: "Stagnation, avoiding change, fear of loss",
        description: "The Eight of Cups symbolizes the journey of walking away from something that no longer serves emotional fulfillment. It represents seeking deeper meaning and truth."
      },
      {
        name: "Nine of Cups",
        image: "/images/tarot/minor/cups9.jpg",
        uprightMeaning: "Contentment, satisfaction, wishes fulfilled",
        reversedMeaning: "Dissatisfaction, materialism, greed",
        description: "The Nine of Cups is often called the 'wish card.' It represents emotional contentment and the fulfillment of desires."
      },
      {
        name: "Ten of Cups",
        image: "/images/tarot/minor/cups10.jpg",
        uprightMeaning: "Harmony, family bliss, perfect love",
        reversedMeaning: "Broken home, disharmony, unfulfillment",
        description: "The Ten of Cups represents complete emotional fulfillment and harmony. It symbolizes perfect love, happy family life, and lasting happiness."
      }
    ],
    wands: [
      {
        name: "Two of Wands",
        image: "/images/tarot/minor/wands2.jpg",
        uprightMeaning: "Future planning, progress, decisions",
        reversedMeaning: "Fear of change, playing it safe, bad planning",
        description: "The Two of Wands represents planning and making decisions about future direction. It symbolizes the first steps of turning ideas into reality."
      },
      {
        name: "Three of Wands",
        image: "/images/tarot/minor/wands3.jpg",
        uprightMeaning: "Expansion, foresight, overseas opportunities",
        reversedMeaning: "Delays, setbacks, lack of foresight",
        description: "The Three of Wands symbolizes expansion and looking ahead to future possibilities. It represents enterprise, trade, and venture into new territories."
      },
      {
        name: "Four of Wands",
        image: "/images/tarot/minor/wands4.jpg",
        uprightMeaning: "Celebration, homecoming, community",
        reversedMeaning: "Lack of support, transience, home conflicts",
        description: "The Four of Wands represents celebration, harmony, and homecoming. It symbolizes the joy of stability and achievement in both personal and community life."
      },
      {
        name: "Five of Wands",
        image: "/images/tarot/minor/wands5.jpg",
        uprightMeaning: "Competition, conflict, rivalry",
        reversedMeaning: "Avoiding conflict, respecting differences",
        description: "The Five of Wands represents conflict and competition. It symbolizes the challenges and rivalries that can arise when different forces compete."
      },
      {
        name: "Six of Wands",
        image: "/images/tarot/minor/wands6.jpg",
        uprightMeaning: "Victory, success, public recognition",
        reversedMeaning: "Excess pride, fall from grace, egotism",
        description: "The Six of Wands symbolizes victory and public recognition. It represents the triumph that comes after putting in hard work and effort."
      },
      {
        name: "Seven of Wands",
        image: "/images/tarot/minor/wands7.jpg",
        uprightMeaning: "Challenge, competition, protection",
        reversedMeaning: "Giving up, overwhelmed, defensiveness",
        description: "The Seven of Wands represents defending one's position and standing up for beliefs. It symbolizes courage in the face of opposition."
      },
      {
        name: "Eight of Wands",
        image: "/images/tarot/minor/wands8.jpg",
        uprightMeaning: "Swift action, movement, air travel",
        reversedMeaning: "Delays, frustration, slowing down",
        description: "The Eight of Wands symbolizes swift action and movement. It represents rapid progress and the quick manifestation of ideas into reality."
      },
      {
        name: "Nine of Wands",
        image: "/images/tarot/minor/wands9.jpg",
        uprightMeaning: "Resilience, persistence, last stand",
        reversedMeaning: "Exhaustion, giving up, low stamina",
        description: "The Nine of Wands represents resilience and persistence. It symbolizes the strength to continue despite past difficulties."
      },
      {
        name: "Ten of Wands",
        image: "/images/tarot/minor/wands10.jpg",
        uprightMeaning: "Burden, responsibility, hard work",
        reversedMeaning: "Burning out, giving up, sharing load",
        description: "The Ten of Wands represents burden and responsibility. It symbolizes the weight of success and the challenges that come with achievement."
      }
    ],
    swords: [
      {
        name: "Two of Swords",
        image: "/images/tarot/minor/swords2.jpg",
        uprightMeaning: "Decision, stalemate, blocked emotions",
        reversedMeaning: "Indecision, confusion, information overload",
        description: "The Two of Swords represents difficult decisions and mental stalemate. It symbolizes the need to find balance and make choices despite uncertainty."
      },
      {
        name: "Three of Swords",
        image: "/images/tarot/minor/swords3.jpg",
        uprightMeaning: "Heartbreak, emotional pain, sorrow",
        reversedMeaning: "Recovery, forgiveness, moving on",
        description: "The Three of Swords represents heartbreak and emotional pain. It symbolizes the sharp pain of truth and the necessity of facing difficult realities."
      },
      {
        name: "Four of Swords",
        image: "/images/tarot/minor/swords4.jpg",
        uprightMeaning: "Rest, recuperation, contemplation",
        reversedMeaning: "Restlessness, burnout, stress",
        description: "The Four of Swords represents rest and recuperation. It symbolizes the need to take time for contemplation and mental renewal."
      },
      {
        name: "Five of Swords",
        image: "/images/tarot/minor/swords5.jpg",
        uprightMeaning: "Conflict, defeat, win at all costs",
        reversedMeaning: "Reconciliation, forgiveness, moving on",
        description: "The Five of Swords represents conflict and defeat. It symbolizes the hollow victory of winning at all costs and the aftermath of conflict."
      },
      {
        name: "Six of Swords",
        image: "/images/tarot/minor/swords6.jpg",
        uprightMeaning: "Transition, moving forward, healing",
        reversedMeaning: "Stuck, resistance to change, baggage",
        description: "The Six of Swords represents transition and moving away from trouble. It symbolizes the journey toward healing and calmer waters."
      },
      {
        name: "Seven of Swords",
        image: "/images/tarot/minor/swords7.jpg",
        uprightMeaning: "Deception, strategy, sneaking away",
        reversedMeaning: "Confession, exposure, acceptance",
        description: "The Seven of Swords represents deception and strategic thinking. It symbolizes the need to be clever but warns against dishonesty."
      },
      {
        name: "Eight of Swords",
        image: "/images/tarot/minor/swords8.jpg",
        uprightMeaning: "Restriction, imprisonment, self-imposed bounds",
        reversedMeaning: "Freedom, self-acceptance, new perspective",
        description: "The Eight of Swords represents feeling trapped and restricted. It symbolizes self-imposed limitations and the power to break free from them."
      },
      {
        name: "Nine of Swords",
        image: "/images/tarot/minor/swords9.jpg",
        uprightMeaning: "Anxiety, worry, fear, nightmares",
        reversedMeaning: "Hope, reaching out, despair ending",
        description: "The Nine of Swords represents anxiety and worry. It symbolizes the mental anguish that comes from overthinking and fear."
      },
      {
        name: "Ten of Swords",
        image: "/images/tarot/minor/swords10.jpg",
        uprightMeaning: "Painful endings, deep wounds, betrayal",
        reversedMeaning: "Recovery, regeneration, resisting an end",
        description: "The Ten of Swords represents painful endings and rock bottom. It symbolizes the completion of a difficult cycle and the potential for new beginnings."
      }
    ],
    pentacles: [
      {
        name: "Two of Pentacles",
        image: "/images/tarot/minor/pentacles2.jpg",
        uprightMeaning: "Balance, adaptability, time management",
        reversedMeaning: "Imbalance, disorganization, overwhelm",
        description: "The Two of Pentacles represents juggling and maintaining balance. It symbolizes the ability to handle multiple responsibilities with grace."
      },
      {
        name: "Three of Pentacles",
        image: "/images/tarot/minor/pentacles3.jpg",
        uprightMeaning: "Teamwork, collaboration, learning",
        reversedMeaning: "Lack of teamwork, disharmony, competition",
        description: "The Three of Pentacles represents mastery and collaboration. It symbolizes the power of working together and learning from others."
      },
      {
        name: "Four of Pentacles",
        image: "/images/tarot/minor/pentacles4.jpg",
        uprightMeaning: "Security, conservation, frugality",
        reversedMeaning: "Greed, materialism, insecurity",
        description: "The Four of Pentacles represents material security and conservation. It symbolizes the need to find balance between holding on and letting go."
      },
      {
        name: "Five of Pentacles",
        image: "/images/tarot/minor/pentacles5.jpg",
        uprightMeaning: "Hardship, poverty, insecurity",
        reversedMeaning: "Recovery, spiritual growth, asking for help",
        description: "The Five of Pentacles represents material and spiritual poverty. It symbolizes hardship but also the availability of help if one seeks it."
      },
      {
        name: "Six of Pentacles",
        image: "/images/tarot/minor/pentacles6.jpg",
        uprightMeaning: "Generosity, charity, sharing wealth",
        reversedMeaning: "Debt, selfishness, one-sided charity",
        description: "The Six of Pentacles represents generosity and sharing of wealth. It symbolizes the balance between giving and receiving."
      },
      {
        name: "Seven of Pentacles",
        image: "/images/tarot/minor/pentacles7.jpg",
        uprightMeaning: "Assessment, reward, investment",
        reversedMeaning: "Work without results, impatience",
        description: "The Seven of Pentacles represents evaluation and reward for effort. It symbolizes the pause to assess progress and plan next steps."
      },
      {
        name: "Eight of Pentacles",
        image: "/images/tarot/minor/pentacles8.jpg",
        uprightMeaning: "Apprenticeship, skill development, mastery",
        reversedMeaning: "Perfectionism, lack of progress, uninspired",
        description: "The Eight of Pentacles represents craftsmanship and skill development. It symbolizes the dedication to mastering one's craft."
      },
      {
        name: "Nine of Pentacles",
        image: "/images/tarot/minor/pentacles9.jpg",
        uprightMeaning: "Luxury, self-sufficiency, culmination",
        reversedMeaning: "Showing off, superficial success",
        description: "The Nine of Pentacles represents self-reliance and material abundance. It symbolizes the rewards of disciplined work and self-control."
      },
      {
        name: "Ten of Pentacles",
        image: "/images/tarot/minor/pentacles10.jpg",
        uprightMeaning: "Wealth, family, establishment, legacy",
        reversedMeaning: "Family disputes, loss of wealth, bankruptcy",
        description: "The Ten of Pentacles represents lasting wealth and family legacy. It symbolizes the establishment of long-term security and inheritance."
      }
    ]
  };

export const spreadTypes = [
  {
    name: "Single Card",
    description: "A simple draw for daily guidance or a specific question",
    positions: 1
  },
  {
    name: "Past, Present, Future",
    description: "Insight into your journey through time",
    positions: 3
  },
  {
    name: "Celtic Cross",
    description: "A comprehensive reading for deep insight",
    positions: 10
  }
];