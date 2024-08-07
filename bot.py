from aiogram import Bot, Dispatcher
from aiogram.types import Message, ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo, WebAppData
from aiogram.filters import CommandStart
import asyncio




bot = Bot(token='7388243533:AAEMH7wpms_kGeESPP217LWqE3txFu1qfQQ')
dp = Dispatcher()



@dp.message()
async def address_check(message: Message):
    markup = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text='Play Now', web_app=WebAppInfo(url='https://egor4chan-tl2-6b79.twc1.net/102_1'))],
    [InlineKeyboardButton(text='Subscribe to the channel', callback_data='withdraw')]
])

    await message.answer('Welcome to the TON League!\n\nStart to earn TON now!', reply_markup=markup)

async def main():
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())