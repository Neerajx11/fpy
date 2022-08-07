# Fampay Frontend Assignment

### [Live Website](https://fpy.vercel.app/) : It is a React Frontend App to display contextual cards.

<br/>

### Tech Stack : React

### Used [react-simple-pull-to-refresh](https://www.npmjs.com/package/react-simple-pull-to-refresh) to implement pull to refresh feature

<br/>

## Landing page of the App.

<img style="margin-top:20px; height:500px" src="./public/images/home.png" />

<br/>

## Structure of the card design

```
// main body of contextual cards
<ContextualCards />
👇🏻
// each card group is rendered within a CardWrapper Component (which can have multiple HCCards, which depends on card group length)
<CardWrapper />
👇🏻
// HCCards is a master component, which decide the type of card to return and proper props that should be passed according to the design type
<HCCards />
👇🏻
// HCCards return one of the card below with proper props
<HC1 />, <HC3 />, <HC5 />, <HC6 />, <HC6 />
```

<br/>

## Run Locally

Clone the project

```bash
git clone https://github.com/Neerajx11/fpy.git
```

Go to the project directory

```bash
cd fpy
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm start
```
