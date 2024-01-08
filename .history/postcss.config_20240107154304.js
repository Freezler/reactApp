export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: { 
      overrideBrowserslist: [
        "last 10 Chrome version",
        "last 10 Firefox version",
        "last 4 Edge version",
        "last 7 Safari version",
        "last 8 Android version",
        "last 8 ChromeAndroid version",
        "last 8 FirefoxAndroid version",
        "last 10 iOS version",
        "last 5 Opera version",
      ],
      grid: true,
      flexbox: true,
      gridAutoFlow: true,
      gridAutoColumns: true,
      gridAutoRows: true,
      gridTemplateColumns: true,
      gridTemplateRows: true,
      
    },
  },
}
