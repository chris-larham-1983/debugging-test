# Debugging Test

This is my solution to the problem of how to successfully deploy *Codecademy*'s *Adopt a Pet!* project to **GitHub Pages**. The 
project involved communicating with a mock API backend; this was causing issues on **GitHub Pages** but was not causing problems 
on **Netlify** or on the **localhost**.  The issue was brought to my attention on the following thread: 
https://discuss.codecademy.com/t/adopt-a-pet-off-platform-practice-project/597981/16.

## What Causes The Issues?

I believe that the issues are caused by the way that **GitHub Pages** bundles up the app's assets; relative links that work 
on the **localhost** no longer work when the app is deployed to **GitHub Pages**.

## How Did I Solve The Issues?

I removed the line of code `const { type } = useParams();` because this was not working as expected.  `type` was being set 
to `debugging-test` when the `<HomePage />` element loaded at `https://chris-larham-1983.github.io/debugging-test`; the expected 
behaviour was that `type` should be undefined.  

To get around this quirky behaviour I rewrote the `<HomePage />` element so that it accepts a `type` prop, based on the 
'path'.  Thus, when the `<HomePage />` element loads at the `/` path, a `type` prop with a value of `""` is passed to the 
`<HomePage />` element; when the `<HomePage />` element loads at the `/cat` path, a `type` prop with a value of `"cat"` is passed to the `
<HomePage />` element; when the `<HomePage />` element loads at the `/dog` path, a `type` prop with a value of `"dog"` is passed 
to the `<HomePage />` element, and so on. I updated the `<Route>s` in `App.js` accordingly.

To overcome the problem of relative links not communicating with **GitHub Pages**'s assets correctly I set an absolute path to 
the `<Hero />`'s background image and rewrote the `getPets`, `getPetDetails`, and `getPetTypes` functions in `petfinder/index.js` to 
communicate with an API hosted on my personal **GitHub** page. This API is thus at an absolute path, rather than a relative path; 
this JSON API can be seen at: https://github.com/chris-larham-1983/chris-larham-1983.github.io/tree/main/json_data.

The final change that I made was to the `<SearchPage />` component, ensuring the search functionality worked correctly and 
communicated with the correct self-hosted API endpoint.

## Using the App

The 'live' app can be viewed and interacted with at: https://chris-larham-1983.github.io/debugging-test.

Alternatively, this project can be cloned and modified for your own purposes.

## License

MIT License

Copyright (c) 2022 Chris Larham

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


  

