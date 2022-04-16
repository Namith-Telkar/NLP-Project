import re

def parse_date_string(date_string :str) -> str:
    """
    Parses a date string "1/22/22, 1:42 PM" and returns a string in the format "2011-10-10T14:48:00"
    """
    parsed_date_string = re.sub(r'(\d+)/(\d+)/(\d+), (\d+):(\d+) (AM|PM)', r'20\3-\1-\2', date_string)
    return parsed_date_string

filename = "test.txt"

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
print(names)
dates = list(dates)

def get_gpt_text(name: str, messages: list, question: str, personality_description: str) -> str:
    """
    Returns a string of text that can be used as input to the GPT-3 model.
    """
    text = personality_description + "\n\n"
    for message in messages:
        if message["name"] == name:
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

print(message_lines)
(msgs, txt) = get_gpt_text(names[0], message_lines, "When is the next class?", "You are a teacher. You currently teach at PES University.")
print(txt)

import os
import openai


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

# print(response)

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
(msgs, txt) = get_gpt_text(names[0], message_lines, "Okay see you then!", "You are a teacher. You currently teach at PES University.")
print(txt)
