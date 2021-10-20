# What is this?

a short example of what the code for the backend might look like

# how do i run it?

make sure you have java 11 installed. open this folder in cmd/terminal.

for windows run: 
mvnw spring-boot:run

for mac/linux run: 
./mvnw spring-boot:run

wait a moment and it should run

# what does it do?

it is a small RESTful API you can call. to see this in your browser, go to:

localhost:8080

if you get something about it being a fallback page, its running correctly. currently there are two things implemented in this demo

## price sorting

you can get a list of the example appartments under X dollars. the default is 1000. to see the default, go to:

localhost:8080/price

this is the array that when you call the api you will get. frontend will deal with it. if you want to search for units under 400 dollars, do:

localhost:8080/price?price=400

see? very neat

## pets

same thing as above but for pets. default value is true

localhost:8080/pets

shows places that allow pets. for no pets:

localhost:8080/pets?pet=false