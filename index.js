//open media device device ===========================================================================

const openMediaDevices = async (constraints) => {
  return await navigator.mediaDevices.getUserMedia(constraints);
};

try {
  // const stream =  openMediaDevices({'video':false,'audio':true}); //only audio devices
  // stream.then((strm)=>{
  //     console.log('Got MediaStream:', strm);
  // });
} catch (error) {
  console.error("Error accessing media devices.", error);
}

//connected device ===========================================================================
async function getConnectedDevices(type) {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === type);
}
async function getAllConnectedDevices(type) {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices; //.filter(device => device.kind === type)
}

const videoCameras = getConnectedDevices("videoinput");
videoCameras.then((mdi) => {
  console.log("Cameras found:", mdi);
});

const medias = getAllConnectedDevices();
medias.then((mdi) => {
  console.log("medias found:", mdi);
});

//connected device ===========================================================================

// Fetch an array of devices of a certain type
async function getConnectedDevices(type) {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === type);
}

// Get the initial set of cameras connected
const vcs = getConnectedDevices("videoinput");
// updateCameraList(vcs);

// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener("devicechange", (event) => {
  const newCameraList = getConnectedDevices("video");
  // updateCameraList(newCameraList);
});

//open cameras device ===========================================================================
// Open camera with at least minWidth and minHeight capabilities
async function openCamera(cameraId, minWidth, minHeight) {
  const constraints = {
    audio: { echoCancellation: true },
    video: {
      deviceId: cameraId,
      width: { min: minWidth },
      height: { min: minHeight },
    },
  };

  return await navigator.mediaDevices.getUserMedia(constraints);
}

const cameras = getConnectedDevices("videoinput");
if (cameras && cameras.length > 0) {
  // Open first available video camera with a resolution of 1280x720 pixels
  const stream = openCamera(cameras[0].deviceId, 1280, 720);

  // const videoElement = document.querySelector('video#localVideo');
  //     videoElement.srcObject = stream;
}

//connected device ===========================================================================

async function getDisplayMedia(
  displayMediaOptions = {
    video: {
      displaySurface: "window",
    },
    audio: false,
  }
) {
  return await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
}

//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

async function makeCall() {
  const configuration = {
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  };
  const peerConnection = new RTCPeerConnection(configuration);
  //   signalingChannel.addEventListener("message", async (message) => {
  //     if (message.answer) {
  //       const remoteDesc = new RTCSessionDescription(message.answer);
  //       await peerConnection.setRemoteDescription(remoteDesc);
  //     }
  //   });
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  console.log("offer created: ", offer);
  console.log("offer stringified : ", JSON.stringify(offer));

  //   signalingChannel.send({ offer: offer });
}

//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

async function init() {
  // const screenMedia = await getDisplayMedia();

  // console.log("screen capture started: ", screenMedia);

  //   const signalingChannel = new SignalingChannel(remoteClientId);
  //   signalingChannel.addEventListener("message", (message) => {
  //     // New message from remote client received
  //     console.log("message from remote: ", message);
  //   });

  // Send an asynchronous message to the remote client
  send_hi.addEventListener("click", async (e) => {
    await makeCall();
  });
}

init();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
