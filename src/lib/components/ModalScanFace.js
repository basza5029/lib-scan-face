import React, { useRef,useEffect} from 'react'
import Webcam from 'react-webcam';
import * as faceapi from "face-api.js";

const  ModalScanFace = ({display,style}) => {

    let videoRef = useRef();

    let _style_myModal = style || {};

    if (display && _style_myModal) {
        if (display === 'block') {
            _style_myModal.opacity = 1;
            _style_myModal.visibility = 'visible';
        } else {
            _style_myModal.opacity = 0;
            _style_myModal.visibility = 'hidden';
        }
    }
    _style_myModal.position = 'fixed';
    _style_myModal.zIndex = '1';
    _style_myModal.paddingTop = '150px';
    _style_myModal.left = '0';
    _style_myModal.top = '0';
    _style_myModal.width = '100%';
    _style_myModal.height = '100%';
    _style_myModal.overflow = 'auto';
    _style_myModal.background = 'rgba(0, 0, 0, 0.4)';
    _style_myModal.transition = '400ms ease';
    _style_myModal.display = 'flex';
    _style_myModal.justifyContent = 'center';

    const loadModels = async () => {
        if (display === 'block') {
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
                faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
                faceapi.nets.faceExpressionNet.loadFromUri('/models')
            ]).then();
        }
    };

    useEffect(() => {       
       loadModels();
    }, []);
  
  return (
    <div id="myModal" style={_style_myModal} {...props}>
    <div
        style={{
            width: '150px',
            height: '150px',
            background: '#FFFFFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px'
        }}
    >
        <img src="http://localhost:8081/StoredImage/face-scan.png" style={{ width: '90%', height: '90%', objectFit: 'cover' }} />
        {display === 'block' ? <Webcam ref={videoRef} style={{ display: 'none' }} /> : null}
    </div>
</div>
  )
}

export default ModalScanFace