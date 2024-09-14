function calculatePupilPosition(cursorX, cursorY, eyeRect, pupilRadius) {
  // Calculate the position relative to the center of the eye
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  const x = cursorX - eyeCenterX;
  const y = cursorY - eyeCenterY;

  // Calculate the angle and distance
  const angle = Math.atan2(y, x);
  const distance = Math.min(eyeRect.width / 2 - pupilRadius, Math.hypot(x, y)); // Limit the distance to prevent overflow

  // Calculate pupil's position
  const pupilX = distance * Math.cos(angle);
  const pupilY = distance * Math.sin(angle);

  return { pupilX, pupilY };
}

export { calculatePupilPosition };
