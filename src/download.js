
import { saveAs } from 'file-saver';
export default function download(image) {
    saveAs(image.src.original,`mypex-${image.photographer}-${image.id}.jpeg`);
}
