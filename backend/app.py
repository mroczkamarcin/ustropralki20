#!flask/bin/python
from flask import Flask, jsonify, request
import json
import sys

app = Flask(__name__)

db_path = "db.json"

def save_json_to_file(file_path, json_to_save):
    with open(file_path, "w") as file:
        json.dump(json_to_save, file)


def read_json_file(file_path):
    with open(file_path, "r") as file:
        loaded_json = json.load(file)
        return loaded_json

db = read_json_file(db_path)

@app.route('/' , methods=['GET'])
def get_all():
    return jsonify(db)

@app.route('/<string:id>', methods=['GET','POST','DELETE'])
def get_tasks(id):
    if id not in db:
        return jsonify({'result': False, 'message': 'Nie ma takiej pralki'}), 400

    if request.method == 'GET':
        return jsonify(db[id]), 200

    if request.method =='POST':
        try:
            new_data = request.get_json()
            db[id]["userID"] = new_data['userID']
            db[id]['end_time'] = new_data['end_time']

            save_json_to_file(db_path,db)
            return jsonify({'result': True, 'message': 'Dodano nowego użytkownika pralki'}), 200
        except:
            print("Unexpected error:", sys.exc_info()[0])
            return jsonify({'result': False, 'message': f"Nieznany błąd serwera. \n Error message: {sys.exc_info()[0]}"}), 400

    if request.method == 'DELETE':
        try:
            db[id]["userID"] = ""
            db[id]['end_time'] = ""
            return jsonify({'result': True, 'message': 'Pralka jest teraz wolna'}), 200
        except:
            print("Unexpected error:", sys.exc_info()[0])
            return jsonify({'result': False, 'message': f"Eee dzwoń bo Mirka, baza spadła na r*j. \n Error message: {sys.exc_info()[0]}"}), 400



if __name__ == '__main__':
    app.run(debug=True)