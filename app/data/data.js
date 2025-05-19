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

const chat = [
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
];

export { messages, chat };
