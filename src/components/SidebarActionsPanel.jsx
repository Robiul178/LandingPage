import {
  ThumbsUp,
  ThumbsDown,
  ClipboardList,
  Clipboard,
  Volume2,
  FileText,
  MessageSquare,
  Check,
} from "lucide-react";

const SidebarActionsPanel = () => {
  return (
    <div className="md:flex items-center w-full lg:gap-4 md:gap-2">
      {/* Vertical Icon Sidebar */}
      <div className="flex md:flex-col justify-between bg-white rounded-full md:p-3 max-sm:px-8 max-sm:py-2 max-sm:mt-3 max-sm:w-full items-center gap-6 shadow">
        <ThumbsUp className="w-5 h-5 text-gray-700 cursor-pointer" />
        <ThumbsDown className="w-5 h-5 text-gray-700 cursor-pointer" />
        <ClipboardList className="w-5 h-5 text-gray-700 cursor-pointer" />
        <Clipboard className="w-5 h-5 text-gray-700 cursor-pointer" />
        <Volume2 className="w-5 h-5 text-gray-700 cursor-pointer" />
      </div>
      {/* Right Content Panel */}
      <div className="md:flex flex-col gap-4 w-full max-sm:mb-3">
        {/* Real-time Analysis Section */}
        <div className="lg:w-[585px] md:w-full mt-4 lg:h-[220px]  bg-gray-100 lg:p-6 md:p-3 max-sm:p-3 rounded-xl">
          <h3 className="font-semibold lg:text-3xl md:text-xl text-gray-800 mb-4 ">
            Real-time Analysis
          </h3>

          {/* Progress Indicator */}
          <div className="bg-white rounded-lg p-3 mb-3 ">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <Check size={14} color="#fff" />
                </span>
                <p className="lg:text-sm md:text-xs font-medium text-gray-800">
                  Confidence Level
                </p>
              </div>
              <span className="text-xs text-gray-600">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[80%]"></div>
            </div>
          </div>

          {/* Secondary Info Box */}
          <div className="bg-white rounded-lg p-3  ">
            <div className="flex gap-2 mb-2">
              <ClipboardList className="w-4 h-4 text-gray-600 mt-1" />{" "}
              <p className="lg:text-sm md:text-xs font-medium text-gray-800">
                Confidence Level
              </p>
            </div>
            <p className="text-xs text-gray-600">
              85% improvement in objection handling
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white lg:p-6 md:p-3  rounded-xl max-sm:mt-3 max-sm:p-3">
          <h3 className="font-semibold lg:text-3xl md:text-xl text-gray-800 mb-3">
            Quick Actions
          </h3>
          <div className="lg:grid grid-cols-2 gap-3">
            <div className="bg-gray-100 rounded-lg p-3 lg:block md:flex gap-2 md:mb-2">
              <FileText className="w-5 h-5 text-blue-800" />
              <span className="lg:text-sm md:text-xs font-medium text-gray-700">
                Generate Script
              </span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 lg:block md:flex gap-2">
              <MessageSquare className="w-5 h-5 text-blue-800" />
              <span className="lg:text-sm md:text-xs font-medium text-gray-700">
                Practice Pitch
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarActionsPanel;
