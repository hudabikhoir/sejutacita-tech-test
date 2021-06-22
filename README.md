# SEJUTACITA TECH TEST

SEJUTACITA TECH TEST is made for sejuta technical test purposes. I'm using javascript to handle authentication. The token generated from this auth endpoint will be used later fetching data user. Every request received by user endpoint will check the JWT token. If jwt is invalid it will return an error. 

For more details, you can see the C4 model below

![sejutacita](https://user-images.githubusercontent.com/35209506/122930369-238e1000-d396-11eb-8c4f-752a46c917e5.png)

## installation
Before continuing, make sure your laptop has Docker and Docker compose installed properly
- `git clone https://github.com/hudabikhoir/sejutacita-tech-test/`
- `cd sejutacita-tech-test`
- `docker-compose up` it will build service with database

## api documentation
All features of the two APIs are well documented in the following link [link](https://github.com/hudabikhoir/sejutacita-tech-test/blob/master/API.md)
