import {
  Ashley_Williams,
  Blair_Dota,
  Claire_Kumas,
  dog,
  Julian_Dasilva,
  Mike_Lyne,
  Molly_Clark,
} from './images';

const profiles = [
  {
    id: 1,
    name: 'Julian Dasilva',
    message: 'Hi Julian! See you after work?',
    date: 'Now',
    image: Julian_Dasilva,
    badge: true,
    selected: false,
  },
  {
    id: 2,
    name: 'Mike Lyne',
    message: 'I must tell you my interview this...',
    date: '3 ming ago',
    image: Mike_Lyne,
    badge: true,
    selected: true,
  },
  {
    id: 3,
    name: 'Claire Kumas',
    message: 'Yes I can do this to you in the week...',
    date: '1 hour ago',
    image: Claire_Kumas,
    badge: false,
    selected: false,
  },
  {
    id: 4,
    name: 'Blair Dota',
    message: 'By the way, did not you see my dog...',
    date: '1 day ago',
    image: Blair_Dota,
    badge: false,
    selected: false,
  },
  {
    id: 5,
    name: 'Molly Clark',
    message: 'Yes I am so happy!',
    date: '3 hours ago',
    image: Molly_Clark,
    badge: true,
    selected: false,
  },
  {
    id: 6,
    name: 'Ashley Williams',
    message: "I'll be there this weekend with my...",
    date: '2 days ago',
    image: Ashley_Williams,
    badge: false,
    selected: false,
  },
];

const chat = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Blair Dota',
    },
    message: 'Hi Cassie! Would you be available for a coffee next week?',
    image: Blair_Dota,
    time: '8:07',
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Cassie',
    },
    message: 'Hi Ashley! Yes with pleasure! Do you prefer when?',
    image: Blair_Dota,
    time: '8:10',
  },
  {
    id: 3,
    user: {
      id: 1,
      name: 'Blair Dota',
    },
    message: 'Hmm... Tuesday night, around 19 hours is good for you?',
    image: Blair_Dota,
    time: '8:11',
  },
  {
    id: 4,
    user: {
      id: 2,
      name: 'Cassie',
    },
    dogImage: dog,
  },
  {
    id: 5,
    user: {
      id: 2,
      name: 'Cassie',
    },
    message: 'By the way, did not you see my dog! I present to you Sheldon!',
    time: '8:13 ✓',
  },
];

export {profiles, chat};
