# A Personality Replication Chatbot

## Paper Link on Overleaf
[Text Style Replication using GPT-3 based on Personality Identification](https://www.overleaf.com/read/sqrtysxpqjxx)

## Additional info
* The dataset used in the personality model can be found [here](https://www.kaggle.com/code/mercurio117/mbti-500/data).
* Code used to build the personality model is located in the ```backend``` folder with the name ```Nlp_Project.ipynb```.

## Setup

1. Clone the repository
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
