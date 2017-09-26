# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```


## Pooja's notes
Which components are in containers? 
Components that have a direct connection to redux should be containers. 
Things that need to be re-rendered every time state changes.

Steps to promote component to container
1. Import react-redux 'connect'
2. Create a mapStateToProps function
3. Connect the function to the component


Some state pieces need to change over time.
This is done with actions.

