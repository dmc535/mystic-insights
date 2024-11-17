import { Howl } from 'howler';
import { useCallback } from 'react';

const sounds = {
  mystical: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2588/2588-preview.mp3'],
    volume: 0.5,
  }),
  reveal: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2594/2594-preview.mp3'],
    volume: 0.3,
  }),
};

export function useSound() {
  const playMystical = useCallback(() => {
    sounds.mystical.play();
  }, []);

  const playReveal = useCallback(() => {
    sounds.reveal.play();
  }, []);

  return { playMystical, playReveal };
}