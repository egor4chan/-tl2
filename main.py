from flask import Flask, render_template, request
from server import Data

app = Flask(__name__)
data = Data()

@app.route('/<user_id>_<refer_id>')
def hello_page(user_id, refer_id):
    data.registration(user_id, refer_id)
    return render_template('hello.html', user_id=user_id, refer_id=refer_id)


@app.route('/home<user_id>')
def index_page(user_id=0):
    return render_template('index.html', user_id=user_id)


@app.route('/mine<user_id>')
def mine_page(user_id=0):
    return render_template('mine.html', user_id=user_id)

@app.route('/team<user_id>')
def team_page(user_id=0):
    ref_count = data.get_refferals(user_id)
    return render_template('team.html', user_id=user_id, refs=ref_count)

@app.route('/b', methods=['POST'])
def b():
        req = request.get_json(force=True, silent=True)
        print('REQUEST: ', req)
        user_id = req['user_id']
        balance = req['balance']

        data.update_balance(user_id, balance)

        return req


if __name__ == '__main__':
    app.run(port=8000)

