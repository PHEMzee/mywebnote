import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';


export default function HandleImg ({ title }) {
  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({ contentRef: contentRef, documentTitle: `${title}-${new Date().toISOString().split('T')[0]}` });
  // Core capture and download logic
  const handleDownloadImage = async () => {
    if (!contentRef.current) return;
    try {
      const canvas = await html2canvas(contentRef.current, { useCORS: true });
      const dataUrl = canvas.toDataURL('image/png');
      
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${title}-${new Date().toISOString().split('T')[0]}.png`;
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
  // const longPressTimer = useRef(null);
  
  // const startPress = () => {
  //   longPressTimer.current = setTimeout(() => {
  //     handleDownloadImage();
  //   }, 600); // Trigger after 600ms of holding
  // };

  // const cancelPress = () => {
  //   if (longPressTimer.current) {
  //     clearTimeout(longPressTimer.current);
  //   }
  // };

  return {
    contentRef,
    // cancelPress,
    // startPress,
    handleRightClick,
    handleDownloadImage,
    handlePrint
  };
}
