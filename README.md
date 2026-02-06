# Python Setup Instructions for Discord Roblox Bot

## Getting Started

### Step 1: Obtain API Keys
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a new application.
3. Navigate to the "Bot" tab and click "Add Bot".
4. Copy the "Token" and save it for later.

### Step 2: Install Dependencies
To install the necessary dependencies, use the following command:
```bash
pip install -r requirements.txt
```

### Step 3: Create a .env File
Create a file named `.env` in the root directory of your project and add the following lines:
```
DISCORD_TOKEN=your_discord_token_here
OTHER_API_KEYS=other_api_key_values_here
```
Replace `your_discord_token_here` with the token you obtained from the Discord Developer Portal and add any other necessary API keys.

### Step 4: Run the Bot
Finally, you can run the bot using the command:
```bash
python bot.py
```