const getdate = () => {
  const today = new Date();

  //   switch (currentDay) {
  //     case 1:
  //       day = "Monday";
  //       break;
  //     case 2:
  //       day = "Tuesday";
  //       break;
  //     case 3:
  //       day = "Wednesday";
  //       break;
  //     case 4:
  //       day = "Thursday";
  //       break;
  //     case 5:
  //       day = "Friday";
  //       break;
  //     case 6:
  //       day = "Saturday";
  //       break;
  //     case 7:
  //       day = "Sunday";
  //       break;
  //     default:
  //       console.log("Invalid value");
  //   }
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", options);

};
module.exports = {getdate}