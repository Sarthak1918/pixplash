
import { saveAs } from 'file-saver';
export default function download(image) {
    saveAs(image.src.original,`pixplash-${image.photographer}-${image.id}.jpeg`);
}
