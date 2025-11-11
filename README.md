# Airbourne Lens Viewer

This project is a simple web application that displays videos from the YouTube channel @AirbourneLens. 

## Project Structure

```
airbourne-lens-viewer
├── src
│   ├── index.html         # Main HTML document
│   ├── css
│   │   └── styles.css     # Styles for the website
│   ├── js
│   │   ├── app.js         # Main JavaScript file
│   │   ├── youtube-api.js # Functions to interact with the YouTube API
│   │   └── config.js      # Configuration settings
├── public
│   └── assets             # Directory for static assets
├── package.json           # npm configuration file
├── .env                   # Environment variables
├── .gitignore             # Files to ignore by Git
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your YouTube API key:
   ```
   YOUTUBE_API_KEY=your_api_key_here
   ```

4. **Run the application**:
   You can use a local server to run the application. For example, you can use `lite-server` or any other local server of your choice.

5. **Open your browser**:
   Navigate to `http://localhost:3000` (or the port your server is running on) to view the application.

## Usage

The application will fetch and display videos from the YouTube channel @AirbourneLens. You can interact with the videos and explore the content available on the channel.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.