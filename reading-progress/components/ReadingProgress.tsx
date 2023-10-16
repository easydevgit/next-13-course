"use client";

import { useReadingProgressBar } from "@/hooks/useReadingProgressBar";
import { Progress } from "antd";

export default function ReadingProgress() {
  const completion = useReadingProgressBar();
  return (
    <div className="fixed w-full top-[53px]">
      <Progress percent={completion} showInfo={false} strokeColor="#7b87f0" />
    </div>
  );
}
