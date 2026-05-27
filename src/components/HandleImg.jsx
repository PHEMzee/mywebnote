import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function HandleImg () {
  const divRef = useRef(null);

  // Core capture and download logic
  const handleDownloadImage = async () => {
    if (!divRef.current) return;
    try {
      const canvas = await html2canvas(divRef.current, { useCORS: true });
      const dataUrl = canvas.toDataURL('image/png');
      
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'div-image.png';
      link.click();
    } catch (err) {
      console.error('Failed to capture div:', err);
    }
  };

  // Prevent default right-click menu and trigger download
  const handleRightClick = (e) => {
    e.preventDefault(); 
    handleDownloadImage();
  };

  // Custom Long Press Logic (Mobile/Touch)
  const longPressTimer = useRef(null);
  
  const startPress = () => {
    longPressTimer.current = setTimeout(() => {
      handleDownloadImage();
    }, 600); // Trigger after 600ms of holding
  };

  const cancelPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  return {
    divRef,
    cancelPress,
    startPress,
    handleRightClick,
    handleDownloadImage
  };
}
