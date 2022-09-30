# Maintaining this website

This readme is supposed to be a guide to anyone maintaining this website. If that's you, welcome! You can take a look at [2020-2021 webpage](./years/2020-2021) as a reference.

## Adding a talk

In the current webpage, there is a section with class `feed` which contains a list of talks in reverse chronological order. Below is an example of how a talk should appear.

```html
      <article id="Lastname" class="talk">
        <h4>Date</h4>
        <h3>Title TBD</h3>
        <p class="author">Speaker</p>
        <p class="abstract">Abstract goes here.</p>
      </article>
```

If an abstract spans multiple paragraphs, then each paragraph should be contained in its own `p` tag with class `abstract`. The talk should have an id attribute with the speaker's last name. If a speaker gives multiple talks within the same academic year, you should append a digit to distinguish it. These unique identifiers make it possible to link directly to a specific talk. For example, the link https://ams-at-ucr.github.io/gradsem/years/2020-2021/#Alcaraz leads to a specific talk from the 2020-2021 academic year.

The talks are organized by quarter which are labeled with `h2` tags. At the top of the feed should be the upcoming talk, again labeled with an `h2` tag. The upcoming talk should be a copy of the talk from the main part of the feed, but with the `id` set to `upcoming`.

### Math Mode

Typesetting math is currently supported using [MathJax](https://www.mathjax.org), which allows you to use LaTeX commands within the HTML. Currently, it only works with the `\(...\)` and `\[...\]` delimiters, not the dollar signs. Rumor says it is possible to make MathJax work with dollar signs, but I'm not sure I buy it. Anyone reading this is welcome to submit a pull request with that working!

## Starting a new page

At the start of every academic year, the organizers of this seminar will need to create a new webpage for the year. Here is a checklist of things to do when creating it.

#### Create the page 

In the `./years/` directory, make a new directory labeled with the appropriate academic year. In this directory, make a copy of the `index.html` file from previous year's directory.

#### Update redirect

The `./index.html` file is a landing page which forwards you to the most current webpage. This file (which is in the main folder, not the 'years' folder) needs to be updated to forward to the new page. Edit lines 7 and 14 appropriately to make that happen.

#### Update email obfuscator

The officers usually link their emails on the webpage. We use a simple email obfuscator to avoid putting our email in plain text on the open internet. The file `./assets/email-obfuscator.js` contains the javascript that does this. Even if you don't know javascript, you can probably stare at this code for a while and figure out how it works and just edit it by hand, but if you don't want to bother with that, you can generate the code with [this](http://rot13.florianbersier.com) tool. Just take the code inside the innermost `script` tag  and paste it into this script file. You'll also need to change the `"obf"` to something like `"lastname-email"`. You can use the existing code in this file as reference, but you should ultimately overwrite it.

#### Edit page

The rest of what needs to be done happens in the new file you created (the current webpage), so go ahead and open that up.

First of all, delete the stuff in `feed` section. This is where the list of talks will go. See the above information about adding a talk to add this information as you schedule talks.

Next, change the meeting time and location if that has changed. Under the header, there is a section (class `banner`) which contains an article (class `coordinates`) which contains this information.

Also, you'll need to update the list of officers. Within the main tag, you'll find a section with class `officers`. Here, you can update the names of the officers and their positions. The span tags for each officer should have an id which matches the corresponding id referenced in `./assets/email-obfuscator.js`.

Also in the main tag, you'll find a section with class `archive` which contains a lists of links to past years' webpages. Since this is a new webpage, you'll need to add the previous year's webpage to the top of the list.

Finally, in the footer tag, there is a copyright which needs to be updated to the current academic year.
