import cv2
from flask import Flask, request, make_response
import base64
import numpy as np
import urllib

app = Flask(__name__)


@app.route('/', methods=['GET','POST'])
def process():
    urllib.request.urlretrieve('https://i.ibb.co/BwGnzdR/man.jpg', "man")
    frame = cv2.imread("man")
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # define range of green color in HSV
    lower_green = np.array([25, 52, 72])
    upper_green = np.array([102, 255, 255])

    # Threshold the HSV image to get only blue colors
    mask_white = cv2.inRange(hsv,lower_green, upper_green)
    mask_black = cv2.bitwise_not(mask_white)

    #converting mask_black to 3 channels
    W,L = mask_black.shape
    mask_black_3CH = np.empty((W, L, 3), dtype=np.uint8)
    mask_black_3CH[:, :, 0] = mask_black
    mask_black_3CH[:, :, 1] = mask_black
    mask_black_3CH[:, :, 2] = mask_black

    #cv2.imshow('orignal',frame)
    #cv2.imshow('mask_white', mask_white)
    #cv2.imshow('mask_black',mask_black_3CH)

    dst3 = cv2.bitwise_and(mask_black_3CH,frame)
    #cv2.imshow('Pic+mask_inverse',dst3)


    #----------------------------------------------
    W,L = mask_white.shape
    mask_white_3CH = np.empty((W, L, 3), dtype=np.uint8)
    mask_white_3CH[:, :, 0] = mask_white
    mask_white_3CH[:, :, 1] = mask_white
    mask_white_3CH[:, :, 2] = mask_white

    #cv2.imshow('Wh_mask',mask_white_3CH)
    dst3_wh = cv2.bitwise_or(mask_white_3CH,dst3)
    #cv2.imshow('Pic+mask_wh',dst3_wh)

    #-------------------------------------------------

    # changing for design
    urllib.request.urlretrieve('https://i.ibb.co/6bwDNSq/dress.jpg', "dress")
    design = cv2.imread("dress")
    design = cv2.resize(design, mask_black.shape[1::-1])
    #cv2.imshow('design resize',design)

    design_mask_mixed = cv2.bitwise_or(mask_black_3CH,design)
    #cv2.imshow('design_mask_mixed',design_mask_mixed)

    final_mask_black_3CH = cv2.bitwise_and(design_mask_mixed,dst3_wh)
    output_img = cv2.resize(final_mask_black_3CH,(500, 600))

    retval, buffer = cv2.imencode('.png', output_img)
    response = make_response(buffer.tobytes())
    response.headers['Content-Type'] = 'image/png'
    return response

if __name__ == '__main__':
    app.run(debug=True)