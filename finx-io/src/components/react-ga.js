import ReactGA from 'react-ga';

const trackingId = "G-ZDTYBG3JCP"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
    dimension1: "dimension1",
    // any data that is relevant to the user session
    // that you would like to track with google analytics
})
ReactGA.pageview(location.pathname);
ReactGA.event({
    category: "Sign Up",
    action: "User pressed the big blue sign up button",
});