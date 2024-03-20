import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface StructureProps {
  videos: string[]; // Change 'routes' to 'videos' for clarity
}

const Structure: React.FC<StructureProps> = ({ videos }) => {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="flex flex-wrap justify-center"
      >
        {videos.map((video, index) => (
          <div key={index} className="m-2">
            <video
              width="900"
              height="240"
              controls
              playsInline
              preload="metadata"
            >
              <source src={video} type="video/mp4" />
              <track
                src={video}
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            </video>
          </div>
        ))}
        <div className="flex flex-row items-center justify-center m-2">
          <p className="capitalize">more video will be shown in YT,</p>
          <div className="uppercase underline decoration-red-600">
            <Link
              href={"https://www.youtube.com/channel/UCdPuw4dTZXYmiP7onQCyVmQ"}
            >
              Press Me!
            </Link>
          </div>
        </div>
      </motion.div>
    </Suspense>
  );
};

export default Structure;
