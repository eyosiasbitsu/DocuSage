import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import styles for the circular progress bar
import successImage from "../../assets/icons/success-icon.png"; // Update with your success icon path

const Uploads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Simulate Upload Process
  const simulateUpload = () => {
    setIsUploading(true);
    setUploadSuccess(false);
    let uploadProgress = 0;
    const interval = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);

      if (uploadProgress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadSuccess(true);
      }
    }, 300); // Increment progress every 300ms
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validFormats = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (validFormats.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError("");
        simulateUpload(); // Start upload process
      } else {
        setError("Invalid file type. Please upload a PDF or DOCX file.");
        setFile(null);
      }
    }
  };

  // Handle Link Input
  const handleLinkSubmit = (e) => {
    e.preventDefault();
    if (link.trim()) {
      setFile(null); // Clear any existing file
      setLink("");
      setError("");
      simulateUpload(); // Simulate link processing
    } else {
      setError("Please provide a valid link.");
    }
  };

  const handleDrive = () => {
    console.log("Integrate Google Drive Picker API here.");
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Upload Documents</h2>

      {/* Upload Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Upload
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Choose an Upload Option</h3>

            {/* Loading State */}
            {isUploading && (
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                      textColor: "#4caf50",
                      pathColor: "#4caf50",
                      trailColor: "#ddd",
                    })}
                  />
                </div>
                <p className="text-gray-600">Uploading... Please wait.</p>
              </div>
            )}

            {/* Success State */}
            {uploadSuccess && (
              <div className="flex flex-col items-center">
                <img src={successImage} alt="Success" className="w-16 h-16 mb-4" />
                <p className="text-lg text-green-600 font-semibold">File uploaded successfully!</p>
              </div>
            )}

            {/* Upload Options */}
            {!isUploading && !uploadSuccess && (
              <div className="space-y-6">
                {/* File Upload */}
                <div>
                  <label
                    htmlFor="file-upload"
                    className="block bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer text-center hover:bg-blue-600"
                  >
                    Upload from Computer
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                  />
                  {file && (
                    <p className="text-sm text-green-600 mt-2">
                      Selected File: {file.name}
                    </p>
                  )}
                </div>

                {/* Google Drive */}
                <div>
                  <button
                    onClick={handleDrive}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 w-full"
                  >
                    Get from Google Drive
                  </button>
                </div>

                {/* Add Link */}
                <div>
                  <form onSubmit={handleLinkSubmit}>
                    <div className="flex items-center space-x-4">
                      <input
                        type="url"
                        placeholder="Paste document link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                      >
                        Add Link
                      </button>
                    </div>
                  </form>
                </div>

                {/* Error Message */}
                {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Uploads;
