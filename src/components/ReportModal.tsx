import Modal from "./Modal.tsx";
import React, { memo } from "react";
import REPORT_REASONS from "../constants/reportReasons.ts";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectReport: (reason: string) => void;
}

const ReportModal: React.FC<ReportModalProps> = ({
  isOpen,
  onClose,
  onSelectReport,
}) => {
  return (
    <Modal title={"Report"} isOpen={isOpen} onClose={onClose}>
      <div className={"flex flex-col gap-4"}>
        {REPORT_REASONS.map((reason) => (
          <button
            key={reason}
            onClick={() => onSelectReport(reason)}
            className={
              "bg-gray-100 hover:bg-gray-200 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600 rounded-md py-2"
            }
          >
            {reason}
          </button>
        ))}
      </div>
    </Modal>
  );
};
export default memo(ReportModal);
