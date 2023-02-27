const OriginRTCPeerConnection = window.RTCPeerConnection;

class RTCPeerConnectionInterceptor {

  _peerconnection = null;

  constructor(configuration = {}) {
    this._peerconnection = new OriginRTCPeerConnection(configuration);
  }

  static async generateCertificate(keygenAlgorithm) {
    const cerificate = await OriginRTCPeerConnection.generateCertificate(keygenAlgorithm);
    return cerificate;
  }

  get canTrickleIceCandidates() {
    return this._peerconnection.canTrickleIceCandidates;
  }

  get connectionState() {
    return this._peerconnection.connectionState;
  }

  get currentLocalDescription() {
    return this._peerconnection.currentLocalDescription;
  }

  get currentRemoteDescription() {
    return this._peerconnection.currentRemoteDescription;
  }

  get iceConnectionState() {
    return this._peerconnection.iceConnectionState;
  }

  get iceGatheringState() {
    return this._peerconnection.iceGatheringState;
  }

  get localDescription() {
    return this._peerconnection.localDescription;
  }

  get onconnectionstatechange() {
    return this._peerconnection.onconnectionstatechange;
  }

  set onconnectionstatechange(fn) {
    this._peerconnection.onconnectionstatechange = fn;
  }

  get ondatachannel() {
    return this._peerconnection.ondatachannel;
  }

  set ondatachannel(fn) {
    this._peerconnection.ondatachannel = fn;
  }

  get onicecandidate() {
    return this._peerconnection.onicecandidate;
  }

  set onicecandidate(fn) {
    this._peerconnection.onicecandidate = fn;
  }

  get onicecandidateerror() {
    return this._peerconnection.onicecandidateerror;
  }

  set onicecandidateerror(fn) {
    this._peerconnection.onicecandidateerror = fn;
  }

  get oniceconnectionstatechange() {
    return this._peerconnection.oniceconnectionstatechange;
  }

  set oniceconnectionstatechange(fn) {
    this._peerconnection.oniceconnectionstatechange = fn;
  }

  get onicegatheringstatechange() {
    return this._peerconnection.onicegatheringstatechange;
  }

  set onicegatheringstatechange(fn) {
    this._peerconnection.onicegatheringstatechange = fn;
  }

  get onnegotiationneeded() {
    return this._peerconnection.onnegotiationneeded;
  }

  set onnegotiationneeded(fn) {
    this._peerconnection.onnegotiationneeded = fn;
  }

  get onsignalingstatechange() {
    return this._peerconnection.onsignalingstatechange;
  }

  set onsignalingstatechange(fn) {
    this._peerconnection.onsignalingstatechange = fn;
  }

  get ontrack() {
    return this._peerconnection.ontrack;
  }

  set ontrack(fn) {
    this._peerconnection.ontrack = fn;
  }

  get pendingLocalDescription() {
    return this._peerconnection.pendingLocalDescription;
  }

  get pendingRemoteDescription() {
    return this._peerconnection.pendingRemoteDescription;
  }

  get remoteDescription() {
    return this._peerconnection.remoteDescription;
  }

  get sctp() {
    return this._peerconnection.sctp;
  }

  get signalingState() {
    return this._peerconnection.signalingState;
  }

  addIceCandidate(candidate) {
    return this._peerconnection.addIceCandidate(candidate);
  }

  addTrack(track, ...streams) {
    return this._peerconnection.addTrack(track, ...streams);
  }

  addTransceiver(trackOrKind, init) {
    return this._peerconnection.addTransceiver(trackOrKind, init);
  }

  createAnswer(options) {
    return this._peerconnection.createAnswer(options);
  }

  createDataChannel(label, dataChannelDict) {
    return this._peerconnection.createDataChannel(label, dataChannelDict);
  }

  createOffer(options) {
    return this._peerconnection.createOffer(options);
  }

  close() {
    this._peerconnection.close();
  }

  getConfiguration() {
    return this._peerconnection.getConfiguration();
  }

  getReceivers() {
    return this._peerconnection.getReceivers();
  }

  getSenders() {
    return this._peerconnection.getSenders();
  }

  getStats(selector) {
    return this._peerconnection.getStats(selector);
  }

  getTransceivers() {
    return this._peerconnection.getTransceivers();
  }

  removeTrack(sender) {
    this._peerconnection.removeTrack(sender);
  }

  restartIce() {
    this._peerconnection.restartIce();
  }

  setConfiguration(configuration) {
    this._peerconnection.setConfiguration(configuration);
  }

  setLocalDescription(description) {
    return this._peerconnection.setLocalDescription(description);
  }

  setRemoteDescription(description) {
    return this._peerconnection.setRemoteDescription(description);
  }

  addEventListener(type, listener, options) {
    this._peerconnection.addEventListener(type, listener, options);
  }

  removeEventListener(type, listener, options) {
    this._peerconnection.removeEventListener(type, listener, options);
  }

  dispatchEvent(event) {
    return this._peerconnection.dispatchEvent(event);
  }
}

window.RTCPeerConnection = RTCPeerConnectionInterceptor;