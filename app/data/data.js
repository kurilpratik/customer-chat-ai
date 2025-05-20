const messages = [
  {
    id: 1,
    source: "Github",
    content: "Hello, I have a question about the project",
    sender: "Luis Easton",
    time: "25m",
    read: false,
    color: "bg-indigo-400",
  },
  {
    id: 2,
    source: "Hike",
    content: "Hi there, how are you? I wanted to ask you about the project",
    sender: "Ivan Rakitic",
    time: "32m",
    read: false,
    color: "bg-red-400",
  },
  {
    id: 3,
    source: "Lead from New York",
    content: "Good morning, I'm looking for a new apartment",
    sender: "",
    time: "35m",
    read: false,
    color: "bg-blue-400",
  },
  {
    id: 4,
    source: "Booking API Problems",
    content: "Hi, I wanted to submit a complaint about the booking",
    sender: "",
    time: "45m",
    read: true,
    color: "bg-pink-400",
  },
  {
    id: 5,
    source: "Exemptary Bank",
    content: "Hello, how are you? We would like to discuss the loan",
    sender: "Miracle Morning",
    time: "49m",
    read: true,
    color: "bg-indigo-400",
  },
];

const chats = [
  [
    {
      id: 1,
      sender: "Luis Easton",
      content:
        "I bought a product from your store in November as a Christmas gift for a member of my family. However it turns out they have something very similar already. I was hoping you could help me with a refund as it is unopened.",
      time: "25m",
      color: "bg-indigo-400",
    },
    {
      id: 2,
      sender: "You",
      content: "Let me just look into this for you, Luis.",
      time: "1m",
      color: "bg-gray-400",
    },
  ],
  [
    {
      id: 1,
      sender: "Ivan Rakitic",
      content:
        "Hi there, I've been trying to access my account for the past hour but keep getting an error message saying 'Invalid credentials' even though I'm certain my password is correct. I've tried resetting it twice now but still no luck. Could you please help me regain access to my account?",
      time: "30m",
      color: "bg-red-400",
    },
    {
      id: 2,
      sender: "You",
      content:
        "I'm sorry to hear that you're having trouble accessing your account. Let me just look into this for you, Ivan.",
      time: "24m",
      color: "bg-gray-400",
    },
  ],
  [
    {
      id: 1,
      sender: "Lead from New York",
      content:
        "Hi there, I'm looking for a new apartment in New York. Do you have any recommendations?",
      time: "58m",
      color: "bg-red-400",
    },
    {
      id: 2,
      sender: "You",
      content:
        "I'm sorry, I don't have any recommendations for New York. However, I can help you find an apartment in another city.",
      time: "48m",
      color: "bg-gray-400",
    },
  ],
  [
    {
      id: 1,
      sender: "Booking API Problems",
      content:
        "I'm having trouble booking a room on your website. I've tried several times but keep getting an error message saying 'Invalid credentials' even though I'm certain my password is correct. I've tried resetting it twice now but still no luck. Could you please help me regain access to my account?",
      time: "2hr",
      color: "bg-red-400",
    },
    {
      id: 2,
      sender: "You",
      content:
        "I'm sorry to hear that you're having trouble booking a room. Let me just look into this for you, Booking API Problems.",
      time: "2hr",
      color: "bg-gray-400",
    },
  ],
  [
    {
      id: 1,
      sender: "Exemptary Bank",
      content:
        "Hi there, how would you like to proceed with my loan application? I've attached the documents you requested.",
      time: "30m",
      color: "bg-red-400",
    },
    {
      id: 2,
      sender: "You",
      content:
        "Thank you for your application. I've attached the documents you requested. Let me just look into this for you, Exemptary Bank.",
      time: "24m",
      color: "bg-gray-400",
    },
  ],
];

export { messages, chats };
