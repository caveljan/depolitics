<style>
    html, body {
        background-color: hsl(0, 0%, 10%);
        color: hsl(0, 0%, 90%);
    }

    h1, h2, p {
        color: hsl(0, 0%, 90%);
    }
</style>

# Notes


## Idea
To replace the names of politicians with random strings of characters, e.g. yttpc2i7, in order to disincentivize pursuits of fame and glory.


## Motivation
A politician should be no one.

No one should get into politics.

The first step towards a politics of no one is to make the Name irrelevant.


## Appliance
The app `depolitics.org` allows one to check the names already entered into the database and to suggest new entries of politicians in need of a depolitical IS, an Identification String (e.g. from "Donald Trump" to "yttpc2i7").

The browser extension makes use of a lightweight local database to replace entries read from the webpage with the depolitical IS. The database is updated every few hours from `depolitics.org/api/database` or can be updated at will by the user.

On hover over the Identification String one can see the function of the politician, previous functions, or can click a link to be taken to `depolitics.org` where the identity of the IS will be revealed.


## Technology
The website has a a NoSQL database storing:
+ first name
+ last name
+ name variants [array]
+ currect political function
+ previous poltiical functions [array]
+ IS (identification string)

The name replacements need to be done with a tree in order to reduce calculation.

To use a trie for full text search indexing.

`https://www.wikiwand.com/en/Trie`


## Future
To put it on the blockchain.

The advantages: a freed database.

The edit mechanism: reinforce the consented version through the blockchain.

---

To have for each politician two other input fields: Deeds and Opinions.

Deeds
based on perception value: positive, negative, neutral


Opinions
+ Place of Being: What is the place of the human, a being living around 70 years, in a universe which appeared 14 billion years ago. (who are we?)

+ Place of Work: The universe is without-(a)-meaning, without-(a)-why. And yet we derive meaning from our actions. What is the source of meaning, to what should we change it. How do we ground our why. (what should we do?)

+ Place of Boundary: We are in movement, in growth, for better, for worse. We are responsible for our actions, but also for the limits we impose on the degrees of freedom an action should have. Where should we stop. (what should we know?)

+ Place of Faith: Species disappear. The human is a species. What is the entity, concept, thing in which you place your faith the human will not disappear. (what can we hope for?)

+ Place of Contingency: We are the result of past events. They could have been different, turning us  different. What do you account for all the untaken paths. (what we could have been?, who should we become?)


## TODOs

Edit from search for admins.
