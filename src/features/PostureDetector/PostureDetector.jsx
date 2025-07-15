import React, { useRef, useEffect, useState } from "react";
import * as poseDetection from "@tensorflow-models/pose-detection";
import "@tensorflow/tfjs-backend-webgl";
import * as tf from "@tensorflow/tfjs-core";

const POSTURE_CHECK_INTERVAL = 300; // ms

const PostureDetector = () => {
  const videoRef = useRef(null);
  const [warning, setWarning] = useState("");
  const [loading, setLoading] = useState(true);
  const detectorRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let stream;
    let isMounted = true;

    const setupCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    };

    const loadModel = async () => {
      detectorRef.current = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        { modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTWEIGHT }
      );
    };

    const checkPosture = async () => {
      if (!videoRef.current || !detectorRef.current) return;
      const poses = await detectorRef.current.estimatePoses(videoRef.current);
      if (poses && poses[0] && poses[0].keypoints) {
        const keypoints = poses[0].keypoints;
        // Get relevant keypoints
        const leftShoulder = keypoints.find(k => k.name === "left_shoulder");
        const rightShoulder = keypoints.find(k => k.name === "right_shoulder");
        const nose = keypoints.find(k => k.name === "nose");
        const leftEar = keypoints.find(k => k.name === "left_ear");
        const rightEar = keypoints.find(k => k.name === "right_ear");

        // Calculate average shoulder y
        const avgShoulderY = (leftShoulder.y + rightShoulder.y) / 2;
        // Head y (nose or average of ears)
        const headY = nose && nose.score > 0.3
          ? nose.y
          : (leftEar && rightEar && leftEar.score > 0.3 && rightEar.score > 0.3)
            ? (leftEar.y + rightEar.y) / 2
            : null;

        // Heuristic: if head is much lower than shoulders, posture is bad
        if (headY && avgShoulderY && (headY - avgShoulderY > 40)) {
          setWarning("⚠️ Poor posture detected! Please sit up straight.");
        } else {
          setWarning("");
        }
       // console.log("Detected keypoints:", poses[0]?.keypoints);

      }
      animationRef.current = setTimeout(checkPosture, POSTURE_CHECK_INTERVAL);
    };

    const start = async () => {
      setLoading(true);
      await setupCamera();
      await tf.setBackend("webgl");
      await tf.ready();
      await loadModel();
      setLoading(false);
      checkPosture();
    };

    start();

    return () => {
      isMounted = false;
      if (animationRef.current) clearTimeout(animationRef.current);
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Posture Detector</h2>
      <video
        ref={videoRef}
        width={400}
        height={300}
        className="rounded shadow mb-4 border-2 border-blue-400"
        style={{ background: "#222" }}
        autoPlay
        muted
        playsInline
      />
      {loading && <div className="text-blue-300 mb-2">Loading model and camera...</div>}
      {warning && (
        <div className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded font-semibold animate-pulse">
          {warning}
        </div>
      )}
      <div className="text-gray-300 mt-4 text-sm max-w-md text-center">
        All processing is done in your browser. No video is sent to any server. Your privacy is protected.
      </div>
    </div>
  );
};

export default PostureDetector;
