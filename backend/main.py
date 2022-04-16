from flask import Flask, request, redirect, url_for, jsonify
from flask_cors import CORS

import re
import openai

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

def parse_date_string(date_string :str) -> str:
    """
    Parses a date string "1/22/22, 1:42 PM" and returns a string in the format "2011-10-10T14:48:00"
    """
    parsed_date_string = re.sub(r'(\d+)/(\d+)/(\d+), (\d+):(\d+) (AM|PM)', r'20\3-\1-\2', date_string)
    return parsed_date_string

def get_gpt_text(names: str, messages: list, question: str, personality_description: str) -> str:
    """
    Returns a string of text that can be used as input to the GPT-3 model.
    """
    text = personality_description + "\n\n"
    for message in messages:
        if message["name"] == names[0]:
            text += "You: " + message["message"] + "\n"
        else:
            text += "Me: " + message["message"] + "\n"
    
    text += "Me: " + question + "\n" + "You: "
    messages.append({
        "date": messages[-1]["date"],
        "name": names[1],
        "message": question,
    })
    return messages, text

ALLOWED_EXTENSIONS = {'txt'}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/parseChat', methods=['POST'])
def parse_chat():
    print(request.files)
    if 'file' not in request.files:
        print('No file part')
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        print('No selected file')
        return redirect(request.url)

    filename = "test.txt"
    if file and allowed_file(file.filename):
        filename = file.filename

    count = 0
    message_lines = []
    names = set()
    dates = set()

    with open(filename, encoding="utf8") as fp:
        for line in fp:
            count += 1
            cleaned_text = line.strip()
            x = re.search("- .*:", cleaned_text)
            if x:
                name = x.group(0).replace(":", "").replace("- ", "")
                names.add(name)

                message = re.search(": .*", cleaned_text).group(0).replace(": ", "")

                date_string = re.search("\d{1,2}/\d{1,2}/\d{1,2}, \d{1,2}:\d{1,2} \w{2}", cleaned_text).group(0)
                date_string = parse_date_string(date_string)
                dates.add(date_string)

                message_obj = {
                    "date": date_string,
                    "name": name,
                    "message": message,
                }
                message_lines.append(message_obj)
                # print(message_obj)

    names = list(names)
    dates = list(dates)
    personality_description = "You are a teacher. You currently teach at PES University."

    return jsonify({"names": names, "dates": dates, "messages": message_lines, "personalityDescription": personality_description})

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json(force=True)
    names = data["names"]
    message_lines = data["messages"]
    question = data["question"]
    personality_description = data["personalityDescription"]
    (msgs, txt) = get_gpt_text(names, message_lines, question, personality_description)
    # print(txt)

    
    # openai.api_key = 
    # os.getenv("OPENAI_API_KEY")
    # ""

    # response = openai.Completion.create(
    #   engine="text-davinci-002",
    #   prompt=txt,
    #   temperature=0.5,
    #   max_tokens=81,
    #   top_p=1,
    #   frequency_penalty=0,
    #   presence_penalty=0,
    #   stop=["Me:"]
    # )

    
    response = {
        "choices": [
            {
            "finish_reason": "stop",
            "index": 0,
            "text": "\n\nThe next class is on Monday at 10:30 am."
            }
        ],
        "created": 1649936120,
        "id": "cmpl-4ws2qoPnDcL5pgDPwwszR3NWP4yZ2",
        "model": "text-davinci:002",
        "object": "text_completion"
    }
    message_lines.append({"date": message_lines[-1]["date"], "name": names[0], "message": response["choices"][0]["text"].replace("\n", "")})
    return jsonify({"messages": message_lines})

if __name__ == "__main__":
    app.run(port=5000)
