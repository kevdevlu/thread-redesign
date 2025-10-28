// Shared series data for Thread app

// Episode data for each series
const seriesEpisodes = {
  'welcome-onboarding': [
    '0. Welcome to Thread',
    '1. Our Image of God',
    '2. Why Story?',
    '3. Why Spirituality?',
    '4. The Story of Our Faith'
  ],
  '0-4': [
    '0. Welcome to Thread',
    '1. Our Image of God',
    '2. Why Story?',
    '3. Why Spirituality?',
    '4. The Story of Our Faith'
  ],
  '5-11': [
    '5. Creation & Beauty',
    '6. Seasons & Rhythms',
    '7. Light & Darkness',
    '8. Becoming Fully Human',
    '9. Human Limitations',
    '10. The Flood',
    '11. Babel'
  ],
  '12-19': [
    '12. Abraham',
    '13. Abraham: Covenant',
    '14. Sarah & Hagar',
    '15. Jacob',
    '16. Jacob\'s Wrestling Match',
    '17. Joseph & Judah',
    '18. Moses in Egypt',
    '19. Moses in Wilderness'
  ],
  '20-26': [
    '20. The Sign',
    '21. The Exodus',
    '22. The Wilderness',
    '23. The Presence',
    '24. Law & Priesthood',
    '25. The Tabernacle',
    '26. The Culture'
  ],
  '27-30': [
    '27. Promised Land',
    '28. Joshua',
    '29. Judges',
    '30. Ruth'
  ],
  '31-35': [
    '31. Hannah & Samuel',
    '32. King Saul',
    '33. David & Jonathan',
    '34. King David',
    '35. King Solomon'
  ],
  '36-41': [
    '36. Israel\'s Kings',
    '37. Israel\'s Prophets',
    '38. Judah\'s King\'s',
    '39. Judah\'s Prophets',
    '40. Exile',
    '41. Jerusalem\'s Fall'
  ],
  '42-46': [
    '42. Life in Exile',
    '43. Exilic Prophets',
    '44. Rebuilding the Temple',
    '45. Esther',
    '46. Rebuilding the Wall'
  ],
  '47': [
    '47. God\'s People Waited'
  ],
  '48-55': [
    '48. The Jewish Jesus',
    '49. The Teacher Jesus',
    '50. The Ministry of Jesus',
    '51. Parables of the Kingdom',
    '52. The Messiah Jesus',
    '53. The Community of Jesus',
    '54. The Judgment of Jesus',
    '55. The Triumph of Jesus'
  ],
  '56-60': [
    '56. Exodus (Mark pt. 1)',
    '57. Crowds (Mark pt. 2)',
    '58. Battles (Mark pt. 3)',
    '59. Calling (Mark pt. 4)',
    '60. Grace (Mark pt. 5)'
  ],
  '61-68': [
    '61. Episode 61',
    '62. Episode 62',
    '63. Episode 63',
    '64. Episode 64',
    '65. Episode 65',
    '66. Episode 66',
    '67. Episode 67',
    '68. Episode 68'
  ],
  'places-prayer': [
    '1. A Place in the Family',
    '2. A Place of Holiness',
    '3. A Place of Surrender',
    '4. A Place of Need',
    '5. A Place of Exile',
    '6. Parable Places',
    '7. Paul\'s Places of Prayer'
  ],
  'kingdom-kids': [
    '1. God Made Me Special',
    '2. Jesus Loves Me',
    '3. I Can Pray',
    '4. Sharing & Caring',
    '5. God\'s Big Story'
  ],
  'family-devotions': [
    '1. Growing Together',
    '2. Faith at Home',
    '3. Conversations That Matter',
    '4. Building Traditions',
    '5. Prayer as a Family',
    '6. Serving Together'
  ],
  'leadership-essentials': [
    '1. Vision & Mission',
    '2. Building Your Team',
    '3. Shepherding Well',
    '4. Conflict Resolution',
    '5. Discipleship Strategies',
    '6. Sustainable Ministry'
  ],
  'advent-journey': [
    '1. Hope - The Promise',
    '2. Peace - The Prince',
    '3. Joy - The Celebration',
    '4. Love - The Gift'
  ],
  'encounter': [
    '1. Meeting God',
    '2. Opening Our Hearts',
    '3. Listening for His Voice',
    '4. Responding in Faith',
    '5. Living Transformed'
  ],
  'places-of-prayer': [
    '1. A Place in the Family',
    '2. A Place of Holiness',
    '3. A Place of Surrender',
    '4. A Place of Need',
    '5. A Place of Exile',
    '6. Parable Places',
    '7. Paul\'s Places of Prayer'
  ],
  'treasuring-god': [
    '1. The Treasure Within',
    '2. Seeking His Face',
    '3. Valuing What Matters',
    '4. Letting Go',
    '5. Finding Contentment',
    '6. Storing Up Heaven'
  ],
  'light-of-the-world': [
    '1. The True Light',
    '2. Walking in Darkness',
    '3. Children of Light',
    '4. Shine Before Others',
    '5. Light Overcomes'
  ],
  'psalms-of-comfort': [
    '1. The Lord is My Shepherd',
    '2. God Our Refuge',
    '3. Songs in the Night',
    '4. When Anxious',
    '5. Peace That Passes Understanding'
  ],
  'wisdom-for-life': [
    '1. Fear of the Lord',
    '2. Guarding Your Heart',
    '3. Words That Build',
    '4. The Value of Discipline',
    '5. Finding True Success',
    '6. Living with Purpose'
  ],
  'spiritual-disciplines': [
    '1. The Practice of Prayer',
    '2. Fasting & Solitude',
    '3. Scripture Meditation',
    '4. Worship & Celebration',
    '5. Service & Simplicity',
    '6. Community & Confession'
  ],
  'sacred-rhythms': [
    '1. Daily Rhythms',
    '2. Weekly Sabbath',
    '3. Seasonal Celebrations',
    '4. Life Transitions',
    '5. Creating Space for God'
  ]
};

// Mapping of series values to their display names
const episodeNames = {
  'welcome-onboarding': 'Welcome + Onboarding',
  '0-4': 'Episodes 0-4',
  '5-11': 'Episodes 5-11',
  '12-19': 'Episodes 12-19',
  '20-26': 'Episodes 20-26',
  '27-30': 'Episodes 27-30',
  '31-35': 'Episodes 31-35',
  '36-41': 'Episodes 36-41',
  '42-46': 'Episodes 42-47',
  '47': 'Episode 47',
  '48-55': 'Episodes 49-55',
  '56-60': 'Episodes 56-60',
  '61-68': 'Episodes 61-68',
  'places-prayer': 'Place of Prayer',
  'kingdom-kids': 'Kingdom Kids',
  'family-devotions': 'Family Devotions',
  'leadership-essentials': 'Leadership Essentials',
  'advent-journey': 'Advent Journey',
  'encounter': 'Encounter',
  'places-of-prayer': 'Places of Prayer',
  'treasuring-god': 'Treasuring God',
  'light-of-the-world': 'Light of the World',
  'psalms-of-comfort': 'Psalms of Comfort',
  'wisdom-for-life': 'Wisdom for Life',
  'spiritual-disciplines': 'Spiritual Disciplines',
  'sacred-rhythms': 'Sacred Rhythms'
};

const seriesNames = {
  'welcome-onboarding': 'Welcome + Onboarding',
  '0-4': 'Starting Point (0-4)',
  '5-11': 'God\'s World Created (5-11)',
  '12-19': 'God\'s People Birthed (12-19)',
  '20-26': 'God\'s Nation Formed (20-26)',
  '27-30': 'God\'s Land Established (27-30)',
  '31-35': 'God\'s People Blessed (31-35)',
  '36-41': 'God\'s People Divided (36-41)',
  '42-46': 'God\'s People Returned (42-46)',
  '47': 'God\'s People Waited (47)',
  '48-55': 'Matthew (48-55)',
  '56-60': 'Mark (56-60)',
  '61-68': 'Luke (61-68)',
  'places-prayer': 'Place of Prayer',
  'kingdom-kids': 'Kingdom Kids',
  'family-devotions': 'Family Devotions',
  'leadership-essentials': 'Leadership Essentials',
  'advent-journey': 'Advent Journey',
  'encounter': 'Encounter',
  'places-of-prayer': 'Places of Prayer',
  'treasuring-god': 'Treasuring God',
  'light-of-the-world': 'Light of the World',
  'psalms-of-comfort': 'Psalms of Comfort',
  'wisdom-for-life': 'Wisdom for Life',
  'spiritual-disciplines': 'Spiritual Disciplines',
  'sacred-rhythms': 'Sacred Rhythms'
};