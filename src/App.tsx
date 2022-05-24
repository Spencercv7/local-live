import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const S_Video = styled.video`
  width: 100%;
  height: 100%;
  z-index: 100;
`

const S_Canvas = styled.canvas`
  opacity: 0;
  position: absolute;
  z-index: 0;
`

const constraints: MediaStreamConstraints = {
  video: true,
  audio: true
}

async function getMedia (constraints: MediaStreamConstraints): Promise<MediaStream> {
    const userMedia = await navigator.mediaDevices.getUserMedia(constraints);
    if (userMedia) return userMedia;
    throw Error('Failed to get user media');
}

async function setVideoSource() {
  const mediaStream = await getMedia(constraints);
  const video = document.querySelector('video');
  if (video) video.srcObject = mediaStream;
}

const App = () => {

  useEffect(() => {
    setVideoSource();
  }, []) 

  return (
    <>
      <S_Video autoPlay />
      <S_Canvas />
    </>
  );

}

export default App
