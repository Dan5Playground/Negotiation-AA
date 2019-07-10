# Experiment 
This experiment is powered by [Empirica](https://empirica.ly/). 

## Factor
- playerCount(Required): single:1, pair:2
- prompt(Required): hasPrompt, noPrompt
- mode(Required): debug(0), production(1)
- duration: short(5min), medium(10min), long(15min),
            xlong(20min), xxlong(30min)
- payoff: same(0), different(1)

## Treatment
- prompt_debug
- noPrompt_debug
- prompt
- noPrompt

## Lobby Configuration
- xshort(10s), short(5min), medium(10min) and long(15min)
- Time out type: individual
- Extension: None

## Experiment
The design of the experiment could be found at this [design doc](https://docs.google.com/document/d/1WkP7jUuyD8489S60IraNNcA4Sorv5trm-gtuLMycwM0/edit?usp=sharing)

## Usage
1. Download the repository (and unzip). 
2. Go into the folder with ```cd my-experiment```
3. Install the required dependencies `meteor npm install`
4. Create a local admin configuration file, e.g. `local.json`. 
    ```
       {
         "admins": [
           {
             "username": "admin",
             "password": "password"
           }
         ]
       }
    ```
   
5. Run the local instance with `meteor --settings local.json`
6. Go to `http://localhost:3000/admin` (or whatever port you are running Meteor on).
7. login with the credentials username: `admin` and the password you have in `local.json`
8. Start a new batch with whatever configuration you want (see the example configuration).
