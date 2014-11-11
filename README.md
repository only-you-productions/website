# Only You Productions

The website is built with [jekyll](http://jekyllrb.com/) and hosted by
[GitHub](https://pages.github.com/).

Please refer to their documentation for more information.

## Editing

You can make all changes directly here on GitHub (view a file, click the edit
button, and Save).

If you are familiar with git, you can also simply fetch the repository and
commit your changes as usual (refer to the gh-pages documentation).


## Domain hosting

The domain is currently hosted by world4you.

There is still the old version of the website hosted there, but it is no longer
in use.

Since they don't provide a built in solution for redirects, I still hosted
a simple `index.html` on world4you that redirects to
`www.onlyyouproductions.com`.  
I then configured world4you to point `www.onlyyouproductions.com` to GitHub,
and serve this `index.html` for `onlyyouproductions.com`.
