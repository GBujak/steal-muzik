import { NumberInput, StringInput } from "../../components/inputs";
import { AlbumInfoInterface } from "./types/AlbumInfoInterface";

interface Props {
  albumInfo: AlbumInfoInterface;
  onAlbumInfoChange: (newAlbumInfo: AlbumInfoInterface) => void;
}

export function AlbumInfo(props: Props) {
  return (
    <div class="my-8 mx-auto w-10/12 bg-slate-600 p-3">
      <StringInput
        label="Album Name"
        value={props.albumInfo.albumName}
        onChange={(newName) => props.onAlbumInfoChange({ ...props.albumInfo, albumName: newName })}
      />

      <NumberInput
        label="Release Year"
        value={props.albumInfo.albumReleaseYear}
        onChange={(newYear) => props.onAlbumInfoChange({ ...props.albumInfo, albumReleaseYear: newYear })}
      />
    </div>
  );
}
