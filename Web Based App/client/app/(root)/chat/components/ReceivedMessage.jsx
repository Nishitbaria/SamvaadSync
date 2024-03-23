import formatTimestamp from "@/utils/formatedTimeStamp";
import React from "react";

const ReceivedMessage = ({ messageContent, index, timestamp, username }) => {
  const firstLetter = username?.charAt(0).toUpperCase();
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {firstLetter}
        </div>
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>{messageContent}</div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <span className="pr-2">{username}</span>
            <span>{formatTimestamp(timestamp)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
