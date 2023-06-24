import mongoose from 'mongoose';

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: 'Ramesh',
    lastName: 'Kumar',
    email: 'Ramesh@gmail.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/pexels-photo-1042140.jpeg?alt=media&token=77db942b-1043-4dcd-9817-a48287379abc',
    friends: [],
    location: 'Karol Bagh, New Delhi',
    occupation: 'Software Engineer',
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0, 
  },
  {
    _id: userIds[1],
    firstName: 'Neha',
    lastName: 'Patel',
    email: 'thataaa@gmail.com',
    password: '$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/pexels-photo-2747267.jpeg?alt=media&token=7b8e6f1f-2d78-4cca-81ed-674e94f9214d',
    friends: [],
    location: 'Jaipur,RJ',
    occupation: 'Home Assistant',
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: 'Siddharth',
    lastName: 'Singh',
    email: 'someguy@gmail.com',
    password: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
    picturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/sid.jpeg?alt=media&token=4cd0eaae-5123-4610-bc0f-bf1a11cc68d2',
    friends: [],
    location: 'Chennai, TN',
    occupation: 'Doctor',
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: 'Priya',
    lastName: 'Gupta',
    email: 'whatchadoing@gmail.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/priya.jpeg?alt=media&token=67801008-aea2-4167-8b80-d5675eda1c58',
    friends: [],
    location: 'Ahmedabad, GJ    ',
    occupation: 'Educator',
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: 'Sammer',
    lastName: 'Joshi',
    email: 'janedoe@gmail.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/sam.jpeg?alt=media&token=f85c6e26-5c85-451f-83e9-73968a3f9147',
    friends: [],
    location: 'Lucknow, UP    ',
    occupation: 'Hacker',
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: 'Rajeev ',
    lastName: 'Kumar',
    email: 'rajeevkumar@gmail.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/raj.jpeg?alt=media&token=e2c170f4-8efe-40c1-9546-a031016fedbd',
    friends: [],
    location: 'Pune, MH    ',
    occupation: 'Journalist',
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: 'Aryan     ',
    lastName: 'Desai',
    email: 'aryandesai@gmail.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/ary.jpeg?alt=media&token=f1f2416c-491b-4444-81dd-cb047f2819ac',
    friends: [],
    location: 'Kolkata, WB',
    occupation: 'Nurse',
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: 'Nomesh',
    lastName: 'Chandoliya',
    email: 'nomesh@gmail.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/nom.jpg?alt=media&token=51ac9477-cae6-449e-97e2-c056237954e0',
    friends: [],
    location: 'Hyderabad, TS',
    occupation: 'A Student',
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: 'Neha',
    lastName: 'Kumari',
    location: 'Karol Bagh, New Delhi',
    description: 'Some really long random description',
    picturePath: 'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/post1.jpeg?alt=media&token=215c2eaf-faa4-4209-953b-1e0acd7f6644',
    userPicturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/pexels-photo-1042140.jpeg?alt=media&token=77db942b-1043-4dcd-9817-a48287379abc',
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      'random comment',
      'another random comment',
      'yet another random comment',
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: 'Siddharth',
    lastName: 'Singh',
    location: 'Chennai, TN',
    description:
      'Another really long random description. This one is longer than the previous one.',
    picturePath: 'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/post2.jpeg?alt=media&token=27257521-741d-4a48-81bc-f799ab246dbb',
    userPicturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/sid.jpeg?alt=media&token=4cd0eaae-5123-4610-bc0f-bf1a11cc68d2',

    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      'one more random comment',
      'and another random comment',
      'no more random comments',
      'I lied, one more random comment',
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: 'Sammer',
    lastName: 'Gupta',
    location: 'Ahmedabad, GJ ',
    description:
      'This is the last really long random description. This one is longer than the previous one.',
    picturePath: 'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/post3.jpeg?alt=media&token=ffe61e18-72db-4aaf-a3a1-eec3d7968f16',
    userPicturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/priya.jpeg?alt=media&token=67801008-aea2-4167-8b80-d5675eda1c58',
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      'one more random comment',
      'I lied, one more random comment',
      'I lied again, one more random comment',
      'Why am I doing this?',
      "I'm bored",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: 'Rajeev',
    lastName: 'Kumar',

    location: 'Pune, MH',
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: 'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/post4.jpeg?alt=media&token=9ce4c9de-22d6-48c6-8846-204327fae4ff',
    userPicturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/raj.jpeg?alt=media&token=e2c170f4-8efe-40c1-9546-a031016fedbd',
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      'I lied again, one more random comment',
      'Why am I doing this?',
      "I'm bored",
      "I'm still bored",
      'All I want to do is play video games',
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId:userIds[6],
    firstName: 'Sidhu',
    lastName: 'Singh',
    location: 'Jaipur,RJ',
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: 'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/post5.jpeg?alt=media&token=04a38999-ce28-4539-b6ef-56cb5d60be25',
    userPicturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/pexels-photo-2747267.jpeg?alt=media&token=7b8e6f1f-2d78-4cca-81ed-674e94f9214d',

    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      'I lied again, one more random comment',
      'Why am I doing this?',
      "Man I'm bored",
      'What should I do?',
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: 'Nomesh',
    lastName: 'Chandoliya',
    location: 'Hyderabad, TS',
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: 'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/info2.jpeg?alt=media&token=d6da09be-d8c8-4a73-9087-b88098d39bdb',
    userPicturePath:
      'https://firebasestorage.googleapis.com/v0/b/social-media-d16de.appspot.com/o/nom.jpg?alt=media&token=51ac9477-cae6-449e-97e2-c056237954e0',
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      'Can I play video games now?',
      "No let's actually study",
      "Never mind, I'm going to play video games",
      'Stop it.',
      'Michael, stop it.',
    ],
  },
];
