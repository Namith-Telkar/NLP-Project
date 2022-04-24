# A personality replication chatbot

## Paper link on overleaf
[Text Style Replication using GPT-3 based on Personality Identification](https://www.overleaf.com/read/sqrtysxpqjxx)

## Setup

1. Clone the reprository
    ```
    git clone https://github.com/arnxv0/ymir.git
    ```
2. Setup frontend:
    * Go to the frontend directory
    ```
    cd frontend
    ```
    * Install all the dependencies using ```npm```
    ```
    npm i
    ```
    * Start the frontend
    ```
    npm start
    ```

3. Setup backend:
    * Go to the backend directory
    ```
    cd backend
    ```
    * Create a ```.env``` file
    * Get an api key for the GPT-3 model from OpenAI [here](https://beta.openai.com/account/api-keys).
    * Add the following line in the ```.env``` file, where ```XXX``` is replaced with your api key
    ```
    GPT3_TOKEN=XXX
    ```
    * Install the necessary libraries
    ```
    pip install -r requirements.txt
    ```
    * Run the backend
    ```
    python main.py
    ```
