# Only You Productions

The website is built with [jekyll](http://jekyllrb.com/) and hosted by
[GitHub](https://pages.github.com/).

Please refer to their documentation for more information.

## Domain hosting

The domain is currently hosted by world4you.

There is still the old version of the website hosted there, but it is no longer
in use.

Since they don't provide a built in solution for redirects, I still hosted
a simple `index.html` on world4you that redirects to
`www.onlyyouproductions.com`.  
I then configured world4you to point `www.onlyyouproductions.com` to GitHub,
and serve this `index.html` for `onlyyouproductions.com`.
