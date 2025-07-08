import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import getBgClass from "../helper/BgClass";
import Alert from "../components/Alert";

const getTextStats = (text) => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const charCount = text.length;
  const sentenceCount = text
    .split(/[.?!]+/)
    .filter((s) => s.trim().length > 0).length;

  const wordsPerMinute = 200;
  const readTimeMinutes = wordCount / wordsPerMinute;
  const readTimeSeconds = Math.round(readTimeMinutes * 60);

  return {
    wordCount,
    charCount,
    sentenceCount,
    readTimeMinutes: readTimeMinutes.toFixed(3),
    readTimeSeconds,
  };
};

const HomePage = () => {
  const { mode } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const [alert, setAlert] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  const showAlert = (msg, type = "success") => {
    setAlert({ visible: true, message: msg, type });

    setTimeout(() => {
      setAlert({ ...alert, visible: false });
    }, 2000);
  };

  const handleOnChange = (event) => setInputValue(event.target.value);

  const toUpperCase = () => {
    setInputValue(inputValue.toUpperCase());
    showAlert("Converted to UPPERCASE!");
  };

  const clearText = () => {
    setInputValue("");
    showAlert("Text cleared.");
  };

  const removeSpaces = () => {
    setInputValue(inputValue.replace(/\s+/g, " ").trim());
    showAlert("Extra spaces removed.");
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(inputValue);
    showAlert("Text copied to clipboard!");
  };

  const {
    wordCount,
    charCount,
    sentenceCount,
    readTimeMinutes,
    readTimeSeconds,
  } = getTextStats(inputValue);

  const containerClass = getBgClass(mode);
  const isInputEmpty = inputValue.trim() === "";

  return (
    <div
      className={`${containerClass} px-4 min-h-screen grid place-items-center py-20 lg:py-0`}
    >
      <Alert
        message={alert.message}
        visible={alert.visible}
        type={alert.type}
      />

      <div className="w-full max-w-3xl space-y-6 p-6 rounded-lg shadow-md  transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-bold text-center ">
          ✨ Try TextUtils – Word & Character Counter, Space Remover
        </h1>

        <textarea
          rows={8}
          placeholder="Enter your text here..."
          value={inputValue}
          onChange={handleOnChange}
          autoFocus={true}
          className={`w-full p-4 rounded-md shadow-sm focus:outline-none ${
            mode !== "light"
              ? "ring-2 placeholder:text-white focus:ring-blue-40"
              : "placeholder:text-gray-600"
          } focus:ring-2 focus:ring-blue-400 resize-none`}
        />

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={toUpperCase}
            disabled={isInputEmpty}
            className="bg-blue-600 cursor-pointer focus:outline-none  hover:bg-blue-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            Convert to Uppercase
          </button>
          <button
            onClick={clearText}
            disabled={isInputEmpty}
            className="bg-red-500 cursor-pointer focus:outline-none hover:bg-red-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            Clear Text
          </button>
          <button
            onClick={removeSpaces}
            disabled={isInputEmpty}
            className="bg-purple-600 cursor-pointer focus:outline-none hover:bg-purple-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            Remove Extra Spaces
          </button>
          <button
            onClick={copyToClipboard}
            disabled={isInputEmpty}
            className="bg-green-600 cursor-pointer focus:outline-none hover:bg-green-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            Copy to Clipboard
          </button>
        </div>

        {!isInputEmpty && (
          <div className="mt-4  text-center text-sm">
            <p
              className={`text-sm ${
                mode !== "light" ? "text-gray-200" : "text-gray-800"
              } text-center`}
            >
              Words: {wordCount} | Characters: {charCount} | Sentences:{" "}
              {sentenceCount} | Estimated Read Time: {readTimeMinutes} min (
              {readTimeSeconds} sec)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
