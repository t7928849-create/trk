import discord
from discord.ext import commands
import requests

# Discord bot setup
intents = discord.Intents.default()
bot = commands.Bot(command_prefix='!', intents=intents)

# Roblox Open Cloud API URL
ROBLOX_API_URL = 'https://api.roblox.com'  # Replace with actual endpoint

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')

@bot.command()
async def build(ctx, *, filename: str):
    """Command to build something in Roblox based on Discord input."""
    # Consider implementing authentication as necessary for Roblox API

    response = requests.post(f"{ROBLOX_API_URL}/build", json={{"file": filename}})
    
    if response.status_code == 200:
        await ctx.send(f'Successfully built {filename} in Roblox!')
    else:
        await ctx.send(f'Failed to build {filename}. Error: {response.text}')

# Run the bot (replace 'YOUR_DISCORD_BOT_TOKEN' with your bot's token)
bot.run('YOUR_DISCORD_BOT_TOKEN')