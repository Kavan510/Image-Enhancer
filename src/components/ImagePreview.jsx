import React from "react";
import Loading from "./Loader";

const ImagePreview = (props) => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
      {/* Original image */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-700 py-4 bg-gray-50 border-b">Original Image</h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="original"
            className="w-full h-80 object-contain bg-white p-2"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-100 text-gray-500 italic">
            No image selected
          </div>
        )}
      </div>

      {/* Enhanced image */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-700 py-4 bg-gray-50 border-b">Enhanced Image</h2>
        {props.enhanced && !props.loading && (
          <img
            src={props.enhanced}
            alt="enhanced"
            className="w-full h-80 object-contain bg-white p-2"
          />
        )}

        {props.loading ? (
          <Loading />
        ) : (
          !props.enhanced && (
            <div className="flex items-center justify-center h-80 bg-gray-100 text-gray-500 italic">
              No enhanced image
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
