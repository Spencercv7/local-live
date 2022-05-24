import styled from 'styled-components';

const S_Video = styled.video`
  width: 100%;
  height: 100%;
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

  try {
    setVideoSource();
  } catch (error) {
    console.log(error);
  }

  return (
    <S_Video autoPlay />
  );

}

export default App
