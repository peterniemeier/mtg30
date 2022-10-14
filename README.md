# MTG 30th Edition Simulator

This project was created to simulate what it is like to open MTG 30th Edition product.
It is unaffiliated with Hasbro or Wizards of the Coast.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How are odds calculated?

There are 117 rares in the original Beta set. 4 were removed. An additional 1 of
each dual land are included. Essentially, 123 rares on the "sheet".
The odds that the Old Border slot to be rare are calculated using 2.9746 out
of 10.
This was theorycrafted using knowledge of rare sheet printing and precedence.
Credit goes to Tavis King for determining this value.

## How does it determine which rare is pulled?

Each rare card has an index value between 0 and 122 to cover all 123
different rares in the rare pool. Each rare is determined independently per
pack opening with a random value. If the Old Border slot was determined to be
rare, the rare is determined in a similar fashion.

A full set of rares is determined by adding rares to a set that does not
currently include them until the set size is 113 (one of each unique rare).
