/// <reference types="react" />
import { KeyMap } from "../types";
interface Props {
    list: {
        display: boolean;
        keyMaps: KeyMap[];
    };
}
export default function HotKeysList({ list }: Props): JSX.Element;
export {};
