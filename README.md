Module 7 - D9

    Today you'll create a new TypeScript application from scratch.
    The purpose is to fulfill the requirements trying also to implement as best as you can typings and interfaces.
    The application will be a music search engine.
    Implement a nice main page with the search input and use the same page to show the search results.
    Clicking on any result should bring the user on a detail page, which will fetch the data for that particular track.
    Show on this detail page information you consider relevant about the song (i.e. title, album, duration ecc.)
    API:
    ---------------------------------------------------------------------------
    For the main search use https://deezerdevs-deezer.p.rapidapi.com/search?q=whatever to get some results
    Use the id property of any resulting track to fetch detail information with https://deezerdevs-deezer.p.rapidapi.com/track/:id
    Don't forget to insert your usual host & key headers in your fetches!
    ---------------------------------------------------------------------------
    HINTS:
    - As usual split your application in many reusable components
    - Implement props & state interfaces for each one of them
    - Skip the Redux approach and fetch data directly in your components and store them
    in local states (we didn't had the chance to talk about Redux typings)
