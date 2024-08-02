import sqlite3

db = sqlite3.connect('server.db', check_same_thread=False)
cursor = db.cursor()

class Data():


    def __init__(self):
        self.db = db = sqlite3.connect('server.db', check_same_thread=False)
        self.cursor = cursor = db.cursor()

    def registration(self, user_id, refer_id=0):
        try:
            cursor.execute("INSERT INTO users (user_id, refer_id) VALUES (?, ?);", (user_id, refer_id))
            db.commit()
        except: 
            print('uniqe')

    def update_balance(self, user_id, balance):
        cursor.execute("UPDATE users SET balance = ? WHERE user_id = ?;", (balance, user_id))
        db.commit()
        
    def get_refferals(self, user_id):
        data = cursor.execute(f"SELECT user_id FROM users WHERE refer_id = {user_id};").fetchall()
        data = len(data)
        return data


data = Data()
data.get_refferals(50000000)