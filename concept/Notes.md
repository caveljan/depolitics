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