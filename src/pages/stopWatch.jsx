import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

import { ArrowLeft, Trash2, Edit, Check, X } from 'lucide-react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    
    <div className="flex items-center justify-center h-screen">
  <div className="flex flex-col items-center gap-4">
    <a  
      href="/"
      onClick={(e) => {
        e.preventDefault();
        window.location.pathname = '/';
      }}
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Projects
    </a>
    <div className="text-6xl font-mono">
      {formatTime()}
    </div>
    <div className="flex gap-4">
      <button
        onClick={handleStartStop}
        className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
      >
        {isRunning ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button
        onClick={handleReset}
        className="p-2 rounded-full bg-gray-500 text-white hover:bg-gray-600"
      >
        <RotateCcw size={24} />
      </button>
    </div>
  </div>
</div>


  );
}

export default Stopwatch;