import { createSignal } from "solid-js";
import { AlbumInfo } from "./AlbumInfo";
import { AlbumInfoInterface } from "./types/AlbumInfoInterface";

export function New() {
  const [albumInfo, setAlbumInfo] = createSignal<AlbumInfoInterface>({
    albumName: "album name",
    albumArtist: "album artist",
    albumReleaseYear: 2000,
    albumImage: null,
  });

  return (
    <div>
      <AlbumInfo albumInfo={albumInfo()} onAlbumInfoChange={setAlbumInfo} />
    </div>
  );
}
