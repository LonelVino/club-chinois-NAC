const demoArr = [
    {
      label: "WORLD WEEK"
    },
    {
      type: "triangle",
      easing: "easeOutQuart",
      size: 6,
      particlesAmountCoefficient: 4,
      oscillationCoefficient: 2,
      color: function() {
        return Math.random() < 0.5 ? "#000000" : "#ffffff";
      },
      label: "WEEK"
    },
    {
      type: "triangle",
      easing: "easeOutSine",
      size: 3,
      duration: 800,
      particlesAmountCoefficient: 7,
      speed: 3,
      oscillationCoefficient: 1,
      label: "WEEK"
    },
    {
      type: "triangle",
      easing: "easeOutQuart",
      direction: "right",
      size: 4,
      speed: 1,
      color: "#e85577",
      particlesAmountCoefficient: 1.5,
      oscillationCoefficient: 1,
      label: "L"
    },
    {
      duration: 1300,
      easing: "easeInExpo",
      size: 3,
      speed: 1,
      particlesAmountCoefficient: 10,
      oscillationCoefficient: 1,
      label: "D"
    },
    {
      direction: "bottom",
      duration: 1000,
      easing: "easeInExpo",
      label: "W"
    },
    {
      type: "rectangle",
      style: "stroke",
      size: 15,
      color: "#e87084",
      duration: 600,
      easing: "cubicBezier(0.2, 1, 0.7, 1)",
      oscillationCoefficient: 5,
      particlesAmountCoefficient: 2,
      direction: "right",
      label: "E"
    },
    {
      type: "triangle",
      style: "stroke",
      size: 5,
      color: "blue",
      duration: 1400,
      speed: 1.5,
      oscillationCoefficient: 15,
      direction: "right",
      label: "E"
    },
    {
      direction: "right",
      size: 4,
      color: "#969696",
      duration: 1200,
      easing: "easeInCubic",
      particlesAmountCoefficient: 8,
      speed: 0.4,
      oscillationCoefficient: 1,
      label: "K"
    },
    {
      style: "stroke",
      color: "#1b81ea",
      direction: "bottom",
      duration: 1200,
      easing: "easeOutSine",
      speed: 0.7,
      oscillationCoefficient: 5,
      label: "C"
    }]

export {demoArr};