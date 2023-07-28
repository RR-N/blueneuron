import cv2
import numpy as np

def find_transparent_regions(image_path):
    # Load the image with alpha channel
    image = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)

    # Get the alpha channel
    alpha_channel = image[:, :, 3]

    # Threshold the alpha channel: 0 for fully transparent, 255 for non-transparent
    _, alpha_bin = cv2.threshold(alpha_channel, 0, 255, cv2.THRESH_BINARY_INV)

    # Find contours in the binary image
    contours, _ = cv2.findContours(alpha_bin, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Iterate over the contours and print bounding boxes
    for contour in contours:
        x, y, w, h = cv2.boundingRect(contour)
        print(f"Bounding box: X:{x}, Y:{y}, Width:{w}, Height:{h}")

# Test the function
find_transparent_regions('images/zoom.png')
