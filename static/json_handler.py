import json 


path = 'users.json'


def create_json(user_id, refer_id):
    json_data = [{
        "user_id": user_id,
        "refer_id": refer_id,
    }
    ]
    with open('users.json', 'w') as file:
        file.write(json.dumps(json_data, indent=2, ensure_ascii=False))

def add_to_json(user_id, refer_id):
    json_data = {
        "user_id": user_id,
        "refer_id": refer_id,
    }
    data = json.load(open("users.json"))
    data.append(json_data)
    with open("users.json", "w") as file:
        json.dump(data, file, indent=2, ensure_ascii=False)


def jsonUsersCount():
    with open(path, 'r') as f:
        data = json.loads(f.read())
        return len(data)

def jsonReturnReferID(victim):
    with open(path, 'r') as f:
        data = json.loads(f.read())
        for user in data:
            
            if user['user_id'] == victim:
                return user['refer_id']

def jsonReturnReferalsIDS(refer):
    with open(path, 'r') as f:
        data = json.loads(f.read())
        referals = []
        for user in data:
            
            if user['refer_id'] == refer:
                referals.append(user['user_id'])
        return referals


 