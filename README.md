# BeyondChats AI

A customer support chat interface powered by AI, built with Next.js, Tailwind CSS and other modern libraries. This project was developed as an assignment for BeyondChats.

### Live Demo

🔗 [Live Demo](https://beyond-chats-ai.vercel.app)
📽️ [Video Demo](https://www.loom.com/share/9ec14eacae474415a1337bb232d01b5f?sid=d4c00c38-5b47-4750-ab96-80620367ffab)

### Tech Stack

- Framework: Next.js
- Language: Javascript & Typescript
- Styling: TailwindCSS
- User Interface: Shadcn/ui
- Animation: motion/react
- State Management: React ContextAPI

### Features

- 🚀 Responsive Design
- 🚀 Collapsible Copilot and Chat
- 🚀 Animations by Motion/react
- 🚀 Theming using next-themes
- 🚀 Command Menu - Press Ctrl/Cmd + K to access
- 🚀 Demo Preloader
- 🚀 State mamagement within components
- 🚀 Consistent design using Shadcn/ui

### Custom Components

- AppSidebar - Copilot and Details tab
- ArticlePopup - Popup to show more info when copilot makes a suggestion
- SelectedTextPopup - Show a menu with actionable items when selecting text in the input field
- ModeToggle - Toggle to change themes : "light" (default), "dark", "system"
- SuperCommand - Command items accessible by pressing Ctrl/Cmd + K

### Key Files

- Dashboard - Holds all the layouts and components
- Inbox - List of customer chats
- Chat - Chat with any customer
- Panel - AI Copilot + Details

### StateManagement

- ChatInputContext - To share data suggested by _Copilot_ and paste it into input field in _Chat_
- SelectedMessageContext - To share which message is selected from _Inbox_ and render it in _Chat_
- ThemeProvider - To share current theme throught the app
