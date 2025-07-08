const getBgClass = (mode) => {
  let containerClass = "";
  switch (mode) {
    case "dark":
      containerClass = "bg-zinc-900 text-white";
      break;
    case "light":
      containerClass = "bg-white text-gray-900";
      break;
    case "red":
      containerClass = "bg-[#CD5C5C] text-white";
      break;
    case "blue":
      containerClass = "bg-[#191970] text-white";
      break;
    case "purple":
      containerClass = "bg-[#720e9e] text-white";
      break;
    default:
      containerClass = "bg-white text-gray-900";
  }
  return containerClass;
};

export default getBgClass;
