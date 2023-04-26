import React, { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface VideoProps {
  src: string;
}

const Video: React.FC = () => {
  /*
  {parametro src da function}
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    const storage = getStorage();
    const videoRef = ref(storage, src);

    getDownloadURL(videoRef)
      .then((url) => {
        setVideoUrl(url);
      })
      .catch((error) => {
        console.log("Error fetching video URL:", error);
      });
  }, [src]);*/

  return (
    <video controls>
      <source src='https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista1.mp4?alt=media&token=647dee36-4248-42cb-bab8-dbbac67aa237' type="video/mp4" />
    </video>
  );
};

export default Video;
